import axios from "axios";

export default function returnAddUser( idEvent, idUser ) {

  const result = axios.post(process.env.REACT_APP_SERVER + 'add-user-event', {
    idEvent,
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
