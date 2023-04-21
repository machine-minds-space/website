import Image from 'next/image';
import Link from 'next/link';

// Add your image data here
const imageData = [
  { src: '/sparky/sparky-apple.png', caption: 'Apple' },
  { src: '/sparky/sparky-berlin.png', caption: 'Berlin' },
  { src: '/sparky/sparky-der-schrei.png', caption: 'Scream' },
  { src: '/sparky/sparky-egg.png', caption: 'Egg' },
  { src: '/sparky/sparky-hh.png', caption: 'Hamburg' },
  { src: '/sparky/sparky-kueken.png', caption: 'Hatchling' },
  { src: '/sparky/sparky-pumpkin.png', caption: 'Pumpkin' },
  { src: '/sparky/sparky-rock.png', caption: 'Rock' },
  { src: '/sparky/sparky-statue.png', caption: 'Statue' },
  { src: '/sparky/sparky-vase.png', caption: 'Vase' },
  { src: '/sparky/sparky-dj.png', caption: 'DJ' },
  { src: '/sparky/sparky-geese-offspring.png', caption: 'Geese offspring' },
  { src: '/sparky/sparky-grater.png', caption: 'Grater' },
  { src: '/sparky/sparky-pepper.png', caption: 'Pepper' },
  { src: '/sparky/sparky-play-horse.png', caption: 'Play Horse' },
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-semibold text-center py-8">Meet Sparky (aka Sparky Spark)</h1>
      <div className="text-center mb-8">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
      <div
        className="masonry-grid grid grid-cols-3 gap-4"
      >
        {imageData.map((image, index) => (
          <div key={index} className="grid-item">
            <div className="relative h-0 pb-[100%]">
              <Image
                src={image.src}
                alt={image.caption}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            {/* <p className="text-center mt-2">{image.caption}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}