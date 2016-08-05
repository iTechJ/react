import $ from 'jquery';
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
    $.ajax({
      type: 'POST',
      url: '/api/books',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(book),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(() => {
    	MenuService.selectItem(json);
    	this.getBooks();
    }).fail(function (response) {
      console.log('Could not save a book');
    });
  },

  updateBook(book) {
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
    $.ajax({
      type: 'DELETE',
      url: '/api/books/' + book.id,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).done(() => {
    	this.getBooks();
    	MenuService.selectItem(null);
    }).fail(function (response) {
      console.log('Could not delete a book');
    });
  }
}
