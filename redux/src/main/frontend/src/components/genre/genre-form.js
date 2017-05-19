import React from 'react';
import PropTypes from 'prop-types';
import Input from '../common/text-input';
import Textarea from '../common/textarea';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateGenre, makeNewGenre } from '../../actions/genre.action';
import { updateOperation, resetOperation, cancelOperation } from '../../actions/operation.action';

class GenreForm extends React.Component {

  handleNameChange(event) {
    this.props.updateOperation('name', event.target.value);
  }

  handleDescriptionChange(event) {
    this.props.updateOperation('description', event.target.value);
  }

  save() {
    if (this.props.genre.id) {
      this.props.updateGenre(this.props.genre);
    } else {
      this.props.createGenre(this.props.genre);
    }
  }

  reset() {
    this.props.resetOperation();
  }

  cancel() {
    this.props.cancelOperation();
  }

  render() {
    let editingLabel = <span> Editing of <b> {this.props.genre.name} </b> Genre </span>;
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
  genre: PropTypes.object.isRequired,
  changes: PropTypes.bool,
  createGenre: PropTypes.func.isRequired,
  updateGenre: PropTypes.func.isRequired,
  updateOperation: PropTypes.func.isRequired,
  resetOperation: PropTypes.func.isRequired,
  cancelOperation: PropTypes.func.isRequired
};

let mapStateToProps = function () {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    createGenre: bindActionCreators(makeNewGenre, dispatch),
    updateGenre: bindActionCreators(updateGenre, dispatch),
    updateOperation: bindActionCreators(updateOperation, dispatch),
    resetOperation: bindActionCreators(resetOperation, dispatch),
    cancelOperation: bindActionCreators(cancelOperation, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreForm);
