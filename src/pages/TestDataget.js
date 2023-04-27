import React, { useState, useEffect } from "react";
import CallAPI from "./CallApi";

function TestDataget() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallAPI("api/v1/gyno");
        if (result.data.length > 0) {
          setData(result.data[0]); // Set the data state to the first item in the array
        }
      } catch (error) {
        console.log(error); // Log any errors that occur during the API call
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.FirstName &&
        data.Surname && ( // Add a check to ensure that the data properties exist before rendering them
          <>
            <h1>
              {data.FirstName} {data.Surname}
            </h1>
            <p>Serial Number: {data.SerialNumber}</p>
            <p>Regiment: {data.Regiment}</p>
            <p>Rank: {data.Rank}</p>
            <p>Note: {data.note}</p>
            <img src={data.image} alt={data.FirstName} />
          </>
        )}
    </div>
  );
}

export default TestDataget;
