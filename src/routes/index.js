// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Orders = lazy(() => import('../pages/protected/Orders'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const Customers = lazy(() => import('../pages/protected/Customers'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const EditCustomerProfile = lazy(() => import('../pages/protected/EditCustomerProfile'))
const EditServiceDetails = lazy(() => import('../pages/protected/EditServiceDetails'))
const Appointments = lazy(() => import('../pages/protected/Appointments'))
const Reports = lazy(() => import('../pages/protected/Reports'))
const Inventory = lazy(() => import('../pages/protected/Inventory'))
const EditProductDetails = lazy(() => import('../pages/protected/EditProductDetails'))
const Login = lazy(() => import('../pages/Login'))

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/customers',
    component: Customers,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/edit-product-details',
    component: EditProductDetails,
  },
  {
    path: '/edit-service-details',
    component: EditServiceDetails,
  },
  {
    path: '/inventory',
    component: Inventory,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/edit-customer-profile',
    component: EditCustomerProfile,
  },
  {
    path: '/appointments',
    component: Appointments,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/reports',
    component: Reports,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/login',
    component: Login,
  },
]

export default routes
