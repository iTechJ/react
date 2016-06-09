import React from 'react';

/*
  Component should have the same name as file, but it doesn't have to do it
*/
class CheckboxElement extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='form-group'>
      	<label htmlFor={this.props.id}><i className={this.props.icon}></i> {this.props.label}</label>
        <div>
          <input id={this.props.id} type='checkbox' checked={this.props.value} onChange={this.props.onChange}/>
        </div>
      </div>
    );
  }
}

CheckboxElement.propTypes = {
  icon: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.any,
  onChange: React.PropTypes.func.isRequired
};

export default CheckboxElement;
