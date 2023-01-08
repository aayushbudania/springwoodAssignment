/**
 * @function: App component is the main component which is Bootstraped in './index.js' file.
 *            Integrates Navbar component.
 *            Integrates Routes for Register, Filter and Slider pages.
 *            Setup counter which displays number of clicks by user on app screen.
 *            Counter initiates with zero on reload.
 * 
 * @version: 1.0
 * @author: Aayush Prakash Budania <aayushbudania002@gmail.com>
 */

import './App.css';
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import Register from './pages/register';
import Filter from './pages/filter';
import Slider from './pages/slider';
import Navbar from './components/navbar';
import { useState } from 'react';

const TRACKING_ID = "G-T9QKXWXW6G"; //// Tracking Id for logging events in google analytics. ////
ReactGA.initialize(TRACKING_ID);

function App() {

    const [counter, setCounter] = useState(0);

    const incrCounter = () => {
        setCounter(counter + 1);
    }

  return (
    <div onClick={incrCounter}>
        <Navbar />
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/slider" element={<Slider/>}/>
        <Route path="/filter" element={<Filter/>}/>
      </Routes>
        Clicks: {counter}
    </div>
  );
}

export default App;
