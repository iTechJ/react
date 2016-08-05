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
      //When request from backend is received we pass data to action creator
      GenreAction.initGenres(json);
      /*
       Services are not a part of FLUX architecture.
       This additional level was introduces because usually you may want to create many actions when response from backend is received
       Also, processing of many requests may require creation of the same actions
       */
    }).fail(function (response, textStatus, error) {
      console.log('Could not get list of genres');
    });
  },

  createGenre(genre) {
    $.ajax({
      type: 'POST',
      url: '/api/genres',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(genre),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done((json) => {
      MenuService.selectItem(json);
      this.getGenres();
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
    $.ajax({
      type: 'DELETE',
      url: '/api/genres/' + genre.id,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).done(() => {
      this.getGenres();
      MenuService.selectItem(null);
    }).fail(function (response) {
      console.log('Could not delete genre');
    });
  }
}
