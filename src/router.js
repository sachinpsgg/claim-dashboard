import {createBrowserRouter} from "react-router-dom";
import Login from "./Pages/login";
import Dashboard from "./Pages/Dashboard/dashboard";
import UploadFiles from "./Pages/FileUpload";
import ViewClaim from "./Pages/ViewClaims";

export const router = createBrowserRouter([
    {
        path : 'dashboard',
        element : <Dashboard/>,
        children : [
            {
                path : 'summery',
                element : <UploadFiles/>
            },
            {
                path : 'upload',
                element : <UploadFiles/>
            },
            {
                path : 'manage-claims',
                element : <ViewClaim/>
            }
        ]


    },
    {
        path : '/',
        element : <Login/>
    },
])