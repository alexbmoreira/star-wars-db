import CharacterList from './views/CharacterList';
import CharacterDetail from './views/CharacterDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
      <Router>
        <div className="min-h-screen w-full bg-gray-900 text-white">        
          <Switch>
            <Route path="/character/:id">
              <CharacterDetail />
            </Route>
            <Route path="/">
              <CharacterList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}
  
export default App;