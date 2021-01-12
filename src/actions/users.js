import axios from "axios";

export const registration = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:8000/app/login`, {
      email,
      password,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};
