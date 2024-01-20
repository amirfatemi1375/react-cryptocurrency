import { Navigate, Outlet } from "react-router-dom";

export const GuardedRoute = ({redirectPath="/auth"}) => {
    const  isAuthenticated = true;
    debugger
    if (!isAuthenticated) {
     
     return <Navigate to={redirectPath} replace/>;
    }
    return <Outlet />
  };
  