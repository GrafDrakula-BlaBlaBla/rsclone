import resultFetch from  './RequestCalendar.jsx';
import testData from './dataForMarker.json';

// слияние двух массивов данных

const  dataMarker = resultFetch.then( ( arrayData )=>{
// перебор данных (списка) пришедших из базы
  let concatArray = testData['data'].map( ( element, index ) => {

    for (var i = 0; i < arrayData.length; i++) {
      if(arrayData[i]['id'] === element.id_google){
      let result = Object.assign(element, arrayData[i]);
        return result;
        }
    }
  } )

return concatArray;
})

export default dataMarker;
