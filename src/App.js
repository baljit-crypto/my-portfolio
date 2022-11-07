import {BrowserRouter, Routes, Route} from 'react-router-dom';

// jsx links
import Homepage from './app/pages/Homepage';


// css links
import './App.css';
import './app/pages/homepage.css';
import './app/components/header.css';
import './app/components/navbar.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
