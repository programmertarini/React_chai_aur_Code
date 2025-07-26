// import React from "react";
// import { Container, LogoutBtn, Logo } from "../imports";
// import { useSelector } from "react-redux"; // Fixed: removed unused UseSelector import
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"; // Added missing Link import

// /**
//  * Header Component - Main navigation header for the application
//  * Displays logo, navigation menu, and conditional login/logout buttons
//  * based on user authentication status
//  */
// const Header = () => {
//   // Get authentication status from Redux store
//   // This determines which navigation items to show
//   const authStatus = useSelector((state) => state.auth.status);

//   // Hook for programmatic navigation between routes
//   const navigate = useNavigate();

//   // Navigation menu configuration
//   // Each item has: name (display text), slug (route path), active (visibility condition)
//   const navItems = [
//     {
//       name: "Home",
//       slug: "/",
//       active: true, // Always visible
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus, // Only show when user is NOT authenticated
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus, // Only show when user is NOT authenticated
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus, // Only show when user IS authenticated
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus, // Only show when user IS authenticated
//     },
//   ];

//   return (
//     <header className="py-3 shadow bg-gray-500">
//       <Container>
//         {/* Main navigation wrapper */}
//         <nav className="flex justify-between items-center">
//           {/* Logo section - clicking navigates to home */}
//           <div className="mr-4">
//             <Link to="/">
//               <Logo />
//             </Link>
//           </div>

//           {/* Navigation menu items */}
//           <ul className="flex">
//             {/* Map through navItems and render active ones */}
//             {navItems.map(
//               (item) =>
//                 item.active ? ( // Only render if item is active (visible)
//                   <li key={item.name}>
//                     <button
//                       onClick={() => {
//                         navigate(item.slug); // Navigate to the item's route
//                       }}
//                       className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
//                     >
//                       {item.name}
//                     </button>
//                   </li>
//                 ) : null // Don't render inactive items
//             )}

//             {/* Logout button - only show when user is authenticated */}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   );
// };

// export default Header;
import React , {useState} from "react";
import { Container, LogoutBtn, Logo } from "../imports";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {

  //state for hamberger show or not show
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-purple-950/30 border-b border-white/20 shadow-md">
        <Container>
          <nav className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <Logo />
            </Link>

            {/* Hamburger Toggle Button (visible only on small screens) */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-4">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="text-white px-4 py-2 rounded-full hover:bg-white/10 transition duration-200 border border-white/20"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col items-start gap-3 px-4 pb-4">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name} className="w-full">
                      <button
                        onClick={() => {
                          navigate(item.slug);
                          setMenuOpen(false);
                        }}
                        className="block w-full text-left text-white px-4 py-2 rounded-lg hover:bg-white/10 transition border border-white/20"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li className="w-full">
                  <LogoutBtn />
                </li>
              )}
            </ul>
          )}
        </Container>
      </div>
    </header>
  );
};

export default Header;
