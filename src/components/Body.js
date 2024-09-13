import React from 'react'
import Login from './login'
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {

    const appRounter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);


  return (
    <div>
        <RouterProvider router={appRounter} />
    </div>
  )
}

export default Body;