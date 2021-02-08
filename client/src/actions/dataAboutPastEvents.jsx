import axios from "axios";

export default function returnEvents() {

  const result = axios.post(process.env.REACT_APP_SERVER + '/data-past-event', {

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
