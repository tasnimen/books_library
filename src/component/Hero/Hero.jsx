import { Link } from 'react-router-dom';
import HeroImg from '../../assets/img.png';
const Hero = () => {
  return (
    <div>
      <section className="bg-gray-100 text-black max-w-6xl mx-auto mt-4 rounded-xl">
        <div className="container lg:flex flex-col flex-reverce justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col sm:flex-reverce justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl mb-4"><span className='bg-gradient-to-r bg-300% from-[#23BE0A] to-[#59C6D2] text-transparent bg-clip-text animate-gradient'>Books to freshen</span> up your bookshelf
            </h1>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="/listed-books" rel="noopener noreferrer" className="btn bg-gradient-to-r from-[#23BE0A] to-[#59C6D2] bg-[length:300%_300%] animate-gradient text-white px-4 py-6 rounded-lg ">View The List</Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={HeroImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;