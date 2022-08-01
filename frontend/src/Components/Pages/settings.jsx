// import SettingsLogo from "../../images/SettingsLogo.PNG"

// import { Fragment, useState } from 'react'
// import { Dialog, Switch, Transition } from '@headlessui/react'
// import {
//   BellIcon,
//   BriefcaseIcon,
//   ChatIcon,
//   CogIcon,
//   DocumentSearchIcon,
//   HomeIcon,
//   MenuAlt2Icon,
//   QuestionMarkCircleIcon,
//   UsersIcon,
//   XIcon,
// } from '@heroicons/react/outline'
// import { SearchIcon } from '@heroicons/react/solid'

// const navigation = [
//   { name: 'Home', href: '#', icon: HomeIcon, current: false },
//   { name: 'Jobs', href: '#', icon: BriefcaseIcon, current: false },
//   { name: 'Applications', href: '#', icon: DocumentSearchIcon, current: false },
//   { name: 'Messages', href: '#', icon: ChatIcon, current: false },
//   { name: 'Team', href: '#', icon: UsersIcon, current: false },
//   { name: 'Settings', href: '#', icon: CogIcon, current: true },
// ]
// const secondaryNavigation = [
//   { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
//   { name: 'Logout', href: '#', icon: CogIcon },
// ]
// const tabs = [
//   { name: 'General', href: '#', current: true },
//   { name: 'Password', href: '#', current: false },
//   { name: 'Notifications', href: '/', current: false },
//   { name: 'Plan', href: '#', current: false },
//   { name: 'Billing', href: '#', current: false },
//   { name: 'Team Members', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
//   const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)

//   return (
//     <>
//       {/*
//         This example requires updating your template:
//         ```
//         <html class="h-full bg-white">
//         <body class="h-full">
//         ```
//       */}
//       <div>
//         <Transition.Root show={sidebarOpen} as={Fragment}>
//           <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
//             <Transition.Child
//               as={Fragment}
//               enter="transition-opacity ease-linear duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="transition-opacity ease-linear duration-300"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
//             </Transition.Child>

//             <div className="fixed inset-0 z-40 flex">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transition ease-in-out duration-300 transform"
//                 enterFrom="-translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transition ease-in-out duration-300 transform"
//                 leaveFrom="translate-x-0"
//                 leaveTo="-translate-x-full"
//               >
//                 <Dialog.Panel className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
//                   <Transition.Child
//                     as={Fragment}
//                     enter="ease-in-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in-out duration-300"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                   >
//                     <div className="absolute top-0 right-0 -mr-14 p-1">
//                       <button
//                         type="button"
//                         className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-600"
//                         onClick={() => setSidebarOpen(false)}
//                       >
//                         <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
//                         <span className="sr-only">Close sidebar</span>
//                       </button>
//                     </div>
//                   </Transition.Child>
//                   <div className="flex-shrink-0 px-4 flex items-center">
//                     <img
//                       className="h-8 w-auto"
//                       src={SettingsLogo}
//                       alt="Holiday Planet"
//                     />
//                   </div>
//                   <div className="mt-5 flex-1 h-0 overflow-y-auto">
//                     <nav className="h-full flex flex-col">
//                       <div className="space-y-1">
//                         {navigation.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className={classNames(
//                               item.current
//                                 ? 'bg-purple-50 border-purple-600 text-purple-600'
//                                 : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
//                               'group border-l-4 py-2 px-3 flex items-center text-base font-medium'
//                             )}
//                             aria-current={item.current ? 'page' : undefined}
//                           >
//                             <item.icon
//                               className={classNames(
//                                 item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500',
//                                 'mr-4 flex-shrink-0 h-6 w-6'
//                               )}
//                               aria-hidden="true"
//                             />
//                             {item.name}
//                           </a>
//                         ))}
//                       </div>
//                       <div className="mt-auto pt-10 space-y-1">
//                         {secondaryNavigation.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className="group border-l-4 border-transparent py-2 px-3 flex items-center text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
//                           >
//                             <item.icon
//                               className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
//                               aria-hidden="true"
//                             />
//                             {item.name}
//                           </a>
//                         ))}
//                       </div>
//                     </nav>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//               <div className="flex-shrink-0 w-14" aria-hidden="true">
//                 {/* Dummy element to force sidebar to shrink to fit close icon */}
//               </div>
//             </div>
//           </Dialog>
//         </Transition.Root>

//         {/* Static sidebar for desktop */}
//         <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
//           {/* Sidebar component, swap this element with another sidebar if you like */}
//           <nav className="bg-gray-50 border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
//             <div className="flex-shrink-0 px-4 flex items-center">
//               <img
//                 className="h-12 w-auto mx-auto"
//                 src={SettingsLogo}
//                 alt="Holiday Planet"
//               />
//             </div>
//             <div className="flex-grow mt-5">
//               <div className="space-y-1">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className={classNames(
//                       item.current
//                         ? 'bg-purple-50 border-purple-600 text-purple-600'
//                         : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50',
//                       'group border-l-4 py-2 px-3 flex items-center text-sm font-medium'
//                     )}
//                   >
//                     <item.icon
//                       className={classNames(
//                         item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500',
//                         'mr-3 flex-shrink-0 h-6 w-6'
//                       )}
//                       aria-hidden="true"
//                     />
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//             <div className="flex-shrink-0 block w-full">
//               {secondaryNavigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="group border-l-4 border-transparent py-2 px-3 flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
//                 >
//                   <item.icon className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" aria-hidden="true" />
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </nav>
//         </div>

//         {/* Content area */}
//         <div className="md:pl-64">
//           <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
//             <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
//               <button
//                 type="button"
//                 className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden"
//                 onClick={() => setSidebarOpen(true)}
//               >
//                 <span className="sr-only">Open sidebar</span>
//                 <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
//               </button>
//               <div className="flex-1 flex justify-between px-4 md:px-0">
//                 <div className="flex-1 flex">
//                   <form className="w-full flex md:ml-0" action="#" method="GET">
//                     <label htmlFor="mobile-search-field" className="sr-only">
//                       Search
//                     </label>
//                     <label htmlFor="desktop-search-field" className="sr-only">
//                       Search
//                     </label>
//                     <div className="relative w-full text-gray-400 focus-within:text-gray-600">
//                       <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
//                         <SearchIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
//                       </div>
//                       <input
//                         name="mobile-search-field"
//                         id="mobile-search-field"
//                         className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
//                         placeholder="Search"
//                         type="search"
//                       />
//                       <input
//                         name="desktop-search-field"
//                         id="desktop-search-field"
//                         className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
//                         placeholder="Search jobs, applicants, and more"
//                         type="search"
//                       />
//                     </div>
//                   </form>
//                 </div>
//                 <div className="ml-4 flex items-center md:ml-6">
//                   <button
//                     type="button"
//                     className="bg-white rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                   >
//                     <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     <span className="sr-only">View notifications</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <main className="flex-1">
//               <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
//                 <div className="pt-10 pb-16">
//                   <div className="px-4 sm:px-6 md:px-0">
//                     <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
//                   </div>
//                   <div className="px-4 sm:px-6 md:px-0">
//                     <div className="py-6">
//                       {/* Tabs */}
//                       <div className="lg:hidden">
//                         <label htmlFor="selected-tab" className="sr-only">
//                           Select a tab
//                         </label>
//                         <select
//                           id="selected-tab"
//                           name="selected-tab"
//                           className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
//                           defaultValue={tabs.find((tab) => tab.current).name}
//                         >
//                           {tabs.map((tab) => (
//                             <option key={tab.name}>{tab.name}</option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="hidden lg:block">
//                         <div className="border-b border-gray-200">
//                           <nav className="-mb-px flex space-x-8">
//                             {tabs.map((tab) => (
//                               <a
//                                 key={tab.name}
//                                 href={tab.href}
//                                 className={classNames(
//                                   tab.current
//                                     ? 'border-purple-500 text-purple-600'
//                                     : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
//                                   'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
//                                 )}
//                               >
//                                 {tab.name}
//                               </a>
//                             ))}
//                           </nav>
//                         </div>
//                       </div>

//                       {/* Description list with inline editing */}
//                       <div className="mt-10 divide-y divide-gray-200">
//                         <div className="space-y-1">
//                           <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
//                           <p className="max-w-2xl text-sm text-gray-500">
//                             This information will be displayed publicly so be careful what you share.
//                           </p>
//                         </div>
//                         <div className="mt-6">
//                           <dl className="divide-y divide-gray-200">
//                             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
//                               <dt className="text-sm font-medium text-gray-500">Name</dt>
//                               <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                                 <span className="flex-grow">Chelsea Hagon</span>
//                                 <span className="ml-4 flex-shrink-0">
//                                   <button
//                                     type="button"
//                                     className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                                   >
//                                     Update
//                                   </button>
//                                 </span>
//                               </dd>
//                             </div>
//                             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
//                               <dt className="text-sm font-medium text-gray-500">Photo</dt>
//                               <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                                 <span className="flex-grow">
//                                   <img
//                                     className="h-8 w-8 rounded-full"
//                                     src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                     alt=""
//                                   />
//                                 </span>
//                                 <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
//                                   <button
//                                     type="button"
//                                     className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                                   >
//                                     Update
//                                   </button>
//                                   <span className="text-gray-300" aria-hidden="true">
//                                     |
//                                   </span>
//                                   <button
//                                     type="button"
//                                     className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                                   >
//                                     Remove
//                                   </button>
//                                 </span>
//                               </dd>
//                             </div>
//                             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
//                               <dt className="text-sm font-medium text-gray-500">Email</dt>
//                               <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                                 <span className="flex-grow">chelsea.hagon@example.com</span>
//                                 <span className="ml-4 flex-shrink-0">
//                                   <button
//                                     type="button"
//                                     className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                                   >
//                                     Update
//                                   </button>
//                                 </span>
//                               </dd>
//                             </div>
//                             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
//                               <dt className="text-sm font-medium text-gray-500">Job title</dt>
//                               <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                                 <span className="flex-grow">Human Resources Manager</span>
//                                 <span className="ml-4 flex-shrink-0">
//                                   <button
//                                     type="button"
//                                     className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                                   >
//                                     Update
//                                   </button>
//                                 </span>
//                               </dd>
//                             </div>
//                           </dl>
//                         </div>
//                       </div>

//                       <div className="mt-10 divide-y divide-gray-200">
//                         <div className="space-y-1">
//                           <h3 className="text-lg leading-6 font-medium text-gray-900">Account</h3>
//                           <p className="max-w-2xl text-sm text-gray-500">
//                             Manage how information is displayed on your account.
//                           </p>
//                         </div>
//                         <div className="mt-6">
//                           <dl className="divide-y divide-gray-200">
//                             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
//                               <dt className="text-sm font-medium text-gray-500">Language</dt>
//                               <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                                 <span className="flex-grow">English</span>
//                                 <span className="ml-4 flex-shrink-0">
//                                   <button
//                                     type="button"
//                                     className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                                   >
//                                     Update
//                                   </button>
//                                 </span>
//                               </dd>
//                             </div>
//                             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
//                               <dt className="text-sm font-medium text-gray-500">Date format</dt>
//                               <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                                 <span className="flex-grow">DD-MM-YYYY</span>
//                                 <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
//                                   <button
//                                     type="button"
//                                     className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                                   >
//                                     Update
//                                   </button>
//                                   <span className="text-gray-300" aria-hidden="true">
//                                     |
//                                   </span>
//                                   <button
//                                     type="button"
//                                     className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                                   >
//                                     Remove
//                                   </button>
//                                 </span>
//                               </dd>
//                             </div>
//                             <Switch.Group as="div" className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
//                               <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
//                                 Automatic timezone
//                               </Switch.Label>
//                               <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                                 <Switch
//                                   checked={automaticTimezoneEnabled}
//                                   onChange={setAutomaticTimezoneEnabled}
//                                   className={classNames(
//                                     automaticTimezoneEnabled ? 'bg-purple-600' : 'bg-gray-200',
//                                     'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto'
//                                   )}
//                                 >
//                                   <span
//                                     aria-hidden="true"
//                                     className={classNames(
//                                       automaticTimezoneEnabled ? 'translate-x-5' : 'translate-x-0',
//                                       'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
//                                     )}
//                                   />
//                                 </Switch>
//                               </dd>
//                             </Switch.Group>
//                             <Switch.Group
//                               as="div"
//                               className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
//                             >
//                               <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
//                                 Auto-update applicant data
//                               </Switch.Label>
//                               <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                                 <Switch
//                                   checked={autoUpdateApplicantDataEnabled}
//                                   onChange={setAutoUpdateApplicantDataEnabled}
//                                   className={classNames(
//                                     autoUpdateApplicantDataEnabled ? 'bg-purple-600' : 'bg-gray-200',
//                                     'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto'
//                                   )}
//                                 >
//                                   <span
//                                     aria-hidden="true"
//                                     className={classNames(
//                                       autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
//                                       'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
//                                     )}
//                                   />
//                                 </Switch>
//                               </dd>
//                             </Switch.Group>
//                           </dl>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { Fragment, useState } from 'react'
import { Disclosure} from '@headlessui/react'
// import { SearchIcon } from '@heroicons/react/solid'
import {
//   BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
//   MenuIcon,
  UserCircleIcon,
//   ViewGridAddIcon,
//   XIcon,
} from '@heroicons/react/outline'

const user = {
  name: 'Debbie Lewis',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}

const subNavigation = [
  { name: 'Profile', href: '/settings', icon: UserCircleIcon, current: true },
  { name: 'Account', href: '#', icon: CogIcon, current: false },
  { name: 'Password', href: '/emailCode', icon: KeyIcon, current: false },
//   { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
//   { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  return (
    <div>
      <Disclosure as="div" className="relative bg-[#76C0FA] pb-32 overflow-hidden">
        
      </Disclosure>

      <main className="relative -mt-32">
        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
                <nav className="space-y-1">
                  {subNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700'
                          : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                        'group border-l-4 px-3 py-2 flex items-center text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-teal-500 group-hover:text-teal-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </aside>

              <form className="divide-y divide-gray-200 lg:col-span-9" action="" method="POST">
                {/* Profile section */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm text-gray-500">
                     Update Your Profile Section.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col lg:flex-row justify-center">
                   

                    <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                      <p className="text-sm font-medium text-gray-700" aria-hidden="true">
                        
                      </p>
                      <div className="mt-1 lg:hidden">
                        <div className="flex items-center ">
                          <div
                            className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12 "
                            aria-hidden="true"
                          >
                            <img className="rounded-full h-full w-full" src={user.imageUrl} alt="" />
                          </div>
                          <div className="ml-5 rounded-md shadow-sm">
                            <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                              <label
                                htmlFor="mobile-user-photo"
                                className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                id="mobile-user-photo"
                                name="user-photo"
                                type="file"
                                className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hidden relative rounded-full overflow-hidden lg:block">
                        <img className="relative rounded-full w-40 h-40" src={user.imageUrl} alt="" />
                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>

                    {/* <div className="col-span-12">
                      <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                        URL
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div> */}

                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="number"
                        name="tel"
                        id="tel"
                        autoComplete="tel"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Privacy section */}
                <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                    <button
                      type="button"
                      className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-5 bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                      Save
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
