import React from "react";

interface UsersViewSwitchProps {
  view: "grid" | "list";
  setView: (v: "grid" | "list") => void;
}

const UsersViewSwitch: React.FC<UsersViewSwitchProps> = ({ view, setView }) => (
  <div style={{ marginBottom: 16 }}>
    <button
      style={{
        padding: "8px 16px",
        marginRight: 8,
        borderRadius: 4,
        border: view === "grid" ? "2px solid #1976d2" : "1px solid #ccc",
        background: view === "grid" ? "#e3f2fd" : "#fff",
        fontWeight: view === "grid" ? 600 : 400,
        cursor: "pointer",
      }}
      onClick={() => setView("grid")}
      disabled={view === "grid"}
    >
      Grid View
    </button>
    <button
      style={{
        padding: "8px 16px",
        borderRadius: 4,
        border: view === "list" ? "2px solid #1976d2" : "1px solid #ccc",
        background: view === "list" ? "#e3f2fd" : "#fff",
        fontWeight: view === "list" ? 600 : 400,
        cursor: "pointer",
      }}
      onClick={() => setView("list")}
      disabled={view === "list"}
    >
      List View
    </button>
  </div>
);

export default UsersViewSwitch;
