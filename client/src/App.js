import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Signin from './components/Signin';
import Customer from './components/Customer';
import Review from './components/Review';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="signin" element={<Signin />} />
            <Route path="customer" element={<Customer />} />
            <Route path="review" element={<Review />} />
            <Route path="panel" element={<Review />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
