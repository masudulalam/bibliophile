import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 border p-6">
        <figure className="bg-gray-300 py-8 rounded-2xl">
          <img src={image} alt={bookName} className="h-40" />
        </figure>
        <div className="card-body">
          <div className="flex gap-6">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-xs bg-green-50 text-green-500">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border border-dashed my-3"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="flex items-center justify-center gap-3">
              {rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
