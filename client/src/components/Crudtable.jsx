/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { PORT } from "./common";

export const Crudtable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from the backend when component mounts
    async function fetchUsers() {
      try {
        const response = await axios.get(`${PORT}/api/readAll`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  const handleAddUser = () => {
    navigate("/addUser");
  };

  const handleEditUser = (task_id) => {
    navigate(`/update/${task_id}`);
    console.log(task_id);
  };

  const handleReadUser = () => {
    navigate("/read");
  };

  const handleDeleteUser = async (task_id) => {
    try {
      await axios.delete( `${PORT}/api/delete/${task_id}`);
      // Remove the deleted user from the local state
      setUsers(users.filter((user) => user._id !== task_id));
      toast.dismiss(`User deleted successfully`);
    } catch (error) {
      console.log("Error Deleting Task", error);
    }
  };

  return (
    <div className="mx-4 mt-4 overflow-x-auto">
      {/* Add User Button */}
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddUser}
      >
        <IoMdAdd className="inline-block mr-2" />
        Add User
      </button>

      {/* Table */}
      <table className="w-full mt-4 bg-white rounded-lg shadow">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-center">SR No.</th>
            <th className="px-4 py-2 text-center">Name</th>
            <th className="px-4 py-2 text-center">Username</th>
            <th className="px-4 py-2 text-center">Email</th>
            <th className="px-4 py-2 text-center">Address</th>
            <th className="px-4 py-2 text-center">Description</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2">{user.Name}</td>
              <td className="border px-4 py-2">{user.User_name}</td>
              <td className="border px-4 py-2">{user.Email}</td>
              <td className="border px-4 py-2">{user.Address}</td>
              <td className="border px-4 py-2">{user.Desc}</td>
              <td className="border px-4 p-2 flex items-center justify-center mt-3 border-none">
                {/* Edit User Button */}
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  onClick={() => handleEditUser(user._id)}
                >
                  <MdModeEditOutline />
                </button>
                {/* Delete User Button */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  <RiDeleteBin3Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer position="top-center" />
    </div>
  );
};
