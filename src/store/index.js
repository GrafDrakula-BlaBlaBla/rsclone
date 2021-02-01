import Registration from "./authStore";
import Event from "./eventStore";
import Location from "./locationStore";
import User from "./profileCommon";

const store = {
  Registration: new Registration(),
  Event: new Event(),
  Location: new Location(),
  User: new User(),
};

export default store;
