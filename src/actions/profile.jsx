import axios from "axios";

// получить из localstore
const idUser = "6015781f16f2051ff6a5e36a"

// запрос на сервер за данными пользователя
export default function returnOneUser() {

  const result = axios.post(process.env.REACT_APP_SERVER + 'data-profile', {
    idUser
  })
  .then(function (response) {
    if(response.status === 200){
      return response.data;
    }
  })
  .catch(function (error) {
    console.log(error);
  })

  return result;
}
