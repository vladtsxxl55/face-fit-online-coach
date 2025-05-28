
import { Check, Star, Crown, Gift } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Базовый",
      icon: Star,
      price: "4,990",
      originalPrice: "7,990",
      description: "Основы гимнастики лица",
      features: [
        "20 базовых упражнений",
        "Видео уроки в HD",
        "Методическое пособие",
        "Доступ на 6 месяцев",
        "Поддержка в чате"
      ],
      popular: false,
      color: "from-gray-400 to-gray-500"
    },
    {
      name: "Стандарт",
      icon: Crown,
      price: "7,990",
      originalPrice: "12,990",
      description: "Полная программа преображения",
      features: [
        "40+ упражнений всех уровней",
        "Бонусные техники массажа",
        "Индивидуальный план занятий",
        "Пожизненный доступ",
        "Приоритетная поддержка",
        "Закрытое сообщество",
        "Ежемесячные вебинары"
      ],
      popular: true,
      color: "from-rose-500 to-pink-500"
    },
    {
      name: "VIP",
      icon: Gift,
      price: "12,990",
      originalPrice: "19,990",
      description: "Максимальный результат с поддержкой",
      features: [
        "Все из пакета Стандарт",
        "Персональная консультация (60 мин)",
        "Индивидуальный план питания",
        "Гимнастика для тела (бонус)",
        "Косметология в домашних условиях",
        "Прямая связь с автором курса",
        "Сертификат о прохождении"
      ],
      popular: false,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Выберите свой пакет
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Инвестируйте в свою красоту и молодость. Все пакеты включают гарантию возврата денег в течение 30 дней.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full">
            <span>🔥</span>
            <span className="font-semibold">Акция до конца месяца - скидка до 40%!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-4 ring-rose-500 ring-opacity-50 scale-105' : 'hover:scale-105'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Популярный выбор
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-600">₽</span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">{plan.originalPrice} ₽</div>
                  <div className="text-sm text-green-600 font-semibold">
                    Экономия {parseInt(plan.originalPrice) - parseInt(plan.price)} ₽
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Выбрать пакет
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                30 дней гарантии возврата денег
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Почему стоит начать сегодня?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold text-gray-900">Экономия</h4>
                <p className="text-sm text-gray-600">Дешевле, чем одна процедура у косметолога</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⏰</div>
                <h4 className="font-semibold text-gray-900">Быстрый результат</h4>
                <p className="text-sm text-gray-600">Первые изменения уже через 2 недели</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="font-semibold text-gray-900">Гарантия</h4>
                <p className="text-sm text-gray-600">100% возврат денег, если не понравится</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
