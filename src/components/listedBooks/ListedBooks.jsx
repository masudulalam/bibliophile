import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDb";
import Book from "../book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  const allBooks = useLoaderData();
  const [wishList, setWishList] = useState([]);
  console.log(wishList);

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);
  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    console.log(storedWishList, storedWishListInt, allBooks);
    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );

    setWishList(wishBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);
    if(sortType === 'Number Of Pages'){
        const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setReadList(sortedReadList);
    }
    if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a,b) => a.rating - b.rating);
        setReadList(sortedReadList);
    }
  };


  return (
    <div className="my-8">
      <h2 className="text-3xl my-8 bg-gray-200 rounded-md p-3 text-center">Listed Books</h2>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn bg-green-500 text-white m-1 text-lg">
        {sort ? `Sort by: ${sort}` : 'Sort By'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort('Ratings')}>
            <a>Ratings</a>
          </li>
          <li onClick={() => handleSort('Number Of Pages')}>
            <a>Number Of Pages</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Read Books: {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bokId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">Wishlist Books: {wishList.length}</h2>
          {wishList.map((book) => (
            <Book key={book.bokId} book={book}></Book>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
