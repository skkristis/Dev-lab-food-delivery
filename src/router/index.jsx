import React from 'react';
import { createBrowserRouter } from 'react-router-dom/dist';
import ClientLanding from '../features/client/pages/ClientLanding';
import ClientLayout from '../features/client/layouts/ClientLayout';
import AdminLayout from '../features/admin/layouts/AdminLayout';
import AdminLanding from '../features/admin/pages/AdminLanding/index';

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

const router = createBrowserRouter(
  [
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
  ]
  // createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<ClientLayout />}>
  //       <Route index element={<ClientLanding />} />
  //       {...getClientRoutes()}
  //     </Route>
  //     <Route path="/admin" element={<AdminLayout />}>
  //       <Route index element={<AdminLanding />} />
  //       {...getAdminRoutes()}
  //     </Route>
  //   </>
  // )
);

export default router;
