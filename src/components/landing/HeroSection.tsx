
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1A1F2C] to-[#403E43] text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">DogForst Stats</span>
            <span className="text-[#8B5CF6]">Собери свою команду!</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Захватывающие бои, уникальные персонажи и стратегические сражения в лучшей многопользовательской игре 2025 года!
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
              <Icon name="Download" className="mr-2" />
              Скачать игру
            </Button>
            <Button size="lg" variant="outline" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=400" 
            alt="DogForst Stats Game" 
            className="rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
