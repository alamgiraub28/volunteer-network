
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import BookedItems from './components/BookedItems/BookedItems';
import NotMatch from './components/NotMatch/NotMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <p>{loggedInUser.name}</p>
    <Router>
       <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/registration/:uniqueId">
            <Registration/>
          </PrivateRoute>
          <Route path="/bookedItems">
            <BookedItems/>
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="*">
              <NotMatch />
          </Route>
          
        
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
