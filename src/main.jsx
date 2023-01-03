import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
import Questions, { loader as questionsLoader, action as saveQuestions } from './pages/Questions'
import Answers, { loader as answersLoader } from './pages/Answers'
import ErrorPage from './pages/ErrorPage'
import Thks from './pages/Thks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        errorElement: <ErrorPage />
      },
      {
        path: '/questions',
        element: <Questions />,
        loader: questionsLoader,
        action: saveQuestions,
        errorElement: <ErrorPage />
      },
      {
        path: '/answers',
        element: <Answers />,
        loader: answersLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/thks',
        element: <Thks />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
