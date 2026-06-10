import Image from "next/image";
import styles from "./Testimonials.module.css";

const avatars = [
  { w: 125, h: 123, left: 161,  top: 215.5, img: "/images/testimonials/avatar1.png" },
  { w: 74,  h: 74,  left: 71,   top: 430.5, img: "/images/testimonials/avatar2.png" },
  { w: 216, h: 216, left: 204,  top: 464.5, img: "/images/testimonials/avatar3.png" },
  { w: 123, h: 123, left: 38,   top: 680.5, img: "/images/testimonials/avatar4.png" },
  { w: 146, h: 146, left: 1643, top: 215.5, img: "/images/testimonials/avatar5.png" },
  { w: 90,  h: 90,  left: 1478, top: 294.5, img: "/images/testimonials/avatar6.png" },
  { w: 112, h: 112, left: 1500, top: 447.5, img: "/images/testimonials/avatar7.png" },
  { w: 295, h: 295, left: 1587, top: 569.5, img: "/images/testimonials/avatar8.png" },
];

export default function Testimonials() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section id="testimonials" className="block md:hidden bg-white px-5 py-14 text-center">
      <p className="text-xs uppercase text-black mb-2 tracking-wide">Our Clients</p>
      <h2 className={`text-2xl font-normal text-black mb-6 ${styles.mobileHeading}`}>What our customer says About Us</h2>

      {/* Avatar row */}
      <div className="flex justify-center items-end gap-3 mb-6">
        {[
          { w: 125, h: 123, img: "/images/testimonials/avatar1.png" },
          { w: 74,  h: 74,  img: "/images/testimonials/avatar2.png" },
          { w: 216, h: 216, img: "/images/testimonials/avatar3.png" },
          { w: 90,  h: 90,  img: "/images/testimonials/avatar6.png" },
        ].map(({ w, h, img }, i) => (
          <div key={i} className="rounded-full overflow-hidden bg-gray-200 flex-shrink-0" style={{ width: 52, height: 52 }}>
            <Image src={img} alt={`Client ${i + 1}`} width={w} height={h} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      <div className="bg-[#F3F4F6] rounded-3xl p-6 text-left">
        <span className="text-6xl text-black/20 font-serif leading-none">&ldquo;</span>
        <p className="text-sm text-black leading-relaxed mt-2">Working with RohaTech was a game changer for our organization. Their technical excellence, structured delivery approach, and commitment to quality exceeded our expectations. The level of expertise and reliability they bring to digital infrastructure projects is truly impressive.</p>
        <span className="block text-right text-6xl text-black/20 font-serif leading-none">&rdquo;</span>
      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section
      id="testimonials"
      className={`hidden md:block relative w-full overflow-hidden bg-white ${styles.desktopSection}`}
    >
      {/* Avatar circles — width/height/left/top are computed from data, kept inline */}
      {avatars.map(({ w, h, left, top, img }, i) => (
        <div
          key={i}
          className="absolute rounded-full overflow-hidden bg-gray-200"
          style={{
            width:  `${(w / 1920 * 100).toFixed(3)}vw`,
            height: `${(h / 1920 * 100).toFixed(3)}vw`,
            left:   `${(left / 1920 * 100).toFixed(3)}vw`,
            top:    `${(top  / 1920 * 100).toFixed(3)}vw`,
          }}
        >
          <Image
            src={img}
            alt={`Client ${i + 1}`}
            width={w}
            height={h}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      <p className={`absolute left-1/2 -translate-x-1/2 text-black font-normal text-center flex items-center justify-center ${styles.ourClientsLabel}`}>
        Our Clients
      </p>

      <h2 className={`absolute text-black font-normal text-center ${styles.heading}`}>
        What our customer says About Us
      </h2>

      <div className={`absolute ${styles.card}`} />

      <div className={`absolute pointer-events-none select-none ${styles.openingQuote}`}>
        &#8220;
      </div>

      <p className={`absolute text-black font-normal text-center ${styles.quoteText}`}>
        Working with RohaTech was a game changer for our organization. Their
        technical excellence, structured delivery approach, and commitment to
        quality exceeded our expectations. The level of expertise and reliability
        they bring to digital infrastructure projects is truly impressive.
      </p>

      <div className={`absolute pointer-events-none select-none ${styles.closingQuote}`}>
        &#8220;
      </div>

    </section>
    </>
  );
}
