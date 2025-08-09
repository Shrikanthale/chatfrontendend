import React, { useState } from 'react';
import { LogoutRounded, Person, Settings, Help } from '@mui/icons-material';
import useLogout from '../../Hooks/useLogout';

const Logout = ({ isDarkMode = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { logout} = useLogout()

  return (
    <div className={`p-3 lg:p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className={`flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 rounded-lg transition-all duration-200 cursor-pointer ${
        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
      }`}>
        {/* User Avatar */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="User"
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h4 className={`font-semibold text-xs lg:text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>John Doe</h4>
          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Online</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`p-1.5 lg:p-2 rounded-full transition-all duration-200 group ${
            isDarkMode ? 'hover:bg-red-900' : 'hover:bg-red-100'
          }`}
        >
          <LogoutRounded 
            className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-200 ${
              isHovered ? 'text-red-500' : isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} 
          />
        </button>
      </div>

      {/* Quick Actions */}
      <div className="mt-2 lg:mt-3 space-y-0.5 lg:space-y-1">
        <button className={`w-full flex items-center space-x-2 lg:space-x-3 p-1.5 lg:p-2 rounded-lg transition-colors duration-200 text-left ${
          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
        }`}>
          <Person className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
          <span className={`text-xs lg:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Profile</span>
        </button>
        <button className={`w-full flex items-center space-x-2 lg:space-x-3 p-1.5 lg:p-2 rounded-lg transition-colors duration-200 text-left ${
          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
        }`}>
          <Settings className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
          <span className={`text-xs lg:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Settings</span>
        </button>
        <button className={`w-full flex items-center space-x-2 lg:space-x-3 p-1.5 lg:p-2 rounded-lg transition-colors duration-200 text-left ${
          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
        }`}>
          <Help className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
          <span className={`text-xs lg:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Help</span>
        </button>
      </div>
    </div>
  );
};

export default Logout;