
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    // Здесь будет логика отправки формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Остались вопросы? Мы с радостью поможем вам выбрать подходящую программу и ответим на все вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Как с нами связаться
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                    <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@facegym.ru</p>
                    <p className="text-sm text-gray-500">Ответим в течение 2 часов</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                    <p className="text-sm text-gray-500">Быстрые ответы и консультации</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Время работы</p>
                    <p className="text-gray-600">Пн-Вс: 9:00 - 21:00</p>
                    <p className="text-sm text-gray-500">Московское время</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Бесплатная консультация
              </h4>
              <p className="text-gray-600 mb-4">
                Запишитесь на 15-минутную консультацию, где мы:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                  <span>Проанализируем ваше лицо</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                  <span>Подберем подходящие упражнения</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                  <span>Ответим на все вопросы</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Напишите нам
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="Введите ваш email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none resize-none"
                  placeholder="Расскажите, что вас интересует..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Отправить сообщение</span>
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Обязательные поля. Мы не передаем ваши данные третьим лицам.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
