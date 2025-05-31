
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { seedBlogArticles } from '../utils/seedBlogData';

const SeedDataButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSeedData = async () => {
    setIsLoading(true);
    setMessage('');
    
    try {
      const success = await seedBlogArticles();
      if (success) {
        setMessage('Articles ajoutés avec succès !');
        // Recharger la page après 2 secondes pour voir les nouveaux articles
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setMessage('Erreur lors de l\'ajout des articles');
      }
    } catch (error) {
      setMessage('Erreur lors de l\'ajout des articles');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-6 p-4 bg-blue-50 rounded-lg border">
      <p className="mb-2 text-sm text-gray-600">
        Cliquez pour ajouter 5 articles de démonstration à la base de données :
      </p>
      <Button 
        onClick={handleSeedData}
        disabled={isLoading}
        className="mb-2"
      >
        {isLoading ? 'Ajout en cours...' : 'Ajouter les articles de démonstration'}
      </Button>
      {message && (
        <p className={`text-sm ${message.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default SeedDataButton;
