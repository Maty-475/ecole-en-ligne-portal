
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface SchoolVideoProps {
  videoUrl?: string;
  schoolName: string;
}

const SchoolVideo: React.FC<SchoolVideoProps> = ({ videoUrl, schoolName }) => {
  // Default video URL if none is provided
  const defaultVideoUrl = "https://www.youtube.com/watch?v=c8jZRuMTiDQ&list=PLwenwdaZUv6J1BLlVcI6xF44EBaWtsHh3";
  
  // Function to convert YouTube watch URLs to embed URLs
  const getEmbedUrl = (url: string) => {
    // If it's already an embed URL, return it
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    // Extract video ID from various YouTube URL formats
    let videoId = '';
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URL(url).searchParams;
      videoId = urlParams.get('v') || '';
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    
    // Return proper embed URL
    return videoId ? `https://www.youtube.com/embed/${videoId}` : `https://www.youtube.com/embed/c8jZRuMTiDQ`;
  };
  
  const videoSrc = getEmbedUrl(videoUrl || defaultVideoUrl);
  
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b">
        Présentation vidéo
      </h2>
      <div className="w-full">
        <AspectRatio ratio={16 / 9}>
          <iframe 
            src={videoSrc} 
            title={`Présentation de ${schoolName}`}
            className="w-full h-full rounded-md"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2">Cette vidéo présente l'établissement et ses différentes formations.</p>
      </div>
    </section>
  );
};

export default SchoolVideo;
