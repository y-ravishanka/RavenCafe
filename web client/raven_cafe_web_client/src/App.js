import { Outlet, RouterProvider } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const Layout = () => {
  return (
    <div className="app">
      <div className="navBar"><NavBar /></div>
      <div className="bobyContent"><Outlet /></div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
