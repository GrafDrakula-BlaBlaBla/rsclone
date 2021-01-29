import resultFetch from  './RequestCalendar.jsx';
import axios from 'axios';
// слияние двух массивов данных

const  dataMarker = resultFetch.then( ( arrayData ) => {
  // перебор данных (списка) пришедших из базы
  const result = axios.post('http://localhost:8000/create-map-main', {})
  .then(function (response) {
    if(response.status === 200){
      return Array.from(response.data);
    }
  })
  .catch(function (error) {})
  .then((dataDB) => {
    const concatArray = dataDB.map( ( element ) => {
      for (let i = 0; i < arrayData.length; i++) {
        if(arrayData[i]['id'] === element.idEventCalendarGoogle){
          const result = Object.assign(element, arrayData[i]);
          return result;
        }
      }
    });
    return concatArray;
  });

  return result;
});

export default dataMarker;
