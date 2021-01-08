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
    dateOneStart.getHours();
    dateOneStart.getMinutes();
    //Окончание
    let end = dateOneEnd.getDate();
    dateOneEnd.getHours();
    dateOneEnd.getMinutes();

    let dataLoop = {
      start: start,
      end: end,
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
