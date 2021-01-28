import { Router } from "express";
import Event from "../../models/Event";
import * as config from "config";


const fs = require('fs');
const path = require('path');
const KEYFILE = "key/keyGoogleCalandar.json";
const CALENDAR_ID = 'bosba9d@gmail.com';
const SCOPE_CALENDAR = 'https://www.googleapis.com/auth/calendar';
const SCOPE_EVENTS = 'https://www.googleapis.com/auth/calendar.events';
const { google } = require('googleapis');


const routerEvent = Router();

routerEvent.post("/create", async (req, res) => {

  async function readPrivateKey() {
    const dirPath = path.join(__dirname, KEYFILE);
    const content = fs.readFileSync(dirPath);
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

  async function createEvent(auth, eventTitle, description, startDate, endDate) {

    const event = {
      'summary': eventTitle,
      'description': description,
      'start': {
        'dateTime': startDate,
        'timeZone': 'Europe/Minsk',
      },
      'end': {
        'dateTime': endDate,
        'timeZone': 'Europe/Minsk',
      }
    };

    let calendar = google.calendar('v3');
    const result = await calendar.events.insert({
      auth: auth,
      calendarId: CALENDAR_ID,
      resource: event,
    });
    return result.data.id;
  }
  try {

    let {
      eventTitle,
      startDate,
      endDate,
      location,
      goal,
      description,
    } = await req.body.event;

    startDate = new Date(startDate);
    startDate = startDate.toJSON();

    endDate = new Date(endDate);
    endDate = endDate.toJSON();

    const key = await readPrivateKey();
    const auth = await authenticate(key);
    const idEventCalendarGoogle = await createEvent(auth, eventTitle, description, startDate, endDate);

    const event: any = new Event({
      idEventCalendarGoogle,
      eventTitle,
      startDate,
      endDate,
      location,
      goal,
      description,
    });

    await event.save();
    return await res.json({ message: `Мероприятие ${eventTitle} создано` });

  } catch (e) {
    res.send({ message: `SERVWR ERROR ${e}` });
  }
});

export default routerEvent;
