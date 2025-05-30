import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label: string;
      url: string;
    }[];
    buttons: CTA[];
  };
  solutions?: {
    categories: {
      label: string;
      subcategories: { label: string; url: string }[];
    }[];
  }
}

export default function Header({
  logo = {
    src: "https://assets.decocache.com/econverse-page/774eb89b-4e9d-457e-ba0e-6dc1c104bb9c/econverse.png",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "Soluções", url: "/solucoes" },
      { label: "Cases", url: "/cases" },
      { label: "Imprensa", url: "/imprensa" },
      { label: "Quem Somos", url: "/quem-somos" },
    ],
    buttons: [
      { id: "projeto", href: "/projeto", text: "Começar um projeto", outline: true },
    ],
  },
  solutions = {
    categories: [
      { label: "VTEX Solutions",
        subcategories: [
          { label: "Implementation", url: "/" },
          { label: "Headless", url: "/" },
          { label: "VTEX IO", url: "/" },
          { label: "App Solutions", url: "/" },
          { label: "Evolution", url: "/" },
        ]
      },
      { label: "Digital Commerce",
        subcategories: [
          { label: "Digital Commerce Development", url: "/" },
          { label: "Support and Evolution", url: "/" },
          { label: "Ux and UI Design", url: "/" },
          { label: "Customized Apps", url: "/" },
          { label: "Plugins and Integrations", url: "/" },

        ]
      },
      { label: "Digital Marketing",
        subcategories: [
          { label: "CDP", url: "/" },
          { label: "SEO", url: "/" },
          { label: "Marketing Automation", url: "/" },
          { label: "AI and Personalization", url: "/" },
          { label: "CRO", url: "/" },
        ]
      },
      { label: "Digital Transformation",
        subcategories: [
          { label: "Assessment Digital", url: "/" },
          { label: "Commerce Consulting", url: "/" },
          { label: "Design Thinking", url: "/" },
          { label: "Solutions Architecture", url: "/" },
        ]
      },
      { label: "Data Transformation",
        subcategories: [
          { label: "Data Assessment", url: "/" },
          { label: "Data Governance", url: "/" },
          { label: "Cloud Management", url: "/" },
          { label: "Data Visualization ", url: "/" },
          { label: "LGPDY ", url: "/" },
        ]
      },
    ],
  }
}: Nav) {
  return (
    <header class="w-full fixed top-0 left-0 right-0 z-50 bg-[#181818]">
      <nav class="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-[35px] lg:px-[60px] lg:flex-row flex-row-reverse">
        <div class="items-center flex-1 gap-[18px] min-w-0 hidden lg:flex">
          {/* Links à esquerda (desktop) */}
          <ul class="hidden lg:flex gap-[18px] min-w-0">
            {navigation.links.map((link, idx) => (
              <li key={link.label + idx} class={link.label === "Soluções" ? "group flex items-center gap-1" : undefined}>
                <a
                  href={link.url}
                  class={`text-[14px] ${link.label === "Home" ? "font-bold" : ""} text-[#FBFBFB] hover:text-primary transition-colors px-2 py-1 flex items-center gap-1`}
                >
                  {link.label}
                  {link.label === "Soluções" && (
                    <Image src="https://assets.decocache.com/econverse-page/44a695ec-d9d1-4b54-b942-edb99abb3a4d/mdi-light_arrow-down.png" alt="Ícone seta para baixo" width={17} height={17} class="object-contain" />
                  )}
                </a>
                {link.label === "Soluções" && (
                  <div class="opacity-0 border-t border-[#FCFCFD0D] invisible group-hover:opacity-100 bg-[#181818] group-hover:visible transition-all duration-300 fixed left-0 right-0 top-[65px] z-40">
                    <div class="w-[100dvw] max-w-[1440px] mx-auto bg-[#181818] p-[50px] flex justify-between">
                      {solutions.categories.map((category, idx) => (
                        <div key={category.label + idx} class="flex flex-col gap-2">
                          <h3 class="font-bold text-[16px] text-[#FBFBFB] uppercase tracking-wide">{category.label}</h3>
                          <ul class="flex flex-col gap-2">
                            {category.subcategories.map((subcategory, subIdx) => (
                              <li key={subcategory.label + subIdx} class="text-[15px] text-[#ADAEAD] uppercase tracking-wide hover:text-[#FBFBFB] cursor-pointer transition-colors">
                                <a href={subcategory.url}>{subcategory.label}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Logo centralizada */}
        <div class="flex-shrink-0 flex justify-center items-center mx-4 lg:w-[160px] w-[66%]">
          <a href="/" class="flex items-center justify-center w-full">
            <Image src={logo.src || ""} alt={logo.alt} width={120} height={36} class="object-contain mx-auto" />
          </a>
        </div>


        {/* Ações à direita (desktop) */}
        <div class="hidden lg:flex items-center gap-6 flex-1 justify-end min-w-0">
          {/* Ícone internet/globo */}
          <a href="/" class="text-[#FFFFFF] text-[14px]">Contato</a>
          <span class="text-[14px] text-[#FBFBFB] uppercase tracking-wide items-center gap-2 hidden">
            <Image src="https://assets.decocache.com/econverse-page/f97acc76-b989-48e3-be84-87cc69d197cc/global.png" alt="Ícone internet/globo" width={17} height={17} class="object-contain" />
            PT&nbsp;|&nbsp;EN
          </span>
          {/* Botão(s) */}
          {navigation.buttons.map((btn) => (
              <button
                key={btn.id}
                href={btn.href}
                class={`relative rounded-[4px] font-poppins text-[12px] text-[#FBFBFB] px-4 py-2 ml-2 transition-colors overflow-hidden hover:bg-white hover:text-[#181818]`}
              >
                <span class="rotating-border absolute inset-0 rounded-[4px]"></span>
                <span class="relative z-10">{btn.text}</span>
              </button>
          ))}
        </div>

        {/* Menu mobile (hamburguer) */}
        <label htmlFor="mobile-drawer-nav" class="flex lg:hidden btn btn-ghost drawer-button lg:ml-2 ml-0">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5.99414" width="18" height="2" rx="1" fill="#ADAEAD"/>
            <rect x="2" y="16.9941" width="18" height="2" rx="1" fill="#ADAEAD"/>
          </svg>
        </label>
      </nav>  

      {/* Drawer mobile */}
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle hidden" />
      <aside class="drawer-side z-50 lg:hidden">
        <label htmlFor="mobile-drawer-nav" aria-label="close sidebar" class="drawer-overlay" />
        <div class="flex flex-col gap-8 min-h-full w-80 bg-[#181818] text-[#FBFBFB] p-6">
          <a class="mb-4" href="/">
            <Image src={logo.src || ""} alt={logo.alt} width={120} height={36} class="object-contain" />
          </a>
          <ul class="menu flex flex-col gap-2 p-0">
            {navigation.links.map((link, idx) => (
              <li key={link.label + idx}>
                <a href={link.url} class="text-lg font-poppins flex items-center">
                  {link.label}
                  {link.label === "Soluções" && (
                    <span class="ml-1 inline-block align-middle">▼</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div class="flex flex-col gap-3">
            <span class="font-poppins text-[14px] text-[#FBFBFB] uppercase tracking-wide hidden">PT&nbsp;|&nbsp;EN</span>
            {navigation.buttons.map((btn) => (
              <a
                key={btn.id}
                href={btn.href}
                class={`w-fit relative rounded-[4px] font-poppins text-[12px] text-[#FBFBFB] px-4 py-2 transition-colors overflow-hidden hover:bg-white hover:text-[#181818] inline-block`}
              >
                <span class="rotating-border absolute inset-0 rounded-[4px]"></span>
                <span class="relative z-10">{btn.text}</span>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </header>
  );
}
