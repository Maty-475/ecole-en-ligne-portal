
import React from 'react';

interface SchoolVideoProps {
  videoUrl: string;
  schoolName: string;
}

const SchoolVideo: React.FC<SchoolVideoProps> = ({ videoUrl, schoolName }) => {
  // Fonction pour convertir une URL YouTube standard en URL d'intégration
  const getEmbedUrl = (url: string): string => {
    // Si l'URL est déjà au format embed, la retourner telle quelle
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    // Essayer de trouver l'ID de la vidéo dans différents formats d'URL YouTube
    let videoId = '';
    
    // Format www.youtube.com/watch?v=VIDEO_ID
    const watchRegex = /youtube\.com\/watch\?v=([^&]+)/;
    const watchMatch = url.match(watchRegex);
    
    // Format youtu.be/VIDEO_ID
    const shortRegex = /youtu\.be\/([^?&]+)/;
    const shortMatch = url.match(shortRegex);
    
    if (watchMatch && watchMatch[1]) {
      videoId = watchMatch[1];
    } else if (shortMatch && shortMatch[1]) {
      videoId = shortMatch[1];
    } else {
      // Si l'URL ne correspond à aucun format connu, renvoyer une URL embed par défaut
      return "https://www.youtube.com/embed/c8jZRuMTiDQ";
    }
    
    return `https://www.youtube.com/embed/${videoId}`;
  };
  
  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-bold text-primary mb-4">Présentation vidéo</h3>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          title={`Présentation de ${schoolName}`}
          className="w-full h-96"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </section>
  );
};

export default SchoolVideo;
