import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Style from './components/Style.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

import './App.css';
import Gallery from './components/Gallery.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import State from './components/State.jsx';
import Counter from './components/Counter.jsx';
import GetInputValue from './components/GetInputValue.jsx';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/style' element={<Style />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/state' element={<State />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/get-input-value' element={<GetInputValue />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
};

export default App;


// 1) React Routing
// react-router-dom
// install - npm i react-router-dom
