
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type Testimonial = {
  text: string;
  author: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <Card className="bg-white">
    <CardContent className="pt-6">
      <div className="mb-4 text-yellow-500 flex">
        {[...Array(5)].map((_, i) => (
          <Icon key={i} name="Star" />
        ))}
      </div>
      <p className="mb-4 italic text-gray-700">"{testimonial.text}"</p>
      <p className="text-right font-medium">— {testimonial.author}</p>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    { text: "Лучшая мобильная игра, в которую я когда-либо играл! Сбалансированные персонажи и быстрые матчи.", author: "Алексей К." },
    { text: "Каждый день захожу в игру. Разнообразие режимов не дает заскучать, а команда разработчиков постоянно добавляет что-то новое!", author: "Марина П." },
    { text: "Играю с друзьями уже полгода. Прекрасная игра для совместных вечеров, при этом серьезная соревновательная составляющая.", author: "Дмитрий В." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Что говорят игроки</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
