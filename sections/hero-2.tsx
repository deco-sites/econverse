import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @description The description of title.
   */
  title?: string;
  /**
   * @description The description of subtitle.
   */
  subtitle?: string;
  /**
   * @description The description of clients.
   */
  clients?: Image[];
  /**
   * @description The description of case studies.
   */
  caseStudies?: CaseStudy[];
}

interface Image {
  /**
   * @description The description of image.
   */
  image: ImageWidget;
  /**
   * @description The description of image.
   */
  name: string;
}

interface CaseStudy {
  /**
   * @description The description of image.
   */
  title: string;
  /**
   * @description The description of image.
   */
  description: string;
}

export default function Section({ title = "Nossos clientes", subtitle = "Empresas que acreditam no poder da inovação ", clients, caseStudies }: Props) {
  return (
    <div class="bg-white p-20 pt-0 mx-auto mobile:p-0">
      <div class="flex flex-col gap-10 max-w-[1200px] mx-auto relative items-center justify-center mobile:gap-3 mobile:pb-10">
        <h2 class="text-[16px] font-medium w-fit h-fit text-[#FFFFFF] bg-[#181818] p-2 pr-4 pl-4 rounded-sm max-w-[700px] mobile:mt-5 mobile:px-5" >
          {title}
        </h2>
        <h5 class="text-[#181818] text-[36px] font-semibold max-w-[510px] text-center mobile:text-[24px]">
          {subtitle}
        </h5>
        <div class="flex w-full gap-14 mobile:flex-col">
          <div class="flex flex-wrap w-1/2 min-w-[50%] justify-between gap-2 mobile:w-full mobile:justify-center">
            {clients?.map((client) => (
              <div class="flex flex-col w-1/6 items-center justify-center mt-10">
                <Image src={client.image} alt={client.name} class="w-full h-full object-contain max-w-[100px] max-h-[36px]" />
              </div>
            ))}
          </div>
          {caseStudies?.map((caseStudy) => (
            <div class="flex flex-col w-1/2 justify-end mobile:hidden">
              <p class="text-[#515151] text-[14px] font-medium max-w-[530px] min-w-[265px] text-left">{caseStudy.description}</p>
              <div class="flex w-full mt-8 gap-2 items-center text-[#181818] hover:text-[#D1A359] cursor-pointer">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.1383L14.0078 9.1383L8.86158 3.99211L9.50853 3.25694L15.88 9.62841L9.50853 15.9999L8.86158 15.2647L14.0078 10.1185L2 10.1185L2 9.1383Z" fill="#181818"/>
                </svg>
                <h3 class="text-[14px] font-semibold max-w-[530px] text-left">{caseStudy.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
