
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Смирнова",
      age: "34 года",
      image: "👩‍💼",
      rating: 5,
      text: "Потрясающие результаты! За 3 месяца лицо стало более подтянутым, морщинки разгладились. Чувствую себя на 10 лет моложе!",
      before: "До: видимые морщины",
      after: "После: гладкая кожа"
    },
    {
      name: "Мария Петрова",
      age: "42 года", 
      image: "👩",
      rating: 5,
      text: "Никогда не думала, что упражнения для лица могут быть настолько эффективными. Овал лица подтянулся, кожа стала упругой.",
      before: "До: дряблость кожи",
      after: "После: четкий овал"
    },
    {
      name: "Елена Козлова",
      age: "28 лет",
      image: "👱‍♀️",
      rating: 5,
      text: "Отличная профилактика старения! Начала заниматься для предотвращения морщин. Очень довольна результатом и процессом.",
      before: "До: первые морщинки",
      after: "После: гладкая кожа"
    },
    {
      name: "Ольга Иванова",
      age: "45 лет",
      image: "👩‍🦳",
      rating: 5,
      text: "Замечательная альтернатива ботоксу! Результат естественный, без побочных эффектов. Рекомендую всем подругам!",
      before: "До: глубокие морщины",
      after: "После: заметное улучшение"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Отзывы наших учениц
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные истории преображения от женщин, которые изменили свою жизнь с помощью гимнастики лица
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 hover:from-rose-100 hover:to-pink-100 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">{review.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.age}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              <Quote className="text-rose-300 mb-2" size={20} />
              <p className="text-gray-700 text-sm mb-4 italic">{review.text}</p>
              
              <div className="space-y-2 text-xs">
                <div className="text-red-600">❌ {review.before}</div>
                <div className="text-green-600">✅ {review.after}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full">
            <Star className="fill-current" size={20} />
            <span className="font-semibold">4.9/5 средняя оценка</span>
            <span>•</span>
            <span>2847+ отзывов</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
