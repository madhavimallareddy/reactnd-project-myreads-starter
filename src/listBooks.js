import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './bookShelf'
import './App.css'

class ListBooks extends Component {
      
	render() {
            const currentlyReading = this.props.books.filter((book) => book.shelf==="currentlyReading");
            const wantToRead = this.props.books.filter((book) => book.shelf==="wantToRead");
            const read = this.props.books.filter((book) => book.shelf==="read");

		return (
			<div className="list-books">
                        <div className="list-books-title">
                              <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                              <div>
                                    <Bookshelf books={ currentlyReading } title="Currently Reading" onChangeShelf={ this.props.onChange }/>
                                    <Bookshelf books={ read } title="Read" onChangeShelf={ this.props.onChange }/>
                                    <Bookshelf books={ wantToRead } title="Want To Read" onChangeShelf={ this.props.onChange }/>
                              </div>
                        </div>
                        <div className="open-search">
                              <Link to="/search">Add a book</Link>
                        </div>
                  </div>
		)
	}
}

export default ListBooks