import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom/dist";
import ClientLanding from "../features/client/pages/ClientLanding/index.jsx";
import AdminLanding from "../features/admin/pages/AdminLanding/index.jsx";
import ClientLayout from "../features/client/layouts/ClientLayout/index.jsx";

function getClientRoutes() {
  return <Route path="subscriptions" element={<h3>Subscriptions</h3>} />;
}

function getAdminRoutes() {
  return <Route path="restaurants" element={<h3>Restaurants</h3>} />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ClientLayout />}>
      <Route index element={<ClientLanding />} />
      {getClientRoutes()}
      <Route path="admin" element={<AdminLanding />}>
        {getAdminRoutes()}
      </Route>
    </Route>
  )
);

export default router;
