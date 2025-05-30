import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Column {
  title: string;
  items: FooterLinkItem[];
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: ImageWidget;
}

export interface Props {
  links?: Column[];
  copyright?: string;
  socialLinks?: SocialLink[];
}

const defaultLinks: Column[] = [
  {
    title: "Serviços",
    items: [
      { label: "Implantação VTEX IO", href: "/" },
      { label: "Implantação Shopify", href: "/" },
      { label: "Suporte & Evolução", href: "/" },
      { label: "Marketplace In & Out", href: "/" },
      { label: "Aplicativos iOS/Android", href: "/" },
      { label: "Growth Marketing", href: "/" },
    ],
  },
  {
    title: "Ecossistema",
    items: [
      { label: "Fornecedor VTEX", href: "/" },
      { label: "Ecommerce Brasil", href: "/" },
      { label: "Trabalhe Conosco", href: "/" },
      { label: "Funcionalidades", href: "/" },
      { label: "Glassdoor", href: "/" },
      { label: "Eventos", href: "/" },
    ],
  },
  {
    title: "Econverse",
    items: [
      { label: "Sobre nós", href: "/" },
      { label: "Carreiras", href: "/" },
      { label: "Parcerias", href: "/" },
      { label: "Econverse na mídia", href: "/" },
      { label: "Blog Econverse", href: "/" },
      { label: "Cases", href: "/" },
    ],
  },
  {
    title: "Plataformas",
    items: [
      { label: "VTEX", href: "/" },
      { label: "Shopify", href: "/" },
      { label: "Wake", href: "/" },
      { label: "Deco", href: "/" },
      { label: "Sobre nós", href: "/" },
    ],
  },
  {
    title: "CONTATO E REDES SOCIAIS",
    items: [
      { label: "email@econverse.com.br", href: "mailto:email@econverse.com.br" },
      { label: "(XX) XXXXX-XXXX", href: "tel:+55XXXXXXXXXXX" },
      { label: "LinkedIn", href: "https://linkedin.com/company/econverse" },
      { label: "Instagram", href: "https://instagram.com/econverse" },
    ],
  },
];

const defaultSocialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/econverse", icon: "/images/linkedin.svg" },
  { label: "Instagram", href: "https://instagram.com/econverse", icon: "/images/instagram.svg" },
  { label: "Facebook", href: "https://facebook.com/econverse", icon: "/images/facebook.svg" },
  { label: "Twitter", href: "https://twitter.com/econverse", icon: "/images/twitter.svg" },
];

const defaultCopyright = "© Econverse 2024 - Todos os direitos reservados.";

export default function Footer({
  links = defaultLinks,
  copyright = defaultCopyright,
  socialLinks = defaultSocialLinks,
}: Props) {
  // Mapeamento de títulos para larguras fixas conforme o Figma (aproximado)
  const columnWidths: Record<string, string> = {
    "INSTITUCIONAL": "w-[195px]",
    "ATENDIMENTO": "w-[169px]",
    "MINHA CONTA": "w-[188px]", // Figma: Frame 1617544358
    "POLÍTICAS": "w-[160px]",
    "CONTATO E REDES SOCIAIS": "w-[252px]",
  };

  console.log(links, 'teste'); 

  return (
    <footer class="text-white font-['Poppins'] relative">
      <div class="relative z-10 px-[35px] lg:px-[60px]">
        <div>
          <div className="container mx-auto py-16 lg:py-24 max-w-[1440px] border-b border-white/10">
            {/* Alterado de grid para flex com gap de 72px e larguras fixas por coluna */}
            <div className="flex flex-wrap lg:flex-nowrap justify-between">
              {links?.map((column) => (
                <div key={column.title} class={`flex-shrink-0 lg:w-auto ${columnWidths[column.title] || 'w-[47%] lg:w-auto lg:mt-0 mt-[32px]'}`}>
                  <h4 className="text-base font-semibold text-white mb-6 uppercase tracking-wider">
                    {column.title}
                  </h4>
                  {/* Ajustado para gap de 10px (space-y-2.5 ou space-y-3) */}
                  <ul className="space-y-2.5">
                    {column.items?.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-sm text-gray-300 hover:text-white hover:underline transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col lg:max-w-[252px] w-full max-w-full lg:mt-0 mt-[32px] mx-auto lg:mx-px">
                <h5 className="text-base font-semibold text-white mb-6 uppercase tracking-wider">Assine nossa newsletter</h5>
                <span className="text-sm text-gray-300 mb-6">Assine nossa newsletter semanal para receber dicas  e atualizações exclusivas.</span>
                <div className="flex items-center gap-2 relative lg:w-fit w-full">
                  <input type="email" placeholder="Endereço de e-mail" class="outline-none lg:w-[252px] w-full border border-[#FCFCFD1A] bg-transparent pt-4 pb-4 pl-4 pr-4 " />
                  <button className="text-black px-2 py-2 absolute right-2 bg-[#D1A359] rounded-sm">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.10515 12.0002L13.9909 14.4632C14.1066 14.5048 14.2301 14.5199 14.3524 14.5077C14.4747 14.4954 14.5928 14.4559 14.6979 14.3921C14.803 14.3284 14.8925 14.2419 14.9599 14.1391C15.0273 14.0363 15.0708 13.9197 15.0874 13.7979L16.4922 3.17942C16.5777 2.53292 15.9079 2.05067 15.3169 2.33192L1.96765 8.70392C1.30765 9.01892 1.35715 9.97142 2.04715 10.2167L3.87715 10.8677L4.87465 11.2179M9.74965 12.9452L8.25715 15.4397C7.76965 16.0457 6.7879 15.7029 6.7879 14.9274V12.9302C6.78793 12.5533 6.92984 12.1902 7.1854 11.9132L10.0887 8.76317" stroke="#181818" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex lg:hidden items-center justify-center w-full text-sm text-center mt-[40px]">
                <span class="text-white/70">Avenida das Nações Unidas, 13797 – Bloco 2, 20° andar. Morumbi, São Paulo / SP  – 04794-000</span>
              </div>
              <div class="flex gap-2 lg:hidden flex-col justify-center w-full text-sm text-center mt-[20px]">
                <span class="text-white/70">+55 11 98830-6474</span>
                <span class="text-white/70">contato@econverse.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center border-white/10 border-b lg:py-20 py-7 gap-10 max-w-[1440px] mx-auto">
          <h4 class="lg:text-[94px] text-[62px] font-bold text-[#525254] leading-none tracking-tight opacity-50 pointer-events-none select-none">econverse</h4>
          <div class="hidden lg:flex items-center justify-center max-w-[300px] text-sm ml-20">
              <span class="text-white/70">Avenida das Nações Unidas, 13797 – Bloco 2, 20° andar. Morumbi, São Paulo / SP  – 04794-000</span>
          </div>
          <div class="border-white/10 border-r h-10 hidden lg:flex"/>
          <div class="hidden lg:flex flex-col justify-center max-w-[300px] text-sm">
              <span class="text-white/70">+55 11 98830-6474</span>
              <span class="text-white/70">contato@econverse.com.br</span>
          </div>
          <div class="border-white/10 border-r h-10 hidden lg:flex"/>
          <div class="hidden lg:flex items-center justify-center max-w-[300px] text-sm gap-2">
            {socialLinks?.map((item) => (
              <div class="flex items-center justify-center border-white/10 border w-8 h-8 rounded-md cursor-pointer ">
                <Image src={item.icon} alt={item.label} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:text-sm text-xs gap-6">
            <span className="text-white text-center lg:text-left">
              {copyright}
            </span>
            <div class="flex lg:hidden items-center justify-center max-w-[300px] text-sm gap-2">
              {socialLinks?.map((item) => (
                <div class="flex items-center justify-center border-white/10 border w-8 h-8 rounded-md cursor-pointer ">
                  <Image src={item.icon} alt={item.label} />
                </div>
              ))}
            </div>
            <a
              href="#top"
              className="flex items-center gap-2 transition-colors duration-200 group"
            >
              <span className="text-white font-bold">Voltar ao Topo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-up transition-transform duration-200 group-hover:-translate-y-0.5"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
            </a>
            <a href="/" className="lg:flex hidden items-center gap-2 text-underline">
              <span>Vamos tomar um café?</span>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8.91797L5 4.91797L1 0.917969" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
