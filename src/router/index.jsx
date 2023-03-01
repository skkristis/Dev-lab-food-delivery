import React from 'react';
import { createHashRouter } from 'react-router-dom/dist';
import ClientLanding from '../features/client/pages/ClientLanding';
import ClientLayout from '../features/client/layouts/ClientLayout';
import AdminLayout from '../features/admin/layouts/AdminLayout';
import RestaurantInspect from '../features/client/pages/RestaurantInspect';
import Subscriptions from '../features/client/pages/Subscriptions';
import CouriersDashboard from '../features/admin/components/CouriersDashboard/CouriersDashboard';
import RestaurantDashboard from '../features/admin/components/RestaurantDashboard/RestaurantDashboard';
import { BiRestaurant, BiCar } from 'react-icons/all.js';
import CourierRegisterLanding from '../features/client/pages/CourierRegisterLanding';
import { restaurantInspectMock } from '../features/client/mocks/restaurantInspectMock';
import CustomerOrderStatus from '../features/client/components/CustomerOrderStatus/CustomerOrderStatus';

function getClientRoutes() {
  return [
    {
      element: <ClientLanding />,
      index: true,
    },
    {
      path: '/subscriptions',
      element: <Subscriptions />,
    },
    {
      path: '/restaurants/:id',
      loader: async () => {
        return restaurantInspectMock;
      },
      element: <RestaurantInspect />,
    },
    {
      path: '*',
      element: <ClientLanding />,
    },
    {
      path: '/courier',
      element: <CourierRegisterLanding />,
    },
    {
      path: '/order-status',
      element: <CustomerOrderStatus />,
    },
  ];
}

export function getAdminRoutes() {
  return [
    // {
    //   element: <AdminLanding />,
    //   index: true,
    //   loader: () => {
    //     return redirect('/admin/restaurants');
    //   },
    //   navItemName: 'Dashboard',
    //   navItemIcon: FiHome,
    // },
    //return after mvp
    {
      path: '/admin',
      element: <RestaurantDashboard />,
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

const router = createHashRouter([
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
