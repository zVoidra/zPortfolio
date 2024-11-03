import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Routes/MyPortfolio/MyPortfolio";
import MyProjects from "./Routes/MyProjects/MyProjects";
import MyInterests from "./Routes/MyInterests/MyInterests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <MyProjects /> },
      { path: "/interests", element: <MyInterests /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
