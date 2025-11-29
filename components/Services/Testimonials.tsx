"use client";
import { useState } from "react";
import { Play } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const smallVideos = [
    { src: "/video/video2.jpg", alt: "testimonial small video", play: true },
    { src: "/video/video3.jpg", alt: "testimonial property", overlay: "Residential property in Sienna" },
    { src: "/video/video4.jpg", alt: "New video", play: true },
  ];

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };

  return (
    <section className="relative flex justify-center py-8 md:py-12 lg:py-16 bg-white overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Main Content */}
      <div className="relative max-w-[1156px] w-full rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-[2px] 
                      md:bg-gradient-to-tr md:from-[#231F51] md:via-[#B94255] md:to-transparent z-10">
        <div className="flex flex-col p-4 md:p-5 lg:p-8 gap-6 md:gap-7 lg:gap-10 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-white w-full h-full">
          
          {/* === HEADING === */}
          <h2 className="text-2xl md:text-2xl lg:text-3xl text-black font-sora ml-2 md:ml-3 lg:ml-5">
            Testimonials
          </h2>

          {/* === TOP ROW === */}
          <div className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8">
            {/* LEFT SIDE – MAIN VIDEO */}
            <div
              className="relative lg:w-1/2 w-full aspect-[548/379] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden cursor-pointer"
              onClick={() => handlePlay(0)}
            >
              {playingIndex === 0 ? (
                <video
                  src="/video/video1.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover rounded-[20px] md:rounded-[30px] lg:rounded-[40px]"
                />
              ) : (
                <>
                  <img
                    src="/video/video1.jpg"
                    alt="testimonial video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full shadow-md">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-black" fill="black" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* RIGHT SIDE – TEXT */}
            <div className="flex flex-col lg:w-1/2 justify-start">
              <h3 className="mb-3 md:mb-3 lg:mb-4 text-black font-sora text-xl md:text-xl lg:text-[30px] font-normal leading-tight tracking-tight">
                Lorem ipsum dolor sit amet,
              </h3>
              <p className="text-black font-sora text-sm md:text-sm lg:text-base font-normal leading-relaxed tracking-tight">
                consectetur adipiscing elit. Fusce at magna nibh. Nam sed est arcu. Vivamus ac volutpat orci, eget eleifend metus. Quisque non lobortis leo. Integer lacinia pulvinar nunc, eu semper quam dapibus id. Mauris ac massa risus. Praesent vulputate vitae ex id euismod. <br /> <br /> Mauris interdum iaculis viverra. Suspendisse ac quam ornare, dictum ante non, cursus erat. Aenean vestibulum tortor sem, non sagittis ex fringilla sit amet. Donec ac orci vel urna ornare mollis in vel sapien. Suspendisse luctus accumsan lectus in suscipit. Nunc non mi vitae nisi accumsan aliquet vel sed orci. Nunc placerat urna quis ante mattis pulvinar eget ut arcu. Donec
              </p>
            </div>
          </div>

          {/* === BOTTOM ROW – CAROUSEL === */}
          <div className="overflow-x-auto w-full flex gap-3 md:gap-3 lg:gap-4 pb-2">
            {smallVideos.map((video, idx) => {
              const isStaticImage = !!video.overlay;
              return (
                <div
                  key={idx}
                  className="group relative w-[260px] md:w-[280px] lg:w-[326px] flex-shrink-0 aspect-[326/215] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] overflow-hidden cursor-pointer"
                  onClick={() => {
                    if (!isStaticImage) {
                      handlePlay(idx + 1);
                    }
                  }}
                >
                  {isStaticImage ? (
                    <>
                      <img
                        src={video.src}
                        alt={video.alt}
                        className="w-full h-full object-cover rounded-[20px] md:rounded-[25px] lg:rounded-[30px]"
                      />
                      {/* Overlay appears on hover (desktop) and tap (mobile) */}
                      <div className="absolute inset-0 bg-black/40 flex items-end p-3 md:p-4 rounded-[20px] md:rounded-[25px] lg:rounded-[30px] 
                                    opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                        <p className="text-white font-semibold text-xs md:text-sm">
                          {video.overlay}
                        </p>
                      </div>
                    </>
                  ) : playingIndex === idx + 1 ? (
                    <video
                      src={`/video/video${idx + 2}.mp4`}
                      controls
                      autoPlay
                      className="w-full h-full object-cover rounded-[20px] md:rounded-[25px] lg:rounded-[30px]"
                    />
                  ) : (
                    <>
                      <img
                        src={video.src}
                        alt={video.alt}
                        className="w-full h-full object-cover rounded-[20px] md:rounded-[25px] lg:rounded-[30px]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full shadow-md">
                          <Play className="w-5 h-5 md:w-6 md:h-6 text-black" fill="black" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}