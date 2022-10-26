import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites-page/favorites-page';
import Login from '../../pages/login-page/login-page';
import Room from '../../pages/room-page/room-page';
import NotFound from '../../pages/404-page/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



type MainPageProps = {
  CitiesNumber: number;
};

function App({CitiesNumber}: MainPageProps): JSX.Element {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage CitiesNumber={CitiesNumber} />} />
        <Route path='login' element={<Login />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='room' element={<Room />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
