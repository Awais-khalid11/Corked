import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Settings from "@pages/Settings";
import Dashboard from "@layouts/Dashboard";
import NotFound from "@pages/NotFound";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
