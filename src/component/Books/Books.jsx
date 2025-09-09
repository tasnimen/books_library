import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const Books = () => {

  const book = useLoaderData();

  return (
    <div className=" max-w-6xl mx-auto my-4 ">
      <div className="space-y-2 text-center mb-12 mt-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r bg-300% from-[#23BE0A] to-[#59C6D2] text-transparent bg-clip-text animate-gradient">Books</h2>
      </div>
      <div className="grid justify-center grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3">
        {book.map((item) => (
          <BookCard key={item.id} book={item}></BookCard>
        ))}
      </div>
    </div>
  );
};




export default Books;