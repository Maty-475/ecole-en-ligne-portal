
import React from 'react';
import { Link } from 'react-router-dom';
import { School } from '../data/schools';

interface SchoolCardProps {
  school: School;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
  // Obtenir les catégories uniques des programmes de l'école
  const schoolCategories = [...new Set(school.programs.map(program => program.category))];
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 animate-fade-in">
      <div className="p-1 bg-secondary">
        <img 
          src={school.logo} 
          alt={`Logo de ${school.name}`} 
          className="w-full h-48 object-contain bg-white"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{school.name}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {school.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {schoolCategories.map(category => (
            <span 
              key={category} 
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">
            {school.programs.length} programme{school.programs.length > 1 ? 's' : ''}
          </span>
          
          <Link 
            to={`/school/${school.id}`}
            className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-colors"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
