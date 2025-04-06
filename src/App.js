import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Serivces from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import Led from "./components/Led";
import TeaCup from "./components/TeaCup";
import DigitalMarketing from "./components/DigitalMarketing";
import WebsiteBuilding from "./components/WebsiteBuilding";
import AdOnWheels from "./components/AdOnWheels";
import AdFilms from "./components/AdFilms";
import ScrollToTop from "./components/ScrollToTop"; // Make sure this file exists
import WhatsAppFloatingIcon from "./components/WhatsAppFloatingIcon";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />

        <WhatsAppFloatingIcon />
      </div>
    </ThemeProvider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "services", element: <Serivces /> },
      { path: "services/led", element: <Led /> },
      { path: "services/tea_cup", element: <TeaCup /> },
      { path: "services/digital_marketing", element: <DigitalMarketing /> },
      { path: "services/website_building", element: <WebsiteBuilding /> },
      { path: "services/ad_on_wheels", element: <AdOnWheels /> },
      { path: "services/ad_films", element: <AdFilms /> },
      { path: "services/contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default App;
