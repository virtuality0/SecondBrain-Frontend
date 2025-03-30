import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { CreateContentModal } from "./components/modals/createContentModal";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Bounce, ToastContainer } from "react-toastify";
import { ShareBrainModal } from "./components/modals/shareBrainModal";

function App() {
  const [createContentModal, setCreateContentModal] = useState<boolean>(false);
  const [shareBrainModal, setShareBrainModal] = useState<boolean>(false);
  const [createContentSubmitClicked, setCreateContentSubmitClicked] =
    useState<boolean>(false);
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
            localStorage.getItem("token") ? (
              <div className="flex h-full">
                <ShareBrainModal
                  open={shareBrainModal}
                  onClose={() => {
                    setShareBrainModal(false);
                  }}
                />
                <CreateContentModal
                  open={createContentModal}
                  onClose={() => {
                    setCreateContentModal(false);
                  }}
                  setCreateContentSubmitClicked={setCreateContentSubmitClicked}
                />
                <Sidebar />
                <Dashboard
                  setShareBrainModal={setShareBrainModal}
                  setCreateContentModal={setCreateContentModal}
                  createContentSubmitClicked={createContentSubmitClicked}
                />
              </div>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
