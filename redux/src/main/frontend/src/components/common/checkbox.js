import React from 'react';

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
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.any.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default CheckboxElement;
