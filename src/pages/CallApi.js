import axios from "axios";

const url = process.env.API_URL || "http://localhost:3000/api/v1";

const callAPI = async (endpoint) => {
  try {
    return await axios.get(`${url}/${endpoint}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default callAPI;
