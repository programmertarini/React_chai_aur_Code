// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { login, logout } from "./store/authSlice";
// import authService from "./appwrite/auth";
// import imports, { Footer, Header } from "./components/imports";
// import { Outlet } from "react-router-dom";

// function App() {
//   const [loding, setLoding] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     authService
//       .getCurrentUser()
//       .then((userData) => {
//         if (userData) {
//           dispatch(login({ userData }));
//         } else {
//           dispatch(logout());
//         }
//       })
//       .finally(() => setLoding(false));
//   } , []);

//   return !loding ? (
//     <div
//       className="min-h-screen flex flex-wrap content-between  bg-gradient-to-br        
//           from-[#28105B]/90      
//           via-[#131D48]/95       
//           to-[#061024]"
//     >
//       <div className="w-full text-center block">
//         <Header />
//         <main>
//           <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) : null;
// }

// export default App;
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { Footer, Header } from "./components/imports";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []); // ← Fix: added dependency array

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#28105B] via-[#131D48] to-[#061024] text-white">
      {/* Header (fixed position) */}
      <Header />

      {/* Main content with padding to offset fixed header */}
      <main className="flex-1 pt-20 px-4 sm:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  ) : null;
}

export default App;

