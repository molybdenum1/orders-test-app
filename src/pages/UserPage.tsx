import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import customers from "../../customers.json";
import orders from "../../orders.json";
import { type User } from "../entities/user/model";
import { UserProfile } from "../entities/user/UserProfile";
import { OrdersTable } from "../features/orders/OrdersTable";
import { BackButton } from "../shared/ui/BackButton";

const ORDERS_PAGE_SIZE = 10;

export const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const userId = Number(id);
  const user: User | undefined = customers
    .map((u, idx) => ({ ...u, id: (u as User).id ?? idx } as User))
    .find((u) => u.id === userId);

  const [ordersPage, setOrdersPage] = useState(1);
  const pagedOrders = orders.slice(0, ordersPage * ORDERS_PAGE_SIZE);
  const hasMoreOrders = pagedOrders.length < orders.length;

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "32px auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 12,
        background: "#fafafa",
      }}
    >
      <BackButton onClick={() => navigate("/")} />
      <UserProfile user={user} />
      <div style={{ marginBottom: 12 }}>
        <strong>Gender:</strong> {user.gender}
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>Country:</strong> {user.country}
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>City:</strong> {user.city}
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>State:</strong> {user.state}
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>Post Code:</strong> {user.postCode}
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>Street:</strong> {user.street} {user.streetNumber}
      </div>
      <h3 style={{ marginTop: 32 }}>Order History</h3>
      <OrdersTable orders={pagedOrders} />
      {hasMoreOrders && (
        <button
          onClick={() => setOrdersPage((p) => p + 1)}
          style={{
            padding: "8px 16px",
            borderRadius: 4,
            border: "1px solid #1976d2",
            background: "#e3f2fd",
            cursor: "pointer",
          }}
        >
          Load More Orders
        </button>
      )}
      {orders.length === 0 && (
        <div style={{ color: "#888", marginTop: 12 }}>
          No orders found for this user.
        </div>
      )}
    </div>
  );
};
