
import React, { useState } from 'react';
import { Play } from 'lucide-react';

type Video = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoId?: string; // Para embeber videos de YouTube
};

const videos: Video[] = [
  {
    id: 1,
    title: "Introducción al proyecto",
    description: "Conoce los materiales necesarios y el proceso general para construir tu máquina arcade.",
    thumbnail: "https://placehold.co/600x400/121212/FFD600?text=Introducción",
    videoId: "dQw4w9WgXcQ" // Video placeholder
  },
  {
    id: 2,
    title: "Construyendo la estructura",
    description: "Aprende a construir la estructura principal con materiales reciclados.",
    thumbnail: "https://placehold.co/600x400/121212/FFD600?text=Estructura",
    videoId: "dQw4w9WgXcQ" // Video placeholder
  },
  {
    id: 3,
    title: "Instalación electrónica",
    description: "Guía para la instalación de componentes electrónicos y configuración.",
    thumbnail: "https://placehold.co/600x400/121212/FFD600?text=Electrónica",
    videoId: "dQw4w9WgXcQ" // Video placeholder
  }
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  
  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };
  
  const closeVideo = () => {
    setSelectedVideo(null);
  };
  
  return (
    <section id="videos" className="section-container">
      <h2 className="section-title">VIDEOS TUTORIALES</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {videos.map((video) => (
          <div key={video.id} className="retro-card group cursor-pointer" onClick={() => openVideo(video)}>
            <div className="relative overflow-hidden mb-4">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-retro-red flex items-center justify-center">
                  <Play size={30} className="text-white ml-1" />
                </div>
              </div>
            </div>
            <h3 className="font-pixel text-lg mb-2">{video.title}</h3>
            <p className="text-sm text-gray-300">{video.description}</p>
          </div>
        ))}
      </div>
      
      {/* Modal de video */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeVideo}>
          <div className="bg-retro-dark border-2 border-retro-yellow p-4 w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <h3 className="font-pixel text-xl mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
              <button className="retro-btn" onClick={closeVideo}>CERRAR</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
