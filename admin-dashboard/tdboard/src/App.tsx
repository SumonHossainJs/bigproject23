import { Menu, Footer,Navbar } from "./components/Export";
import { Home, Users, Products, User, Product,Login } from "./pages/Export";
import './Styles/Globals.scss';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

const App = () =>{
    const Layout = () =>{
        return (
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
    }

    const router = createBrowserRouter ([
        {
            path:'/',
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
                    path:'/user/:id',
                    element:<User/>
                },
                {
                    path:'/products',
                    element:<Products/>
                },
                {
                    path:"/product/:id",
                    element:<Product/>
                }
            ]
        },
        {
            path:'/login',
            element:<Login/>
        }
    ]);
    return <RouterProvider router={router}/>
}

export default App;
