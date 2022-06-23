import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getPostList = async(setState: any) => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    setState(response.data);
  } catch(error) {
    console.log(error);
  };
};

export const getPostDetails = async(setState: any, id: any) => {
  try {
    const response = await axios.get(`${baseUrl}/posts/${id}`);
    setState(response.data);
  } catch(error) {
    console.log(error);
  };
};

export const getComments = async(setState: any, id: any ) => {
  try {
    const response = await axios.get(`${baseUrl}/posts/${id}/comments`);
    setState(response.data);
  } catch(error) {
    console.log(error);
  };
};

export const updatePost = async(setState: any, id: any) => {
  axios.put(`${baseUrl}/posts/${id}`, {
      title: "Hello World!",
      body: "This is an updated post."
    })
    .then((response) => {
      setState(response)
    })
}

export const getPostUser = async(setState: any, id: any) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${id}/posts`);
    setState(response.data);
  } catch(error) {
    console.log(error);
  };
};
