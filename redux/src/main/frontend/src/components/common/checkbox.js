import React from 'react';
import PropTypes from 'prop-types';

class CheckboxElement extends React.Component {
  render() {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>

        <div>
          <input id={this.props.id} type='checkbox' checked={this.props.value} onChange={this.props.onChange}/>
        </div>
      </div>
    );
  }
}

CheckboxElement.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CheckboxElement;
