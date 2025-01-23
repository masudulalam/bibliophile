import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  }

  return (
    <div className="flex gap-12 mt-16">
      {/* <h2>Book Details: {bookId}</h2> */}
      <div>
        <img src={image} alt="book image" />
      </div>
      <div>
        <h2 className="text-4xl">{bookName}</h2>
        <p className="text-xl">By: {author}</p>
        <div className="divider"></div>
        <p className="text-xl">{category}</p>
        <div className="divider"></div>
        <p>{review}</p>
        <div className="flex gap-6 mt-5">Tag
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn btn-xs bg-green-50 text-green-500"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="divider"></div>
        <p className="mb-3">Number of Pages: {totalPages}</p>
        <p className="mb-3">Publisher: {publisher}</p>
        <p className="mb-3">Year of Publishing:: {yearOfPublishing}</p>
        <p>Rating: {rating}</p>
        <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline text-lg mr-6 mt-8 mb-20">Mark as Read</button>
        <button className="btn btn-success text-lg text-white">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
