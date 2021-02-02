/* eslint-disable default-case */
import axios from "axios";
import { makeObservable, observable, action } from "mobx";

export default class Registration {
  email = "";
  userName = "";
  password = "";
  //
  isDirty = false; // * покинул ли пользователь input
  isValid = false; //  true - error
  isValidEmail = false; //  true - error
  isValidPassword = false; // true - error
  //
  //* Хранит информацию о видах валидации
  inputs = [
    {
      type: "email",
      value: this.email,
      placeholder: "email",
      validations: {
        maxLength: 120,
        minLength: 3,
      },
    },
    {
      type: "text",
      value: this.userName,
      placeholder: "user name",
    },
    {
      type: "password",
      value: this.password,
      placeholder: "password",
      validations: {
        maxLength: 12,
        minLength: 6,
      },
    },
  ];

  constructor() {
    makeObservable(this, {
      email: observable,
      userName: observable,
      password: observable,
      //
      isDirty: observable,
      isValid: observable,
      //
      signup: action,
      auth: action,
      getInputValue: action,
      validateForm: action,
      validateEmail: action,
      validatePassword: action,
      showError: action,
      isError: action,
    });
  }

  validateForm = (typeInput, valueInput, listValidations) => {
    this.isDirty = true;
    this.inputs.forEach((el) => {
      for (const key in el) {
        if (el[key] === typeInput) {
          switch (el[key]) {
            case "email":
              this.validateEmail(typeInput, valueInput, listValidations);
              break;
            case "password":
              this.validatePassword(typeInput, valueInput, listValidations);
              break;
          }
        }
      }
    });
  };

  validateEmail = (type, value, listValidation) => {
    if (!type === "email") {
      alert('Error email type is not "email"');
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const maxLength = listValidation.maxLength;
    const minLength = listValidation.minLength;

    this.isValidEmail = re.test(value);

    value.length < maxLength && value.length > minLength && this.isValidEmail
      ? (this.isValid = true)
      : (this.isValid = false);
  };

  validatePassword = (type, value, listValidation) => {
    if (!type === "password") {
      alert('Error email type is not "email"');
    }

    const maxLength = listValidation.maxLength;
    const minLength = listValidation.minLength;

    if (value.length <= maxLength && value.length >= minLength) {
      this.isValidPassword = true;
    } else {
      this.isValidPassword = false;
    }
  };

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

  showError = (typeInput) => {
    const span = document.querySelector(`.${typeInput}`);

    if (typeInput === "email") {
      this.isError(this.isValidEmail, span);
    } else if (typeInput === "password") {
      this.isError(this.isValidPassword, span);
    }
  };

  isError = (status, span) => {
    if (!status && span.classList.contains("hide")) {
      span.classList.remove("hide");
    }

    if (status && !span.classList.contains("hide")) {
      span.classList.add("hide");
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
      alert(response.data.status);
    } catch (e) {
      alert("ERROR authentication", e);
    }
  };
}
