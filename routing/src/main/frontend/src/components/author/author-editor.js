import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../common/text-input';
import Checkbox from '../common/checkbox';
import { deleteAuthor, updateAuthor, makeNewAuthor } from '../../actions/author.action';
import { updateOperation, resetOperation, cancelOperation } from '../../actions/operation.action';
import {
  AUTHORS_URL
} from '../../constants/constants';

class AuthorEditor extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.cancel = this.cancel.bind(this);
  }

  handleFirstNameChange(event) {
    this.props.updateOperation('firstName', event.target.value);
  }

  handleLastNameChange(event) {
    this.props.updateOperation('lastName', event.target.value);
  }

  handleDateOfBirthChange(event) {
    this.props.updateOperation('dateOfBirth', event.target.value);
  }

  handleDateOfDeathChange(event) {
    this.props.updateOperation('dateOfDeath', event.target.value);
  }

  handleOccupationChange(event) {
    this.props.updateOperation('occupation', event.target.value);
  }

  handleActiveFlagChange(event) {
    this.props.updateOperation('isActive', event.target.checked);
  }

  save() {
    if (this.props.author.id) {
      this.props.updateAuthor(this.props.author);
    } else {
      this.props.saveNewAuthor(this.props.author);
    }
  }

  reset() {
    this.props.resetOperation();
  }

  cancel() {
    this.props.cancelOperation();
    this.context.router.replace(AUTHORS_URL);
  }

  render() {
    const deleteButton = this.props.author.id ? (
      <button type='button' className='btn btn-danger' onClick={this.props.deleteAuthor.bind(this, this.props.author, this.context.router)}>
        Delete
      </button>
    ) : null;
    const disabledClass = this.props.changes ? '' : 'disabled';
    return (
      <form className='form-horizontal'>
        <fieldset>
          <legend>Edit or create information about any author</legend>
          <Input id='firstName' type='text' label='First Name' value={this.props.author.firstName || '' }
                 onChange={this.handleFirstNameChange.bind(this)}/>
          <Input id='lastName' type='text' label='Last Name' value={this.props.author.lastName || '' }
                 onChange={this.handleLastNameChange.bind(this)}/>

          <Input id='dob' type='text' label='Date of birth' placeholder='YYYY-mm-dd'
                 value={this.props.author.dateOfBirth || '' } onChange={this.handleDateOfBirthChange.bind(this)}/>

          <Input id='dod' type='text' label='Date of death' placeholder='YYYY-mm-dd'
                 value={this.props.author.dateOfDeath || '' } onChange={this.handleDateOfDeathChange.bind(this)}/>

          <Input id='occupation' type='text' label='Occupation'
                 placeholder='What kind of books was written by him?'
                 value={this.props.author.occupation || '' } onChange={this.handleOccupationChange.bind(this)}/>

          <Checkbox id='description' label='Is active?' value={this.props.author.isActive || '' }
                    onChange={this.handleActiveFlagChange.bind(this)}/>

          <div className='btn-toolbar text-center'>
            <button type='button' className='btn btn-primary' onClick={this.cancel.bind(this)}>Cancel</button>
            { deleteButton }
            <button type='button' className={`${disabledClass} btn btn-default float-right`}
                    onClick={this.props.changes ? this.reset.bind(this) : null}>
              Reset
            </button>
            <button type='button' className={`${disabledClass} btn btn-success float-right`}
                    onClick={this.props.changes ? this.save.bind(this) : null}>
              Save
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

AuthorEditor.propTypes = {
  author: React.PropTypes.object.isRequired,
  changes: React.PropTypes.bool,
  updateOperation: React.PropTypes.func.isRequired,
  resetOperation: React.PropTypes.func.isRequired,
  cancelOperation: React.PropTypes.func.isRequired,
  updateAuthor: React.PropTypes.func.isRequired,
  deleteAuthor: React.PropTypes.func.isRequired,
  saveNewAuthor: React.PropTypes.func.isRequired
};

AuthorEditor.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    updateAuthor: bindActionCreators(updateAuthor, dispatch),
    deleteAuthor: bindActionCreators(deleteAuthor, dispatch),
    saveNewAuthor: bindActionCreators(makeNewAuthor, dispatch),
    updateOperation: bindActionCreators(updateOperation, dispatch),
    resetOperation: bindActionCreators(resetOperation, dispatch),
    cancelOperation: bindActionCreators(cancelOperation, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorEditor);
