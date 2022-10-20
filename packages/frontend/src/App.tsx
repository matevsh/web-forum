import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Root from './pages/root';
import Home from './components/home';
import Profile from './components/profile';
import Thread from './components/threads';
import threadsLoader from './loaders/home.loader';
import './public.css';

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
                path: 'thread',
                element: <Thread />
            }
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;