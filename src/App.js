import CharacterList from './views/CharacterList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
      <Router>
        <div className="min-h-screen w-full bg-gray-800 text-white">        
          <Switch>
            <Route path="/">
              <CharacterList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}
  
export default App;