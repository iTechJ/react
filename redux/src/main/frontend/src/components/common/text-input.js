import React from 'react';
import PropTypes from 'prop-types';

class InputComponent extends React.Component {
  render() {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.id} className='control-label'>
          {this.props.label}
        </label>
        <input id={this.props.id} type={this.props.type} className='form-control' value={this.props.value}
               placeholder={this.props.placeholder} onChange={this.props.onChange}/>
      </div>
    );
  }
}

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};
InputComponent.defaultProps = {
  placeholder: ''
};

export default InputComponent;
