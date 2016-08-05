import $ from 'jquery';
import AuthorAction from '../actions/author.action';
import MenuService from './menu.service';

export default {

  getAuthors() {
    $.ajax({
      url: '/api/authors',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(function (json) {
       AuthorAction.initAuthors(json);
    }).fail(function (response, textStatus, error) {
      console.log('Could not get list of authors');
    });
  },

  createAuthor(author) {
    $.ajax({
      type: 'POST',
      url: '/api/authors',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(author),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done((json) => {
    	MenuService.selectItem(json);
    	this.getAuthors();
    }).fail(function (response) {
      console.log('Could not save an author');
    });
  },

  updateAuthor(author) {
    $.ajax({
      type: 'PUT',
      url: '/api/authors/' + author.id,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(author),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(function (json) {
    	MenuService.selectItem(json);
    }).fail(function (response) {
      console.log('Could not update an author');
    });
  },

  deleteAuthor(author) {
    $.ajax({
      type: 'DELETE',
      url: '/api/authors/' + author.id,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).done(() => {
    	this.getAuthors();
    	MenuService.selectItem(null);
    }).fail(function (response) {
      console.log('Could not delete an author');
    });
  }
}
