import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { UserTable } from "./Components/UserTable";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserTable" element={<UserTable />} />
      </Routes>
    </>
  );
}
