import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
}) {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

PublicRoute.propTypes = {
  children: propTypes.element,
  restricted: propTypes.bool,
  redirectTo: propTypes.string,
};

export default PublicRoute;
