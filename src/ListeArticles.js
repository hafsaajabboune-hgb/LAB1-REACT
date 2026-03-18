// ListeArticles.js
import PropTypes from 'prop-types';

function ListeArticles({ elements }) {
  return (
    <ul style={{ 
      listStyleType: 'square',
      backgroundColor: '#fff9e6',
      padding: '15px 30px',
      borderRadius: '5px',
      border: '1px solid #f1c40f'
    }}>
      {elements.map((element, index) => (
        <li key={index} style={{ margin: '6px 0', color: '#2c3e50' }}>
          • {element}
        </li>
      ))}
    </ul>
  );
}

ListeArticles.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeArticles;