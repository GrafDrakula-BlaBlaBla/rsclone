import resultFetch from  './requestInCalendarGoogle.jsx';

export default function CreateCalendar () {

  const arrayDataAllEvents = resultFetch().then((data) => {
    const arrayWithData = [];
    
    data.map((item) => createDataItem(item));

    function createDataItem(dateOne) {
      const dateOneStart = new Date(dateOne.start.dateTime);
      const dateOneEnd = new Date(dateOne.end.dateTime);

      const dataLoop = {
        start: dateOneStart.getDate(),
        startHours: dateOneStart.getHours(),
        startMinutes: dateOneStart.getMinutes(),
        startMonth: dateOneStart.getMonth(),
        startYear: dateOneStart.getFullYear(),
        end: dateOneEnd.getDate(),
        endHours: dateOneEnd.getHours(),
        endMinutes: dateOneEnd.getMinutes(),
        endMonth: dateOneEnd.getMonth(),
        endYear: dateOneEnd.getFullYear(),
        summary: dateOne.summary,
        description: dateOne.description,
        location: dateOne.location,
        id: dateOne.id,
      }

      for (let d = dateOneStart; d <= dateOneEnd; d.setDate(d.getDate() + 1)) {
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
        }else if(arrayWithData.hasOwnProperty(d.getFullYear())
          && arrayWithData[d.getFullYear()].hasOwnProperty(d.getMonth())
          && arrayWithData[d.getFullYear()][d.getMonth()].hasOwnProperty(d.getDate())){
          arrayWithData[d.getFullYear()][d.getMonth()][d.getDate()].push(dataLoop);
        }
      }
    }
    return arrayWithData;
  });
  return arrayDataAllEvents;
}
