import axios from "axios";
import * as jwt from "jsonwebtoken";

export default function returnOneUser( idUser, data ) {

  const result = axios.post(process.env.REACT_APP_SERVER + 'data-edit-profile', {
    idUser,
    data
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
