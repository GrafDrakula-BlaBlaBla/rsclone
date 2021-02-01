import resultFetch from  './requestInCalendarGoogle.jsx';

export default function CreateCalendar () {

  const arrayDataAllEvents = resultFetch().then((data) => {
    const arrayWithData = [];
    
    data.map((item) => createDataItem(item));
    
    function createDataItem(dateOne) {
      const dateOneStart =  dateOne['start'].hasOwnProperty('dateTime') ? new Date(dateOne['start']['dateTime']) : new Date(dateOne['start']['date']);
      const dateOneEnd =  dateOne['end'].hasOwnProperty('dateTime') ? new Date(dateOne['end']['dateTime']) : new Date(dateOne['end']['date']);

      const summary = dateOne['summary'];
      const description = dateOne['description'];
      const location = dateOne['location'];
      const id = dateOne['id'];


      //Начало
      const start = dateOneStart.getDate();
      const startHours = dateOneStart.getHours();
      const startMinutes = dateOneStart.getMinutes();
      const startMonth = dateOneStart.getMonth();
      const startYear = dateOneStart.getFullYear();
      //Окончание
      const end = dateOneEnd.getDate();
      const endHours = dateOneEnd.getHours();
      const endMinutes = dateOneEnd.getMinutes();
      const endMonth = dateOneEnd.getMonth();
      const endYear = dateOneEnd.getFullYear();

      const dataLoop = {
        start: start,
        startHours: startHours,
        startMinutes: startMinutes,
        startMonth: startMonth,
        startYear: startYear,
        end: end,
        endHours: endHours,
        endMinutes: endMinutes,
        endMonth: endMonth,
        endYear: endYear,
        sammary: summary,
        description: description,
        location: location,
        id: id,
      }

      for (var d = dateOneStart; d <= dateOneEnd; d.setDate(d.getDate() + 1)) {

        if (!arrayWithData.hasOwnProperty(d.getFullYear())) {
            arrayWithData[d.getFullYear()] = [];
            arrayWithData[d.getFullYear()][d.getMonth()] = [];
            arrayWithData[d.getFullYear()][d.getMonth()][d.getDate()] = [dataLoop];

        }else if(arrayWithData.hasOwnProperty(d.getFullYear()) &&
              !arrayWithData[d.getFullYear()].hasOwnProperty(d.getMonth())){

              arrayWithData[d.getFullYear()].push([d.getMonth()]);
              arrayWithData[d.getFullYear()][d.getMonth()] = [];
              arrayWithData[d.getFullYear()][d.getMonth()][d.getDate()] = [dataLoop];

          } else if(arrayWithData.hasOwnProperty(d.getFullYear()) &&
          arrayWithData[d.getFullYear()].hasOwnProperty(d.getMonth()) &&
        !arrayWithData[d.getFullYear()][d.getMonth()].hasOwnProperty(d.getDate())){

            arrayWithData[d.getFullYear()][d.getMonth()][d.getDate()] = [dataLoop];
        }else if(arrayWithData.hasOwnProperty(d.getFullYear()) &&
        arrayWithData[d.getFullYear()].hasOwnProperty(d.getMonth()) &&
        arrayWithData[d.getFullYear()][d.getMonth()].hasOwnProperty(d.getDate())){
          arrayWithData[d.getFullYear()][d.getMonth()][d.getDate()].push(dataLoop);
        }
      }
    }

    return arrayWithData;
  });

  return arrayDataAllEvents;
}
