/* eslint-disable no-unused-vars */
import React from "react";
import { CiRead } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Crudtable = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/addUser');
  };

  const handleEditUser = () => {
    navigate('/edit');
  };

  const handleReadUser = () => {
    navigate('/read');
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
          <tr>
            <td className="border px-4 py-2 text-center">1</td>
            <td className="border px-4 py-2">Jean Marc</td>
            <td className="border px-4 py-2">Louis</td>
            <td className="border px-4 py-2">someusername@gmail.com</td>
            <td className="border px-4 py-2">123 Main Street, Anytown, USA 12345</td>
            <td className="border px-4 py-2">Sample Description</td>
            <td className="border px-4 py-2 flex items-center justify-center">
              {/* Read User Button */}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                onClick={handleReadUser}
              >
                <CiRead />
              </button>
              {/* Edit User Button */}
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                onClick={handleEditUser}
              >
                <MdModeEditOutline />
              </button>
              {/* Delete User Button */}
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                <RiDeleteBin3Fill />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
