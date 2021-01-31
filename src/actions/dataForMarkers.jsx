import resultFetch from  './requestInCalendarGoogle.jsx';
import axios from 'axios';
// слияние двух массивов данных
export default function result () {

  const  dataMarker = resultFetch().then( ( arrayData )=>{
  // перебор данных (списка) пришедших из базы
    const result = axios.post('http://localhost:8000/create-map-main', {
        })
        .then(function (response) {
          if(response.status === 200){
            const dataDB =  Array.from(response.data);

            let concatArray = dataDB.map( ( element, index ) => {
              for (var i = 0; i < arrayData.length; i++) {
                if(arrayData[i]['id'] === element.idEventCalendarGoogle){
                let result = Object.assign(element, arrayData[i]);
                  return result;
                  }
              }
            })
            return concatArray;

          }else{
            console.log("File dataForMarkers");
          }
        })
        .catch(function (error) {
          console.log(error + "dataForMarkers");
        })

    return result;
    })

  return dataMarker;
}
