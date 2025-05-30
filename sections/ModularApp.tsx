import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
  * @description The description of name.
  */
  title?: string;
  description?: string;
  items?: items[];
}

interface items {
  image: ImageWidget;
  title: string;
  description: string;
}

const defaultProps = {
  items: [
    {
      image: "https://assets.decocache.com/econverse-page/0dfb4f3e-717c-416c-aec1-c45da0b36f89/member.png",
      title: "Member get member",
      description: "Expanda sua base de usuários com essa estratégia e melhore o relacionamento entre os membros, criando uma comunidade mais sólida e engajada.",
    },
    {
      image: "https://assets.decocache.com/econverse-page/0dfb4f3e-717c-416c-aec1-c45da0b36f89/member.png",
      title: "Recorrência",
      description: "Fidelize mais clientes com a opção de compra recorrente! Fidelize mais clientes com a opção de compra recorrente!",
    },
    {
      image: "https://assets.decocache.com/econverse-page/0dfb4f3e-717c-416c-aec1-c45da0b36f89/member.png",
      title: "Integração com BI Biso",
      description: "A integração com Business Intelligence (BI) é uma forma de potencializar a análise de dados e a tomada de decisões.",
    },
    {
      image: "https://assets.decocache.com/econverse-page/0dfb4f3e-717c-416c-aec1-c45da0b36f89/member.png",
      title: "Personalização de produto",
      description: "Um produto sob medida, com customizações pensadas para elevar a experiência do usuário.",
    },
  ],
}

export default function Section({ 
  title = "App Modular", 
  description = "Identificação das necessidades e funcionalidades exclusivas para cada segmento específico, entendendo as necessidades individuais de cada negócio. Sendo uma plataforma modular para criação de App commerce customizados.", 
  items = defaultProps.items }: Props) {
  return (
    <div className="flex flex-col bg-[#181818] items-center justify-center pt-[80px] pb-[110px] relative">
      <div className="flex flex-col items-center justify-center max-w-[1440px] w-full px-[35px] lg:px-[60px]">
        <div className="absolute bottom-0 left-0 w-screen h-[510px] bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://assets.decocache.com/econverse-page/59e46e31-5262-4d8c-8120-d61a81f15f23/GradientShadow.png')" }}></div>
        <h2 className="text-[#FFFFFF] text-[36px] font-semibold max-w-[375px] text-center">{title}</h2>
        <p className="text-[#FFFFFF] text-[14px] font-light max-w-[590px] text-center mt-[25px]">{description}</p>
        <div className="flex lg:flex-row flex-col justify-between gap-[24px] mt-[100px] w-full">
          {items?.map((item) => (
            <div className="flex flex-col gap-[14px] lg:items-start items-center">
              <div className="flex flex-col items-center justify-center w-[48px] h-[48px] bg-gradient-to-b from-[#202024] to-[rgba(32, 32, 36, 0.2)]">
                <Image src={item?.image} alt={item.title} width={32} height={32} />
              </div>
              <h3 className="text-[#FFFFFF] text-[16px] font-semibold max-w-[375px] text-left">{item.title}</h3>
              <p className="text-[#FFFFFF] text-[12px] font-light max-w-[250px] lg:text-left text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}