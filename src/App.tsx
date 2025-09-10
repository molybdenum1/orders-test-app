import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { UsersPage } from "./pages/UsersPage";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <div style={{ padding: 0 }}>
      <nav
        style={{
          background: "coral",
          color: "#fff",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 20 }}>Orders Test App</div>
        <div style={{ fontSize: 16 }}>
          Made by D. Kozlonkov
          <br />
          <span style={{ fontSize: 14, opacity: 0.8 }}>
            Frontend Developer | 2025
          </span>
          <br />
          <span
            style={{
              fontSize: 14,
              opacity: 0.8,
              display: "flex",
              justifyContent: "space-between",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <a
              href="https://github.com/molybdenum1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/denis-kozlyonkov-87bb05186/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </span>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
