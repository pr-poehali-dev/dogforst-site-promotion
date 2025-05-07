
import Icon from "@/components/ui/icon";

type FooterColumnProps = {
  title: string;
  links: { text: string; href: string }[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    <h4 className="font-bold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-gray-300 hover:text-[#8B5CF6]">{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => {
  const socialIcons = [
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Youtube", href: "#" },
    { name: "Twitch", href: "#" }
  ];

  return (
    <div>
      <h4 className="font-bold mb-4">Социальные сети</h4>
      <div className="flex gap-4">
        {socialIcons.map((social, index) => (
          <a key={index} href={social.href} className="text-gray-300 hover:text-[#8B5CF6]">
            <Icon name={social.name} size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const companyLinks = [
    { text: "О компании", href: "#" },
    { text: "Наша команда", href: "#" },
    { text: "Вакансии", href: "#" },
    { text: "Новости", href: "#" }
  ];

  const supportLinks = [
    { text: "FAQ", href: "#" },
    { text: "Служба поддержки", href: "#" },
    { text: "Форум", href: "#" },
    { text: "Сообщить о баге", href: "#" }
  ];

  return (
    <footer className="bg-[#403E43] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">DogForst</h3>
            <p className="text-gray-300">
              Разрабатываем увлекательные игры с 2020 года. Наша миссия — создавать миры, в которых игроки чувствуют себя как дома.
            </p>
          </div>
          <FooterColumn title="Информация" links={companyLinks} />
          <FooterColumn title="Поддержка" links={supportLinks} />
          <SocialLinks />
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DogForst. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
