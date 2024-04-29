/* eslint-disable no-unused-vars */
import React from "react";
import { CiRead } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const addBtn = {
  border: "3px solid indigo",
  borderRadius: "20%",
};

export const Crudtable = () => {

  const navigate = useNavigate()

  const AddTheUser = () => {
    navigate('/addUser')
  };
  const EditUser = () => {
    navigate('/edit')
  };
  const ReadUser = () => {
    navigate('/read')
  };


  return (
    <div className="mx-20 mt-4">
      <button
        className="text-blue-500 hover:fill-white relative left-full text-6xl hover:bg-lime-600 transition ease-in-out delay-80"
        style={addBtn}
        onClick={AddTheUser}
      >
        <IoMdAdd />
      </button>

      <table className="min-w-full bg-white rounded-lg shadow">
        <thead className="bg-black text-white">
          <tr>
            <th className="border p-4 text-center">SR No.</th>
            <th className="border p-4 text-center">Name</th>
            <th className="border p-4 text-center">Username</th>
            <th className="border p-4 text-center">Address</th>
            <th className="border p-4 text-center">Description</th>
            <th className="border p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="border p-1 text-center max-w-9">1</td>
            <td className="border p-1 text-center max-w-9">Jean Marc</td>
            <td className="border p-1 text-center">Louis</td>
            <td className="border p- text-center max-w-9">
              123 Main Street, Anytown, USA 12345
            </td>
            <td className="border p-1 text-center">Sample Description</td>
            <td className="border p-1 flex items-center justify-around gap-2 max-w-9">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              onClick={ReadUser}
              >
                <CiRead />
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={EditUser}
              
              >
                <MdModeEditOutline />
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <RiDeleteBin3Fill />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
