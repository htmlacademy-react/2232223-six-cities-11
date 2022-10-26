import {Link} from 'react-router-dom';
import {Fragment} from 'react';

function NotFound(): JSX.Element {
    return (
        <Fragment>
          <img src='img/404.png' height='580' width='720' />
          <Link to='/'>Go to Main page</Link>   
        </Fragment>
    );
}

export default NotFound;
