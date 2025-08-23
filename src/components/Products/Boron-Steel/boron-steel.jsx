import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./boron-steel.css";

const Boron = () => {
  const location = useLocation();
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  React.useEffect(() => {
    const gradePattern = /^\/products\/boron-steel\/(10B21|15B25|10B35)/;
    setIsGradeSelected(gradePattern.test(location.pathname));
  }, [location.pathname]);

  return (
    <div className="boron-container">
      <div className="boron-hero">
        <h1>Boron Steels</h1>
        <p>
          Boron steel refers to steel alloyed with a small amount of boron,
          usually less than 1%. The addition of boron to steel greatly increases
          the hardenability of the resulting alloy.
        </p>
        <p>
          Boron is used in many different applications. Boron steels are
          commonly used in other industries as well, such as in agricultural
          machinery, construction equipment, and various engineering
          applications where high-strength materials are necessary to withstand
          heavy loads and stress.
        </p>
      </div>

      <div className={`boron-main ${isGradeSelected ? "active" : ""}`}>
        <div className="sidebar-wrapper">
          <aside className="boron-sidebar">
            <h3>Grades</h3>
            <ul>
              <li>
                <Link
                  to="10B21"
                  className={
                    location.pathname.includes("10B21") ? "active-grade" : ""
                  }
                >
                  10B21
                </Link>
              </li>
              <li>
                <Link
                  to="15B25"
                  className={
                    location.pathname.includes("15B25") ? "active-grade" : ""
                  }
                >
                  15B25
                </Link>
              </li>
              <li>
                <Link
                  to="10B35"
                  className={
                    location.pathname.includes("10B35") ? "active-grade" : ""
                  }
                >
                  10B35
                </Link>
              </li>
            </ul>
          </aside>
        </div>

        <section className="boron-details">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Boron;
