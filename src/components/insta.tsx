import Image from "next/image";

export default function Newsletter(){
  return (
    <div className="w-full h-auto bg-[#F0F2F3]">
      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
        <h2 className="font text-[12px] sm:text-[50px] mt-4">
          Or Subscribe to the Newsletter
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
          {/* Email Input Section */}
          <div className="flex flex-col items-start mt-12 sm:mt-0">
            <span className="text-[#8F9499] text-[14px] sm:text-[16px] font-semibold mb-2 ml-3">
              Email address...
            </span>
            <div className="w-[300px] sm:w-[643px] h-[2px] bg-black"></div>
          </div>
          {/* Submit Button Section */}
          <div className="flex flex-col items-center mt-4 sm:mt-0">
            <span className="text-[14px] sm:text-[16px] font-normal mb-2">
              SUBMIT
            </span>
            <div className="w-[91px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <h2 className="text-[32px] sm:text-[50px] font-samibold text-center">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-24">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/imageee.png"
              alt="Instagram product 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Frame (1).png"
              alt="Instagram product 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Image.jpg"
              alt="Instagram product 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Products (2).png"
              alt="Instagram product 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Image (1).jpg"
              alt="Instagram product 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Image (00).png"
              alt="Instagram product 6"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

