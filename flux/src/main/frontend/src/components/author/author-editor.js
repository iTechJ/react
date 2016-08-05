import React from 'react';
import AuthorsService from '../../services/author.service';
import AuthorsStore from '../../stores/author.store';
import MenuService from '../../services/menu.service';
import MenuStore from '../../stores/menu.store';
import Input from '../common/text-input';
import Textarea from '../common/textarea';
import Checkbox from '../common/checkbox';

class AuthorEditorWrapper extends React.Component {

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
    let formEditor = this.state.selectedItem ? <AuthorEditor author={this.state.selectedItem} /> : null;
    let editorHeader =  this.state.selectedItem ? <h2> View {this.state.selectedItem.firstName} {this.state.selectedItem.lastName} details </h2> : null;
    return (
      <div>
        {editorHeader}
        {formEditor}
      </div>
    );
  }
}

AuthorEditorWrapper.propTypes = {};

export default AuthorEditorWrapper;


class AuthorEditor extends React.Component {

  constructor(props) {
    super(props);
    this.getComponentInitialState = this.getComponentInitialState.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = this.getComponentInitialState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getComponentInitialState(nextProps));
  }

  getComponentInitialState(props) {
    return {
      author: JSON.parse(JSON.stringify(props.author)),
      disabledClass: 'disabled'
    }
  }

  handleStateChange() {
    this.state.disabledClass = '';
    this.setState(this.state);
  }

  handleFirstNameChange(event) {
    this.state.author.firstName = event.target.value;
    this.handleStateChange();
  }

  handleLastNameChange(event) {
    this.state.author.lastName = event.target.value;
    this.handleStateChange();
  }

  handleDateOfBirthChange(event) {
    this.state.author.dateOfBirth = event.target.value;
    this.handleStateChange();
  }

  handleDateOfDeathChange(event) {
    this.state.author.dateOfDeath = event.target.value;
    this.handleStateChange();
  }

  handleOccupationChange(event) {
    this.state.author.occupation = event.target.value;
    this.handleStateChange();
  }

  handleActiveFlagChange(event) {
    this.state.author.isActive = event.target.checked;
    this.handleStateChange();
  }

  save() {
    if (this.state.author.id) {
      AuthorsService.updateAuthor(this.state.author);
    } else {
      AuthorsService.createAuthor(this.state.author);
    }
  }

  cancel() {
    this.setState(this.getComponentInitialState(this.props));
  }

  close() {
    MenuService.selectItem(null);
  }

  deleteAuthor() {
    AuthorsService.deleteAuthor(this.state.author);
  }

  render() {
    return (
      <form className='form-horizontal'>
        <fieldset>
          <legend>Edit or create information about any author</legend>
          <Input id='firstName' type='text' icon='' label='First Name' placeholder=''
                 value={this.state.author.firstName} onChange={this.handleFirstNameChange.bind(this)} />
          <Input id='lastName' type='text' icon='' label='Last Name' placeholder=''
                 value={this.state.author.lastName} onChange={this.handleLastNameChange.bind(this)} />

          <Input id='dob' type='text' icon='' label='Date of birth' placeholder='YYYY-mm-dd'
                 value={this.state.author.dateOfBirth} onChange={this.handleDateOfBirthChange.bind(this)} />

          <Input id='dod' type='text' icon='' label='Date of death' placeholder='YYYY-mm-dd'
                 value={this.state.author.dateOfDeath} onChange={this.handleDateOfDeathChange.bind(this)} />

          <Input id='occupation' type='text' icon='' label='Occupation' placeholder='What kind of books was written by him?'
                 value={this.state.author.occupation} onChange={this.handleOccupationChange.bind(this)} />

          <Checkbox id='description' icon='' label='Is active?' value={this.state.author.isActive} onChange={this.handleActiveFlagChange.bind(this)} />

          <div className='btn-toolbar text-center'>
            <button type='button' className='btn btn-primary pull-left' onClick={this.close.bind(this)}>Close</button>
            {
              this.props.author.id ? <button type='button' className='btn btn-danger pull-left' onClick={this.deleteAuthor.bind(this)}>Delete</button> : null
            }
            <button type='button' className={this.state.disabledClass + ' btn btn-success pull-right'}
                    onClick={this.state.disabledClass ? null : this.save.bind(this)}>Save
            </button>
            <button type='button' className={this.state.disabledClass + ' btn btn-default pull-right'} onClick={this.state.disabledClass ? null : this.cancel.bind(this)}>Cancel</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

AuthorEditor.propTypes = {
  author: React.PropTypes.object.isRequired
};
