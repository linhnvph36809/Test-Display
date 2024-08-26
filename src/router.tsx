import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Return from "./pages/Return";
import ListShipments from "./pages/ListShipments";
import DetailShipments from "./pages/DetailShipments";
import CreateShipments from "./pages/CreateShipments";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/return",
        element: <Return />,
      },
      {
        path: "/list-shipments",
        element: <ListShipments />,
      },
      {
        path: "/detail-shipments",
        element: <DetailShipments />,
      },
      {
        path: "/create-shipments",
        element: <CreateShipments />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);

export default router;
