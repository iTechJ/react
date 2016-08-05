import React from 'react';
import LinkWithIcon from './common/link-with-icon';

/*
  This component is a view for specific feature - List of Technologies
*/
class TechnologyList extends React.Component {

  /*
    Use arrow functions as much as possible. They don't change this pointer.
    (a) = > { return 5*a} is approx. the same as function(a) {return 5*a}
  */
  render() {
    let listItems = this.props.technologies.map(item => {
      //Each dynamically created element must have Key attribute
      //Key elements should not be an index of element in array. It should be some unique ID
      return <li key={item.id}> <b>{item.caption} </b> {item.usage} <LinkWithIcon linkUrl={item.readMoreLink} icon='glyphicon-share-alt' /></li>
    });
    return (
      <div>
        <label className='label' htmlFor='notesList'>Важные замечания:</label>
        <ul id='notesList'>
          {listItems}
        </ul>
      </div>
    );
  }
}

TechnologyList.propTypes = {
  technologies: React.PropTypes.array.isRequired
};

export default TechnologyList;


