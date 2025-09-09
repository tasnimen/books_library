import { useEffect, useState } from "react";
import ShowListedBooks from "../ShowListedBooks/ShowListedBooks";
import { getWishlistBooks } from "../localstorage/localstorage";



const Wishlist = ({ sortBy }) => {

  const [wishlistBooks, setWishlistBooks] = useState([]);
  useEffect(() => {
    const storedBook = getWishlistBooks();
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
    setWishlistBooks(sortedBooks);

  }, [sortBy]);

  console.log(wishlistBooks);


  return (
    <div>
      <div>
        {
          wishlistBooks.map(book => <ShowListedBooks book={book} key={book.bookId}></ShowListedBooks>)
        }
      </div>
    </div>
  );
};

export default Wishlist;