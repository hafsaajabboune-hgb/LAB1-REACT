// CarteProfil.js
import PropTypes from 'prop-types';

function CarteProfil({ utilisateur, taille }) {
  return (
    <div style={{ 
      border: '2px solid #3498db',
      padding: '15px',
      margin: '15px 0',
      borderRadius: '8px',
      display: 'inline-block',
      backgroundColor: '#f0f8ff'
    }}>
      <img 
        src={utilisateur.photo} 
        alt={utilisateur.nom}
        width={taille}
        height={taille}
        style={{ borderRadius: '50%', border: '2px solid #2980b9' }}
      />
      <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Utilisatrice: {utilisateur.nom}</p>
    </div>
  );
}

CarteProfil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

CarteProfil.defaultProps = {
  taille: 100,
};

export default CarteProfil;