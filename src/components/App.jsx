import "./App.scss";
import "./common.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Initiatives from "./Initiatives/Initiatives";
import MainPage from "./MainPage/MainPage";
import EventPage from "./EventPage/EventPage";
import GamePage from './GamePage/GamePage';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-section">
          <Switch>
            <Route path="/" exact component={ MainPage }></Route>
            <Route path="/createEvent">
              <EventPage section="create" />
            </Route>
            <Route path="/eventMap">
              <EventPage section="completion" />
            </Route>
          </Switch>
          <Route path="/initiatives" component={ Initiatives } />
          <Route path="/game" component={ GamePage } />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
// import { BrowserRouter } from "react-router-dom";
// import "./App.scss";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <div className="main-section"></div>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
