const marqueeImages = [
  { src: "https://www.patientclick.com/wp-content/uploads/2022/12/sdbj.jpg", alt: "Natural" },
  { src: "https://www.patientclick.com/wp-content/uploads/2022/12/ehr.jpg", alt: "Natural" },
  { src: "https://www.patientclick.com/wp-content/uploads/2022/12/dragon-2.jpg", alt: "Natural" },
  { src: "https://www.patientclick.com/wp-content/uploads/2022/12/ftr.jpg", alt: "Natural" },
  { src: "https://www.patientclick.com/wp-content/uploads/2022/12/pbj.jpg", alt: "Natural" },
  { src: "https://www.patientclick.com/wp-content/uploads/2022/12/ccb.jpg", alt: "Natural" },
];

export default function Marquee() {
  return (
    <section className="bg-muted/20 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              width="120"
              height="80"
              alt={image.alt}
              className="mx-6 object-contain"
            />
          ))}
          {/* Duplicate images for seamless loop */}
          {marqueeImages.map((image, index) => (
            <img
              key={`duplicate-${index}`}
              src={image.src}
              width="120"
              height="80"
              alt={image.alt}
              className="mx-6 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
} 