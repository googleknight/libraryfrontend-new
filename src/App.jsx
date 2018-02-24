import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import BookShelf from './components/BookShelf/BookShelf';
import ErrorModal from './components/ErrorModal/ErrorModal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: false,
      books: [],
    };
  }
  componentWillMount() {
    fetch('/mylibrary/bookswithlikes')
      .then(response => response.json())
      .then((responseObj) => {
        if (responseObj.statusCode === 200) {
          this.setState({
            homepage: true,
            books: responseObj.data,
          });
        }
      });
  }
  wrtieInDb() {
    fetch('/mylibrary/bookswithlikes', { method: 'POST' })
      .then(response => response.json())
      .then((responseObj) => {
        this.setState({
          homepage: true,
          books: responseObj.data,
        });
      });
  }
  render() {
    if (this.state.homepage) {
      return (
        <div className="App-container" >
          <Sidebar />
          <div className="App-body">
            <Header />
            <BookShelf books={this.state.books} />
          </div>
        </div>
      );
    }

    return (

      <div className="App-container" >
        <Sidebar />
        <div className="App-body">
          <Header />
          <ErrorModal callbackFromApp={() => this.wrtieInDb()} />
        </div>
      </div>
    );
  }
}

export default App;
