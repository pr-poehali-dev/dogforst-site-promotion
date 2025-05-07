
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="hover-scale">
    <CardContent className="pt-6">
      <div className="mb-4 text-[#8B5CF6]">
        <Icon name={icon} size={48} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: "Users",
      title: "Многопользовательские бои",
      description: "Сражайтесь в динамичных 3 на 3 битвах с игроками со всего мира"
    },
    {
      icon: "Trophy",
      title: "Рейтинговая система",
      description: "Поднимайтесь в таблице лидеров и открывайте эксклюзивные награды"
    },
    {
      icon: "PaintBucket",
      title: "Уникальные скины",
      description: "Кастомизируйте своих персонажей с помощью эксклюзивных костюмов и предметов"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Особенности игры</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
