import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import Sidebar from './Components/Sidebar';
import ProjectList from './Components/ProjectList';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import CreateProjectForm from './Components/CreateProjectForm';
import ProjectOverview from './Components/ProjectOverview';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import EditProjects from './Components/EditProjects';

function App() {
  const {isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  useEffect(() => {
    // Check if the user is not authenticated
    if (!isAuthenticated && !isLoading) {
      // If not authenticated, trigger the login process
      loginWithRedirect();
    }
  }, [isAuthenticated,isLoading, loginWithRedirect]);

  return (
      
        <div className='MainPage'>
          <Navbar/>
          <div className='lowerContent'>
          
            <Sidebar/>
        <Routes>
          <Route path='/' element={<ProjectList/>}/>
          <Route path='/CreateProject' element={<CreateProjectForm/>}/>
          <Route path="/project-details" element={<ProjectOverview />} />
          <Route path="/edit-projects/:projectId" element={<EditProjects />}/>
        </Routes>
        
        </div>
        </div>

    
  );
}

export default App;
