
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигация */}
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

      {/* Основной герой-блок */}
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

      {/* Особенности */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Особенности игры</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="mb-4 text-[#8B5CF6]">
                  <Icon name="Users" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">Многопользовательские бои</h3>
                <p className="text-gray-600">Сражайтесь в динамичных 3 на 3 битвах с игроками со всего мира</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="mb-4 text-[#8B5CF6]">
                  <Icon name="Trophy" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">Рейтинговая система</h3>
                <p className="text-gray-600">Поднимайтесь в таблице лидеров и открывайте эксклюзивные награды</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="mb-4 text-[#8B5CF6]">
                  <Icon name="PaintBucket" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">Уникальные скины</h3>
                <p className="text-gray-600">Кастомизируйте своих персонажей с помощью эксклюзивных костюмов и предметов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Персонажи */}
      <section id="characters" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Персонажи</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Рекс", role: "Танк", image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=300&h=300" },
              { name: "Луна", role: "Снайпер", image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=300&h=300" },
              { name: "Макс", role: "Штурмовик", image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=300&h=300" },
              { name: "Белла", role: "Поддержка", image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&q=80&w=300&h=300" },
            ].map((character, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
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
            ))}
          </div>
          <div className="text-center mt-10">
            <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">Открыть всех персонажей</Button>
          </div>
        </div>
      </section>

      {/* Геймплей */}
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
                {[
                  "Разные игровые режимы: захват кристаллов, охота за звездами, футбол и многое другое",
                  "Прокачивайте своих персонажей и открывайте новые способности",
                  "Создавайте клан с друзьями и участвуйте в командных турнирах"
                ].map((item, index) => (
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

      {/* Отзывы */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Что говорят игроки</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Лучшая мобильная игра, в которую я когда-либо играл! Сбалансированные персонажи и быстрые матчи.", author: "Алексей К." },
              { text: "Каждый день захожу в игру. Разнообразие режимов не дает заскучать, а команда разработчиков постоянно добавляет что-то новое!", author: "Марина П." },
              { text: "Играю с друзьями уже полгода. Прекрасная игра для совместных вечеров, при этом серьезная соревновательная составляющая.", author: "Дмитрий В." },
            ].map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4 text-yellow-500 flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" />
                    ))}
                  </div>
                  <p className="mb-4 italic text-gray-700">"{review.text}"</p>
                  <p className="text-right font-medium">— {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Скачать */}
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

      {/* Футер */}
      <footer className="bg-[#403E43] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">DogForst</h3>
              <p className="text-gray-300">
                Разрабатываем увлекательные игры с 2020 года. Наша миссия — создавать миры, в которых игроки чувствуют себя как дома.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#8B5CF6]">О компании</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#8B5CF6]">Наша команда</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#8B5CF6]">Вакансии</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#8B5CF6]">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#8B5CF6]">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#8B5CF6]">Служба поддержки</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#8B5CF6]">Форум</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#8B5CF6]">Сообщить о баге</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-[#8B5CF6]">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#8B5CF6]">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#8B5CF6]">
                  <Icon name="Youtube" size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#8B5CF6]">
                  <Icon name="Twitch" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DogForst. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
