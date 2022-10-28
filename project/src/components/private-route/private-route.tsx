import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorisationStatus } from '../../mocks/consts';

type PrivateRouteProps = {
    authorisationStatus: AuthorisationStatus;
    children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorisationStatus, children } = props;

  return (
    authorisationStatus === AuthorisationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.Login} />
  );
}

export default PrivateRoute;
