import axios from "axios";

export default function returnOneUser( idUser ) {

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
