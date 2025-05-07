
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Character = {
  name: string;
  role: string;
  image: string;
};

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => (
  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
    <img 
      src={character.image} 
      alt={character.name} 
      className="w-full h-48 object-cover"
    />
    <CardContent className="text-center">
      <h3 className="text-xl font-bold mb-1">{character.name}</h3>
      <p className="text-sm text-[#8B5CF6]">{character.role}</p>
    </CardContent>
  </Card>
);

const CharactersSection = () => {
  const characters: Character[] = [
    { name: "Рекс", role: "Танк", image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Луна", role: "Снайпер", image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Макс", role: "Штурмовик", image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Белла", role: "Поддержка", image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&q=80&w=300&h=300" },
  ];

  return (
    <section id="characters" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Персонажи</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">Открыть всех персонажей</Button>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
