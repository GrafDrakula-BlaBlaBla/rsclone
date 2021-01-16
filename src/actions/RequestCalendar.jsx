const CALENDAR_ID = 'bosba9d@gmail.com'
const API_KEY = 'AIzaSyAhfRY8AD5ylbweL7dx6MjXOvRFq1jz6o0'

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

 const resultFetch = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data.items;
  });
  
export default resultFetch;
