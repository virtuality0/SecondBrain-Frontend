import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { CreateContentModal } from "./components/modals/createContentModal";
import { Sidebar } from "./components/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/login";

function App() {
  const [createContentModal, setCreateContentModal] = useState<boolean>(false);
  return (
    <BrowserRouter>
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
