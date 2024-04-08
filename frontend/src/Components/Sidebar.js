import React, { useState, useEffect } from "react";
import "../Styles/Sidebar.css";
import { Link } from "react-router-dom";
import { User, useAuth0 } from "@auth0/auth0-react";
var myHeaders = new Headers();
const AUTH0_TOKEN=process.env.REACT_APP_AUTH0_TOKEN
myHeaders.append("Accept", "application/json");
myHeaders.append(
  "Authorization",
   `Bearer ${AUTH0_TOKEN}`
);

function Sidebar() {
  const [UserRole, setUserRole] = useState([]);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (!isLoading && isAuthenticated && user) {
    console.log(`in navbar ${user.sub}`);
  }

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        if (isAuthenticated && user) {
          const roleResponse = await fetch(
            `https://dev-hkk5ncj8gt423kg7.us.auth0.com/api/v2/users/${user.sub}/roles`,
            requestOptions
          );
          var roleData = await roleResponse.json();
          setUserRole(roleData);
        }
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchUserRole();
  }, [isAuthenticated, user]);

  var role;

  if (isAuthenticated && !isLoading && UserRole[0]) {
    console.log(`user role is ${UserRole[0].name}`);
    role = UserRole[0].name;
  }
  return (
    <div className="sidebar">
      {(role === "Admin" || role=="Auditor") &&  (
          <Link to="/CreateProject" className="Link">
            <div className="btn-blue">+ New Project</div>
          </Link>
        )}
      <Link to="/" className="Link">
        <span className="Projects">Projects</span>
      </Link>
      {role==='Admin' &&(<Link to="/CreateUser" className="Link">
        <span className="Projects">Create User</span>
      </Link>)}
    </div>
  );
}

export default Sidebar;
