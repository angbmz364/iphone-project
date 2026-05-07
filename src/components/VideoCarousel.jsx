import { hightlightsSlides } from "../constants"

const VideoCarousel = () => {
  return (
      <div className="flex items-center">
        {hightlightsSlides.map( list => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex flex-center rounded-3xl overflow-hidden bg-black">
                <video id="video" playsInline={true} preload="auto" muted>
                  <source
                    src={list.video}
                    type="video/mp4"
                  ></source>
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {
                  list.textLists.map( t => (
                    <p key={t} className="md:text-2xl text-xl font-medium">
                      {t}
                    </p>
                  ) )
                }
              </div>

            </div>
          </div>
        )) }
      </div>
  )
}

export default VideoCarousel