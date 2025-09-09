import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks, saveWishlistBooks } from "../../component/localstorage/localstorage";


const Book = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const intId = parseInt(bookId);
  const singleBook = books.find(bk => bk.bookId === intId);
  const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleBook;


  return (
    <div>
      <section className=" text-gray-100 max-w-6xl mx-auto min-h-[calc(100vh-119px)]">
        <div className="container flex flex-col justify-center p-6 mx-auto items-center sm:py-12 lg:flex-row lg:justify-around">
          <div className="flex items-center justify-center rounded-lg p-6 mt-8 lg:mt-0 h-72 bg-gray-100 sm:h-80 w-full lg:h-[500px] xl:h-112 2xl:h-128">
            <img src={image} alt="" className="object-contain h-72 sm:h-80  lg:h-96 xl:h-112 2xl:h-128" />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div>
              <h1 className="text-5xl text-black font-bold leading-none sm:text-6xl">

                {bookName}

              </h1>
              <p className="mt-2 text-gray-400 mt-2 mb-2">By: {author}</p>
              <hr />
              <p className="mt-2 text-gray-400 mb-2">{category}</p>
              <hr />
            </div>
            <div >
              <p className="mt-2 text-black sm:mb-6">
                Review:<span className="text-gray-400">{review}</span>
              </p>
            </div>


            <div className="">
              {
                tags.slice(0, 2).map((tag, index) => <p className="inline-block mb-2 mr-2" key={index}> <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#23BE0A] inline-block mb-2">#{tag}</span></p>)
              }
            </div>
            <hr />
            <div className="text-gray-400 mt-4">
              <p className=" mb-4">Number of Pages: <span className="text-black pl-8">{totalPages}</span></p>
              <p className=" mb-4">Publisher: <span className="text-black pl-24">{publisher}</span></p>
              <p className=" mb-4">Year of Publishing: <span className="text-black pl-8">{yearOfPublishing}</span></p>
              <p className=" mb-4">Rating: <span className="text-black pl-28">{rating}</span></p>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button onClick={() => saveReadBooks(singleBook)} rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded  border text-gray-900">Read</button>
              <button onClick={() => saveWishlistBooks(singleBook)} rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border bg-[#59C6D2] rounded border-gray-100">Wishlist</button>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Book;
