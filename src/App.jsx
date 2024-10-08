import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Oracoes from './pages/Oracoes';  
import Biblia from './pages/Biblia';      
import Novenas from './pages/Novenas';    
import CheckList from './pages/CheckList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/oracoes">Orações</Link></li>
            <li><Link to="/biblia">Bíblia</Link></li>
            <li><Link to="/novenas">Novenas</Link></li>
            <li><Link to="/checklist">Check-List</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/oracoes" component={Oracoes} />
          <Route path="/biblia" component={Biblia} />
          <Route path="/novenas" component={Novenas} />
          <Route path="/checklist" component={CheckList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

