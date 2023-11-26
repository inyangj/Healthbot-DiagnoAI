import axios from "axios";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const getAuthorizationHeader = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return {
    Authorization: `Bearer ${userData.token}`,
  };
};

export async function createChat(chat) {
    const headers = getAuthorizationHeader();
    return await axios.post(` ${BASE_URL}/api/v1/messages`, chat, {
      headers,
    });
  }