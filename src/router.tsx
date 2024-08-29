import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Return from "./pages/Return";
import ListShipments from "./pages/ListShipments";
import DetailShipments from "./pages/DetailShipments";
import CreateShipments from "./pages/CreateShipments";
import CheckTheShipping from "./pages/CreateShipments/CheckTheShipping";
import TrackingInformation from "./pages/CreateShipments/TrackingInformation";
import SendShippingNotification from "./pages/CreateShipments/SendShippingNotification";

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
      {
        path: "/check-shipping",
        element: <CheckTheShipping />,
      },
      {
        path: "tracking-information",
        element: <TrackingInformation />,
      },
      {
        path: "send-shipping",
        element: <SendShippingNotification />
      }
    ],
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);

export default router;
