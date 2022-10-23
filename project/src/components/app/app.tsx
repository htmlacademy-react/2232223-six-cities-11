import MainPage from '../../pages/main-page/main-page';

type MainPageProps = {
  CitiesNumber: number;
};

function App({CitiesNumber}: MainPageProps): JSX.Element {
  return(
    <MainPage CitiesNumber={CitiesNumber}/>
  );
}

export default App;
