import axios from "axios";
import { makeObservable, observable, action } from "mobx";

export default class Registration {
  email = "";
  userName = "";
  password = "";

  constructor() {
    makeObservable(this, {
      email: observable,
      userName: observable,
      password: observable,
      signup: action,
      auth: action,
      getInputValue: action,
    });
  }

  getInputValue = (value, type) => {
    try {
      type === "email"
        ? (this.email = value)
        : type === "password"
        ? (this.password = value)
        : (this.userName = value);
    } catch (e) {
      alert("ERROR getInputValue method", e);
    }
  };

  signup = async (email, password) => {
    try {
      const response = await axios.post(`http://localhost:8000/registration`, {
        email,
        password,
      });
      alert(response.data.message);
    } catch (e) {
      alert("ERROR registration", e);
    }
  };

  auth = async (email, password) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/authentication`,
        {
          email,
          password,
        },
      );

      // ЗАПИСАТЬ В LOCALSTORE
      const object = {value: response.data.token, timestamp: new Date().getTime()}
      localStorage.setItem('ecologyBY', JSON.stringify(object));

      console.log(response.data);
      alert(response.data.status);
    } catch (e) {
      alert("ERROR authentication", e);
    }
  };
}
