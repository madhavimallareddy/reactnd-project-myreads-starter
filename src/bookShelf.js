import React, { Component } from 'react'
import DisplayBooks from './displayBooks'
import './App.css'

class BookShelf extends Component {
	updateShelf = (book, shelf) => {
		this.props.onChangeShelf(book, shelf)
	}
	render() {
		return (
			<div className="bookshelf">
        		<h2 className="bookshelf-title">{this.props.title}</h2>
        		<div className="bookshelf-books">
	          		<ol className="books-grid">
	          			{this.props.books.map((book) => (
            				<DisplayBooks book={ book } key={ book.id } onUpdateBookShelf={(shelf) => {
            						this.updateShelf(book, shelf)
            					}} />
            			))}
	          		</ol>
	          	</div>
	        </div>

		)
	}
}

export default BookShelf