
import { Play, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium">
                ✨ Эксклюзивная методика
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Гимнастика лица
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500"> онлайн</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Получите подтянутое, молодое лицо без операций и инъекций. 
                Авторская методика с доказанной эффективностью.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <Users className="text-rose-500" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">5000+</p>
                  <p className="text-sm text-gray-600">довольных учениц</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <Star className="text-rose-500" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">4.9/5</p>
                  <p className="text-sm text-gray-600">средняя оценка</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <Award className="text-rose-500" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">15 лет</p>
                  <p className="text-sm text-gray-600">опыта</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-rose-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
                Начать обучение
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-rose-300 transition-all">
                <Play size={20} />
                <span>Посмотреть видео</span>
              </button>
            </div>

            <p className="text-sm text-gray-500">
              💝 Первые результаты уже через 2 недели • 30 дней гарантии возврата денег
            </p>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-300 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-3xl">👩</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Елена Красавина</h3>
                      <p className="text-gray-600">Сертифицированный тренер</p>
                      <p className="text-sm text-rose-500 mt-2">Автор методики</p>
                    </div>
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

export default Hero;
