import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Nav from "./components/NavBar";
//Pages
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Favoritos" component={Favorites} />
        <Route exact path="/Detalhes/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
