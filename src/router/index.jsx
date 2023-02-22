import { createBrowserRouter } from 'react-router-dom/dist';
import ClientLanding from '../features/client/pages/ClientLanding';
import ClientLayout from '../features/client/layouts/ClientLayout';
import AdminLayout from '../features/admin/layouts/AdminLayout';
import AdminLanding from '../features/admin/pages/AdminLanding/index';
import RestaurantInspect from '../features/client/pages/RestaurantInspect';
import CouriersDashboard from '../features/admin/components/CouriersDashboard/CouriersDashboard';
import { BiRestaurant, BiCar, FiHome } from 'react-icons/all.js';

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

export function getAdminRoutes() {
  return [
    {
      element: <AdminLanding />,
      index: true,
      navItemName: 'Dashboard',
      navItemIcon: FiHome,
    },
    {
      path: '/admin/restaurants',
      element: <h3>Restaurants</h3>,
      navItemName: 'Restaurants',
      navItemIcon: BiRestaurant,
    },
    {
      path: '/admin/couriers',
      element: <CouriersDashboard />,
      navItemName: 'Couriers',
      navItemIcon: BiCar,
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
