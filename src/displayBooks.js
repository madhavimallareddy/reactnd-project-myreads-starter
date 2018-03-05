import React, { Component } from 'react'
import './App.css'

class DisplayBooks extends Component {

	changeBookShelf = (event) => { 
		this.props.onUpdateBookShelf(event.target.value)
	}

	render() {
		console.log('shelf', this.props.book.shelf)
		return (
			<li>			
	            <div className="book">
	            	<div className="book-top">
	                	<div className="book-cover" style={{
	                		 	width: 128, 
	                		 	height: 193, 
	                		 	backgroundImage: `url(${ this.props.book.imageLinks.thumbnail })`
	                		}}>
	                	</div>
	                	<div className="book-shelf-changer">
                            <select onChange={this.changeBookShelf} value={ this.props.book.shelf }>
          		                <option value="moveTo" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
	                </div>
	                <div className="book-title">{ this.props.book.title }</div>
	          		<div className="book-authors">{ this.props.book.authors }</div>
	            </div>
	        </li>            
		)
	}
}

export default DisplayBooks