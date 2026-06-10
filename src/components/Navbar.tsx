"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { label: "About Us",     href: "/about",        dropdown: false },
  { label: "Services",     href: "/services",      dropdown: true  },
  { label: "Solutions",    href: "/solutions",     dropdown: false },
  { label: "Contact",      href: "/contact",       dropdown: false },
  { label: "Testimonials", href: "/testimonials",  dropdown: false },
  { label: "Careers",      href: "/careers",       dropdown: false },
];

const slugify = (title: string) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const serviceLinks = [
  "Digital Marketing",
  "Application Modernization",
  "Application Integration",
  "UI/UX Design",
  "Web & Full Stack",
].map((label) => ({ label, href: `/services#${slugify(label)}` }));


export default function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const bgClass = scrolled
    ? isDark
      ? "bg-black/70 backdrop-blur-md"
      : "bg-white/90 backdrop-blur-md"
    : "bg-transparent";

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${bgClass} ${styles.header}`}
    >
      {/* ── Desktop bar (lg+) ── */}
      <nav className={`hidden lg:block relative w-full ${styles.desktopNav}`}>

        {/* Logo */}
        <Link href="/" className={`absolute ${styles.logo}`}>
          <img
            src={isDark ? "/images/logowhite.png" : "/images/rohatech.png"}
            alt="RohaTech"
            width={160}
            height={40}
            className="object-contain"
         
          />
        </Link>

        {/* Nav links */}
        <ul className={`absolute top-1/2 -translate-y-1/2 flex items-center ${styles.navList}`}>
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <li
                key={link.label}
                className="flex-none relative"
                onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center font-medium whitespace-nowrap transition-colors ${styles.navLink} ${
                    active
                      ? isDark
                        ? styles.navLinkActiveDark
                        : styles.navLinkActiveLight
                      : isDark
                        ? "text-white hover:text-white/75"
                        : "text-black hover:text-black/60"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className={styles.dropdownIcon}
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke={isDark ? "white" : "black"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {link.dropdown && (
                  <ul
                    className={`${styles.dropdownMenu} ${isDark ? styles.dropdownMenuDark : styles.dropdownMenuLight} ${servicesOpen ? styles.dropdownMenuOpen : ""}`}
                  >
                    {serviceLinks.map((svc, i) => (
                      <li key={svc.label}>
                        <Link
                          href={svc.href}
                          className={`${styles.dropdownMenuItem} ${isDark ? styles.dropdownMenuItemDark : styles.dropdownMenuItemLight}`}
                          onClick={() => setServicesOpen(false)}
                          style={{ transitionDelay: servicesOpen ? `${i * 35}ms` : "0ms" }}
                        >
                          <span className={styles.dropdownMenuItemDot} aria-hidden="true" />
                          <span>{svc.label}</span>
                          <svg
                            className={styles.dropdownMenuItemArrow}
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M6 4L10 8L6 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Search pill */}
        <button
          onClick={() => router.push("/services")}
          className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors ${
            isDark ? "bg-white hover:bg-white/90" : "bg-black hover:bg-black/80"
          } ${styles.searchBtn}`}
          aria-label="Search"
        >
          <svg
            className={styles.searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {isDark ? (
              <>
                <circle cx="10.5" cy="10.5" r="6.5" fill="black" />
                <circle cx="10.5" cy="10.5" r="5"   fill="white" />
                <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <circle cx="10.5" cy="10.5" r="6.5" fill="white" />
                <circle cx="10.5" cy="10.5" r="5"   fill="black" />
                <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile bar */}
      <div className={`lg:hidden flex items-center justify-between px-6 h-14 ${isDark ? "bg-black/80 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"}`}>
        <Link href="/" className="flex items-center">
          <Image
            src={isDark ? "/images/logowhite.png" : "/images/rohatech.png"}
            alt="RohaTech"
            width={120}
            height={32}
            className="object-contain"
            style={{ width: "120px", height: "32px" }}
          />
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/services")}
            className={`p-2 ${isDark ? "text-white" : "text-black"}`}
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
              <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 ${isDark ? "text-white" : "text-black"}`}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 mb-1.5 ${isDark ? "bg-white" : "bg-black"}`} />
            <span className={`block w-6 h-0.5 mb-1.5 ${isDark ? "bg-white" : "bg-black"}`} />
            <span className={`block w-4 h-0.5 ${isDark ? "bg-white" : "bg-black"}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className={`lg:hidden px-6 py-6 border-t ${isDark ? "bg-black/95 border-white/10" : "bg-white border-black/10"}`}>
          <ul className="flex flex-col gap-5">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`flex items-center gap-2 font-medium text-base w-full transition-colors ${
                          active
                            ? "text-[#78EB54]"
                            : isDark ? "text-white hover:text-white/70" : "text-black hover:text-black/60"
                        }`}
                        aria-expanded={mobileServicesOpen}
                      >
                        {link.label}
                        <svg
                          width="20" height="20"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          className={`ml-auto transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke={isDark ? "white" : "black"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {mobileServicesOpen && (
                        <ul className={`flex flex-col mt-3 rounded-xl overflow-hidden ${isDark ? "bg-white/8 border border-white/10" : "bg-black/5 border border-black/10"}`}>
                          {serviceLinks.map((svc) => (
                            <li key={svc.label} className={`border-b last:border-b-0 ${isDark ? "border-white/8" : "border-black/8"}`}>
                              <Link
                                href={svc.href}
                                className={`flex items-center gap-3 px-4 py-3 text-sm font-normal transition-colors ${isDark ? "text-white/80 hover:text-white hover:bg-white/5" : "text-black/70 hover:text-black hover:bg-black/5"}`}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#78EB54] flex-shrink-0" />
                                {svc.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`font-medium text-base transition-colors ${
                        active
                          ? "text-[#78EB54]"
                          : isDark ? "text-white hover:text-white/70" : "text-black hover:text-black/60"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>

    </>
  );
}
