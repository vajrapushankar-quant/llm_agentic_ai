import Image from "next/image";

export default function HeroHeader() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero_background.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          style={{ opacity: 1 }}
        />
      </div>
      
      {/* AI image on the left (background) */}
      <div className="absolute left-0 top-0 bottom-0 flex items-center z-0 pl-8 md:pl-12 lg:pl-16 h-full">
        <div className="h-full w-auto">
          <Image
            src="/AI_image.svg"
            alt="AI"
            width={634}
            height={810}
            className="h-full w-auto object-contain object-left"
            priority
            style={{ opacity: 0.4 }}
          />
        </div>
      </div>
      
      {/* Main content area */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="order-1 space-y-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
            <div className="space-y-0.5">
              <p 
                className="text-gray-700 font-bold"
                style={{ fontSize: '1.75rem', fontFamily: '"Proxima Nova", sans-serif' }}
              >
                5 weeks to
              </p>
              <h1 
                className="font-bold text-gray-900 leading-tight"
                style={{ 
                  fontSize: 'clamp(3.375rem, 6vw, 6.75rem)',
                  fontFamily: '"Proxima Nova", sans-serif'
                }}
              >
                <span className="text-gray-900">Agentic AI</span>{" "}
                <span className="text-gray-900">Mastery</span>
              </h1>
            </div>
            
            <div className="space-y-1 text-gray-700">
              <p 
                style={{ fontSize: '1.25rem', fontFamily: '"Proxima Nova", sans-serif' }}
              >
                January 26 Cohort
              </p>
              <p 
                style={{ fontSize: '1.25rem', fontFamily: '"Proxima Nova", sans-serif' }}
              >
                Instructor: Girija Shankar Vajrapu
              </p>
            </div>
            
            <p 
              className="text-gray-700 max-w-2xl font-bold"
              style={{ fontSize: '1.5rem', fontFamily: '"Proxima Nova", sans-serif' }}
            >
              Build Autonomous Systems Using Generative AI, LLMs & Multi-Agent Workflows
            </p>
            
            <button 
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              style={{ fontSize: '1.5rem', fontFamily: '"Proxima Nova", sans-serif' }}
            >
              Enroll Now
            </button>
          </div>
          
          {/* Right side - Animation */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <Image
              src="/hero_header_animation.gif"
              alt="Hero Animation"
              width={800}
              height={800}
              className="w-auto h-auto object-contain max-h-[70vh] lg:max-h-[75vh]"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
      
      {/* Tools strip at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white z-20 py-4">
        <div className="w-full overflow-hidden">

          {/* Marquee container */}
          <div
            className="flex flex-nowrap items-center gap-12 px-8"
            style={{
              width: "200%",                  // holds 2 copies side-by-side
              animation: "marquee 25s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {/* DUPLICATE LOGOS TWICE FOR SMOOTH LOOP */}
            {[...Array(2)].map((_, copyIndex) => (
              <div key={copyIndex} className="flex flex-nowrap gap-12 items-center">
                {[
                  "/logos/google-gemini.png",
                  "/logos/langsmith.avif",
                  "/logos/chromadb.svg",
                  "/logos/pinecone.svg",
                  "/logos/supabase.png",
                  "/logos/jupyter.png",
                  "/logos/huggingface.svg",
                  "/logos/llama.png",
                ].map((logo, idx) => (
                  <div key={`${copyIndex}-${idx}`} className="flex items-center justify-center">
                    <Image
                      src={logo}
                      alt="Tool logo"
                      width={140}
                      height={60}
                      className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

