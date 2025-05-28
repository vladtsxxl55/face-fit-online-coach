
import { Heart, Instagram, Youtube, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Логотип и описание */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Face Gymnastics</h3>
                <p className="text-xs text-rose-400">Онлайн программа</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Ведущая онлайн школа гимнастики лица в России. 
              Помогаем женщинам сохранить молодость и красоту естественным способом.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-rose-400 transition-colors">О программе</a></li>
              <li><a href="#benefits" className="hover:text-rose-400 transition-colors">Преимущества</a></li>
              <li><a href="#reviews" className="hover:text-rose-400 transition-colors">Отзывы</a></li>
              <li><a href="#pricing" className="hover:text-rose-400 transition-colors">Цены</a></li>
              <li><a href="#contact" className="hover:text-rose-400 transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Программы */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Программы</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Базовый курс</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Стандарт</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">VIP программа</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Персональные занятия</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Групповые курсы</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@facegym.ru</span>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500">
                  Время работы:<br />
                  Пн-Вс: 9:00 - 21:00 (МСК)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Face Gymnastics. Все права защищены.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-400 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Условия использования</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Возврат средств</a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Сделано с</span>
              <Heart className="text-rose-400 fill-current" size={16} />
              <span>для красоты</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
