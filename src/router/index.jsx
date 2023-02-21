import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom/dist";
import ClientLanding from "../features/client/pages/ClientLanding";
import ClientLayout from "../features/client/layouts/ClientLayout";
import AdminLayout from "../features/admin/layouts/AdminLayout";
import AdminLanding from "../features/admin/pages/AdminLanding/index.jsx";

function getClientRoutes() {
  return [<Route path="/subscriptions" element={<h3>Subscriptions</h3>} />];
}

function getAdminRoutes() {
  return [<Route path="/admin/restaurants" element={<h3>Restaurants</h3>} />];
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<ClientLanding />} />
        {...getClientRoutes()}
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminLanding />} />
        {...getAdminRoutes()}
      </Route>
    </>
  )
);

export default router;
