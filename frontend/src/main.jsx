import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ListView from './pages/list-view-page.jsx'
import FaqPage from './pages/faq-page.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/css/index.css'; // Adjust path if needed

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/list-view',
    element: <ListView />,
  },
  {
    path: '/faq',
    element: <FaqPage />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
