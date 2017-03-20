import React from 'react';
import Input from '../common/text-input';
import Textarea from '../common/textarea';
import GenresService from '../../services/genre.service';
import OperationAction from '../../actions/operation.action';

class GenreForm extends React.Component {

  handleNameChange(event) {
    OperationAction.updateOperation('name', event.target.value);
  }

  handleDescriptionChange(event) {
    OperationAction.updateOperation('description', event.target.value);
  }

  save() {
    if (this.props.genre.id) {
      GenresService.updateGenre(this.props.genre);
    } else {
      GenresService.makeNewGenre(this.props.genre);
    }
  }

  reset() {
    OperationAction.resetOperation();
  }

  cancel() {
    OperationAction.cancelOperation();
  }

  render() {
    let editingLabel = <span> Editing of <b> {this.props.originalGenre.name} </b> Genre </span>;
    let creatingLabel = <span>Create new Genre</span>;
    const disabledClass = this.props.changes ? '' : 'disabled';
    return (
      <div>
        <form className='form-horizontal'>
          <fieldset>
            <legend>{this.props.genre.id ? editingLabel : creatingLabel} </legend>
            <Input id='name' type='text' label='Name of Genre' placeholder='Enter name of genre here'
                   value={this.props.genre.name || ''} onChange={this.handleNameChange.bind(this)}/>
            <Textarea id='description' label='Genre description' placeholder='Enter description for genre...'
                      value={this.props.genre.description  || ''} onChange={this.handleDescriptionChange.bind(this)}/>

            <div className='btn-toolbar text-center'>
              <div className='btn-group' role='group'>
                <button type='button' className='btn btn-success' onClick={this.cancel.bind(this)}>Close</button>
              </div>
              <div className='btn-group float-right' role='group'>
                <button type='button' className={`${disabledClass} btn btn-default`}
                        onClick={this.props.changes ? this.reset.bind(this) : null}>Reset
                </button>
                <button type='button' className={`${disabledClass} btn btn-primary`}
                        onClick={this.props.changes ? this.save.bind(this) : null}>Save
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

GenreForm.propTypes = {
  genre: React.PropTypes.object.isRequired,
  originalGenre: React.PropTypes.object.isRequired,
  changes: React.PropTypes.bool
};

export default GenreForm;
