export default function About03() {
  return (
    <div className="max-w-screen-xl mx-auto mt-16 md:mt-32 px-6">
      <h2 className="text-[28px] sm:text-[32px] text-[#272343] font-semibold text-center mb-12">
        What makes our Brand Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
        {/* First Card */}
        <div className="bg-[#F9F9F9] p-6 text-center rounded-lg shadow-md">
          <h3 className="text-[18px] sm:text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            Next day as standard
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#007580] mt-4">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-[#F9F9F9] p-6 text-center rounded-lg shadow-md">
          <h3 className="text-[18px] sm:text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            Made by true artisans
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#007580] mt-4 text-left">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        {/* Third Card */}
        <div className="bg-[#F9F9F9] p-6 text-center rounded-lg shadow-md">
          <h3 className="text-[18px] sm:text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            Unbeatable prices
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#007580] mt-4">
            For our materials and quality you will not find better prices anywhere
          </p>
        </div>

        {/* Fourth Card */}
        <div className="bg-[#F9F9F9] p-6 text-center rounded-lg shadow-md">
          <h3 className="text-[18px] sm:text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            Recycled packaging
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#007580] mt-4">
            We use 100% recycled material to ensure our footprint is more manageable
          </p>
        </div>
      </div>
    </div>
  );
}
