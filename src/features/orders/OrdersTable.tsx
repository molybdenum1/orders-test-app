import React from "react";
import { type Order } from "./model";

interface OrdersTableProps {
  orders: Order[];
}

export const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => (
  <table
    style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}
  >
    <thead>
      <tr style={{ background: "#f5f5f5" }}>
        <th style={{ padding: 8, border: "1px solid #ddd" }}>Order Date</th>
        <th style={{ padding: 8, border: "1px solid #ddd" }}>Order #</th>
        <th style={{ padding: 8, border: "1px solid #ddd" }}>Total Amount</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order.number}>
          <td style={{ padding: 8, border: "1px solid #eee" }}>
            {new Date(order.createdAt * 1000).toLocaleDateString()}
          </td>
          <td style={{ padding: 8, border: "1px solid #eee" }}>
            {order.number}
          </td>
          <td style={{ padding: 8, border: "1px solid #eee" }}>
            {order.price} {order.currency}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
