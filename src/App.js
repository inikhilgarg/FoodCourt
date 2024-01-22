import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Error from "./components/Error"
import { Outlet } from "react-router-dom"
import RestuarantMenu from "./components/RestuarantMenu"

const AppLayout=()=>{
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

const AppRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'/cart',
                element:<Cart/>,
            },
            {
                path:'/restuarants/:resId',
                element:<RestuarantMenu/>
            }
        ],
        errorElement:<Error/>
    }, 
])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={AppRouter}/>)