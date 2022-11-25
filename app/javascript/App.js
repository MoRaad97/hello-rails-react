import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Greeting from './Components/Greetings';
import { fetchMessage } from './Redux/Greetings_Reducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMessage()), []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
};
export default App;