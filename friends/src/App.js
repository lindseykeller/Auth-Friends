import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";
import PrivateRoute from "./Components/PrivateRoute";

const Button = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  background: #e6f2ff;
  border-radius: 3px;
  border: 2px solid palevioletred;
  width: 20%;
  padding: 0.6em;
  margin: 1em;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <Container className="App">
        <Button>
          <Link to="/login">Login</Link>
        </Button>
        <Button>
          <Link to="/friends">Friends List</Link>
        </Button>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
