import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/VersionHistory.css";

function Phases({ projectId }) {
  // console.log(`in versionhistory ${projectId}`)
  const [ProjectPhases, setPhase] = useState([]);
  const [newProjectPhase, setNewPhase] = useState({
            projectId: `${projectId}`,
            Title: "",
            startDate: "",
            completionDate: "",
            approvalDate: "",
            Status:"",
            RevisedDate:"",
            Comments:"",
            isEditing: false,
  });

  useEffect(() => {
    const fetchProjectPhases = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/phases/${projectId}`
        );
        setPhase(response.data);
      } catch (error) {
        console.error("Error fetching version history:", error);
      }
    };

    fetchProjectPhases();
  }, [projectId]);

  const handleAddNewPhase = () => {
    setNewPhase({ ...newProjectPhase, isEditing: true });
  };

  const handleSaveNewAudit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/phases`,
        newProjectPhase
      );
      setPhase([...ProjectPhases, newProjectPhase]);
      setNewPhase({
        projectId: `${projectId}`,
        Title: "",
        startDate: "",
        completionDate: "",
        approvalDate: "",
        Status: "",
        RevisedDate: "",
        Comments: "",
        isEditing: false,
      });
      // window.location.reload();
    } catch (error) {
      console.error("Error saving new version:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPhase({ ...newProjectPhase, [name]: value });
  };

  // deleting a version data from table
  const deletePhase = async (phaseId) => {
    try {
      await axios.delete(`http://localhost:5000/api/phases/${phaseId}`);
      // Remove the deleted project from the project list
      setPhase(ProjectPhases.filter((Audit) => Audit._id !== phaseId));
    } catch (error) {
      console.error("Error deleting audit:", error);
    }
  };

  
  const handleDownloadAsPdf = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/phases/pdf`,
        ProjectPhases,
        { responseType: "blob" } // Set response type to blob for downloading file
      );

      // Create a Blob object from the PDF data
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      // Create a URL for the PDF Blob
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Create a temporary anchor element to trigger the download
      const tempLink = document.createElement("a");
      tempLink.href = pdfUrl;
      tempLink.setAttribute("download", "Phases.pdf");
      tempLink.click();

      // Release the object URL after the download
      URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div>
      <div className="top-btns">
      <button className="add-version-btn" onClick={handleAddNewPhase}>
        Add Phase
      </button>
      <button className="download-pdf-btn" onClick={handleDownloadAsPdf}>Download As PDF</button>
      </div>

      <table className="version-history-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>Completion Date</th>
            <th>Approval Date</th>
            <th>Status</th>
            <th>RevisedCompletion Date</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ProjectPhases.map((projectphase, index) => (
            <tr key={index}>
              <td>{projectphase.Title}</td>
              <td>{projectphase.startDate}</td>
              <td>{projectphase.completionDate}</td>
              <td>{projectphase.approvalDate}</td>
              <td>{projectphase.Status}</td>
              <td>{projectphase.RevisedDate}</td>
              <td>{projectphase.Comments}</td>
              <td>
                {projectphase.isEditing ? (
                  <button className="save-btn">Save</button>
                ) : (
                  <div className="edit-buttons">
                    <button className="edit-btn">Edit</button>
                    <button
                      className="delete-btn"
                      onClick={() => deletePhase(projectphase._id)}
                    >
                      Delete
                    </button>
                  </div> 
                )}
              </td>
            </tr>
          ))}
          {newProjectPhase.isEditing && (
            <tr>
              <td>
                <input
                  className="inputfield"
                  type="Text"
                  name="Title"
                  value={newProjectPhase.Title}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="inputfield"
                  type="date"
                  name="startDate"
                  value={newProjectPhase.startDate}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="inputfield"
                  type="date"
                  name="completionDate"
                  value={newProjectPhase.completionDate}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="inputfield"
                  type="date"
                  name="approvalDate"
                  value={newProjectPhase.approvalDate}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="inputfield"
                  type="text"
                  name="Status"
                  value={newProjectPhase.Status}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="inputfield"
                  type="date"
                  name="RevisedDate"
                  value={newProjectPhase.RevisedDate}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="inputfield"
                  type="text"
                  name="Comments"
                  value={newProjectPhase.Comments}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <button onClick={handleSaveNewAudit} className="save-btn">
                  Save
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Phases;