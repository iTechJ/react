import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteGenre } from '../../actions/genre.action';
import { startOperation } from '../../actions/operation.action';

class GenreTable extends React.Component {

  onShowUpdateGenreForm(genre) {
    this.props.startOperation(genre);
  }

  onShowCreateGenreForm() {
    this.props.startOperation({name: '', description: ''});
  }

  deleteGenre(genre) {
    this.props.deleteGenre(genre);
  }

  render() {
    let rows = this.props.genres.map((genre, index) => {
      return (
        <tr key={genre.id}>
          <th scope='row'> {index + 1} </th>
          <td> {genre.name}</td>
          <td>
            <div className='btn-toolbar text-center'>
              <button className='btn btn-primary' onClick={this.onShowUpdateGenreForm.bind(this, genre)}>Update</button>
              <button className='btn btn-danger' onClick={this.deleteGenre.bind(this, genre)}>Delete</button>
            </div>
          </td>
        </tr>
      )
    });
    return (
      <div>
        <h1>List of all existing literature genres in the system</h1>
        <table className='table table-hover'>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {rows}
          <tr>
            <td colSpan={3}>
              <button className='btn btn-default' onClick={this.onShowCreateGenreForm.bind(this)}>Create New Genre
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

GenreTable.propTypes = {
  genres: PropTypes.array.isRequired,
  startOperation: PropTypes.func.isRequired,
  deleteGenre: PropTypes.func.isRequired
};


let mapStateToProps = function () {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    startOperation: bindActionCreators(startOperation, dispatch),
    deleteGenre: bindActionCreators(deleteGenre, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreTable);
