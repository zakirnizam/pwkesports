import { DistWinners,DistRunners,DistThird } from '../images';
import '../index.css';


const newsImages: string[] = [
DistWinners,
DistRunners,
DistThird,
];

const NewsCarousel = () => {
  const length = newsImages.length;

  if (!Array.isArray(newsImages) || length === 0) {
    return null;
  }

  return (
    <section id="news" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">News</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 text-center">
          Stay updated with the latest news, announcements, and highlights from PWK Esports. Check out our recent events, achievements, and important updates below!
        </p>
        <div className="overflow-x-auto flex space-x-4 custom-scrollbar pb-4">
          {newsImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`News ${idx + 1}`}
              className="rounded-xl shadow-lg max-h-96 object-contain flex-shrink-0"
              style={{ width: '80vw', maxWidth: 350 }}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
