import React from 'react';

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
  id: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  label: React.PropTypes.any.isRequired,
  value: React.PropTypes.any.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
};
InputComponent.defaultProps = {
  placeholder: ''
};

export default InputComponent;
