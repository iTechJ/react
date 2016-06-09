import React from 'react';

let DEFAULT_AMOUNT_OF_ROWS = 10;
let MIN_AMOUNT_OF_ROWS = 5;

class Textarea extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let value = this.props.value ? this.props.value : '';
    let amountOfLines = value.split(/\r\n|\r|\n/).length;
    amountOfLines = amountOfLines > DEFAULT_AMOUNT_OF_ROWS ? DEFAULT_AMOUNT_OF_ROWS : amountOfLines;
    amountOfLines = amountOfLines < MIN_AMOUNT_OF_ROWS ? MIN_AMOUNT_OF_ROWS : amountOfLines;
    return (
      <div className='form-group'>
      	<label className='control-label'>
      		<i className={this.props.icon}></i>
      		{this.props.label}
      	</label>
        <textarea id={this.props.id} className='form-control' maxLength={this.props.maxLength} value={value} rows={amountOfLines} placeholder={this.props.placeholder} onChange={this.props.onChange}></textarea>
      </div>
    );
  }
}

Textarea.propTypes = {
  icon: React.PropTypes.string.isRequired,
  label: React.PropTypes.any.isRequired,
  id: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  maxLength: React.PropTypes.number
};

export default Textarea;

