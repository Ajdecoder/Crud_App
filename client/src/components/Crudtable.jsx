import React from "react";
import { CiRead } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";


function Crudtable() {
  return (
      <div className="mx-36 mt-7">
        <button className=" text-blue-500 hover:fill-white relative left-full text-6xl flex-auto">
        <IoMdAdd />
        </button>
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead className="bg-black text-white">
          <tr>
            <th className="border p-4">SR No.</th>
            <th className="border p-4">First Name</th>
            <th className="border p-4">Last Name</th>
            <th className="border p-4">Username</th>
            <th className="border p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="border p-1">1</td>
            <td className="border p-1">Jean Marc</td>
            <td className="border p-1">Louis</td>
            <td className="border p-1">Jl987</td>
            <td className="border p-1 flex m-3 justify-around gap-[-2px]">
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                <CiRead />
              </button>
              <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded">
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
}

export default Crudtable;
