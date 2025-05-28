
import { CheckCircle, Clock, Video, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Video,
      title: "40+ видео уроков",
      description: "Пошаговые инструкции в HD качестве"
    },
    {
      icon: Clock,
      title: "15-20 минут в день",
      description: "Удобное расписание для занятых людей"
    },
    {
      icon: BookOpen,
      title: "Методические материалы",
      description: "Подробные инструкции и схемы упражнений"
    },
    {
      icon: CheckCircle,
      title: "Пожизненный доступ",
      description: "Занимайтесь в своем темпе без ограничений"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            О нашей программе
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексная система упражнений для лица, разработанная профессиональными 
            косметологами и фитнес-тренерами
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Почему именно наша методика?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Наша авторская программа объединяет лучшие техники фейсфитнеса, 
                лимфодренажного массажа и йоги для лица. Все упражнения научно 
                обоснованы и проверены на тысячах учениц.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Укрепление мышц лица и шеи",
                "Улучшение кровообращения и лимфотока",
                "Разглаживание морщин и профилактика старения",
                "Подтяжка овала лица естественным способом",
                "Снятие напряжения и стресса"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-rose-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">🧘‍♀️</div>
                <h4 className="text-2xl font-bold text-gray-800">
                  Результат уже через 14 дней
                </h4>
                <p className="text-gray-600">
                  При регулярном выполнении упражнений
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
