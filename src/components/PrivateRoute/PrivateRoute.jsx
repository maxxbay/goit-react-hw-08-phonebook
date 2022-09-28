import propTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}

PrivateRoute.propTypes = {
  children: propTypes.element,
  redirectTo: propTypes.string,
};

export default PrivateRoute;
