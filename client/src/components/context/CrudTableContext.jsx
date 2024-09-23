import React, { createContext, useState } from "react";

const AdminContext = createContext();

export const CrudTableContext = ({children}) => {

  const [edittableRights, setEditTableRights] = useState(false);

  return (
    <AdminContext.Provider value={{ edittableRights }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext };
