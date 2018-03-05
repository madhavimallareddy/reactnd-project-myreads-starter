import React, { Component } from "react"
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import DisplayBooks from './displayBooks'
import './App.css'

class SearchBooks extends Component {

	state = {
		query: '',
		newBook: [],
		errorMsg: false
	}

	shelfChange = (books) => {
		let returnedBooks = this.props.myBooks
		for (let book of books) {
			book.shelf = 'none'
		}

		for (let book of books) {
			for (let mainBooks of returnedBooks) {
				if (mainBooks.id === book.id) {
					book.shelf = mainBooks.shelf
				}
			}
		}
		return books
	}

	onHandleChange = (event) => {
		const query = event.target.value.trim()
		this.setState({ query: query})
		if(query){	
			BooksAPI.search(query, 10).then((books) => {
				if(books.length > 0 ){
					books = books.filter((book) => book.imageLinks)
					books = this.shelfChange(books)
					this.setState({ newBook: books, errorMsg: false }) 
				}else{
					this.setState({ newBook: [], errorMsg: true })
				} 
				
				console.log('NEW:', this.state.newBook)
			})
		}else{
			this.setState({ newBook: [], query: '' , errorMsg: false})
		}		  	
	}

	updateShelf = (book, shelf) => {
		this.props.onChange(book, shelf)
	}


	render() {
		return(
			<div className="search-books">
              	<div className="search-books-bar">
	                <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
	                  {/*
	                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                    You can find these search terms here:
	                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                    you don't find a specific author or title. Every search is limited by search terms.
	                  */}
	                  	<input 
	                  		type="text" 
	                  		placeholder="Search by title or author" 
	                  		value={ this.state.query }
	                  		onChange={ this.onHandleChange } />
	                </div>
		        </div>
              	<div className="search-books-results">
              		{ this.state.newBook.length >0 && (
	                	<ol className="books-grid">
	                		{this.state.newBook.map((book) => (
	                			<DisplayBooks book={ book } key={ book.id } onUpdateBookShelf={(shelf) => {
            							this.updateShelf(book, shelf)
            						}}/>
	                		))}
	                	</ol>
                	)}
                	{ this.state.errorMsg && (
                		<div>
                			<h3> Sorry! No books. Please try again </h3>
                		</div>
                	)}
              	</div>
            </div>
		)
	}
}

export default SearchBooks