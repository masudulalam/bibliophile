import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);
    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

    setReadList(readBookList);
  }, [])
  
  return (
    <div className="my-8">
      <h2 className="text-3xl my-8">Listed Books</h2>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Read Books: {readList.length}</h2>
          {
            readList.map(book => <Book key={book.bokId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">Wishlist Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
