import { Outlet, RouterProvider } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import '../src/styles/App.scss';
import MenuBord from "./pages/Menu";
import FeedBack from "./pages/FeedBack";
import BlogHome from "./pages/BlogHome";
import Creator from "./pages/Creator";

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
      },
      {
        path: '/menu',
        element: <MenuBord />
      },
      {
        path: '/feedBack',
        element: <FeedBack />
      }
    ]
  },
  {
    path: '/blog',
    element: <BlogHome />
  },
  {
    path: '/creator',
    element: <Creator />
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
