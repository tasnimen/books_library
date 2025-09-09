
const UpComingBook = ({ book }) => {
  const { title, author, releaseDate, genre, description, coverImage } = book;
  return (
    <div className="max-w-6xl mx-auto my-4 flex justify-center">
      <div className="card  bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={coverImage}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}

          </h2>
          <p>By: {author}</p>
          <p>{description}</p>
          <hr />
          <div className="card-actions flex-col justify-start">
            <div >{genre}</div>
            <div >Release Date: {releaseDate}</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UpComingBook;