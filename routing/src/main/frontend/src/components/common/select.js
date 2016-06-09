import React from 'react';
import $ from 'jquery';

class SelectComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let menu = $(this.refs.select);
    console.log(menu.val());
    this.props.onChange(menu.val() ? menu.val() : []);
  }

  render() {
    return (
      <div className='form-group'>
      	<label className='control-label' htmlFor={this.props.id}>
      		<i className={this.props.icon}></i> {this.props.label}
      	</label>
        <select ref='select'  id={this.props.id} className='form-control' value={this.props.value} multiplie={false} onChange={this.onChange}>
          {this.props.options}
        </select>
      </div>
    );
  }
}

SelectComponent.propTypes = {
  id: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  label: React.PropTypes.any.isRequired,
  onChange: React.PropTypes.func.isRequired,
  options: React.PropTypes.array.isRequired,
  value: React.PropTypes.any
};

export default SelectComponent;

