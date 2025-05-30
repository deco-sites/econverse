import { useId } from "preact/hooks";
import Slider from "../components/ui/Slider.tsx";
import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The description of name.
   */
  title?: string;
  /**
   * @description The description of color.
   */
  items?: Item[];
}

interface Item {
  title: string;
  description: string;
  image: ImageWidget;
  link: string;
}

const defaultItemsData: Item[] = [
  {
    title: "Mídia patrocinada",
    description: "Melhoramos o desempenho do seu e-commerce com mídia patrocinada, BI, CRM e SEO.",
    image: "https://via.placeholder.com/150", 
    link: "https://via.placeholder.com/150",
  },
  {
    title: "Mídia patrocinada",
    description: "Melhoramos o desempenho do seu e-commerce com mídia patrocinada, BI, CRM e SEO.",
    image: "https://via.placeholder.com/150",
    link: "https://via.placeholder.com/150",
  },
  {
    title: "Mídia patrocinada",
    description: "Melhoramos o desempenho do seu e-commerce com mídia patrocinada, BI, CRM e SEO.",
    image: "https://via.placeholder.com/150",
    link: "https://via.placeholder.com/150",
  },
];


export default function Section({ title = "Conheça nossos serviços digitais para transformar seu negócio em escala global", items = defaultItemsData }: Props) {
  const id = useId()

  return (
    <div class="bg-white p-20 mx-auto mobile:p-5">
      <div class="flex flex-col gap-10 max-w-[1250px] mx-auto relative">
        <h2 class="text-[32px] font-bold mb-4 text-[#181818] pb-6 max-w-[700px] mobile:text-[20px] mobile:text-center">{title}</h2>
        <div class="flex items-center justify-center mt-10 gap-2 absolute right-0 mobile:left-0 mobile:top-[66px] !hidden">
          <span class="text-[#D1A359] text-[14px] mr-2">1 de 6</span>
          <Slider.PrevButton>
            <div class="flex items-center justify-center text-[14px] cursor-pointer rounded-full border-[#D1A359] border-2 w-8 h-8">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 1L1.5 6L6.5 11" stroke="#D1A359" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </Slider.PrevButton>
          <Slider.NextButton>
            <div class="flex items-center justify-center text-[14px] cursor-pointer rounded-full border-[#D1A359] border-2 w-8 h-8">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 11L6.5 6L1.5 1" stroke="#D1A359" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </Slider.NextButton>
        </div>
        <div class="flex flex-wrap gap-4 animate-fade-in-up">
          <Slider infinite rootId={id} class="carousel carousel-center w-full desktop:!justify-between h-full mobile gap-4">
            {items.map((item, index) => (
              <Slider.Item index={index} class="carousel-item mobile:max-w-[330px] mobile:max-h-[230px] w-[300px] h-[230px]">
                <div class="border border-[#E9E9E9] p-6 slider-item-hover ">
                  <Image src={item.image} alt={item.title} width={32} height={32} class="object-cover pb-5 slider-item-image" />
                  <h3 class="mb-2 font-medium text-[#181818] slider-item-text">{item.title}</h3>
                  <p class="text-[#525254] slider-item-text">{item.description}</p>
                  <a href={item.link} class="text-[#181818] hover:text-[#D1A359] slider-item-link slider-item-text ">Saiba mais</a>
                </div>
              </Slider.Item>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}