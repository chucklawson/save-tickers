import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Pages/RootLayout/RootLayout'

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import HomePage from './Pages/HomePage/HomePage';
import TestPopUp from './Pages/TestPopUp/TestPopUp';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/', element: <HomePage/>},
      {path: '/testpopup', element: <TestPopUp/>},
    ]
  },

]);
function App() {


  return (
    <Authenticator>
      {({ signOut }) => (
        <>


          <div className="App">
            <RouterProvider router={router}/>
            <button onClick={signOut}>Sign out</button>
          </div>

        </>
      )
      }
    </Authenticator>
  );
}

export default App
