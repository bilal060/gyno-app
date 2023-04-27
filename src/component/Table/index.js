import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import TableData from "./data.json";

const Tablefilter = () => {
  console.log(TableData);
  const columns = useMemo(
    () => [
      {
        accessorKey: "Grave",
        header: "Grave",
      },
      {
        accessorKey: "Surname",
        header: "SurName",
      },
      {
        accessorKey: "FirstName",
        header: "First Name",
      },
      {
        accessorKey: "SerialNumber",
        header: "Serial Number",
      },
      {
        accessorKey: "Regiment",
        header: "Regiment",
      },
      {
        accessorKey: "Rank",
        header: "Rank",
      },
    ],
    []
    //end
  );

  const initialExpandedRootRows = useMemo(
    () =>
      TableData.map((originalRow) => originalRow.id) //get all the root row ids, use recursion for additional levels
        .reduce((a, v) => ({ ...a, [v]: false }), {}), //convert to an object with all the ids as keys and `true` as values
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={TableData}
      enableExpanding
      initialState={{ expanded: initialExpandedRootRows }} //only expand the root rows by default
      renderDetailPanel={({ row }) => row.original.note}
    />
  );
};

export default Tablefilter;
