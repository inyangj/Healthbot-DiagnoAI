import axios from "axios";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const getAuthorizationHeader = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return {
    Authorization: `Bearer ${userData.accessToken}`,
  };
};

export async function createChat(chatData) {
    const headers = getAuthorizationHeader();
    return await axios.post(` ${BASE_URL}/api/v1/messages`, chatData, {
      headers,
    });
  };


  export async function fetchUserChat() {
    try {
      const headers = getAuthorizationHeader();
      const response = await axios.get(`${BASE_URL}/api/v1/chats`, {
        headers,
      });
      return response.data;
    } catch (error) {
      throw new Error("Error fetching chat");
    }
  }