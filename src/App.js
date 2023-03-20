import { Route , Routes } from 'react-router-dom'
import WeatherSavePage from './pages/WeatherSearchPage'
import WeatherHomePage from './pages/weatherHomePage'
import WeatherSearchPage from './pages/WeatherSavePage'
import './App.css';
import MainLayout from './layouts/MainLayout'

function App() {
  
  return (
    <div className="App">
      <MainLayout>
      <Routes>
        <Route path='/' element={<WeatherHomePage />}></Route>
        <Route path='/courses' element={<WeatherSavePage />}></Route>
        <Route path='/students' element={<WeatherSearchPage />}></Route>
      </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
