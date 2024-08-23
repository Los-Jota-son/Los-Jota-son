import { useContext, useEffect, useState } from "react";
import "./tareas.css";
import { UserContext } from "../../context/UserContext";
import { userType } from "../../context/userTypes";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);

  const { state, stateDispatch } = useContext(UserContext);

  const logOut = () => {
    stateDispatch({
      type: userType.logOut,
    });
  };

  return (
    <main className="container">
      <div className="d-flex justify-content-between mb-3">

          <button
            className="btn btn-primary"
            type="button"
            onClick={() => logOut()}
          >
            Cerrar Sesión
          </button>
      </div>
    </main>
  );
};
