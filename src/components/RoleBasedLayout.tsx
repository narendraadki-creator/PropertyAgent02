import React from 'react';
import { User } from '../types';
import AgentBottomNavigation from './AgentBottomNavigation';
import DeveloperBottomNavigation from './DeveloperBottomNavigation';

interface RoleBasedLayoutProps {
  user: User;
  children: React.ReactNode;
}

const RoleBasedLayout: React.FC<RoleBasedLayoutProps> = ({ user, children }) => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {children}
      {user.role === 'agent' ? <AgentBottomNavigation /> : <DeveloperBottomNavigation />}
    </div>
  );
};

export default RoleBasedLayout;