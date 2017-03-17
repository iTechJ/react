import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import GenreForm from './genre-form';
import GenreTable from './genre-table';

class GenreComponent extends React.Component {

  render() {
    let content = this.props.currentGenre ? (
      <div className='row'>
        <div className='col-sm-6'>
          <GenreForm changes={this.props.changes} genre={this.props.currentGenre}/>
        </div>
        <div className='col-sm-6'>
          <GenreTable genres={this.props.genres}/>
        </div>
      </div>
    ) : (
      <div className='row'>
        <div className='col align-self-center'>
          <GenreTable genres={this.props.genres}/>
        </div>
      </div>
    );
    return (
      <div className='container'>
        {content}
      </div>
    );
  }
}

let mapStateToProps = function (state) {
  return {
    genres: state.genres.genres,
    currentGenre: state.operation.modifiedValue,
    changes: state.operation.changes
  };
};

export default connect(mapStateToProps, () => {})(GenreComponent);
