import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts.jsx";

import Home from "../component/Home/Home.jsx";
import Book from "../pages/Book/Book.jsx";
import ListedBooks from "../component/ListedBooks/ListedBooks.jsx";
import PageToRead from "../component/PageToRead/PageToRead.jsx";
import UpCommingBooks from "../component/UpComingBooks/UpCommingBooks.jsx";
import Contact from "../component/Contact/Contact.jsx";
import ErrorPage from "../component/ErrorPage/ErrorPage.jsx";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')

      },
      {
        path: '/book/:bookId',
        element: <Book />,
        loader: () => fetch('/data.json')

      },
      {
        path: '/listed-books',
        element: <ListedBooks />,

      },
      {
        path: '/read-to-page',
        element: <PageToRead></PageToRead>
      },
      {
        path: '/coming-soon',
        element: <UpCommingBooks></UpCommingBooks>,
        loader: () => fetch('/comingData.json')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }



    ]

  }
])