import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ListView from "./pages/list-view-page.jsx";
import FaqPage from "./pages/faq-page.jsx";
import Login from "./pages/login-page.jsx";
import Signup from "./pages/signup-page.jsx";
import UserProfile from './pages/user-profile-page.jsx'
import LandingPage from "./pages/landing-page.jsx";
import PredictiveAnalytics from './pages/predictive-analytics.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/css/index.css"; // Adjust path if needed

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list-view",
    element: <ListView />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: '/user-profile',
    element: <UserProfile />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: '/predictive-analytics',
    element: <PredictiveAnalytics />,
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
