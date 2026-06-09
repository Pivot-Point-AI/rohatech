import Image from "next/image";
import styles from "./VideoGallery.module.css";

const images = [
  "/images/gallery/gallery1.webp",
  "/images/gallery/gallery2.webp",
  "/images/gallery/gallery3.webp",
  "/images/gallery/gallery4.webp",
];

export default function VideoGallery() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section className="block md:hidden bg-white py-10 overflow-hidden">
      <div className="flex gap-3 overflow-x-auto px-5 pb-4 no-scrollbar">
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-64 h-36 rounded-xl overflow-hidden">
            <Image src={src} alt={`Gallery ${i + 1}`} width={256} height={144} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="text-center px-5 mt-6">
        <h2 className={`text-2xl font-normal text-black mb-2 ${styles.mobileHeading}`}>Fintech</h2>
        <p className="text-sm text-black leading-relaxed">Driving innovation in banking and financial services through secure infrastructure, digital platforms, and intelligent integration.</p>
      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section className={`hidden md:block relative w-full overflow-hidden bg-white ${styles.desktopSection}`}>

      <div className={`absolute overflow-hidden ${styles.carouselContainer}`}>
        <div className={styles.carouselTrack}>
          {[...images, ...images].map((src, i) => (
            <div key={i} className={styles.carouselCard}>
              <Image
                src={src}
                alt={`Gallery ${(i % images.length) + 1}`}
                width={672}
                height={378}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>
      </div>

      <h2 className={`absolute left-1/2 -translate-x-1/2 text-black font-normal text-center ${styles.galleryHeading}`}>
        Fintech
      </h2>

      <p className={`absolute text-black font-normal text-center ${styles.galleryDesc}`}>
        Driving innovation in banking and financial services through secure
        infrastructure, digital platforms, and intelligent integration.
      </p>

    </section>
    </>
  );
}
