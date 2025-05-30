import Image from "apps/website/components/Image.tsx";
import { useId } from "../sdk/useId.ts";
import Slider from "../components/ui/Slider.tsx";
import { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
}

interface BannerItemImage {
  image: ImageWidget;
  title: string;
  name: string;
  description: string;
  cta: CTA;
}

interface BannerItemVideo {
  video: VideoWidget;
  title: string;
  description: string;
  cta: CTA;
}


export interface Props {
  /**
   * @title Items
   * @description The items to display in the banner.
   * @minItems 1
   * @maxItems 1
   */
  items: Array<BannerItemImage | BannerItemVideo>;
}

const prevItems: Array<BannerItemImage | BannerItemVideo> = [
  {
    title: "We are Digital agency",
    description: "Agência de implementação, evolução e marketing para e-commerce",
    video: "https://assets.decocache.com/econverse-page/eabd59bb-5179-4688-85de-39de1776b4f4/overall.png",
    cta: {
      href: "/",
      text: "Começar um projeto",
    },
  },
  {
    title: "Case NK Store VTEX IO: A inovação que veste o mundo da moda",
    name: "NK Store",
    description: "Uma das mais influentes boutiques de moda de luxo do Brasil se destaca por oferecer peças atemporais e sofisticadas, priorizando tecidos nobres e acabamentos impecáveis.",
    image: "https://assets.decocache.com/econverse-page/361edd35-fe5e-433d-9c0a-05dc7b743e64/Hero-section-(1).png",
    cta: {
      href: "/",
      text: "Conhecer case",
    },
  },
]

export default function HeroFlats({
  items = prevItems
}: Props) {

  const id = useId()

  return (
    <div id={id} class="max-h-[100vh]">
    <Slider infinite rootId={id} class="carousel carousel-center w-full desktop:!justify-between gap-[1.11vw] h-full mx-auto mobile mobile:gap-6">
        {items.map((item, index) => (
          <Slider.Item index={index} class="carousel-item">
            {"video" in item ? <Video item={item as BannerItemVideo} /> : <ImageComponent item={item as BannerItemImage} />}
        </Slider.Item>
      ))}
    </Slider>
    {/* Barras animadas */}
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none z-[999]">
      {/* Barra de cima para baixo (esquerda) */}
      <div
        class="w-[5px] h-[90px] absolute left-[50px] top-[50px] animate-barra-vertical rounded-[3px]"
        style={{ background: "linear-gradient(180deg, rgba(234,200,145,0.02) 0%, rgba(234,200,145,1) 50%, rgba(255,255,255,1) 100%)" }}
      ></div>
      {/* Barra da direita para a esquerda, já embaixo */}
      <div
        class="h-[5px] w-[90px] absolute right-[50px] bottom-[50px] animate-barra-horizontal rounded-[3px]"
        style={{ background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(234,200,145,1) 50%, rgba(234,200,145,0.02) 100%)" }}
      ></div>
    </div>
    <div class="flex items-center justify-center mt-10 gap-2 absolute bottom-52 left-0 w-full z-[20]">
      <Slider.PrevButton>
        <div class="flex items-center justify-center text-[14px] cursor-pointer">
          Anterior
        </div>
      </Slider.PrevButton>
      {items.map((_, index) => (
        <Slider.Dot index={index}>
          <div class={index === 0 ? "border border-[#FFFFFF] rounded-full w-[16px] h-[16px] cursor-pointer flex items-center justify-center" : ""}>
            <div class="w-[8px] h-[8px] bg-[#FFFFFF] rounded-full cursor-pointer"></div>
          </div>
        </Slider.Dot>
      ))}
      <Slider.NextButton>
        <div class="flex items-center justify-center text-[14px] cursor-pointer">
          Proximo
        </div>
      </Slider.NextButton>
    </div>
  </div>
);
}

const Video = ({ item }: { item: BannerItemVideo }) => {
  return (
    <>
    <div class="w-[100vw] h-[100vh] relative">
      testteee
        <div class="w-full absolute top-0 left-0">
          <video
            className="absolute top-0 left-0 w-screen h-screen object-cover"
            autoPlay
            muted
            loop
          >
            <source src={item.video} type="video/mp4" />
            <source src={item.video} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="w-[100vw] h-[100vh] absolute top-0 left-0 z-100">
          <div 
            class="w-[100vw] h-[100vh]"
            style={{
              backgroundImage: "url('https://assets.decocache.com/econverse-page/eabd59bb-5179-4688-85de-39de1776b4f4/overall.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div class="w-full h-full flex flex-col items-center justify-end absolute z-20">
              <div class="w-full h-[150px] absolute top-[100px] bg-center bg-cover" style={{backgroundImage: "url('https://assets.decocache.com/econverse-page/b1cb5ee4-9d7c-408d-9022-a45e9667f863/effects-1.png')", backgroundPosition: "left", backgroundRepeat: "no-repeat"}}></div>
              <div class="w-full h-[150px] absolute top-[300px]" style={{backgroundImage: "url('https://assets.decocache.com/econverse-page/95f2d1f8-5036-4b60-be4e-f557d08e1392/effects-2.png')", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}></div>
              <div dangerouslySetInnerHTML={{ __html: item.title }} class="text-white text-[22px] desk:max-w-[1000px] text-center mb-4" />
              <p class="text-white text-[48px] mobile:text-[32px] font-bold desk:max-w-[1000px] text-center">
                {item.description}
              </p>
              <button class="bg-[#D1A359] text-[#181818] text-[16px] font-bold rounded-[4px] px-8 py-4 mt-10">
                {item.cta.text}
              </button>

              <div class="flex items-center justify-center mt-10">
                
              </div>

              <div class="mt-12"></div>
              
              <div class="flex items-center justify-center mt-10 flex-col gap-4 mb-4">
                <div class="w-[60px] h-[60px] bg-[#202024] border border-[#FFFFFF1A] rounded-md flex items-center justify-center" style={{ boxShadow: "0px 0px 80px 0px #535A62" }}>
                  <Image src="https://assets.decocache.com/econverse-page/1ded1b7b-e1ea-4f17-a047-99ab31818446/ec.png" alt="Econverse" width={30} height={30} />
                </div>
                <div class="flex flex-col items-center justify-center mb-5">
                  <Image src="https://assets.decocache.com/econverse-page/3987d0c1-5535-4970-bdc9-ac334c711778/Arrow-1.png" alt="arrow" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="w-[100vw] h-[450px] absolute bottom-0 left-0 z-10" style={{
          backgroundImage: "url('https://assets.decocache.com/econverse-page/32ebf170-6f18-4271-9057-385407e77ba4/Mask-group.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
      </div>
      </div>
      </>
  );
};

const ImageComponent = ({ item }: { item: BannerItemImage }) => {
  return (
    <div class="w-[100vw] h-[100vh] relative">
      <div class="w-screen h-screen absolute top-0 left-0 bg-cover bg-no-repeat" style={{backgroundImage: `url('${item.image}')`}}>
      </div>
      <div class="w-[100vw] h-[100vh] desk:absolute top-0 left-0 z-100 flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center desk:max-w-[1000px] desk:w-[1000px] mobile:w-full">
          <div class="flex flex-col justify-center items-start w-full mb-40 mobile:z-[1] mobile:px-4 mobile:items-center">
            <h3 class="text-white text-[48px] mobile:text-[32px] font-bold text-left max-w-[650px] w-[650w] mb-4">
              {item.title}
            </h3>
            <p class="text-white text-[16px] max-w-[364px] w-[364px] text-left mt-4 desk:hidden mobile:block">
              {item.description}
            </p>
            <button type="button" class="bg-[#D1A359] text-[#181818] text-[16px] w-fit font-bold rounded-[4px] px-8 py-4 mt-10">
              {item.cta.text}
            </button>
          </div>
          <div class="flex flex-col justify-ceflex flex-col justify-center items-start w-full mb-40 mobile:z-[1] mobile:px-4nter items-end desk:max-w-[1000px] mobile:hidden desk:w-[1000px] absolute mt-40">
            <h5 class="text-white text-[20px] font-bold max-w-[364px] w-[364px] text-left">
              {item.name}
            </h5>
            <p class="text-white text-[16px] max-w-[364px] w-[364px] text-left mt-4 mobile:hidden">
              {item.description}
            </p>
          </div>
          <div class="flex items-center justify-center mt-10 flex-col gap-4 mb-4 absolute bottom-0">
            <div class="w-[60px] h-[60px] bg-[#202024] border border-[#FFFFFF1A] rounded-md flex items-center justify-center" style={{ boxShadow: "0px 0px 80px 0px #535A62" }}>
              <Image src="https://assets.decocache.com/econverse-page/1ded1b7b-e1ea-4f17-a047-99ab31818446/ec.png" alt="Econverse" width={30} height={30} />
            </div>
            <div class="flex flex-col items-center justify-center mb-5">
              <Image src="https://assets.decocache.com/econverse-page/3987d0c1-5535-4970-bdc9-ac334c711778/Arrow-1.png" alt="arrow" />
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

