import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { CreateContentModal } from "./components/modals/createContentModal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [createContentModal, setCreateContentModal] = useState<boolean>(false);
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
            <div className="flex h-full">
              <CreateContentModal
                open={createContentModal}
                onClose={() => {
                  setCreateContentModal(false);
                }}
              />
              <Sidebar />
              <Dashboard setCreateContentModal={setCreateContentModal} />
            </div>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
