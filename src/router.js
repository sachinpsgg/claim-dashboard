import {createBrowserRouter} from "react-router-dom";
import Login from "./Pages/login";
import Dashboard from "./Pages/Dashboard/dashboard";
import UploadFiles from "./Pages/FileUpload";
import ViewClaim from "./Pages/ViewClaims";
import ClaimForm from "./Pages/ClaimForm";

export const router = createBrowserRouter([
    {
        path : 'dashboard',
        element : <Dashboard/>,
        children : [
            {
                path : 'summery',
                element : <h1>Summery Page</h1>
            },
            {
                path : 'upload',
                element : <UploadFiles/>
            },
            {
                path : 'manage-claims',
                element : <ViewClaim/>
            },
            {
                path : 'view-era',
                element : <h1>View ERA Page</h1>
            },
            {
                path : 'reporting',
                element : <h1>Reporting Page</h1>
            },
            {
                path : 'eligibility',
                element : <h1>Eligibility Page</h1>
            },
            {
                path : 'search',
                element : <h1>Search Page</h1>
            }
        ]
    },
    {
        path : '/',
        element : <Login />
    },
])