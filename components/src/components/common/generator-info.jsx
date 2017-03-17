import React from 'react';

/*This component displays link to React application generator */
class WarningComponent extends React.Component {
  render() {
    return (
      <div>
        <h3 className='text-danger'>Не стоит волноваться!</h3>
        <p>
          Простое приложение с использованием этих технологий можно <b>сгенерировать:</b>
          <br />
          <a target='_blank' href={this.props.link}>{this.props.link}</a>
        </p>
      </div>
    );
  }
}

WarningComponent.propTypes = {
  link: React.PropTypes.string.isRequired
};

export default WarningComponent;


