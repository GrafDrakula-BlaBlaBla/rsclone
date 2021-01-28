
( async function run() {
    const fs = require('fs');
    const { google } = require('googleapis');

    const CALENDAR_ID = 'bosba9d@gmail.com';

    const KEYFILE = 'My Project-41138fff9f14.json'; // path to JSON with private key been downloaded from Google
    const SCOPE_CALENDAR = 'https://www.googleapis.com/auth/calendar'; // authorization scopes
    const SCOPE_EVENTS = 'https://www.googleapis.com/auth/calendar.events';

    // INNER FUNCTIONS
    async function readPrivateKey() {
      const content = fs.readFileSync(KEYFILE);
      return JSON.parse(content.toString());
    }

    async function authenticate(key) {
      const jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key,
        [SCOPE_CALENDAR, SCOPE_EVENTS]
      );
      await jwtClient.authorize();
      return jwtClient;
    }

    async function createEvent(auth) {
      const event = {
        'summary': '25 января тест',
        'description': 'Тест для демонстрации',
        'start': {
          'dateTime': '2021-01-24T17:00:00+02:00',
          'timeZone': 'Europe/Riga',
        },
        'end': {
          'dateTime': '2021-01-24T19:00:00+02:00',
          'timeZone': 'Europe/Riga',
        }
      };

      let calendar = google.calendar('v3');
      const result = await calendar.events.insert({
        auth: auth,
        calendarId: CALENDAR_ID,
        resource: event,
      });
      console.log(result.data.id);
    }

    // MAIN
    try {

      const key = await readPrivateKey();
      const auth = await authenticate(key);
      await  createEvent(auth);

    } catch (e) {
      console.log('MyError: ' + e);
    }
  })();
