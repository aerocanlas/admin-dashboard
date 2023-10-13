/** Icons are imported separatly to reduce build time */

import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon.js'
import RectangleStackIcon from '@heroicons/react/24/outline/RectangleStackIcon'
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon'
import PresentationChartLineIcon from '@heroicons/react/24/outline/PresentationChartLineIcon'
import ClipboardDocumentCheckIcon from '@heroicons/react/24/outline/ClipboardDocumentCheckIcon'
import ArrowLeftOnRectangleIcon from '@heroicons/react/24/outline/ArrowLeftOnRectangleIcon'
import ClockIcon from '@heroicons/react/24/outline/ClockIcon'
import PresentationChartBarIcon from '@heroicons/react/24/outline/PresentationChartBarIcon'
import ListBulletIcon from '@heroicons/react/24/outline/ListBulletIcon'
import ArchiveBoxIcon from '@heroicons/react/24/outline/ArchiveBoxIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/leads', // url
    icon: <UserGroupIcon className={iconClasses}/>, // icon component
    name: 'Customer Profile', // name that appear in Sidebar
  },
  {
    path: '/app/transactions', // url
    icon: <RectangleStackIcon className={iconClasses}/>, // icon component
    name: 'Product Management', // name that appear in Sidebar
  },
  {
    path: '/app/calendar', // url
    icon: <CalendarDaysIcon className={iconClasses}/>, // icon component
    name: 'Service Management', // name that appear in Sidebar
  },
  {
    path: '/app/settings-billing', // url
    icon: <ShoppingBagIcon className={iconClasses}/>, // icon component
    name: 'Orders', // name that appear in Sidebar
  },
  {
    path: '/app/appointments', // url
    icon: <ClockIcon className={iconClasses}/>, // icon component
    name: 'Appointments', // name that appear in Sidebar
  },
  {
    path: '', // url
    icon: <PresentationChartLineIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Reports', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/reports', //url
        icon: <PresentationChartBarIcon className={submenuIconClasses}/>, // icon component
        name: 'Generate Reports', // name that appear in Sidebar
      },
      {
        path: '/app/reports', //url
        icon: <ListBulletIcon className={submenuIconClasses}/>, // icon component
        name: 'Audit Logs', // name that appear in Sidebar
      },
      {
        path: '/app/reports', //url
        icon: <ArchiveBoxIcon className={submenuIconClasses}/>, // icon component
        name: 'Report Archive', // name that appear in Sidebar
      },

    ]
  },
  {
    path: '/app/inventory', // url
    icon: <ClipboardDocumentCheckIcon className={iconClasses}/>, // icon component
    name: 'Inventory', // name that appear in Sidebar
  },
  
  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Pages', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/login',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
  //       name: 'Login',
  //     },
  //     {
  //       path: '/register', //url
  //       icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Register', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/forgot-password',
  //       icon: <KeyIcon className={submenuIconClasses}/>,
  //       name: 'Forgot Password',
  //     },
  //     {
  //       path: '/app/blank',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Blank Page',
  //     },
  //     {
  //       path: '/app/404',
  //       icon: <ExclamationTriangleIcon className={submenuIconClasses}/>,
  //       name: '404',
  //     },
  //   ]
  // },

  {
    path: '', //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Settings', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/settings-profile', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'View Admin Account', // name that appear in Sidebar
      },
      // {
      //   path: '/app/settings-billing',
      //   icon: <WalletIcon className={submenuIconClasses}/>,
      //   name: 'Billing',
      // },
      // {
      //   path: '/app/settings-team', // url
      //   icon: <UsersIcon className={submenuIconClasses}/>, // icon component
      //   name: 'Team Members', // name that appear in Sidebar
      // },
    ]
  },

  {
    path: '/app/login', // url
    icon: <ArrowLeftOnRectangleIcon className={iconClasses}/>, // icon component
    name: 'Logout', // name that appear in Sidebar
  },

  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentTextIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Documentation', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/app/getting-started', // url
  //       icon: <DocumentTextIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Getting Started', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/features',
  //       icon: <TableCellsIcon className={submenuIconClasses}/>, 
  //       name: 'Features',
  //     },
  //     {
  //       path: '/app/components',
  //       icon: <CodeBracketSquareIcon className={submenuIconClasses}/>, 
  //       name: 'Components',
  //     }
  //   ]
  // },
  
]

export default routes


