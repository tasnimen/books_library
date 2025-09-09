import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen p-16 text-gray-400">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link rel="noopener noreferrer" to="/" className="btn btn bg-gradient-to-r from-[#23BE0A] to-[#59C6D2] bg-[length:300%_300%] animate-gradient text-white">Back to homepage</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;