import Registration from "./authStore";
import Event from "./eventStore";
import Location from "./locationStore";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Registration: new Registration(),
  Event: new Event(),
  Location: new Location(),
};
