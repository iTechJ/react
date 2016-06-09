/**
 * 
 */
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
    let self = this;
    $.ajax({
      type: 'POST',
      url: '/api/authors',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(author),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(function (json) {
    	MenuService.selectItem(json);
    	self.getAuthors();
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
	var self = this;
    $.ajax({
      type: 'DELETE',
      url: '/api/authors/' + author.id,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).done(function () {
    	self.getAuthors();
    	MenuService.selectItem(null);
    }).fail(function (response) {
      console.log('Could not delete an author');
    });
  }
}
