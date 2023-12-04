import { lazy } from 'react';

// project import
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <CommonLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
      ]
    }
  ]
};

export default LoginRoutes;
