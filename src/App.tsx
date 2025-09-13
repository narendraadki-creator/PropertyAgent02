import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DeveloperPropertiesPage from './pages/DeveloperPropertiesPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import AvailabilityGridPage from './pages/AvailabilityGridPage';
import LeadsPage from './pages/LeadsPage';
import BookingsPage from './pages/BookingsPage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import DeveloperDashboard from './pages/DeveloperDashboard';
import DeveloperProjects from './pages/DeveloperProjects';
import AddProject from './pages/AddProject';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Routes>
          {/* Agent Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/developer/:developerId" element={<DeveloperPropertiesPage />} />
          <Route path="/property/:propertyId" element={<PropertyDetailsPage />} />
          <Route path="/property/:propertyId/availability" element={<AvailabilityGridPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* Developer Routes */}
          <Route path="/developer/dashboard" element={<DeveloperDashboard />} />
          <Route path="/developer/projects" element={<DeveloperProjects />} />
          <Route path="/developer/projects/new" element={<AddProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;