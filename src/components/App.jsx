import "./App.scss";
import "./common.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Initiatives from "./Initiatives/Initiatives";
import MainPage from "./MainPage/MainPage";
import EventPage from "./EventPage/EventPage";
import EventCompletion from "./EventPage/EventCompletion/EventCompletion";
import Profile from "./Profile/Profile";
import EventInfo from './EventsComponent/EventInfo/EventInfo';
import EditEvent from './EventsComponent/EditEvent/EditEvent';
import GamePage from './GamePage/GamePage';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Registration from "./Footer/RegModal/RegModal";

import { observer, inject } from "mobx-react";

const App = inject( "store" ) (observer( ({store}) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-section">
          <Switch>
            <Route path="/" exact component={MainPage}></Route>
            <Route path="/createEvent">
              <EventPage section="create" />
            </Route>
            <Route path="/eventMap">
              <EventPage section="completion" />
            </Route>
            <Route path="/edit-event">
              <EditEvent />
            </Route>
            <Route path="/eventInfo">
              <EventInfo />
            </Route>
            <Route path="/eventCompletion">
              <EventCompletion />
            </Route>
          </Switch>
          <Route path="/profile">
           {store.Registration.statusApp ? <Profile /> : <Redirect to='/registration' />}
          </Route>
          <Route path="/registration">
          { store.Registration.statusApp ? <Profile /> : <Redirect to='/registration' />}
          </Route>
          <Route path="/initiatives" component={Initiatives} />
          <Route path="/game" component={GamePage} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );

}))



export default App;
