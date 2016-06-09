import $ from 'jquery';

import GenreAction from '../actions/genre.action';
import MenuService from './menu.service';

export default {

  getGenres() {
    $.ajax({
      url: '/api/genres',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(function (json) {
    	GenreAction.initGenres(json);
    }).fail(function (response, textStatus, error) {
      console.log('Could not get list of genres');
    });
  },

  createGenre(genre) {
    let self = this;
    $.ajax({
      type: 'POST',
      url: '/api/genres',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(genre),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(function (json) {
    	MenuService.selectItem(json);
    	self.getGenres();
    }).fail(function (response) {
      console.log('Could not save genre');
    });
  },

  updateGenre(genre) {
    $.ajax({
      type: 'PUT',
      url: '/api/genres/' + genre.id,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(genre),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(function (json) {
    	MenuService.selectItem(json);
    }).fail(function (response) {
      console.log('Could not update genre');
    });
  },

  deleteGenre(genre) {
	var self = this;
    $.ajax({
      type: 'DELETE',
      url: '/api/genres/' + genre.id,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).done(function () {
    	self.getGenres();
    	MenuService.selectItem(null);
    }).fail(function (response) {
      console.log('Could not delete genre');
    });
  }
}
