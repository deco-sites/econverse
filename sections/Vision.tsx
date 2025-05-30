import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
  * @description The description of name.
  */
  title?: string;
  /**
  * @description The description of name.
  */
  description?: string;
  /**
  * @description The description of name.
  */
  image?: ImageWidget;
  /**
  * @description The description of name.
  */
  items?: Array<{
    name: string;
  }>;
}

const defaultProps = {
  title: "Visão geral dos serviços Ongoing",
  description: "Na Econverse, impulsionamos a transformação digital através de estratégias tecnológicas contínuas, otimizando performance e garantindo resultados reais. Mais do que visibilidade, conectamos seu negócio às melhores práticas do mercado, transformando visitantes em clientes fiéis. Com estratégias baseadas em dados e inovação constante, seu projeto se destaca em qualquer cenário digital.",
  image: {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder",
  },
  items: [
    {
      name: "Evolução Mensal",
    },
    {
      name: "Suporte e Evolução",
    },
    {
      name: "Headless Commerce",
    },
    {
      name: "Atualização VTEX IO",
    },
  ],
}

export default function Section({ title = defaultProps.title, description = defaultProps.description, image = defaultProps.image.src, items = defaultProps.items }: Props) {
  return (
    <div class="p-20 mx-auto mobile:p-5">
      <div class="max-w-[1200px] mx-auto relative flex items-end justify-between mobile:flex-col">
        <Image src={image} alt={title} width={330} height={155} />
        <div class="text-white max-w-[675px] flex flex-col gap-10 mobile:w-full ">
          <h2 class="text-[24px] font-semibold">{title}</h2>
          <p class="text-[14px] font-normal">{description}</p>
          <div class="flex items-center justify-between mobile:flex-wrap">
            {items.map((item) => (
              <div class="flex items-center justify-center gap-2 border border-[#515151] rounded-full px-5 py-3 text-[#D1A359] text-[12px] hover:bg-[#FFFFFF] hover:text-black font-semibold">
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}