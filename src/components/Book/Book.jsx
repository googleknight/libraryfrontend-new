import React, { Component } from 'react';
import './Book.css';
import bookcover from './bookcover.jpg';
import PropTypes from 'prop-types';
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
      buttonStyle='Book-like-button';
    }
    else {
      buttonStyle='Book-unlike-button';
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
          className={buttonStyle}
          onClick={this.updateLikes}
        ><i className="material-icons">favorite</i>
        </div>
        <p className="Book-title">{this.props.book.name}</p>
        <p className="Book-rating">{this.props.book.rating.toFixed(1)}</p>
        <p className="Book-author">{this.props.book.Author}</p>
      </div>
    </div>);
  }
}

Book.propTypes={
  key:PropTypes.number,
  book:PropTypes.shape({}),
  callBackFromBookShelf:PropTypes.func,
}
Book.defaultProps={
  key:Math.random(),
  book:{},
  callBackFromBookShelf:()=>null, 
}

export default Book;
