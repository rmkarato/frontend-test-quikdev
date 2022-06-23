import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getUserDetails = async(setState: any, userId: any) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userId}`);
    setState(response.data);
  } catch(error) {
    console.log(error);
  } 
}

export const getUsers = async(setState: any) => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    setState(response.data);
  } catch(error) {
    console.log(error);
  } 
}