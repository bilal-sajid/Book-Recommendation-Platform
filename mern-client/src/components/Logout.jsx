import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { HiOutlineLogout } from "react-icons/hi";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Sign-Out Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  return (
    <div className="h-screen bg-orange-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">👋 Ready to Log Out?</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to sign out?</p>
        <Button 
          className="w-full bg-red-600 hover:bg-red-700 transition-all flex items-center justify-center space-x-2"
          onClick={() => setIsModalOpen(true)}
        >
          <HiOutlineLogout className="w-5 h-5" />
          <span>Logout</span>
        </Button>
      </div>

      {/* Logout Confirmation Modal */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Confirm Logout</Modal.Header>
        <Modal.Body>
          <p className="text-gray-700">Are you sure you want to log out?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button color="red" onClick={handleLogout}>
            Yes, Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Logout;
