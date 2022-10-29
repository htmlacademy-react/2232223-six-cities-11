import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const NotFound = (): JSX.Element => (
  <Fragment>
    <img
      src='img/404.png'
      height='580'
      width='720'
      alt="Page not found"
    />
    <Link to='/'>Go to Main page</Link>
  </Fragment>
);

export default NotFound;
