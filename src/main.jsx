
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layou from './Layou'
import Home from './pages/Home'

import Singup from './pages/Singup'
import Loging from './pages/Loging'


const router = createBrowserRouter([{
  path:"",
  element:<Layou/>,
  children:[{
    path:"/",
    element:<Home/>
  },
  {
    path:"loging",
    element:<Loging/>
  },{
    path:"singup",
    element:<Singup/>
  }
]
}])
createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}/>

)
