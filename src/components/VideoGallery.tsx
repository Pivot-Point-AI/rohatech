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
    <section className="block md:hidden bg-white py-6 overflow-hidden">
      <div className="px-5 mb-6">
        <h2 className={`text-3xl font-normal text-black mb-2 ${styles.mobileHeading}`}>Fintech</h2>
        <p className="text-sm text-black/60 leading-relaxed">Driving innovation in banking and financial services through secure infrastructure, digital platforms, and intelligent integration.</p>
      </div>
      <div className="overflow-hidden">
        <div className={styles.mobileTrack}>
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-72 h-44 rounded-2xl overflow-hidden shadow-sm">
              <Image src={src} alt={`Gallery ${(i % images.length) + 1}`} width={288} height={176} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
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
