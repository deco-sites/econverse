import { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
  * @description The description of video.
  */
  video?: VideoWidget;
  textImage?: ImageWidget;
}

export default function Section({ textImage,  video = "https://s3-figma-videos-production-sig.figma.com/video/TEAM/896423604096675500/ac7f6c4ff65803371858688562e94d9367696131?Expires=1747612800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jKk~TPgejH5Wf0O-JAbrRNWsJ2vPEKyA8f3KesszpTF5sGX5GPnGPKWdKPISzaXnG0Iez09700sCGBRCK9WCmVehrNnH2HQ7AtZY~mg2XARKWwTcGSyGqPRE6GmKgeFEDTx3Tkk2-1xUNzG9GOGzjkcLe1TRyYbwLwXNRlRLnnjbQR2vX~35Teblgm3KjIosnJBzOOJ-CGVGGhN5hGUs6fFPOVbIGfu~Aasxf5Lc1u0ZjJ8fMSSMrJQ4qLDG7RknswV-x8pet5CmCo95Gsv-kmkUqBMWragzsv0TaV6I-OxhvE77QXXrDY3Q6Ox3Oas9L4cUMYbKdCuDKE6mgGxJ-w" }: Props) {
  return (
    <div class="overflow-hidden h-[100vh] max-h-[640px] relative">
    <div class="w-full absolute top-0 left-0">
      <div class="bg-[rgba(0,0,0,0.7)] w-[100dvw] h-[640px] absolute top-0 left-0 z-10 flex items-center justify-center">
        <div class="w-[200px] h-[200px] rounded-full flex items-center justify-center" style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.24) 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          {textImage && <Image src={textImage} alt="Econverse" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
          <div class="w-20 h-20 rounded-full bg-white flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3.71484L22 14.0006L6 24.2863V3.71484Z" fill="#D1A359" stroke="#D1A359" stroke-width="2.74286" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <video
        className="absolute top-0 left-0 w-[100dvw] max-h-[640px] h-screen object-cover"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}