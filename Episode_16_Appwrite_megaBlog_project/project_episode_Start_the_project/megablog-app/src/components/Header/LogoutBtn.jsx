import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth"; // Appwrite authentication service
import { logout } from "../../store/authSlice"; // Redux action for logout

/**
 * LogoutBtn Component - Handles user logout functionality
 * Displays a clickable logout button that:
 * 1. Calls the backend logout service (Appwrite)
 * 2. Updates the global authentication state (Redux)
 */
const LogoutBtn = () => {
  // Hook to dispatch Redux actions
  const dispatch = useDispatch();

  /**
   * Logout Handler Function
   * Performs logout in two steps:
   * 1. Call authService.logOut() to logout from backend (Appwrite)
   * 2. Dispatch logout() action to update Redux store state
   *
   * Uses .then() to ensure backend logout completes before updating local state
   */
  const logoutHandler = () => {
    authService.logOut().then(() => {
      // Only update Redux state after successful backend logout
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler} // Trigger logout when clicked
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer"
    >
      Logout {/* Display text for the button */}
    </button>
  );
};

export default LogoutBtn;
