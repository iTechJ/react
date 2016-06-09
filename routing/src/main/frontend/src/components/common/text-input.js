import React from 'react';

class InputComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.id} className='control-label'>
          <i className={this.props.icon}></i>
          {this.props.label}
        </label>
        <input id={this.props.id} type={this.props.type} className='form-control' value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange}/>
      </div>
    );
  }
}

InputComponent.propTypes = {
  id: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  label: React.PropTypes.any.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  value: React.PropTypes.any,
  onChange: React.PropTypes.func.isRequired
};

export default InputComponent;
