import React, { useState, useEffect, useMemo } from "react";
import callAPI from "../../pages/CallApi";
import MaterialReactTable from "material-react-table";
//import TableData from "./data.json";

const Tablefilter = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await callAPI("gyno");
        console.log(result.data.data);
        // Pass the endpoint as an argument to callAPI
        if (result?.data?.data?.length) {
          const sortedData = result.data.data.sort((a, b) => b.id - a.id); // Sort the data by id in descending order
          setData(sortedData); // Set the sorted data to the data state
        }
      } catch (error) {
        console.log(error); // Log any errors that occur during the API call
      }
    };
    fetchData();
  }, []);

  console.log(data);
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
      data
        .map((originalRow) => originalRow.id) //get all the root row ids, use recursion for additional levels
        .reduce((a, v) => ({ ...a, [v]: false }), {}), //convert to an object with all the ids as keys and `true` as values
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableExpanding
      initialState={{ expanded: initialExpandedRootRows }} //only expand the root rows by default
      renderDetailPanel={({ row }) => row.original.note}
    />
  );
};

export default Tablefilter;
