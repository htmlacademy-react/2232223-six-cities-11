import MainPage from '../../pages/main-page/main-page';


type MainPageProps = {
  CitiesNumber: number;
};

function App({ CitiesNumber }: MainPageProps): JSX.Element {
  return (
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
