import axios from 'axios';

export default function signIn() {

  axios.get(process.env.REACT_APP_SERVER + '/authentication-google', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
