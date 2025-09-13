import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Building } from 'lucide-react';
import { User } from '../types';
import AgentBottomNavigation from './AgentBottomNavigation';
import DeveloperBottomNavigation from './DeveloperBottomNavigation';

interface RoleBasedLayoutProps {
  user: User;
  children: React.ReactNode;
  showRoleSwitcher?: boolean;
}

const RoleBasedLayout: React.FC<RoleBasedLayoutProps> = ({ user, children, showRoleSwitcher = false }) => {
  const navigate = useNavigate();

  const switchToAgent = () => {
    navigate('/');
  };

  const switchToDeveloper = () => {
    navigate('/developer/dashboard');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {showRoleSwitcher && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-white rounded-lg shadow-lg border border-neutral-200 p-2 flex space-x-2">
            <button
              onClick={switchToAgent}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium font-montserrat transition-colors ${
                user.role === 'agent' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              <Users className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Agent
            </button>
            <button
              onClick={switchToDeveloper}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium font-montserrat transition-colors ${
                user.role === 'developer' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              <Building className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Developer
            </button>
          </div>
        </div>
      )}
      {children}
      {user.role === 'agent' ? <AgentBottomNavigation /> : <DeveloperBottomNavigation />}
    </div>
  );
};

export default RoleBasedLayout;