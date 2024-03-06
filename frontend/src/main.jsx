import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import Calendar from './components/Calendar/Calendar.jsx'
import Ask from './components/Chat/Chat.jsx'
import Resources from './components/Resources/Resources.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Companies from './components/Companies/Companies.jsx'
import './index.css'
import Layout from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='companies' element={<Companies />} />
      <Route path='resources' element={<Resources />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='ask' element={<Ask />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
