
import { createBrowserRouter } from 'react-router-dom';

import { Home } from './Screens/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default router;
