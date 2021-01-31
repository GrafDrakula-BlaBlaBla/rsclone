import resultFetch from  './requestInCalendarGoogle.jsx';
import axios from 'axios';

// слияние двух массивов данных

export default function result() {
  const dataMarker = resultFetch().then( ( arrayData ) => {
  // перебор данных (списка) пришедших из базы
    const result = axios.post('http://localhost:8000/create-map-main', {})
    .then(function (response) {
      if(response.status === 200){
        return Array.from(response.data);
      }
    })
    .catch(function (error) {

    })
    .then((dataDB) => {
      const concatArray = dataDB.map( ( element ) => {
        for (let i = 0; i < arrayData.length; i++) {
          if(arrayData[i]['id'] === element.idEventCalendarGoogle){
            return Object.assign(element, arrayData[i]);
          }
        }
      })
      return concatArray;
    });
    
   return result;
    })
  return dataMarker;
}
