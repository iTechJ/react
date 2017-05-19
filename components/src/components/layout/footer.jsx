import React from 'react';
import PropTypes from 'prop-types';
/*
 You can use Stateless functions instead of ReactComponents to combine ReactElements.
 Note: It must be a pure function of it's arguments
 Note: It must be stateless
 Note: No Props checking
 Note: No lifecycle methods - no way to work with DOM
 */
const FooterComponent = function (props) {
  return (
    <footer>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-3 '>
            <small>React v{props.reactVersion}</small>
          </div>
          <div className='col-3 text-right'>
            <small>Актуально на {props.year} год</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

//You can specify PropTypes for stateless functions
FooterComponent.propTypes = {
  year: PropTypes.string.isRequired,
  reactVersion: PropTypes.string.isRequired
};

export default FooterComponent;
