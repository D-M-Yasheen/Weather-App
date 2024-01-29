import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { YourWeatherPage } from './pages/YourWeatherPage';
import { SearchPage } from './pages/SearchPage';
import { PrivateRoute } from './components/PrivateRoute';
import { Heading } from './components/Heading';
import { Tab } from './components/Tab';

function App() {
  return (
    <div className="App overflow-hidden w-screen h-screen pt-4
    flex flex-col items-center text-white bg-image space-y-10">

      <Heading />
      
      <Tab />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/your-weather" element={
          <PrivateRoute>
            <YourWeatherPage />
          </PrivateRoute>
        } />
        <Route path="/search-weather" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
