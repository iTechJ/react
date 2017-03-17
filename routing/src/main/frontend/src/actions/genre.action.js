import $ from 'jquery';
import { startOperation, cancelOperation } from './operation.action';
import {
  INIT_GENRES
} from '../constants/actionTypes';

import {
  GENRES_URL
} from '../constants/constants';

export function loadGenres() {
  return (dispatch) => {
    $.ajax({
      url: '/api/genres',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(json => {
      dispatch({
        type: INIT_GENRES,
        payload: json
      });
    }).fail(() => {
      console.log('Could not get list of genres');
    });
  }
}

export function fetchGenre(genreId) {
  return (dispatch) => {
    $.ajax({
      url: '/api/genres/' + genreId,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(genre => {
        dispatch(startOperation(genre));
      }
    ).fail(() => {
        console.log('Could get a single author details');
      });
  }
}

export function makeNewGenre(genre) {
  return (dispatch) => {
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
      dispatch(startOperation(json));
      loadGenres()(dispatch);
    }).fail(() => {
      console.log('Could not save genre');
    });
  }
}

export function updateGenre(genre) {
  return (dispatch) => {
    $.ajax({
      type: 'PUT',
      url: '/api/genres/' + genre.id,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(genre),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done((json) => {
      loadGenres()(dispatch);
      dispatch(startOperation(json));
    }).fail(() => {
      console.log('Could not update genre');
    });
  }
}


export function deleteGenre(genre) {
  return (dispatch) => {
    $.ajax({
      type: 'DELETE',
      url: '/api/genres/' + genre.id,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).done(() => {
      loadGenres()(dispatch);
      dispatch(cancelOperation(null));
    }).fail(() => {
      console.log('Could not delete genre');
    });
  }
}

