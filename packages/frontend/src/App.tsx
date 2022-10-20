import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes} from 'react-router-dom';
import Root from './pages/root';
import Home from './components/home';
import Profile from './components/profile';
import Thread from './components/thread';
import './public.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
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
