interface Props {
  /**
  * @description The description of name.
  */
  title?: string;
  description?: string;
  cta?: {
    text: string;
    link: string;
  }
  propelling?: {
    title: string;
    items: string[];
  }
  items?: {
    title: string;
    description: string;
  }[]
}

export default function Section({ 
  title = "Seu app, mais rápido, mais integrado, mais poderoso.", 
  description = "Nossa tecnologia garante alta velocidade, segurança e escalabilidade, proporcionando uma experiência mobile envolvente e livre de fricções.",
  cta = {
    text: "Fale com nossos especialistas",
    link: "https://wa.me/5511999999999"
  },
  propelling = {
    title: "IMPULSIONANDO:",
    items: ["MOBILE EXPERIENCE", "INTEGRAÇÃO ÁGIL", "Escalabilidade"],
  },
  items = [
      {
        title: "Integração inteligente",
        description: "Conexão fluida entre apps nativos e plataformas.",
      },
      {
        title: "Integração inteligente",
        description: "Conexão fluida entre apps nativos e plataformas.",
      },
      {
        title: "Integração inteligente",
        description: "Conexão fluida entre apps nativos e plataformas.",
      },
      {
        title: "Integração inteligente",
        description: "Conexão fluida entre apps nativos e plataformas.",
      },
      {
        title: "Integração inteligente",
        description: "Conexão fluida entre apps nativos e plataformas.",
      },
      {
        title: "Integração inteligente",
        description: "Conexão fluida entre apps nativos e plataformas.",
      },
  ]
}: Props) {
  return (
    <div className="flex flex-col bg-[#F0F0F0] items-center justify-center pt-[80px] pb-[110px]">
      <div className="flex lg:items-left items-center justify-between max-w-[1440px] w-full px-[35px] lg:px-[60px] flex-col lg:flex-row">
        <div className="flex flex-col lg:items-start items-center justify-center gap-[24px] lg:w-1/2 w-full">
          <h2 className="text-[#181818] text-[24px] lg:text-[32px] font-semibold max-w-[480px] text-center lg:text-left">{title}</h2>
          <p className="text-[#181818] text-[14px] font-light max-w-[460px] text-center lg:text-left mt-[25px]">{description}</p>
          <button className="bg-[#D1A359] text-[#181818] text-[14px] font-medium mt-[24px] w-fit px-[16px] py-[14px] rounded-[4px] cursor-pointer">{cta.text}</button>
          <div className="mt-[160px] hidden lg:block">
            <h5 className="text-[#515151] text-[12px] font-semibold">{propelling?.title}</h5>
            <div className="flex items-start gap-[24px] mt-[9px]">
              {propelling?.items?.map((item) => (
                <p className="text-[#181818] text-[12px] font-semibold">{item}</p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-start justify-center lg:w-1/2 w-full mt-[55px] lg:mt-0">
          {items?.map((item) => (
            <div className="flex flex-col lg:items-start items-center justify-center lg:[&:not(:nth-last-child(-n+2))]:border-b border-[#D9D9D9] pt-[24px] pb-[24px] lg:basis-1/2 w-full">
              <div className="flex items-center justify-center gap-[16px]">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.853 5.20703L7.26767 13.7924L3.36523 9.88996" stroke="#00A277" stroke-width="1.56098" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                <h3 className="text-[#181818] text-[20px] font-medium lg:max-w-[260px] max-w-[300px]">{item.title}</h3>
              </div>
              <p className="text-[#515151] text-[16px] font-normal lg:max-w-[260px] max-w-[300px] text-left ml-[35px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}