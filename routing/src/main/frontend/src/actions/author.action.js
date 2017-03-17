import $ from 'jquery';
import { startOperation, cancelOperation } from './operation.action';
import {
  INIT_AUTHORS
} from '../constants/actionTypes';
import {
  AUTHORS_URL
} from '../constants/constants';

export function loadAuthors() {
  return (dispatch) => {
    $.ajax({
      url: '/api/authors',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done((json) => {
      dispatch({
        type: INIT_AUTHORS,
        payload: json
      });
    }).fail(() => {
      console.log('Could not get list of authors');
    });
  }
}

export function makeNewAuthor(author) {
  return (dispatch) => {
    $.ajax({
      type: 'POST',
      url: '/api/authors',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(author),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(updatedAuthor => {
        dispatch(startOperation(updatedAuthor));
        loadAuthors()(dispatch);
      }
    ).fail(() => {
        console.log('Could not save an author');
      });
  }
}

export function fetchAuthor(authorId) {
  return (dispatch) => {
    $.ajax({
      url: '/api/authors/' + authorId,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done(author => {
        dispatch(startOperation(author));
      }
    ).fail(() => {
        console.log('Could get a single author details');
      });
  }
}

export function deleteAuthor(author, router) {
  return (dispatch) => {
    $.ajax({
      type: 'DELETE',
      url: '/api/authors/' + author.id,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).done(() => {
      loadAuthors()(dispatch);
      dispatch(cancelOperation());
      router.replace(AUTHORS_URL); // You can pass router to utility JS objects if it's required
    }).fail(() => {
      console.log('Could not delete an author');
    });
  }
}

export function updateAuthor(author) {
  return (dispatch) => {
    $.ajax({
      type: 'PUT',
      url: '/api/authors/' + author.id,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(author),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    }).done((updatedAuthor) => {
      loadAuthors()(dispatch);
      dispatch(startOperation(updatedAuthor));
    }).fail(() => {
      console.log('Could not update an author');
    });
  }
}

