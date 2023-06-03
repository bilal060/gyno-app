import axios from "axios";

const url = process.env.API_URL || "http://localhost:5000/api/v1";

const callAPI = async (endpoint) => {
  try {
    return await axios.get(`${url}/${endpoint}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const callADDAPI = async (endpoint, data) => {
  // update to include data parameter
  try {
    return await axios.post(`${url}/${endpoint}`, data); // add data to POST request
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default callAPI;
export { callADDAPI };
