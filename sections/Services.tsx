import { useEffect, useRef } from "preact/hooks";

interface Props {
  /**
  * @description The description of name.
  */
  title?: string;
  items?: {
    title: string;
  }[]
  items2?: {
    title: string;
  }[]
  duration?: number;
}

export default function Section({ 
  title = "Conheça nossos serviços digitais para transformar seu negócio em escala global",
  items = [
    {
      title: "Proteção de dados e transações com alto nível de criptografia",
    },
    {
      title: "Proteção de dados e transações com alto nível de criptografia",
    },
    {
      title: "Proteção de dados e transações com alto nível de criptografia",
    }
  ],
  items2 = [
    {
      title: "Proteção de dados e transações com alto nível de criptografia",
    },
    {
      title: "Proteção de dados e transações com alto nível de criptografia",
    },
    {
      title: "Proteção de dados e transações com alto nível de criptografia",
    }
  ],
  duration = 200
}: Props) {
  // Certificar-se de que temos itens suficientes para criar o efeito de carrossel infinito
  const generateItems = () => {
    if (!items || items.length === 0) return [];
    // Duplicar os itens para criar um efeito infinito
    return [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];
  };

  const generateItems2 = () => {
    if (!items2 || items2.length === 0) return [];
    // Duplicar os itens para criar um efeito infinito
    return [...items2, ...items2, ...items2, ...items2, ...items2, ...items2, ...items2, ...items2, ...items2, ...items2];
  };
  
  const duplicatedItems = generateItems();
  const duplicatedItems2 = generateItems2();
  
  return (
    <div className="flex flex-col bg-[#FFFFFF] items-center justify-center pt-[80px] pb-[110px]">
      <div className="flex flex-col items-center justify-center max-w-[1440px] w-full px-[35px] lg:px-[60px]">
        <h2 className="text-[#181818] text-[20px] lg:text-[32px] font-semibold max-w-[720px] text-center mb-[60px]">{title}</h2>

        {/* Primeiro carrossel */}
        <div className="w-full relative overflow-hidden">
          {/* Gradiente à esquerda */}
          <div className="absolute top-0 bottom-0 left-0 w-[60px] bg-gradient-to-r from-white to-transparent z-10" />
          
          {/* Carrossel com efeito de rolagem infinita */}
          <div className="overflow-hidden">
            <div className="flex items-center gap-4 animate-slide">
              {duplicatedItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center rounded-full bg-[#FAF5EA] px-[24px] py-[16px] flex-shrink-0">
                  <h3 className="text-[#181818] text-[16px] font-semibold whitespace-nowrap">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradiente à direita */}
          <div className="absolute top-0 bottom-0 right-0 w-[60px] bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* Segundo carrossel (direção oposta) */}
        <div className="w-full relative overflow-hidden mt-4">
          {/* Gradiente à esquerda */}
          <div className="absolute top-0 bottom-0 left-0 w-[60px] bg-gradient-to-r from-white to-transparent z-10" />
          
          {/* Container de rolagem infinita na direção oposta */}
          <div className="overflow-hidden">
            <div className="flex items-center gap-4 animate-slide2">
              {duplicatedItems2.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center rounded-full bg-[#FAF5EA] px-[24px] py-[16px] flex-shrink-0">
                  <h3 className="text-[#181818] text-[16px] font-semibold whitespace-nowrap">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradiente à direita */}
          <div className="absolute top-0 bottom-0 right-0 w-[60px] bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
      
      <style>
        {`
          .animate-slide {    
            display: flex;
            animation: slide ${duration || 200}s linear infinite;
            width: fit-content;
          }
          
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-20% * 5));
            }
          }
          
          .animate-slide2 {    
            display: flex;
            animation: slide2 ${duration || 200}s linear infinite reverse;
            width: fit-content;
          }
          
          @keyframes slide2 {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-20% * 5));
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .animate-slide, .animate-slide2 {
              animation-play-state: paused;
            }
          }
        `}
      </style>
    </div>
  )
}