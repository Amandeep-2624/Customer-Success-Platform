import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
// import ProjectOverview from "./ProjectOverview";
import ScopeAndStack from "./ScopeAndStack";
import EscalationMatrix from "./EscalationMatrix";
import VersionHistory from "./VersionHistory";
import AuditHistory from "./AuditHistory";
import ProjectBudget from "./ProjectBudget";
import StakeHolder from "./StakeHolder";
import { useParams } from "react-router-dom";
import RiskProfile from "./RiskProfile";
import Phases from "./Phases";
import Sprint from "./Sprint";
import ApprovedTeams from "./ApprovedTeams";
import Resources from "./Resources";
import ClientFeedback from "./ClientFeedback";
import ProjectUpdates from "./ProjectUpdates";
import MoM from "./MoM";
import "../Styles/EditProjects.css";
import { useAuth0 } from "@auth0/auth0-react";
import ProjectOverview from "./ProjectOverview";

var myHeaders = new Headers();
const AUTH0_TOKEN=process.env.REACT_APP_AUTH0_TOKEN

console.log("in edit p",AUTH0_TOKEN);

myHeaders.append("Accept", "application/json");
myHeaders.append(
  "Authorization",
  `Bearer ${AUTH0_TOKEN}`
);

const tabs = [
  "Scope & Stacks",
  "Project Budget",
  "Audit History",
  "Version History",
  "Escalation Matrix",
  "Stake Holders",
  "Risk Profile",
  "Phases",
  "Sprint",
  "Project Overview",
  "Approved Teams",
  "Resources",
  "ClientFeedback",
  "ProjectUpdates",
  "MoM",
];

function EditProjects() {
  
  const { projectId } = useParams();

  useEffect(() => {
    // Perform any necessary actions related to projectId
    console.log("Project ID:", projectId);
  }, []);

  const [activetab, setActiveTabs] = useState("Scope & Stacks");

  const [UserRole, setUserRole] = useState([]);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        if (isAuthenticated && user) {
          const roleResponse = await fetch(
            // management api to fetch user role.
            `https://dev-hkk5ncj8gt423kg7.us.auth0.com/api/v2/users/${user.sub}/roles`,
            requestOptions
          );
          var roleData = await roleResponse.json();
          setUserRole(roleData);
        }
        // console.log(`in navbar user role is ${roleData}`);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchUserRole();
  }, [isAuthenticated, user]);

  var role;

  if (isAuthenticated && !isLoading && UserRole[0]) {
    console.log(`In edit projects user role is ${UserRole[0].name}`);
    role = UserRole[0].name;
  }

  return (
    <div className="EditProjects">
      <Tabs tabs={tabs} activetab={activetab} setActiveTabs={setActiveTabs} />
      <hr />
      <div>
        {activetab === "Project Overview" && (
          <ProjectOverview projectId={projectId} />
        )}
        {activetab === "Scope & Stacks" && (
          <ScopeAndStack projectId={projectId} role={role} />
        )}
        {activetab === "Escalation Matrix" && (
          <EscalationMatrix projectId={projectId} role={role} />
        )}
        {activetab === "Version History" && (
          <VersionHistory projectId={projectId} role={role} />
        )}
        {activetab === "Audit History" && (
          <AuditHistory projectId={projectId} role={role} />
        )}
        {activetab === "Project Budget" && (
          <ProjectBudget projectId={projectId} role={role} />
        )}
        {activetab === "Stake Holders" && (
          <StakeHolder projectId={projectId} role={role} />
        )}
        {activetab === "Risk Profile" && (
          <RiskProfile projectId={projectId} role={role} />
        )}
        {activetab === "Phases" && <Phases projectId={projectId} role={role} />}
        {activetab === "Sprint" && <Sprint projectId={projectId} role={role} />}
        {activetab === "Approved Teams" && (
          <ApprovedTeams projectId={projectId} role={role} />
        )}
        {activetab === "Resources" && (
          <Resources projectId={projectId} role={role} />
        )}
        {activetab === "ClientFeedback" && (
          <ClientFeedback projectId={projectId} role={role} />
        )}
        {activetab === "ProjectUpdates" && (
          <ProjectUpdates projectId={projectId} role={role} />
        )}
        {activetab === "MoM" && <MoM projectId={projectId} role={role} />}
      </div>
    </div>
  );
}

export default EditProjects;
