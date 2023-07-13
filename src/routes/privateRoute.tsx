import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface IProps {
    children: React.ReactNode;
}

export default function privateRoute({children}: IProps) {

    const {user, isLoading} = useAppSelector((state) => state.user);

    const {pathname} = useLocation();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!user.email && !isLoading) {
        return <Navigate to="/login" state={{path: pathname}} />
    }

  return children;
}
