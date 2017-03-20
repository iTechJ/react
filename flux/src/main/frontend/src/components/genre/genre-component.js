import React from 'react';
import GenresStore from '../../stores/genre.store';
import OperationStore from '../../stores/operation.store';
import GenreTable from './genre-table';
import GenreForm from './genre-form';
/*
 This is a component for Genres page
 */
class GenreComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getCurrentState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    //Component will listed for updates in of genres and selected menu item
    GenresStore.addChangeListener(this.onChange);
    OperationStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    //We need to remove listener from unmounting of component
    GenresStore.removeChangeListener(this.onChange);
    OperationStore.removeChangeListener(this.onChange);
  }

  getCurrentState() {
    return {
      genres: GenresStore.getAllGenres(),
      currentGenre: OperationStore.getOperationObject(),
      originalGenre : OperationStore.getOriginalObject(),
      changes : OperationStore.isChanged()
    };
  }

  onChange() {
    this.setState(this.getCurrentState());
  }

  render() {
    let content = this.state.currentGenre ? (
      <div className='row'>
        <div className='col-sm-6'>
          <GenreForm changes={this.state.changes} genre={this.state.currentGenre} originalGenre={this.state.originalGenre}/>
        </div>
        <div className='col-sm-6'>
          <GenreTable genres={this.state.genres}/>
        </div>
      </div>
    ) : (
      <div className='row'>
        <div className='col align-self-center'>
          <GenreTable genres={this.state.genres}/>
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

GenreComponent.propTypes = {};

export default GenreComponent;


