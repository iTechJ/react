import React from 'react';
/*
 You can use Stateless functions instead of ReactComponents to combine ReactElements.
 Note: It must be a pure function of it's arguments
 Note: It must be stateless
 Note: No Props checking
 Note: No lifecycle methods - no way to work with DOM
 */
export default function HeaderComponent(props) {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <div className='text-center'>
              <small> Актуально на {props.year} год</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


