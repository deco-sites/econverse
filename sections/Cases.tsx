import { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "../components/ui/Slider.tsx";
import Image from "apps/website/components/Image.tsx";
// Importar PageProps para acessar a URL, ou garantir que url seja passada como prop.
// Para este exemplo, vamos assumir que `url` está disponível nas props.
// Se estiver usando Fresh, pode ser algo como: import { PageProps } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { useId } from "preact/hooks";

export interface CaseItem {
  title: string;
  description: string;
  image: ImageWidget;
  logo: ImageWidget;
}

interface Props {
  /**
  * @description The description of name.
  */
  title?: string;
  cases?: CaseItem[];
  url?: URL; // Adicionado para que possamos ler e manipular query params
}

export default function Section({ title = "Confira alguns cases de sucesso", cases = [], url }: Props) {
  const id = useId();
  if (!url) {
    console.warn("WARN: A propriedade 'url' não foi fornecida para Cases.tsx. A funcionalidade de navegação dos cases pode não funcionar como esperado se a URL base não for resolvida corretamente pelo HTMX.");
  }
  console.log("URL recebida no Cases.tsx:", url);
  const queryParams = new URLSearchParams(url?.search || "");
  const activeIndex = parseInt(queryParams.get("activeIndex") || "0", 10);
  const getHxUrl = (index: number) => {
    const newSearchParams = new URLSearchParams(url?.search || "");
    newSearchParams.set("activeIndex", index.toString());
    return `?${newSearchParams.toString()}`;
  };

  return (
    <div class="p-20 mx-auto mobile:p-0" id="cases-container">
      <div class="max-w-[1200px ] mx-auto relative" id={id}>
        <h2 class="text-[#FFFFFF] text-[32px] font-semibold mobile:text-[24px] mobile:px-12 mobile:text-center mobile:mt-10">{title}</h2>
        <div class="flex items-center justify-center gap-2 absolute right-0 mobile:left-0 mobile:top-[90px] !hidden">
          {/* A paginação "1 de 6" e os botões do Slider podem precisar de ajuste com HTMX */}
          <span class="text-[#D1A359] text-[14px] mr-2 !hidden">{activeIndex + 1} de {cases.length}</span>
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
        <Slider rootId={id} class="carousel flex mt-12 mobile:gap-[16px] mobile:mt-[80px] mobile:ml-5 ">
          {cases.map((caseItem, index) => (
            <Slider.Item
              index={index}
              key={index}
              class="mobile:w-[80%] mobile:h-[350px] mobile:p-5 carousel-item flex flex-col relative gap-2 w-[20%] h-[563px] bg-cover bg-center text-white p-10 grayscale justify-end transition-all duration-300 hover:scale-110 hover:grayscale-0 hover:z-10 hover:max-w-[539px]"
              style={{ backgroundImage: `url(${caseItem.image})` }}
            >
              <div class="flex justify-end items-center gap-2 h-full z-10">
                <Image src={caseItem.logo} alt={caseItem.title} width={80} height={40} />
              </div>
              <div class="flex flex-col justify-end gap-2 bottom-0 left-0 absolute w-full h-full p-10 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 z-20">
                <h3 class="text-[#FFFFFF] text-[24px] font-bold">{caseItem.title}</h3>
                <p class="text-[#FFFFFF] text-[15px] font-medium">{caseItem.description}</p>
              </div>
            </Slider.Item>
          ))}
        </Slider>
      </div>
    </div>
  );
}