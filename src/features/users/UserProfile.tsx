import React from "react";
import { type User } from "../../entities/user/model";

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => (
  <div
    style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}
  >
    <img
      src={user.avatar || `https://i.pravatar.cc/80?img=${(user.id % 70) + 1}`}
      alt={user.firstName}
      width={80}
      height={80}
      style={{ borderRadius: "50%" }}
    />
    <div>
      <h2 style={{ margin: 0 }}>
        {user.firstName} {user.lastName}
      </h2>
      <div style={{ color: "#555" }}>{user.email}</div>
    </div>
  </div>
);
