import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Explore from './Pages/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <AuthProvider>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/purchase/:name">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
