import axios from "axios";

export default function returnEvents( idUser ) {

  const result = axios.post(process.env.REACT_APP_SERVER + 'data-event-profile', {
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
