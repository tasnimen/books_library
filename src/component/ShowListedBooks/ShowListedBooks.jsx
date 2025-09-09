import { MdPublishedWithChanges } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

const ShowListedBooks = ({ book }) => {
  const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book;

  return (
    <div>
      <div>
        <div className="p-6 py-4 rounded-lg border text-gray-900 mb-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <figure className="flex  justify-start   rounded-lg">

                <div className=' bg-gray-100 rounded-lg p-24'>
                  <img
                    className='w-72 h-44'
                    src={image || googleLogo}
                    alt={bookName}
                  />
                </div>

              </figure>
              <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <div className='mt-4 '>
                  <p className='font-semibold'>Tags: {tags.slice(1).map((tag, index) => <span key={index} tag={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#23BE0A] mr-4 mb-2">#{tag}</span>)} <span>Year of Publisher: {yearOfPublishing}</span></p>
                </div>
                <div className='flex mt-4 mb-4'>
                  <p className='flex items-center font-semibold '><MdPublishedWithChanges className='inline mr-1 ' />
                    Publisher: {publisher}
                    <span className='flex items-center ml-8'><RiPagesLine className='inline mr-1 ' />Page: {totalPages}</span>

                  </p>
                </div>
                <hr />
                <div className='mt-4'>
                  <p><span className='bg-blue-100 p-2 rounded-full text-blue-500 mr-4'>Category: {category}</span> <span className='bg-orange-100 p-2 rounded-full text-orange-500 mr-4'>Rating: {rating}</span> <span><button className='btn bg-gradient-to-r from-[#23BE0A] to-[#59C6D2] bg-[length:300%_300%] animate-gradient text-white px-4 py-6 rounded-full'>View Details</button></span></p>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default ShowListedBooks;