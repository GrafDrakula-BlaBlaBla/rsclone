import axios from "axios";

export const registration = async (email, password) => {
  try {
    console.log(email, password);
    const response = await axios.post(`http://localhost:8000/registration`, {
      email,
      password,
    });

    alert(response.data.message);
  } catch (e) {
    alert(e);
  }
};

export const authentication = async (email, password) => {
  try {
    console.log(email, password);
    const response = await axios.post(`http://localhost:8000/registration`, {
      email,
      password,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e);
  }
};
