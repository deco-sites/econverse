import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface CTA {
  label: string;
  link: string;
}

interface Props {
  /**
  * @description The description of name.
  */
  logo: {
    src: ImageWidget;
    alt: string;
  };
  title?: string;
  cta?: CTA;
  bgImage?: ImageWidget;
  platforms?: Platform[];
  image: {
    src: ImageWidget;
    alt: string;
  };
  name?: string;
  description?: string;

}

interface Platform {
  src: ImageWidget;
  alt: string;
}

const defaultProps: Props = {
  logo: {
    src: "https://assets.decocache.com/econverse-page/f21bb302-4056-42f6-97b8-033ed0d42bc9/econapp.png",
    alt: "Econapp",
  },
  title: "Revolucionando a forma de integrar Aplicativos nativos ágeis ao e-commerce.",
  cta: { label: "Fale com nossos especialistas", link: "/" },
  name: "Econapp",
  description: "Aumente suas vendas com nossa plataforma Saas para aplicativos customizados de mobile commerce integrados as melhores plataformas.",
  bgImage: "https://assets.decocache.com/econverse-page/d40a7224-4887-4e4b-bd30-f433054e17e8/Hero-section.png",
  platforms: [
    {
      src: "https://assets.decocache.com/econverse-page/1cfe822d-ed7c-4e3e-a007-4c8194693252/Frame-1617543984.png",
      alt: "wake",
    },
    {
      src: "https://assets.decocache.com/econverse-page/2e66ec32-22ea-4d6b-b94e-026a0a447ead/VTEX.png",
      alt: "vtex",
    },
    {
      src: "https://assets.decocache.com/econverse-page/e6081443-fb5b-4ae7-8401-c10206a66c8f/image-165.png",
      alt: "shopify",
    },
    {
      src: "https://assets.decocache.com/econverse-page/937da10f-1ab1-40ef-a124-d0c4040ac4cc/vnda-network.png",
      alt: "vnda",
    },
  ],
  image: {
    src: "https://assets.decocache.com/econverse-page/aba1cd88-bd55-4c9d-b06b-f7f9d8b17d41/iPhone-13-Pro.png",
    alt: "Econapp",
  },
}

export default function Section({ 
  logo = defaultProps.logo, 
  title = defaultProps.title, 
  cta = defaultProps.cta, 
  name = defaultProps.name, 
  description = defaultProps.description, 
  bgImage = defaultProps.bgImage, 
  platforms = defaultProps.platforms, 
  image = defaultProps.image }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex flex-col justify-center min-h-screen max-w-[1440px] w-full px-[35px] lg:px-[60px] lg:flex-row">
        <div className="flex flex-col items-center lg:items-start justify-center gap-[32px] xl:gap-[24px] mt-[100px] lg:mt-0">
          <Image src={logo?.src} alt={logo?.alt} width={130} height={28} className="object-contain" />
          <h1 className="text-white text-[26px] lg:text-[48px] text-center lg:text-left font-semibold max-w-[730px] mt-[32px]">{title}</h1>
          <button className="bg-[#D1A359] font-medium text-[#181818] px-[24px] py-[16px] text-[14px] lg:text-[16px] rounded-[4px]">{cta?.label}</button>
          <div className="hidden flex-row items-center justify-center gap-[16px] mt-[100px] h-[60px] lg:flex">
            <p className="text-white text-[14px] font-normal uppercase">Plataformas</p>
            <div className="flex flex-row items-center justify-center gap-[24px]">
              {platforms?.map((platform) => (
                <div className="flex flex-col items-center justify-center w-[80px] h-[30px]">
                  <Image src={platform?.src} alt={platform?.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <Image src={image?.src} alt={image?.alt} width={490} height={400} className="object-contain lg:mt-0 mt-[32px]" />
          <div className="hidden flex-col items-start justify-center gap-[20px] max-w-[350px] mt-[40px] lg:flex">
            <h5 className="text-white text-[20px] font-bold text-left">{name || "Econapp"}</h5>
            <p className="text-white text-[14px] font-normal text-left">{description || "Aumente suas vendas com nossa plataforma Saas para aplicativos customizados de mobile commerce integrados as melhores plataformas."}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[16px] mt-[30px] mb-[30px] h-[60px] lg:hidden">
            <p className="text-white text-[14px] font-normal uppercase">Plataformas</p>
            <div className="flex flex-row items-center justify-center gap-[24px]">
              {platforms?.map((platform) => (
                <div className="flex flex-col items-center justify-center w-[55px] h-[18px]">
                  <Image src={platform?.src} alt={platform?.alt} />
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}