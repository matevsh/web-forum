import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Root from './pages/root';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Thread from './pages/thread-page/threadPage';
import threadsLoader from './loaders/home.loader';
import './public.scss';
import threadLoader from './loaders/thread.loader';
import Auth from './pages/auth/auth';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import sessionLoader from './loaders/session.loader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: sessionLoader,
        children: [
            {
                index: true,
                element: <Home />,
                loader: threadsLoader,
            },
            {
                path: 'auth',
                element: <Auth />,
                children: [
                    {
                        index: true,
                        element: <Login />
                    },
                    {
                        path: 'register',
                        element: <Register />
                    }]
            },
            {
                path: 'profile/:profileId',
                element: <Profile />
            },
            {
                path: 'thread/:threadId',
                element: <Thread />,
                loader: threadLoader
            }
        ]
    }
]);

const App = () => {
    return (
        <div id="container">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
