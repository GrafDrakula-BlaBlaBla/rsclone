import { makeAutoObservable } from "mobx";
import dataMarker from './../actions/dataForMarkers';
import L  from 'leaflet';
import { Marker, Tooltip  } from 'react-leaflet';
import React from "react";



 class stateMap {

 markers = null

   constructor() {
       makeAutoObservable(this)
   }

   createMarkerTooltip(){
     dataMarker.then( ( data ) => {

       const now = new Date();
   // добавление нуля
       function addZero( number ) {
         if(number < 10) {
           number = "0" + number
         }
         return number;
       }

       let createMarker =  data.map( ( oneEvent ) => {

         let classNameMarker;
         let dateOneStart =  oneEvent['start'].hasOwnProperty('dateTime') ? new Date(oneEvent['start']['dateTime']) : new Date(oneEvent['start']['date']);
         let dateOneEnd =  oneEvent['end'].hasOwnProperty('dateTime') ? new Date(oneEvent['end']['dateTime']) : new Date(oneEvent['end']['date']);

         if(dateOneStart < now && dateOneEnd < now){
           classNameMarker = "color-red"
         }else if (dateOneStart <=  now  && now <= dateOneEnd){
           classNameMarker = "color-yellow"
         } else if( dateOneStart > now && dateOneEnd > now ) {
           classNameMarker = "color-green"
         }
    

         const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
         'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

         let stateDayStart = dateOneStart.getDate();
         let stateMouthStart = dateOneStart.getMonth();
         let stateYearStart = dateOneStart.getFullYear();
         let stateHoursStart = dateOneStart.getHours();
         let stateMinutesStart = dateOneStart.getMinutes();

         let stateDayEnd = dateOneEnd.getDate();
         let stateMouthEnd = dateOneEnd.getMonth();
         let stateYearEnd = dateOneEnd.getFullYear();
         let stateHoursEnd = dateOneEnd.getHours();
         let stateMinutesEnd = dateOneEnd.getMinutes();
         let cord = [oneEvent.location.lat, oneEvent.location.lng];
         let markerCustom = L.divIcon({
           className: classNameMarker,
           shadowSize: [12, 12],
           iconSize: [18, 18 ] });
           return (
             <Marker position = { cord }  icon={ markerCustom } key={oneEvent.id}>
               <Tooltip >
                  <div className="popUpEvent">
                   <h3>{ oneEvent.summary }</h3>
                   <p> c { stateDayStart } { nameMonth[stateMouthStart]} { stateYearStart } в { stateHoursStart }:{addZero( stateMinutesStart )}</p>
                   <p> до { stateDayEnd } { nameMonth[stateMouthEnd]} { stateYearEnd } в { stateHoursEnd }:{addZero(stateMinutesEnd)} </p>
                  </div>
               </Tooltip>

             </Marker>
           )
         })
         this.markers = createMarker;
      })
   }

 }

export default new stateMap()
