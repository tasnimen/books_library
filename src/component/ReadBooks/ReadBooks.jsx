import { useEffect, useState } from "react";
import { getReadBooks } from "../../component/localstorage/localstorage";
import ShowListedBooks from "../../component/ShowListedBooks/ShowListedBooks";





const ReadBooks = ({ sortBy }) => {

  const [readBook, setReadBook] = useState([]);


  useEffect(() => {
    const storedBook = getReadBooks();
    let sortedBooks = [];
    if (sortBy === 'Rating') {
      sortedBooks = storedBook.sort((a, b) => b.rating - a.rating);
    }
    else if (sortBy === 'NumberOfPage') {
      sortedBooks = storedBook.sort((a, b) => b.totalPages - a.totalPages);
    }
    else if (sortBy === 'YearOfPublished') {
      sortedBooks = storedBook.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    }

    setReadBook(sortedBooks);
  }, [sortBy])
  return (
    <div>

      <div>
        {
          readBook.map(book => <ShowListedBooks book={book} key={book.bookId}></ShowListedBooks>)
        }
      </div>
    </div>
  );
};

export default ReadBooks;