import React from 'react';
import PropTypes from 'prop-types';

let DEFAULT_AMOUNT_OF_ROWS = 10;
let MIN_AMOUNT_OF_ROWS = 5;

class TextareaElement extends React.Component {

  render() {
    let value = this.props.value ? this.props.value : '';
    let amountOfLines = value.split(/\r\n|\r|\n/).length;
    amountOfLines = amountOfLines > DEFAULT_AMOUNT_OF_ROWS ? DEFAULT_AMOUNT_OF_ROWS : amountOfLines;
    amountOfLines = amountOfLines < MIN_AMOUNT_OF_ROWS ? MIN_AMOUNT_OF_ROWS : amountOfLines;
    return (
      <div className='form-group'>
        <label className='control-label'>
          {this.props.label}
        </label>
        <textarea id={this.props.id} className='form-control' maxLength={this.props.maxLength} value={value}
                  rows={amountOfLines} placeholder={this.props.placeholder} onChange={this.props.onChange}></textarea>
      </div>
    );
  }
}

TextareaElement.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number
};

TextareaElement.defaultProps = {
  placeholder: ''
};

export default TextareaElement;

