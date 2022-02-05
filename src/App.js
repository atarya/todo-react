import logo from './logo.svg';
import './App.css';
import React from "react";
import { button, card, form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = React.useState([{
    text:"This is a sample todo",
    isDone:false
  }])
  }

export default App;