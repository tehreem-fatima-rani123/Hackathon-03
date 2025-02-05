import Image from "next/image";

export default function HotProduct() {
  return (
    <>
      <header className="container mx-auto px-4 py-12 lg:py-16">
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
          {/* Vertical text */}
          <div
            className="hidden text-3xl font-medium tracking-widest text-zinc-900 md:block pt-6"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "sideways",
              transform: "rotate(180deg)",
            }}
          >
            EXPLORE NEW AND POPULAR STYLES
          </div>

          {/* Mobile text version */}
          <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden">
            EXPLORE NEW AND POPULAR STYLES
          </div>

          {/* Images section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl group">
              <Image
                src="/image 123.jpeg"
                alt="Orange modern chair"
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                layout="fill"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Orange Modern Chair</span>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Small Square Images */}
              {[
                { src: "/naina.png", alt: "White tufted chair" },
                { src: "/Products (2).png", alt: "Gray upholstered chair" },
                { src: "/card (1).png", alt: "Vintage white chair" },
                { src: "/Products (2).png", alt: "Vintage white chair duplicate" },
              ].map((item, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-xl group">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                    layout="fill"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold">{item.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
