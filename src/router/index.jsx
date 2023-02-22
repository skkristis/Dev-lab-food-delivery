import { createBrowserRouter } from 'react-router-dom/dist';
import ClientLanding from '../features/client/pages/ClientLanding';
import ClientLayout from '../features/client/layouts/ClientLayout';
import AdminLayout from '../features/admin/layouts/AdminLayout';
import AdminLanding from '../features/admin/pages/AdminLanding/index.jsx';
import RestaurantInspect from '../features/client/pages/RestaurantInspect';

function getClientRoutes() {
  return [
    {
      element: <ClientLanding />,
      index: true,
    },
    {
      path: '/subscriptions',
      element: <h3>Test</h3>,
    },
    ,
    { path: '/restaurantinspect', element: <RestaurantInspect /> },
  ];
}

function getAdminRoutes() {
  return [
    {
      element: <AdminLanding />,
      index: true,
    },
    {
      path: '/admin/restaurants',
      element: <h3>Restaurants</h3>,
    },
  ];
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,
    children: getClientRoutes(),
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: getAdminRoutes(),
  },
]);

export default router;
