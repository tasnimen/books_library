
import { Link, Outlet } from "react-router-dom";
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import ReadBooks from "../ReadBooks/ReadBooks";
import Wishlist from "../WishList/Wishlist";





const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [sortBy, setSortBy] = useState('Rating');
  const handleOnClickTab = (index) => {
    setTabIndex(index);
  };
  const handleSortBy = (criteria) => {
    setSortBy(criteria);
  }
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center h-32 max-w-8xl mx-auto bg-gray-100 rounded-b-lg flex justify-center items-center">
        <h1 className="text-5xl font-bold text-black bg-gradient-to-r bg-300% from-[#23BE0A] to-[#59C6D2] text-transparent bg-clip-text animate-gradient">Books</h1>
      </div>
      <div className="my-12 flex justify-center ">

        <button className="btn btn bg-gradient-to-r from-[#23BE0A] to-[#59C6D2] bg-[length:300%_300%] animate-gradient text-white " popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
          Sort By <span><IoIosArrowDown size={20} />
          </span>
        </button>

        <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
          <li><a onClick={() => handleSortBy('Rating')}>Rating</a></li>
          <li><a onClick={() => handleSortBy('NumberOfPage')}>Number of pages</a></li>
          <li><a onClick={() => handleSortBy('YearOfPublished')}>Year Of Publishing </a></li>
        </ul>
      </div>

      <div className="px-4 md:px-4">
        <div className="flex  -mx-4 overflow-x-auto overflow-y-hidden justify-center md:justify-start flex-nowrap  mb-4">
          <button to='' onClick={() => handleOnClickTab(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg  border-gray-400 ${tabIndex === 0 ? 'border border-b-0' : ' border-b'}`}>
            <span>Read Books</span>
          </button>
          <button to={'wishlist'} onClick={() => handleOnClickTab(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg border-gray-400 ${tabIndex === 1 ? 'border border-b-0' : ' border-b'}`}>
            <span>Wishlist Books</span>
          </button>

        </div>

        {tabIndex === 0 ? <ReadBooks sortBy={sortBy} /> : <Wishlist sortBy={sortBy} />}
      </div>
      <Outlet></Outlet>



    </div>
  );
};

export default ListedBooks;