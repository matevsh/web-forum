import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Root from './pages/root';
import Home from './pages/home';
import Profile from './pages/profile';
import Threads from './pages/threads';
import Thread from './pages/threadPage';
import threadsLoader from './loaders/home.loader';
import './public.scss';
import threadLoader from './loaders/thread.loader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: threadsLoader,
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'threads',
                element: <Threads />
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
