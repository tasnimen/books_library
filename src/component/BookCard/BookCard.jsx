import { Link } from "react-router-dom";
import defaultImage from '../../assets/img.png'
import { CiStar } from "react-icons/ci";


const BookCard = ({ book }) => {
  const { bookId, rating, author, bookName, image, tags, category } = book;
  return (
    <Link to={`/book/${bookId}`} rel="noopener  noreferrer" href="#" className="max-w-sm transition rounded-lg border-2 hover:scale-105 border-gray-300 p-4  border-opacity-30% mx-auto flex flex-col group hover:no-underline focus:no-underline ">
      <img role="presentation" className="object-cover w-96 h-[240px] rounded h-44 bg-gray-100 p-4" src={image || defaultImage} />
      <div className="mt-4">
        {
          tags.slice(1).map((tag, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#23BE0A] mr-2 mb-2">#{tag}</span>)
        }
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
        <span className="text-xs text-gray-400">By: {author}</span>

      </div>
      <p className=" flex-grow border-dashed border-gray-300 border-1 border-b mb-2"></p>

      <div className="flex justify-between items-center px-6 mt-4">
        <p>{category}</p>
        <div className="flex items-center gap-2  ">
          <span>{rating} </span>
          <span className="text-yellow-500 "><CiStar size={22} /></span>

        </div>

      </div>

    </Link>
  );
};

export default BookCard;