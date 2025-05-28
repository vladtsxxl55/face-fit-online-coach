
import { TrendingUp, Heart, Shield, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Видимые результаты",
      description: "Подтяжка кожи, уменьшение морщин, улучшение тонуса",
      stats: "89% учениц видят результат за 2 недели"
    },
    {
      icon: Heart,
      title: "Безопасность",
      description: "Натуральная альтернатива инъекциям и операциям",
      stats: "0% побочных эффектов"
    },
    {
      icon: Shield,
      title: "Долгосрочный эффект",
      description: "Накопительный результат, который сохраняется годами",
      stats: "Эффект до 5 лет при регулярных занятиях"
    },
    {
      icon: Clock,
      title: "Экономия времени",
      description: "Занимайтесь дома в удобное время",
      stats: "Всего 15-20 минут в день"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Преимущества гимнастики лица
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Научно доказанная эффективность и безопасность методики
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <p className="text-sm text-rose-500 font-semibold">{benefit.stats}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Что говорят исследования?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-rose-500 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Университет Northwestern</h4>
                    <p className="text-gray-600">20-недельное исследование показало видимое омоложение участниц на 3 года</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-rose-500 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Журнал JAMA Dermatology</h4>
                    <p className="text-gray-600">Упражнения для лица увеличивают объем мышц и улучшают контуры</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-rose-500 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Клинические испытания</h4>
                    <p className="text-gray-600">92% участниц отметили улучшение тонуса кожи через 8 недель</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">📊</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Научно доказано
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-rose-500">92%</div>
                    <div className="text-sm text-gray-600">улучшение тонуса</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-rose-500">87%</div>
                    <div className="text-sm text-gray-600">разглаживание морщин</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-rose-500">94%</div>
                    <div className="text-sm text-gray-600">подтяжка овала</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-rose-500">3</div>
                    <div className="text-sm text-gray-600">года омоложения</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
