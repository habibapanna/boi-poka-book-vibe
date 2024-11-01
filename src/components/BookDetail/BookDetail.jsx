import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {

const {bookId} = useParams();

const id = parseInt(bookId);

const data = useLoaderData();

const book = data.find(book => book.bookId === id)
// console.log(data, book, bookId, id);

const {bookId: currentBookId, image} = book;

    return (
        <div>
            <h2>Book details: {bookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <button className="btn btn-outline mr-4 btn-accent">Read</button>
            <button className="btn btn-accent">Wish List</button>
        </div>
    );
};

export default BookDetail;