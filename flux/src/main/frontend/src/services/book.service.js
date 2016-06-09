/**
 * 
 */
import BookAction from '../actions/book.action';
import MenuService from './menu.service';

export default {

  getBooks() {
    $.ajax({
      url: '/api/books',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(function (json) {
    	BookAction.initBooks(json);
    }).fail(function (response, textStatus, error) {
      console.log('Could not get list of books');
    });
  },

  createBook(book) {
    let self = this;
    $.ajax({
      type: 'POST',
      url: '/api/books',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(book),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(function (json) {
    	MenuService.selectItem(json);
    	self.getBooks();
    }).fail(function (response) {
      console.log('Could not save a book');
    });
  },

  updateBook(book) {
	  console.log(JSON.stringify(book));
    $.ajax({
      type: 'PUT',
      url: '/api/books/' + book.id,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(book),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(function (json) {
       MenuService.selectItem(json);
    }).fail(function (response) {
      console.log('Could not update a book');
    });
  },

  deleteBook(book) {
	var self = this;
    $.ajax({
      type: 'DELETE',
      url: '/api/books/' + book.id,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).done(function () {
    	self.getBooks();
    	MenuService.selectItem(null);
    }).fail(function (response) {
      console.log('Could not delete a book');
    });
  }
}
