import { useEffect, useState } from "react";
import Book from "../book/Book";

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-10">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book book={book} key={book.bookId} />)
                }
            </div>
        </div>
    );
};

export default Books;