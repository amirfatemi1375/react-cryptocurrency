import axios from "axios";
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const instance = axios.create({
    baseURL:VITE_API_BASE_URL 
  
  });
const axiosInstance = axios.create({
    baseURL:  VITE_API_BASE_URL,  
    headers: {
      'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cs'
    }
  })
   const login=async (url,data)=>{
    const response= await instance
    .post(url,data)
    .catch(error => {
      console.log(error?.response.data)
    })
   return response
  }
  const getAll=async(url)=>{
    const response= await axiosInstance
    .get(url)
    .catch(error => {
      console.log(error?.response.data)
    })
   return response
  }
  const post=async(url,data)=>{
    const response= await axiosInstance
    .post(url,data)
    .catch(error => {
      console.log(error?.response.data)
    })
   return response
  }
  const put=async(url,data)=>{
    const response= await axiosInstance
    .put(url,data)
    .catch(error => {
      console.log(error?.response.data)
    })
   return response
  }
  const deleteItem=async(url)=>{
    const response= await axiosInstance
    .delete(url)
    .catch(error => {
      console.log(error?.response.data)
    })
   return response
  }
  export default axiosInstance;

  