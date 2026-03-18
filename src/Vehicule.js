// Vehicule.js
import PropTypes from 'prop-types';

function Vehicule({ marque, modele, couleur }) {
  return (
    <p style={{ 
      backgroundColor: '#e8f4f8',
      padding: '8px 12px',
      margin: '6px 0',
      borderRadius: '4px',
      borderLeft: '3px solid #3498db'
    }}>
      {marque} {modele} - Couleur: {couleur}
    </p>
  );
}

Vehicule.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
};

export default Vehicule;