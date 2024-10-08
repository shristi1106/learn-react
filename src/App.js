import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


//chunking/code spliiting/ dyanamic bundling/ lazy loading/ dynamic import
const Grocery = lazy(() => { './components/Grocery' });

const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId", //resid is dyanamic(with the help of resid it will goes on diff diff cards)
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);