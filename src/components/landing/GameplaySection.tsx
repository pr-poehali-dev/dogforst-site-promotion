
import Icon from "@/components/ui/icon";

const GameplaySection = () => {
  const features = [
    "Разные игровые режимы: захват кристаллов, охота за звездами, футбол и многое другое",
    "Прокачивайте своих персонажей и открывайте новые способности",
    "Создавайте клан с друзьями и участвуйте в командных турнирах"
  ];

  return (
    <section id="gameplay" className="py-16 bg-gradient-to-br from-[#1A1F2C] to-[#403E43] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Геймплей</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?auto=format&fit=crop&q=80&w=600&h=400" 
              alt="Gameplay Screenshot" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#8B5CF6]">Захватывающие битвы</h3>
            <p className="text-lg mb-6">
              В DogForst Stats вы будете сражаться в динамичных боях 3 на 3, используя уникальные способности своих персонажей и работая в команде.
            </p>
            <ul className="space-y-3">
              {features.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Icon name="CheckCircle2" className="text-[#8B5CF6] mr-2 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
