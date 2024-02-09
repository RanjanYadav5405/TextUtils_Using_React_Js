import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes, //It is for new version v6
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
    <Routes>
      <Route
        path="/"
        element={<TextForm showAlert={showAlert} heading="Welcome to TextUtil Form" mode={mode} />}
      />
      <Route path="/about" element={<About mode={mode}/>} />
    </Routes>
  </div>
</Router>

    </>
  );
}

export default App;
