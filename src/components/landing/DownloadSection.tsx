
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DownloadSection = () => {
  return (
    <section id="download" className="py-16 bg-[#1A1F2C] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать свое приключение?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Скачайте DogForst Stats прямо сейчас и присоединяйтесь к миллионам игроков по всему миру!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB] text-lg px-8">
            <Icon name="Apple" className="mr-2" /> App Store
          </Button>
          <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB] text-lg px-8">
            <Icon name="AndroidLogo" fallback="Smartphone" className="mr-2" /> Google Play
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
