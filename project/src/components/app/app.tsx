import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites-page/favorites-page';
import Login from '../../pages/login-page/login-page';
import Room from '../../pages/room-page/room-page';
import NotFound from '../../pages/404-page/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppRoutes, AuthorisationStatus} from '../routes/const-routes';
import PrivateRoute from '../routes/private-route';


type MainPageProps = {
  CitiesNumber: number;
};

function App({CitiesNumber}: MainPageProps): JSX.Element {
  return(
    <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.Main} element={<MainPage CitiesNumber={CitiesNumber} />} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route 
          path={AppRoutes.Favorites} 
          element={
            <PrivateRoute 
              authorisationStatus={AuthorisationStatus.NotAuth}
              >
                <Favorites />
            </PrivateRoute>
          }
        />  
        <Route path={AppRoutes.Room} element={<Room />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
