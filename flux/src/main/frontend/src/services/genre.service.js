import $ from 'jquery';
import GenreAction from '../actions/genre.action';
import OperationAction from '../actions/operation.action';

export default {

  loadGenres() {
    $.ajax({
      url: '/api/genres',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done((genres) => {
      //When request from backend is received we pass data to action creator
      GenreAction.initGenres(genres);
      /*
       Services are not a part of FLUX architecture.
       This additional level was introduces because usually you may want to create many actions when response from backend is received
       Also, processing of many requests may require creation of the same actions
       */
    }).fail(() => {
      console.log('Could not get list of genres');
    });
  },

  makeNewGenre(genre) {
    $.ajax({
      type: 'POST',
      url: '/api/genres',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(genre),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done((updatedGenre) => {
      OperationAction.startOperation(updatedGenre);
      this.loadGenres();
    }).fail(() => {
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
    }).done((updatedGenre) => {
      OperationAction.startOperation(updatedGenre);
      this.loadGenres()
    }).fail(() => {
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
      this.loadGenres();
      OperationAction.cancelOperation();
    }).fail(() => {
      console.log('Could not delete genre');
    });
  }
}
