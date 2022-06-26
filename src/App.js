import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Signup from './components/Signup';
import SavedArticles from './components/SavedArticles';
import Login from './components/Login';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}
        {/* <News pageSize={6} category="sports" /> */}
        <Switch>
          <Route exact path="/"><News key="general" pageSize={6} category="general" /></Route>
          <Route exact path="/sports"><News key="sports" pageSize={6} category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" pageSize={6} category="technology" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={6} category="entertainment" /></Route>
          <Route exact path="/business"><News key="business" pageSize={6} category="business" /></Route>
          <Route exact path="/science"><News key="science" pageSize={6} category="science" /></Route>
          <Route exact path="/health"><News key="health" pageSize={6} category="health" /></Route>
          <Route exact path="/general"><News key="general" pageSize={6} category="general" /></Route>
          <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/feedback"><Feedback /></Route>
          <Route exact path="/articles"><SavedArticles /></Route>
          <Route exact path='/login'><Login /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
