import React from 'react';
import AuthorsStore from '../../stores/author.store';
import BooksStore from '../../stores/book.store';
import MenuService from '../../services/menu.service';
import BookService from '../../services/book.service';
import MenuStore from '../../stores/menu.store';
//Name can doesn't match name in JSX file
import Input from '../common/text-input';
import Textarea from '../common/textarea';
import Select from '../common/select';
import GenresStore from '../../stores/genre.store';

class BookEditorWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getCurrentState = this.getCurrentState.bind(this);
    this.state = this.getCurrentState();
  }

  componentDidMount() {
    MenuStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    MenuStore.removeChangeListener(this.onChange);
  }

  getCurrentState() {
    return {
      selectedItem: MenuStore.getSelectedItem() ? MenuStore.getSelectedItem() : null
    }
  }
  
  onChange() {
    this.setState(this.getCurrentState());
  }

  render() {
    let formEditor = this.state.selectedItem ? <BookEditor book={this.state.selectedItem} /> : null;
    let editorHeader = this.state.selectedItem ? <h2> View details of {this.state.selectedItem.bookName}  Book </h2> : null;
    return (
      <div>
        {editorHeader}
        {formEditor}
      </div>
    );
  }
}

BookEditorWrapper.propTypes = {

};

export default BookEditorWrapper;

class BookEditor extends React.Component {

  constructor(props) {
    super(props);
    this.getComponentInitialState = this.getComponentInitialState.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.onAuthorsOrGenreChange = this.onAuthorsOrGenreChange.bind(this);
    this.state = this.getComponentInitialState(props);
  }

  onAuthorsOrGenreChange() {
    this.setState({
      authors: AuthorsStore.getAuthors() ? AuthorsStore.getAuthors() : [],
      genres: GenresStore.getAllGenres() ? GenresStore.getAllGenres() : []
    });
  }

  componentDidMount() {
    AuthorsStore.addChangeListener(this.onAuthorsOrGenreChange);
    GenresStore.addChangeListener(this.onAuthorsOrGenreChange);
  }

  componentWillUnmount() {
    AuthorsStore.removeChangeListener(this.onAuthorsOrGenreChange);
    GenresStore.removeChangeListener(this.onAuthorsOrGenreChange);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getComponentInitialState(nextProps));
  }

  getComponentInitialState(props) {
    return {
      book: JSON.parse(JSON.stringify(props.book)),
      authors: AuthorsStore.getAuthors() ? AuthorsStore.getAuthors() : [],
      genres: GenresStore.getAllGenres() ? GenresStore.getAllGenres() : []	  ,
      disabledClass: 'disabled',
    }
  }

  handleStateChange() {
    this.state.disabledClass = '';
    this.setState(this.state);
  }

  handleNameChange(event) {
    this.state.book.bookName = event.target.value;
    this.handleStateChange();
  }

  handleDescriptionChange(event) {
    this.state.book.bookDescription = event.target.value;
    this.handleStateChange();
  }

  handlePublishDateChange(event) {
    this.state.book.publishDate = event.target.value;
    this.handleStateChange();
  }

  handleAuthorChange(newAuthor) {
    this.state.book.bookAuthorId = Number(newAuthor);
    this.handleStateChange();
  }

  handleGenreChange(newGenre) {
    this.state.book.bookGenreId =  Number(newGenre);
    this.handleStateChange();
  }

  save() {
    if (this.state.book.id) {
      BookService.updateBook(this.state.book);
    } else {
      BookService.createBook(this.state.book);
    }
  }

  cancel() {
    this.setState(this.getComponentInitialState(this.props));
  }

  close() {
    MenuService.selectItem(null);
  }

  deleteBook() {
    BookService.deleteBook(this.state.book);
  }

  render() {
    let genreOptions = this.state.genres ? this.state.genres.map(genre => {
      return <option key={genre.id} value={genre.id}> {genre.name}</option>
    }) : [];

    let authorOptions =  this.state.authors ? this.state.authors.map(author => {
      return <option key={author.id} value={author.id}> {author.firstName} {author.lastName}</option>
    }): [];
    return (
        <form className='form-horizontal'>
          <fieldset>
            <Input id='name' type='text' icon='' label='Name' placeholder=''
                   value={this.state.book ? this.state.book.bookName : ''} onChange={this.handleNameChange.bind(this)} />
            <Textarea id='description' type='text' icon='' label='Description' placeholder=''
                   value={this.state.book ? this.state.book.bookDescription : ''} onChange={this.handleDescriptionChange.bind(this)} maxLength={1500} />

            <Input id='pusblishDate' type='text' icon='' label='Publish Date' placeholder='YYYY-mm-dd'
                   value={this.state.book ? this.state.book.publishDate : '' } onChange={this.handlePublishDateChange.bind(this)} />

            <Select  id='author' label='Genre' icon=''  options={genreOptions}  value={this.state.book.bookGenreId ? this.state.book.bookGenreId : ''} onChange={this.handleGenreChange.bind(this)} />

            <Select id='genre' label='Author' icon=''  options={authorOptions}  value={this.state.book.bookAuthorId ? this.state.book.bookAuthorId : ''}  onChange={this.handleAuthorChange.bind(this)} />


            <div className='btn-toolbar text-center'>
               <div className='btn-group pull-left' role='group'>
               	  <button type='button' className='btn btn-primary' onClick={this.close.bind(this)}>Close</button>
               	  {
               	   	this.props.book.id ? <button type='button' className='btn btn-danger' onClick={this.deleteBook.bind(this)}>Delete</button> : null
               	  }
               </div>
               <div className='btn-group pull-right' role='group'>
               		<button type='button' className={this.state.disabledClass + ' btn btn-success'} onClick={this.state.disabledClass ? null : this.save.bind(this)}>Save</button>
               		<button type='button' className={this.state.disabledClass + ' btn btn-default'} onClick={this.state.disabledClass ? null : this.cancel.bind(this)}>Cancel </button>
               	</div>
             </div>  
          </fieldset>
        </form>
    );
  }
}

BookEditor.propTypes = {
	book: React.PropTypes.object.isRequired
};
