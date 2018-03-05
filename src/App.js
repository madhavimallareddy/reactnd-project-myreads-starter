import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './searchBooks'
import ListBooks from './listBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  fetchBookDetails = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  componentDidMount() {
    this.fetchBookDetails()
  }


  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBookDetails()
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (          
          <SearchBooks myBooks={ this.state.books } onChange={ this.updateBookShelf }/>
        )} />

        <Route exact path="/" render={() => ( 
          <ListBooks books={ this.state.books } onChange={ this.updateBookShelf }/>
        )} />
      </div>
    )
  }
}

export default BooksApp
