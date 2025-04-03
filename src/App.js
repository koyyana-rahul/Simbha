import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Serivces from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Serivces />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
export default App;
