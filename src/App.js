// App.js
import Accueil from './Accueil';
import Salutation from './Salutation';
import CarteProfil from './CarteProfil';
import Vehicule from './Vehicule';
import ListeArticles from './ListeArticles';

function App() {
  const personne = { 
    nom: 'Hafsa Ajabboune', 
    photo: '/user.png' 
  };

  return (
    <div style={{ fontFamily: 'Arial', margin: '20px' }}>
      <Accueil />
      <Salutation prenom="FatimaAzzahra" />
      <Salutation prenom="Sara" />
      
      <CarteProfil utilisateur={personne} taille={150} />
      
      <h3 style={{ color: '#2c3e50' }}>Véhicules Disponibles</h3>
      <Vehicule marque="Renault" modele="Megane" couleur="Blanche" />
      <Vehicule marque="Peugeot" modele="308" couleur="Noire" />
      <Vehicule marque="Dacia" modele="Sandero" couleur="Orange" />
      
      <h3 style={{ color: '#2c3e50' }}>Liste de Courses</h3>
      <ListeArticles elements={['Lait', 'Pain', 'Beurre', 'Confiture']} />
      
      <h3 style={{ color: '#2c3e50' }}>Tâches Quotidiennes</h3>
      <ListeArticles elements={['Étudier', 'Prier', 'Cuisiner', 'Lire']} />
    </div>
  );
}

export default App;