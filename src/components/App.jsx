import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-section"></div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
