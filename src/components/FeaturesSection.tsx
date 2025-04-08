
import React from 'react';
import { Monitor, Gamepad, Speaker, Chip, Database, ShieldCheck } from 'lucide-react';

type Feature = {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    icon: Monitor,
    title: "Pantalla LCD Reciclada",
    description: "Utiliza una pantalla LCD de un monitor antiguo o televisión en desuso para darle una segunda vida."
  },
  {
    id: 2,
    icon: Gamepad,
    title: "Controles Personalizables",
    description: "Diseña tus propios controles con botones reciclados y materiales reutilizados para una experiencia única."
  },
  {
    id: 3,
    icon: Speaker,
    title: "Sistema de Audio",
    description: "Integra altavoces reciclados para disfrutar de la auténtica experiencia arcade con todos sus efectos sonoros."
  },
  {
    id: 4,
    icon: Chip,
    title: "Raspberry Pi",
    description: "Utiliza una Raspberry Pi como cerebro de tu máquina, permitiendo ejecutar miles de juegos retro."
  },
  {
    id: 5,
    icon: Database,
    title: "Almacenamiento Expandible",
    description: "Añade almacenamiento adicional para guardar más juegos y mantener tus puntuaciones."
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Construcción Segura",
    description: "Aprende a manejar los materiales de forma segura y a realizar conexiones eléctricas adecuadas."
  }
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="section-container bg-secondary">
      <h2 className="section-title">FUNCIONALIDADES DE LA MÁQUINA</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {features.map((feature) => (
          <div key={feature.id} className="bg-retro-dark border-2 border-retro-yellow p-6 transition-transform hover:-translate-y-2 duration-300">
            <div className="w-12 h-12 bg-retro-yellow rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="text-retro-dark w-6 h-6" />
            </div>
            <h3 className="font-pixel text-lg mb-3">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-block border-2 border-retro-yellow p-6 pixel-corners">
          <h3 className="font-pixel text-xl mb-4">¿LISTO PARA EMPEZAR?</h3>
          <p className="mb-6 max-w-lg">Sigue nuestros tutoriales en vídeo y comienza a construir tu propia máquina recreativa con materiales reciclados.</p>
          <a href="#videos" className="retro-btn">VER TUTORIALES</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
