import toast from "react-hot-toast";


const getReadBooks = () => {
  const storedData = localStorage.getItem("read_books");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];

};

const saveReadBooks = (book) => {
  const read = getReadBooks();


  const isExist = read.find(bk => bk.bookId === book.bookId)
  if (isExist) {
    toast.error("This book is already in your Read List!");
    return;
  }


  const wishlist = getWishlistBooks();
  const exist = wishlist.find(bk => bk.bookId === book.bookId)
  if (exist) {
    toast.error("This book is already in your Wishlist, can’t add to Read!");
    return;
  }

  read.push(book);
  localStorage.setItem("read_books", JSON.stringify(read));
  toast.success("Book marked as Read!");
};


const getWishlistBooks = () => {
  const storedData = localStorage.getItem("wishlist_books");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];

};

const saveWishlistBooks = (book) => {
  const wishlist = getWishlistBooks();


  const isExist = wishlist.find(bk => bk.bookId === book.bookId)
  if (isExist) {
    toast.error("This book is already in your Wishlist!");
    return;
  }

  const read = getReadBooks();
  const exist = read.find(bk => bk.bookId === book.bookId)
  if (exist) {
    toast.error("This book is already in your Read List, can’t add to Wishlist!");
    return;
  }

  wishlist.push(book);
  localStorage.setItem("wishlist_books", JSON.stringify(wishlist));
  toast.success("Book added to Wishlist!");
};

export { getReadBooks, saveReadBooks, getWishlistBooks, saveWishlistBooks };
