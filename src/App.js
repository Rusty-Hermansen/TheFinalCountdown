import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from ',.pages/Home'
import { About} from './pages/About'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path='/about' index element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
