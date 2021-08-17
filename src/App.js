import './sass/App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './sections/Home';
import Movie from './sections/Movie';
import SearchResult from './sections/SearchResult';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={Movie}/>
        <Route exact path="/search-result" component={SearchResult}/>
      </Switch>
    </Router>
  );
}

export default App;