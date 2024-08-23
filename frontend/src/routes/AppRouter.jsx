import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../views/login/Login";
import { Register } from "../views/register/Register";
import { Tareas } from "../views/tareas/Tareas";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/tareas" element={<Tareas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
