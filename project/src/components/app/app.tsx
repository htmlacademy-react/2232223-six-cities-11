import MainPage from '../../pages/main-page';
import Favorites from '../../pages/favorites-page';
import Login from '../../pages/login-page';
import Room from '../../pages/room-page';
import NotFound from '../../pages/404-page';
import { AppRoutes, AuthorisationStatus } from '../../consts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../private-route';


type AppProps = {
  citiesNumber: number;
};

function App({ citiesNumber }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage CitiesNumber={citiesNumber} />} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute
              authorisationStatus={AuthorisationStatus.Auth}
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
