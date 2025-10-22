"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const handleContactClick = () => {
  const email = "getpersonal@veeville.com";
  const subject = "Contact from Dhool Website";
  const body = "Hello, I would like to get in touch regarding Dhool.";

  // Try to open mailto link
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  try {
    window.location.href = mailtoLink;
  } catch (error) {
    console.error("Failed to open email client:", error);
    // Fallback: copy email to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email copied to clipboard: ${email}`);
      });
    } else {
      alert(`Please contact us at: ${email}`);
    }
  }
};

const LogoGridPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        {/* Main Heading - Responsive Layout */}
        <div className="relative mb-6 lg:mb-8">
          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex justify-between items-start">
            {/* Logo Section - Left */}
            <div className="flex justify-start">
              <Image
                src="/DhoolLogo.png"
                alt="Dhool Logo"
                width={100}
                height={100}
                className="object-contain w-32 sm:w-40"
                style={{ height: "auto" }}
              />
            </div>

            {/* Title and Contact Section - Right */}
            <div className="flex flex-col items-end gap-3 sm:gap-4">
              {/* Contact Button */}
              <button
                onClick={handleContactClick}
                className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 rounded-full transition-all duration-200 cursor-pointer"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </button>

              {/* Title Section */}
              <div className="text-right">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--font-raleway), sans-serif",
                    color: "#C06B3F",
                    letterSpacing: "0.15em",
                  }}
                >
                  dhool
                </h1>
                <p
                  className="text-xs sm:text-sm md:text-base font-medium mt-2 text-center"
                  style={{
                    color: "#C06B3F",
                    letterSpacing: "0.15em",
                    fontFamily: "sans-serif",
                  }}
                >
                  FROM DUST TO DAWN
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-start lg:mb-14">
            {/* Logo Section */}
            <div className="flex justify-start">
              <Image
                src="/DhoolLogo.png"
                alt="Dhool Logo"
                width={100}
                height={100}
                className="object-contain w-52"
                style={{ height: "auto" }}
              />
            </div>

            {/* Title and Contact Section */}
            <div className="flex flex-col items-end gap-6">
              {/* Contact Button */}
              <button
                onClick={handleContactClick}
                className="inline-flex items-center px-5 py-2.5 text-base font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 rounded-full transition-all duration-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </button>

              {/* Title Section */}
              <div className="text-right">
                <h1
                  className="text-7xl xl:text-8xl font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--font-raleway), sans-serif",
                    color: "#C06B3F",
                    letterSpacing: "0.15em",
                  }}
                >
                  dhool
                </h1>
                <p
                  className="text-lg font-medium -mt-5 text-center"
                  style={{
                    color: "#C06B3F",
                    letterSpacing: "0.15em",
                    fontFamily: "sans-serif",
                  }}
                >
                  FROM DUST TO DAWN
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel - Responsive */}
        <div className="w-screen mb-6 sm:mb-8 -ml-4 sm:-ml-6 lg:-ml-8 -mr-4 sm:-mr-6 lg:-mr-8">
          <Marquee
            className="[--duration:30s] [--gap:0] !p-0"
            pauseOnHover={true}
            repeat={3}
          >
            {[
              "/images/2-01.jpg",
              "/images/2-02.jpg",
              "/images/2-03.jpg",
              "/images/2-04.jpg",
              "/images/2-05.jpg",
              "/images/2-06.jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] w-auto shrink-0 overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Dhool showcase ${index + 1}`}
                  width={0}
                  height={420}
                  className="h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] w-auto object-contain"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 420px"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Responsive Content Layout */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Column 1 */}
            <div className="space-y-4 md:space-y-6">
              {/* Namaste Greeting */}
              <div className="space-y-3">
                <p
                  className="text-3xl sm:text-4xl md:text-[90px] text-foreground"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                  }}
                >
                  Namaste!
                </p>
              </div>

              {/* Main Description */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Dhool is a sustainable marketplace celebrating conscious
                  creation through artisanal crafts and eco-friendly products
                  from around the world.
                </p>
              </div>

              {/* Story Section */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  At Dhool, we transform the fundamental elements of our Earth
                  into extraordinary creations. True to our Sanskrit name
                  meaning &apos;dust,&apos; we believe in the infinite potential
                  of raw materials – whether clay from ancient riverbeds, fibers
                  from age-old plants, or discarded items awaiting rebirth.
                </p>
              </div>

              {/* Mission Section Part 1 */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  We are building more than a marketplace for sustainable
                  products. We are creating a global stage to celebrate the
                  masters of traditional crafts and innovative artisans who
                  breathe life into conscious creation.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4 md:space-y-6">
              {/* Mission Section Part 2 */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Every piece we curate will tell a story – of skilled hands
                  preserving centuries-old techniques, of visionaries
                  reimagining waste into wonder, and of communities keeping
                  their cultural heritage alive.
                </p>
              </div>

              {/* Vision Section Part 1 */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our mission is ambitious yet clear. We aim to bridge the gap
                  between extraordinary makers and mindful consumers, ensuring
                  that the art and wisdom of craftspeople from remote villages
                  to urban studios reaches homes and hearts – first across our
                  nation, then worldwide.
                </p>
              </div>

              {/* Vision Section Part 2 */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  In doing so, we&apos;re not just reducing our ecological
                  footprint – we&apos;re preserving the old world in all its
                  beauty and charm while ushering in a new dawn of responsible
                  living.
                </p>
              </div>

              {/* Call to Action Section Part 1 */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  As we embark on this journey to build a platform that honors
                  both tradition and our planet, we invite you to be part of our
                  story.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4 md:space-y-6">
              {/* Call to Action Section Part 2 */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Are you searching for products with soul and sustainability?
                  Are you an artist or craftsperson ready to share your
                  creations with a growing community? Do you know talented
                  makers whose work deserves recognition?
                </p>
              </div>

              {/* Call to Action Section Part 3 */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Or are you simply drawn to our vision of preserving artisanal
                  heritage while protecting our Earth?
                </p>
              </div>

              {/* JOIN US */}
              <div className="space-y-3">
                <p className="text-xl text-foreground leading-relaxed font-bold">
                  JOIN US
                </p>
              </div>

              {/* Final Call to Action */}
              <div className="space-y-3">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Connect with us now. Together, let&apos;s build a movement
                  where every purchase brings joy to your life while supporting
                  both the maker and the planet – from dust to dawn.
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Horizontal Rule */}
          <div className="mt-6 sm:mt-8 pt-4 border-t border-border">
            <p className="text-base text-muted-foreground font-medium text-center">
              A{" "}
              <a
                href="https://veeville.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.3rem",
                }}
              >
                Veeville.
              </a>{" "}
              Company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGridPage;
