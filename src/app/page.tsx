import Image from "next/image";

const LogoGridPage = () => {
  const logos = [
    { src: "/logos/darkwood.jpg", alt: "Dark Wood Logo" },
    { src: "/logos/green.jpg", alt: "Green Logo" },
    { src: "/logos/lightwood.jpg", alt: "Light Wood Logo" },
    { src: "/logos/yellow.jpg", alt: "Yellow Logo" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        {/* Mobile/Tablet Layout - Stacked */}
        <div className="block lg:hidden space-y-8">
          {/* Image Grid - Top */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="aspect-square relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content - Bottom */}
          <div className="p-4">
            <div className="grid grid-cols-1 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Main Heading */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                    Dhool
                  </h1>
                  <p className="text-base sm:text-lg text-primary font-medium tracking-wide">
                    From Dust to Dawn
                  </p>
                </div>

                {/* Main Description */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dhool is a sustainable marketplace celebrating conscious
                    creation through artisanal crafts and eco-friendly products
                    from around the world.
                  </p>
                </div>

                {/* Story Section */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    At Dhool, we transform the fundamental elements of our Earth
                    into extraordinary creations. True to our Sanskrit name
                    meaning &apos;dust,&apos; we believe in the infinite
                    potential of raw materials – whether clay from ancient
                    riverbeds, fibers from age-old plants, or discarded items
                    awaiting rebirth.
                  </p>
                </div>

                {/* Mission Section */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We are building more than a marketplace for sustainable
                    products. We are creating a global stage to celebrate the
                    masters of traditional crafts and innovative artisans who
                    breathe life into conscious creation. Every piece we curate
                    will tell a story – of skilled hands preserving
                    centuries-old techniques, of visionaries reimagining waste
                    into wonder, and of communities keeping their cultural
                    heritage alive.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Vision Section */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our mission is ambitious yet clear. We aim to bridge the gap
                    between extraordinary makers and mindful consumers, ensuring
                    that the art and wisdom of craftspeople from remote villages
                    to urban studios reaches homes and hearts – first across our
                    nation, then worldwide. In doing so, we&apos;re not just
                    reducing our ecological footprint – we&apos;re preserving
                    the old world in all its beauty and charm while ushering in
                    a new dawn of responsible living.
                  </p>
                </div>

                {/* Call to Action Section */}
                <div className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                    Join Us at the Beginning
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    As we embark on this journey to build a platform that honors
                    both tradition and our planet, we invite you to be part of
                    our story. Are you searching for products with soul and
                    sustainability? Are you an artist or craftsperson ready to
                    share your creations with a growing community? Do you know
                    talented makers whose work deserves recognition? Or are you
                    simply drawn to our vision of preserving artisanal heritage
                    while protecting our Earth?
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Connect with us now. Together, let&apos;s build a movement
                    where every purchase brings joy to your life while
                    supporting both the maker and the planet – from dust to
                    dawn.
                  </p>
                </div>

                {/* Company Attribution */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground font-medium">
                    A{" "}
                    <span
                      style={{
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                      }}
                    >
                      Veeville.
                    </span>{" "}
                    Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-[40%_60%] gap-6 h-[calc(100vh-4rem)] items-center">
          {/* Image Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="aspect-square relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="20vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-full p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Column */}
              <div className="space-y-4 lg:space-y-6">
                {/* Main Heading */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Dhool
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-primary font-medium tracking-wide">
                    From Dust to Dawn
                  </p>
                </div>

                {/* Main Description */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dhool is a sustainable marketplace celebrating conscious
                    creation through artisanal crafts and eco-friendly products
                    from around the world.
                  </p>
                </div>

                {/* Story Section */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    At Dhool, we transform the fundamental elements of our Earth
                    into extraordinary creations. True to our Sanskrit name
                    meaning &apos;dust,&apos; we believe in the infinite
                    potential of raw materials – whether clay from ancient
                    riverbeds, fibers from age-old plants, or discarded items
                    awaiting rebirth.
                  </p>
                </div>

                {/* Mission Section */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We are building more than a marketplace for sustainable
                    products. We are creating a global stage to celebrate the
                    masters of traditional crafts and innovative artisans who
                    breathe life into conscious creation. Every piece we curate
                    will tell a story – of skilled hands preserving
                    centuries-old techniques, of visionaries reimagining waste
                    into wonder, and of communities keeping their cultural
                    heritage alive.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 lg:space-y-6">
                {/* Vision Section */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our mission is ambitious yet clear. We aim to bridge the gap
                    between extraordinary makers and mindful consumers, ensuring
                    that the art and wisdom of craftspeople from remote villages
                    to urban studios reaches homes and hearts – first across our
                    nation, then worldwide. In doing so, we&apos;re not just
                    reducing our ecological footprint – we&apos;re preserving
                    the old world in all its beauty and charm while ushering in
                    a new dawn of responsible living.
                  </p>
                </div>

                {/* Call to Action Section */}
                <div className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                    Join Us at the Beginning
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    As we embark on this journey to build a platform that honors
                    both tradition and our planet, we invite you to be part of
                    our story. Are you searching for products with soul and
                    sustainability? Are you an artist or craftsperson ready to
                    share your creations with a growing community? Do you know
                    talented makers whose work deserves recognition? Or are you
                    simply drawn to our vision of preserving artisanal heritage
                    while protecting our Earth?
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Connect with us now. Together, let&apos;s build a movement
                    where every purchase brings joy to your life while
                    supporting both the maker and the planet – from dust to
                    dawn.
                  </p>
                </div>

                {/* Company Attribution */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground font-medium">
                    A{" "}
                    <span
                      style={{
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                      }}
                    >
                      Veeville.
                    </span>{" "}
                    Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGridPage;
