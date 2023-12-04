/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import { Navigate, useLocation } from 'react-router-dom';

import { queryKeys } from 'configs';
import { getCurrentUser } from 'services';

import useUserInfoStore from 'store/zustand/useUserInfoStore';

function PrivateRoute({ allowedRoles, children }) {
  const { token, role, setUserInfo } = useUserInfoStore((state) => ({
    token: state.token,
    role: state.role,
    setUserInfo: state.setUserInfo
  }));
  const location = useLocation();
  // const isAllowed = allowedRoles?.includes(role);
  // console.log(role, 'role')

  useQuery({
    queryKey: [queryKeys.currentUser],
    queryFn: getCurrentUser,
    onSuccess: (data) => {
      setUserInfo(data.data);
    }
  });
  // const authorized = allowedRoles?.includes(userInfo?.id_role.toString());

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (!authorized && allowedRoles && userInfo) {
  //     return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  // }

  return children;
}

export default PrivateRoute;
