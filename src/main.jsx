import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Payout from './Payout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import GitHub, { githubInfoLoader } from './Components/GitHub/GitHub.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Payout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        path: "GitHub",
        element: <GitHub />
      },
      {
        path:'Github',
        loader: githubInfoLoader,
        element: <GitHub /> 
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
