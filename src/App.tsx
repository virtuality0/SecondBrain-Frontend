import { Dashboard } from "./components/Dashboard/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Bounce, ToastContainer } from "react-toastify";
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position={"top-right"}
        transition={Bounce}
        pauseOnHover={true}
        autoClose={3000}
      />
      <Routes>
        <Route
          path="/dashboard"
          element={
            localStorage.getItem("token") ? ( // to check if the user's logged in only then show the dashboard
              <Dashboard />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
