import resultFetch from  './RequestCalendar.jsx';

const arrayDataEvents = resultFetch.then((data) => {

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
    //Окончание
    let end = dateOneEnd.getDate();
    let endHours = dateOneEnd.getHours();
    let endMinutes = dateOneEnd.getMinutes();
    let endMonth = dateOneEnd.getMonth();

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

    for (var i = start; i <= end; i++) {
        if (!arrayWithData.hasOwnProperty(i)) {
            arrayWithData[i] = [dataLoop];
        }
        else {
            arrayWithData[i].push(dataLoop);

        }
      }

    }

    return arrayWithData;

})

export default arrayDataEvents;
