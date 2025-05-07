
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="bg-[#403E43] text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">DogForst</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="hover:text-[#8B5CF6] transition-colors">Особенности</a>
          <a href="#characters" className="hover:text-[#8B5CF6] transition-colors">Персонажи</a>
          <a href="#gameplay" className="hover:text-[#8B5CF6] transition-colors">Геймплей</a>
          <a href="#download" className="hover:text-[#8B5CF6] transition-colors">Скачать</a>
        </div>
        <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">Играть сейчас</Button>
      </div>
    </nav>
  );
};

export default Header;
