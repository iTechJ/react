import React from 'react';
import PropTypes from 'prop-types';

class SelectComponent extends React.Component {
  render() {
    return (
      <div className='form-group'>
        <label className='control-label' htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <select id={this.props.id} className='form-control' value={this.props.value} onChange={this.props.onChange}>
          {this.props.options}
        </select>
      </div>
    );
  }
}

SelectComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired
};

export default SelectComponent;

