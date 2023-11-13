// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Services = lazy(() => import('../pages/protected/Services'))
const Team = lazy(() => import('../pages/protected/Team'))
const Products = lazy(() => import('../pages/protected/Products'))
const Orders = lazy(() => import('../pages/protected/Orders'))
const Archive = lazy(() => import('../pages/protected/Archive'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const Customers = lazy(() => import('../pages/protected/Customers'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const EditCustomerProfile = lazy(() => import('../pages/protected/EditCustomerProfile'))
const EditServiceDetails = lazy(() => import('../pages/protected/EditServiceDetails'))
const Appointments = lazy(() => import('../pages/protected/Appointments'))
const Chats = lazy(() => import('../pages/protected/Chats'))
const Reports = lazy(() => import('../pages/protected/Reports'))
const Audit = lazy(() => import('../pages/protected/Audit'))
const Inventory = lazy(() => import('../pages/protected/Inventory'))
const EditProductDetails = lazy(() => import('../pages/protected/EditProductDetails'))
const EditAppointments = lazy(() => import('../pages/protected/EditAppointments'))
const AddNewProducts = lazy(() => import('../pages/protected/AddNewProducts'))
const AddNewAppointments = lazy(() => import('../pages/protected/AddNewAppointments'))
const AddNewService = lazy(() => import('../pages/protected/AddNewService'))
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
    path: '/products',
    component: Products,
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
    path: '/edit-appointments',
    component: EditAppointments,
  },
  {
    path: '/add-new-appointments',
    component: AddNewAppointments,
  },
  {
    path: '/inventory',
    component: Inventory,
  },
  {
    path: '/archive',
    component: Archive,
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
    path: '/chats',
    component: Chats,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/services',
    component: Services,
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
    path: '/audit',
    component: Audit,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/add-new-products',
    component: AddNewProducts,
  },
  {
    path: '/add-new-service',
    component: AddNewService,
  },
]

export default routes
