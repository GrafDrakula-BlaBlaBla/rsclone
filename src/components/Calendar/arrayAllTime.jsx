import resultFetch from  './RequestCalendar.jsx';

const arrayDataAllEvents = resultFetch.then((data) => {

  const arrayWithData = []

  data.map((item) => {
    createDataItem(item);

  })
  function createDataItem(dateOne) {
    let dateOneStart =  dateOne['start'].hasOwnProperty('dateTime') ? new Date(dateOne['start']['dateTime']) : new Date(dateOne['start']['date']);
    let dateOneEnd =  dateOne['end'].hasOwnProperty('dateTime') ? new Date(dateOne['end']['dateTime']) : new Date(dateOne['end']['date']);

    let sammary = dateOne['summary'];
    let description = dateOne['description'];
    let location = dateOne['location'];
    let id = dateOne['id'];


    //Начало
    let start = dateOneStart.getDate();
    let startHours = dateOneStart.getHours();
    let startMinutes = dateOneStart.getMinutes();
    let startMonth = dateOneStart.getMonth();
    let startYear = dateOneStart.getFullYear();
    //Окончание
    let end = dateOneEnd.getDate();
    let endHours = dateOneEnd.getHours();
    let endMinutes = dateOneEnd.getMinutes();
    let endMonth = dateOneEnd.getMonth();
    let endYear = dateOneEnd.getFullYear();

    let dataLoop = {
      start: start,
      startHours: startHours,
      startMinutes: startMinutes,
      startMonth: startMonth,
      end: end,
      endHours: endHours,
      endMinutes: endMinutes,
      endMonth: endMonth,
      sammary: sammary,
      description: description,
      location: location,
      id: id,
    }

    for (var d = dateOneStart; d <= dateOneEnd; d.setDate(d.getDate() + 1)) {

      if (!arrayWithData.hasOwnProperty(d.getFullYear())) {

          arrayWithData[d.getFullYear()] = new Array();
          arrayWithData[d.getFullYear()][d.getMonth()] = new Array();
          arrayWithData[d.getFullYear()][d.getMonth()][d.getDate()] = [dataLoop];

      }else if(arrayWithData.hasOwnProperty(d.getFullYear()) &&
            !arrayWithData[d.getFullYear()].hasOwnProperty(d.getMonth())){

            arrayWithData[d.getFullYear()].push([d.getMonth()]);
            arrayWithData[d.getFullYear()][d.getMonth()] = new Array();
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

})

export default arrayDataAllEvents;
