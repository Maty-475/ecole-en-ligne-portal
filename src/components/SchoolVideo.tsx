
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const SchoolVideo: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b">
        Présentation vidéo
      </h2>
      <div className="w-full">
        <AspectRatio ratio={16 / 9}>
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Présentation de l'établissement"
            className="w-full h-full rounded-md"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2">Cette vidéo présente notre établissement et ses différentes formations.</p>
      </div>
    </section>
  );
};

export default SchoolVideo;
