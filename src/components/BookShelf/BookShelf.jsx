import React, { Component } from 'react';
import Book from '../Book/Book';
import './BookShelf.css';

class BookShelf extends Component {
  static handleLikes(opinion, bookid) {
    const opinionParam = opinion === true ? 'like' : 'unlike';
    fetch(`/mylibrary/${opinionParam}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: bookid }),
    });
  }
  createBooks() {
    const { books } = this.props;
    const authors = Object.keys(books);
    const toBeRendered = [];
    for (let index = 0; index < authors.length; index += 1) {
      toBeRendered.push(<div
        key={index + 10}
        className="BookShelf-author-title"
      >
        <p>{authors[index]}</p>
      </div>);
      let key = (index + 100) * Object.values(books)[index].length;
      const booksList = Object.values(books)[index].map((book) => {
        key -= 1;
        return (<Book key={key} book={book} callBackFromBookShelf={BookShelf.handleLikes} />);
      });


      toBeRendered.push(<div key={key - 1}className="BookShelf-bookslist-container">{booksList}</div>);
    }
    return toBeRendered;
  }
  render() {
    return (
      <div>
        {this.createBooks()}
      </div>
    );
  }
}

export default BookShelf;
