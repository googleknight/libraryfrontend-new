import React, { Component } from 'react';
import './Book.css';
import bookcover from './bookcover.jpg';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { like: this.props.book.like };
  }

  updateLikes=()=> {
    Promise.resolve(this.setState({ like: !this.state.like })).then(()=>
    this.props.callBackFromBookShelf(this.state.like, this.props.book.bookid));
  }
  render() {
    let buttonStyle;
    if (this.state.like) {
      buttonStyle="favorite";
    }
    else {
      buttonStyle="favorite_border";
    }
    return (<div className="Book">
      <div className="Book-upperBox">
        <img src={bookcover} className="Book-upperBox-picture"alt="book cover" />
      </div>
      <div className="Book-lowerBox">
      <div
        tabIndex={this.props.book.key}
        role="button"
        onKeyPress={this.updateLikes}
        className="Book-like-button"
        onClick={this.updateLikes}
      ><i className="material-icons">{buttonStyle}</i>
      </div>
        <p className="Book-title">{this.props.book.name}</p>
        <p className="Book-rating">{this.props.book.rating}</p>
        <p className="Book-author">{this.props.book.Author}</p>
      </div>
            </div>);
  }
}
export default Book;
