import React from "react";

interface Filters {
  name: string;
  gender: string;
  country: string;
}

interface UsersFiltersProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  genderOptions: string[];
  countryOptions: string[];
}

const UsersFilters: React.FC<UsersFiltersProps> = ({
  filters,
  setFilters,
  genderOptions,
  countryOptions,
}) => (
  <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
    <input
      type="text"
      placeholder="Name or Surname"
      value={filters.name}
      onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      style={{ padding: "8px", minWidth: 180 }}
    />
    <select
      value={filters.gender}
      onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      style={{ padding: "8px", minWidth: 120 }}
    >
      <option value="">Gender</option>
      {genderOptions.map((g) => (
        <option key={g} value={g}>
          {g}
        </option>
      ))}
    </select>
    <select
      value={filters.country}
      onChange={(e) => setFilters({ ...filters, country: e.target.value })}
      style={{ padding: "8px", minWidth: 120 }}
    >
      <option value="">Country</option>
      {countryOptions.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  </div>
);

export default UsersFilters;
