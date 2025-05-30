import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
  * @description The description of name.
  */
  title?: string;
  description?: string;
  infos?: string[];
  propelling?: propelling;
  image?: ImageWidget;
  items?: items[];
  infocard?: infocard[];
}

interface propelling {
  title: string;
  items: string[];
}

interface items {
  description: string;
}

interface infocard {
  image: ImageWidget;
  title: string;
}

const defaultProps: Props = {
  title: "Experiência do seu cliente com mobile commerce.",
  description: "A Econ App é uma plataforma Saas de aplicativos nativos integrada às principais plataformas de ecommerce. Acreditamos que o futuro está no mobile commerce e trazemos soluções ágeis e inovadoras para alavancar a conversão da sua loja.",
  infos: ["Integração", "Atualização"],
  propelling: {
    title: "IMPULSIONANDO:",
    items: ["MOBILE EXPERIENCE", "INTEGRAÇÃO ÁGIL", "Escalabilidade"],
  },
  image: "https://assets.decocache.com/econverse-page/96fe6131-f951-4c6a-9dd5-889b65ed8589/Frame-1-(2)-(1).png",
  items: [
    {
      description: "Integração otimizada com as principais plataformas",
    },
    {
      description: "Experiência mobile fluida e personalizada para cada cliente.",
    },
    {
      description: "Soluções SaaS escaláveis, seguras e prontas para o futuro digital.",
    },
    {
      description: "Aplicativos nativos ágeis que potencializam a conversão.",
    },
    {
      description: "Plataforma moderna que impulsiona o mobile commerce.",
    },
  ],
  infocard: [
    {
      image: "https://assets.decocache.com/econverse-page/598bfb81-e87c-41bc-92c4-95658441de45/phone.png",
      title: "App nativo IOS",
    },
    {
      image: "https://assets.decocache.com/econverse-page/598bfb81-e87c-41bc-92c4-95658441de45/phone.png",
      title: "App nativo Android",
    },
    {
      image: "https://assets.decocache.com/econverse-page/598bfb81-e87c-41bc-92c4-95658441de45/phone.png",
      title: "Integração Omnichannel",
    },
    {
      image: "https://assets.decocache.com/econverse-page/598bfb81-e87c-41bc-92c4-95658441de45/phone.png",
      title: "Comércio Unificado",
    },
    {
      image: "https://assets.decocache.com/econverse-page/598bfb81-e87c-41bc-92c4-95658441de45/phone.png",
      title: "Monitoramento de dados",
    },
    {
      image: "https://assets.decocache.com/econverse-page/598bfb81-e87c-41bc-92c4-95658441de45/phone.png",
      title: "Go live em até 15 dias úteis",
    },
    {
      image: "https://assets.decocache.com/econverse-page/598bfb81-e87c-41bc-92c4-95658441de45/phone.png",
      title: "Personalização de interface",
    },
    {
      image: "https://assets.decocache.com/econverse-page/598bfb81-e87c-41bc-92c4-95658441de45/phone.png",
      title: "Estrutura Otimizada",
    },
  ],
}

export default function Section({ 
  title = defaultProps.title, 
  description = defaultProps.description, 
  infos = defaultProps.infos, 
  propelling = defaultProps.propelling, 
  image = defaultProps.image, 
  items = defaultProps.items, 
  infocard = defaultProps.infocard }: Props) {
  return (
    <div className="flex flex-col items-center justify-center bg-white pt-[50px] pb-[50px]">
      <div className="flex flex-col justify-center max-w-[1440px] w-full px-[35px] lg:px-[60px]">
        <div className="flex lg:flex-row flex-col items-center lg:items-start justify-between gap-[24px]">
        <div className="flex flex-col items-center lg:items-start justify-center gap-[24px]">
          <h2 className="text-[#181818] text-[20px] lg:text-[32px] font-semibold max-w-[375px] lg:text-left text-center">{title}</h2>
          <p className="text-[#181818] text-[14px] font-normal max-w-[375px] lg:text-left text-center mt-[25px] ">{description}</p>
          <div className="flex items-start justify-center gap-[24px]">
            {infos?.map((info) => (
              <div className="flex flex-col items-start justify-center gap-[8px] rounded-full border border-[#E9E9E9] px-[20px] py-[12px]">
                <p className="text-[#181818] text-[12px] font-normal">{info}</p>
              </div>
            ))}
          </div>
          <div className="mt-[160px] hidden lg:block">
            <h5 className="text-[#515151] text-[12px] font-semibold">{propelling?.title}</h5>
            <div className="flex items-start justify-center gap-[24px] mt-[9px]">
              {propelling?.items?.map((item) => (
                <p className="text-[#181818] text-[12px] font-semibold">{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[450px] flex items-center justify-center">
          <Image src={image || ""} alt="Experience App" className="w-[940px]" />
        </div>
        <div className="flex flex-col items-start justify-center gap-[24px]">
          {items?.map((item) => (
            <div className="flex flex-col items-start justify-center gap-[24px]">
              <div className="border-b border-[#EAEDF0] flex py-[18px]">
                <div className={`min-w-[41px] max-w-[41px] min-h-[41px] max-h-[41px] rounded-full border border-[#EAEDF0] flex items-center justify-center`}>
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.853 5.20703L7.26767 13.7924L3.36523 9.88996" stroke="#00A277" stroke-width="1.56098" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p className="text-[#515151] text-[16px] font-normal line-clamp-2 ml-[16px] max-w-[270px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="flex items-start justify-between pt-[100px] lg:flex-nowrap flex-wrap">
          {infocard?.map((e) => {
            return (
              <div className="flex flex-col items-center justify-center gap-[24px] lg:w-full w-[47%] [&:not(:nth-last-child(-n+2))]:border-b lg:border-b-transparent lg:border-r border-[#F1F0F8] p-[16px]">
                <Image src={e.image} alt={e.title} width={32} height={32} />
                <p className="text-[#181818] text-[14px] font-medium max-w-[102px] text-center">{e.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}