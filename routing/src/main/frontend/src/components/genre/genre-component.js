import React from 'react';
import MenuService from '../../services/menu.service';
import GenresService from '../../services/genre.service';
import MenuStore from '../../stores/menu.store';
import GenresStore from '../../stores/genre.store';
import Input from '../common/text-input';
import Textarea from '../common/textarea';

class GenreComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectedGenre : null
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    GenresStore.addChangeListener(this.onChange);
    MenuStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    GenresStore.removeChangeListener(this.onChange);
    MenuStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      genres: GenresStore.getAllGenres(),
      selectedGenre: MenuStore.getSelectedItem()
    });
  }

  render() {
    let genreForm = this.state.selectedGenre? <GenreForm genre={this.state.selectedGenre}/> : null;
    return (
      <div className='container'>
        <div className='row'>
          {
            genreForm ?
              (
                <div>
                  <div className='col-md-5 col-md-push-7 col-sm-6 col-sm-push-6'>
                    {genreForm}
                  </div>
                  <div className='col-md-2 col-sm-0'> </div>
                  <div className='col-md-5 col-md-pull-7 col-sm-6 col-sm-pull-6'>
                    <GenreTable genres={this.state.genres}/>
                  </div>
                </div>
              ) :
              (
                <div className='col-md-7 col-xs-12'>
                  <GenreTable genres={this.state.genres}/>
                </div>
              )
          }

        </div>
      </div>
    );
  }
}

GenreComponent.propTypes = {};

export default GenreComponent;

class GenreForm extends React.Component {

  constructor(props) {
    super(props);
    this.getComponentInitialState = this.getComponentInitialState.bind(this);
    this.state = this.getComponentInitialState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getComponentInitialState(nextProps));
  }

  getComponentInitialState(props) {
    return {
      genre: JSON.parse(JSON.stringify(props.genre)),
      disabledClass: 'disabled'
    }
  }

  handleNameChange(event) {
    this.state.genre.name = event.target.value;
    this.state.disabledClass = '';
    this.setState(this.state);
  }

  handleDescriptionChange(event) {
    this.state.genre.description = event.target.value;
    this.state.disabledClass = '';
    this.setState(this.state);
  }

  save() {
    if (this.state.genre.id) {
      GenresService.updateGenre(this.state.genre);
    } else {
      GenresService.createGenre(this.state.genre);
    }
  }

  cancel() {
    this.setState(this.getComponentInitialState(this.props));
  }

  close() {
    MenuService.selectItem(null);
  }

  render() {
    let editingLabel = <span> Editing of <b> {this.props.genre.name} </b> Genre </span>;
    let creatingLabel = <span>Create new Genre</span>;
    return (
      <div style={{marginTop: '10%'}}>
        <form className='form-horizontal'>
          <fieldset>
            <legend>{this.props.genre.id? editingLabel : creatingLabel} </legend>
            <Input id='name' type='text' icon='' label='Name of Genre' placeholder='Enter name of genre here'
                   value={this.state.genre.name} onChange={this.handleNameChange.bind(this)}/>
          <Textarea id='description' icon='' label='Genre description' placeholder='Enter description for genre...'
                    value={this.state.genre.description} onChange={this.handleDescriptionChange.bind(this)}/>

            <div className='btn-toolbar text-center'>
              <div className='btn-group pull-left' role='group'>
                <button type='button' className='btn btn-success' onClick={this.close.bind(this)}>Close </button>
              </div>
              <div className='btn-group pull-right' role='group'>
                <button type='button' className={this.state.disabledClass + ' btn btn-primary'} onClick={this.state.disabledClass ? null : this.save.bind(this)}>Save</button>
                <button type='button' className={this.state.disabledClass + ' btn btn-default'} onClick={this.state.disabledClass ? null : this.cancel.bind(this)}>Cancel</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

GenreForm.propTypes = {
  genre: React.PropTypes.object.isRequired
};

class GenreTable extends React.Component {

  constructor(props) {
    super(props);
  }

  onShowUpdateGenreForm(genre) {
    MenuService.selectItem(genre);
  }

  onShowCreateGenreForm() {
    MenuService.selectItem({name:'', description: ''});
  }

  deleteGenre(genre) {
    GenresService.deleteGenre(genre);
  }

  render() {
    let self = this;
    let rows = this.props.genres.map(function (genre, index) {
      return (
        <tr key={genre.id}>
          <th scope='row'> {index + 1} </th>
          <td> {genre.name}</td>
          <td>
            <div className='btn-toolbar text-center'>
              <button className='btn btn-primary' onClick={self.onShowUpdateGenreForm.bind(self, genre)}>Update</button>
              <button className='btn btn-danger' onClick={self.deleteGenre.bind(self, genre)}>Delete</button>
            </div>
          </td>
        </tr>
      )
    });
    return (
      <div>
        <h1>List of  all existing literature genres in the system</h1>
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
              <button className='btn btn-default' onClick={self.onShowCreateGenreForm.bind(self)}>Create New Genre
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
  genres: React.PropTypes.array.isRequired
};

