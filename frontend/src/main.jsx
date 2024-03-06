import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Calendar from './components/Calendar/Calendar.jsx'
import Chat from './components/Chat/Chat.jsx'
import Resource from './components/Resources/Resource.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Companies from './components/Companies/Companies.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='companies' element={<Companies />} />
      <Route path='resource' element={<Resource />} />
      <Route path='chat' element={<Chat />} />
      <Route path='calendar' element={<Calendar />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
