import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import ContentArea from './Components/ContentArea/ContentArea'
// import NavigationMenu from './Components/NavigationMenu/NavigationMenu'
import Layout from "./Components/Layout/Layout";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
