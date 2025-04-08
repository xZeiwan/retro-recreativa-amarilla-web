
import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,214,0,0.1),transparent_70%)] z-0"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIyIj48L3JlY3Q+Cjwvc3ZnPg==')] opacity-20 z-0"></div>
      
      <div className="max-w-5xl mx-auto text-center z-10">
        <h1 className="font-pixel text-2xl sm:text-3xl md:text-5xl text-retro-yellow mb-8 animate-flicker">
          PROYECTO <span className="text-retro-red">ARCADE</span> RECICLADO
        </h1>
        
        <div className="w-32 h-1 bg-retro-yellow mx-auto mb-8"></div>
        
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Aprende a construir tu propia máquina recreativa utilizando materiales reciclables, ¡y ayuda al planeta mientras te diviertes!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#videos" className="retro-btn">
            VER VIDEOS
          </a>
          <a href="#funcionalidades" className="retro-btn">
            FUNCIONALIDADES
          </a>
        </div>
        
        <div className="mt-16 max-w-lg mx-auto bg-secondary p-6 border-2 border-retro-yellow relative pixel-corners animate-pixel-pulse">
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-retro-yellow"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-retro-yellow"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-retro-yellow"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-retro-yellow"></div>
          
          <p className="text-sm sm:text-base">
            Este proyecto educativo te enseña a crear una máquina recreativa con materiales reciclados, fomentando la creatividad, la conciencia ambiental y el aprendizaje técnico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
