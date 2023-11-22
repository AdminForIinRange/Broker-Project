import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Main from './pages/Home/Main.jsx'
import Services from './pages/AboutUs/Services.jsx'
import LoginSignup from './pages/Login/LoginSignup.jsx'
import WatchList from './pages/WatchList/WatchList.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Account from './pages/Account/Account.jsx'



// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout  />}>
      <Route index element={<Main />} />
      <Route path="Services" element={<Services />} />
      <Route path="Login/Signup" element={<LoginSignup />} />
       <Route path="WatchList" element={<WatchList />} />
       <Route path="Dashboard" element={<Dashboard />} />
       <Route path="Account" element={<Account />}/>
  
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App