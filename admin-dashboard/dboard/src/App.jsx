import React from 'react';

import {RouterProvider,createBrowserRouter, Outlet} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import "./styles/global.scss";
import { Users, Login, User, Product, Products, Home } from './pages/ExportPages';
import { Navbar, Footer, Menu} from './componets/ExportCom';


const queryClient = new QueryClient();


const App = () => {
  const Layout = () =>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet/>
            </QueryClientProvider>
          </div>
        </div>
        <Footer/>
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/users',
          element:<Users/>
        },
        {
          path:'/products',
          element:<Products/>
        },
        {
          path:'/user/:id',
          element:<User/>
        },
        {
          path:'/product/:id',
          element:<Product/>
        },
       
      ]
    }, {
      path:"/login",
      element:<Login/>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App