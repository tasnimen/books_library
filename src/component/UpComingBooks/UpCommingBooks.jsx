
import { useLoaderData } from "react-router-dom";
import UpComingBook from "../UpComingBook/UpComingBook";
import coverImg from '../../assets/cover.png'



const UpCommingBooks = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto">

      <div>
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full rounded-full group hover:no-underline focus:no-underline lg:grid  bg-gray-900">
          <img src={coverImg} alt="" className="object-cover w-full h-64 rounded sm:h-[480px] lg:col-span-7 bg-gray-500" />

        </a>
      </div>
      <div className='min-h-[calc(100vh-116px)] max-w-6xl mx-auto my-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6'>
        {
          data.map(book => <UpComingBook key={book.id} book={book}></UpComingBook>)
        }

      </div>
    </div>
  );
};

export default UpCommingBooks;