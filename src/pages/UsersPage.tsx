import { useState, useRef, useCallback, useEffect } from 'react'
import { UsersList, Pagination, UsersFilters, UsersViewSwitch, type User } from '../features/users'
import customers from '../../customers.json'

function generateUser(c: User, idx: number): User {
  return {
    id: idx,
    firstName: c.firstName ?? '',
    lastName: c.lastName ?? '',
    email: c.email ?? `user${c.streetNumber}@example.com`,
    gender: c.gender ?? '',
    country: c.country ?? '',
    city: c.city ?? '',
    state: c.state ?? '',
    postCode: c.postCode ?? '',
    street: c.street ?? '',
    streetNumber: c.streetNumber,
    avatar: `https://i.pravatar.cc/48?img=${(idx % 70) + 1}`,
  }
}

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [filterName, setFilterName] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const pageSize = 20;
  const page = useRef(0);

  const genderOptions = Array.from(
    new Set(customers.map((c: User) => c.gender).filter(Boolean))
  );
  const countryOptions = Array.from(
    new Set(customers.map((c: User) => c.country).filter(Boolean))
  );

  const filteredCustomers = customers.filter((c: User) => {
    const nameMatch =
      filterName === "" ||
      c.firstName?.toLowerCase().includes(filterName.toLowerCase()) ||
      c.lastName?.toLowerCase().includes(filterName.toLowerCase());
    const genderMatch = filterGender === "" || c.gender === filterGender;
    const countryMatch = filterCountry === "" || c.country === filterCountry;
    return nameMatch && genderMatch && countryMatch;
  });

  const filteredTotalPages = Math.ceil(filteredCustomers.length / pageSize);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    const start = page.current * pageSize;
    const end = start + pageSize;
    const nextUsers = filteredCustomers
      .slice(start, end)
      .map((c: User, idx: number) => generateUser(c, start + idx));
    setUsers((prev) => [...prev, ...nextUsers]);
    page.current += 1;
    setHasMore(end < filteredCustomers.length);
    setLoading(false);
  }, [loading, hasMore, filteredCustomers]);

  const loadPage = useCallback(
    (pageNum: number) => {
      setLoading(true);
      const start = pageNum * pageSize;
      const end = start + pageSize;
      const nextUsers = filteredCustomers
        .slice(start, end)
        .map((c: User, idx: number) => generateUser(c, start + idx));
      setUsers(nextUsers);
      page.current = pageNum;
      setCurrentPage(pageNum);
      setHasMore(end < filteredCustomers.length);
      setLoading(false);
    },
    [filteredCustomers]
  );

  useEffect(() => {
    setUsers([]);
    setHasMore(true);
    setLoading(false);
    page.current = 0;
    setCurrentPage(0);
    if (isMobile) {
      loadMore();
    } else {
      loadPage(0);
    }
    if (filteredCustomers.length === 0) {
      setError('No users found matching your filters.');
    } else {
      setError(null);
    }
    // eslint-disable-next-line
  }, [filterName, filterGender, filterCountry, isMobile]);

  useEffect(() => {
    if (isMobile) {
      function onScroll() {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200
        ) {
          loadMore();
        }
      }
      window.addEventListener("scroll", onScroll);
      if (filteredCustomers.length > 0 && users.length === 0) {
        loadMore();
      }
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [isMobile, loadMore, filteredCustomers, users.length]);

  return (
    <div style={{ padding: 24 }}>
      <h2>Users</h2>
      {!isMobile && <UsersViewSwitch view={view} setView={setView} />}
      <UsersFilters
        filterName={filterName}
        setFilterName={setFilterName}
        filterGender={filterGender}
        setFilterGender={setFilterGender}
        filterCountry={filterCountry}
        setFilterCountry={setFilterCountry}
        genderOptions={genderOptions}
        countryOptions={countryOptions}
      />
      {error && <div style={{ color: 'red', marginBottom: 16, fontWeight: 600 }}>{error}</div>}
      <UsersList users={users} view={view} />
      {loading && (
        <div style={{ textAlign: "center", margin: 24 }}>Loading...</div>
      )}
      {!hasMore && (
        <div style={{ textAlign: "center", margin: 24, color: "#888" }}>
          No more users
        </div>
      )}
      {!isMobile && (
        <Pagination
          currentPage={currentPage}
          totalPages={filteredTotalPages}
          onPageChange={loadPage}
        />
      )}
    </div>
  );
};
