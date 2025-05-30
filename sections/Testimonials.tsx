import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface TestimonialItem {
  content?: {
    description?: string;
    avatar?: ImageWidget;
    /** @description Image's alt text */
    alt?: string;
    name?: string;
    position?: string;
  }
}

export interface Props {
  title?: string;
  description?: string;
  testimonialsLine1?: TestimonialItem[];
  testimonialsLine2?: TestimonialItem[];
  testimonialsLine3?: TestimonialItem[];
}

const DEFAULT_PROPS = {
  title: "Depoimentos...",
  description: "Clientes satisfeitos",
  testimonialsLine1: [
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
  ],
  testimonialsLine2: [
    {
      content: {
        description: "Testimonial 1",
        avatar: "https://via.placeholder.com/150",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
  ],
  testimonialsLine3: [
    {
      content: {
        description: "Testimonial 1",
        avatar: "https://via.placeholder.com/150",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
  ],
};

function Testimonials(props: Props) {
  const id = useId();
  const { title, description, testimonialsLine1, testimonialsLine2, testimonialsLine3 } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="p-20 mx-auto relative mobile:p-5">
      <div class="max-w-[1200px] mx-auto relative flex items-center justify-center flex-col gap-5">
        <div class="absolute top-[-180px] left-0">
          <div class="relative">
            <Image 
              src="https://assets.decocache.com/econverse-page/e8c0eb9f-ad6f-4e4d-b1de-f31371ea8ccb/Group-1437253819.png" 
              alt="Logo" 
              width={400} 
              height={257} 
              class="mask-image-gradient"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
              }}
            />
          </div>
        </div>
        <h2 class="text-[70px] font-semibold text-white z-10 mobile:text-[28px]">{title}</h2>
        <p class="text-[24px] font-medium text-[#ADAEAD] z-10 mobile:text-[16px]">{description}</p>
        <div class="flex flex-row flex-wrap justify-between mobile:flex-col">
          <div class="flex flex-col gap-16 w-[30%] mobile:w-full">
            {testimonialsLine1.map((testimonial, index) => (
              <TestimonialItem {...testimonial} key={index} />
            ))}
          </div>
          <div class="flex flex-col gap-16 mt-28 w-[30%] mobile:w-full">
            {testimonialsLine2.map((testimonial, index) => (
              <TestimonialItem {...testimonial} key={index} />
            ))}
          </div>
          <div class="flex flex-col gap-16 mt-52 w-[30%] mobile:w-full">
            {testimonialsLine3.map((testimonial, index) => (
              <TestimonialItem {...testimonial} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialItem({ content }: TestimonialItem) {
  const { avatar, alt = "", name, position, description } = content || {};
  return (
    <div class={`rounded-[4px] h-fit p-6`} 
    style={{
      border: "1px solid",
      borderImage: "linear-gradient(180deg, #51515180, #51515110)",
      borderImageSlice: 1,
    }}>
      <div class="flex items-center gap-4 w-full">
        <div class="rounded-full border border-[#D1A359] relative">
          {avatar && <Image src={avatar} alt={alt} width={40} height={40} class="rounded-full" />}
          <div class="w-4 h-4 bg-[#D1A359] rounded-full absolute top-0 right-[-5px] flex items-center justify-center">
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M1.57673 6.01112C1.45805 6.01112 1.29783 5.92211 1.09608 5.74409C0.906193 5.56608 0.793449 5.43553 0.757845 5.35245C0.769713 5.28125 0.84092 5.15663 0.971467 4.97862C1.24443 4.62258 1.41058 4.30808 1.46992 4.03512C1.52926 3.60788 1.54706 3.34085 1.52332 3.23404C1.51145 3.12723 1.3097 3.01448 0.918061 2.89581C0.668836 2.76526 0.502686 2.61098 0.419611 2.43296C0.336536 2.24307 0.300932 1.94638 0.3128 1.54287C0.431479 1.15123 0.591695 0.902003 0.793449 0.795192C0.995202 0.676514 1.3097 0.599373 1.73694 0.56377C2.03364 0.575637 2.28287 0.676514 2.48462 0.866399C2.69824 1.05629 2.82285 1.32331 2.85846 1.66748C2.88219 2.07099 2.89406 2.36175 2.89406 2.53977C2.89406 3.12129 2.81692 3.64348 2.66264 4.10633C2.41341 4.77093 2.09891 5.37619 1.71914 5.92211C1.68354 5.98145 1.63607 6.01112 1.57673 6.01112ZM5.13709 6.02892C5.01841 6.02892 4.8938 5.99332 4.76325 5.92211C4.6327 5.8509 4.52589 5.77376 4.44282 5.69069C4.35974 5.59575 4.33007 5.53047 4.35381 5.49487C4.36568 5.41179 4.42502 5.29905 4.53183 5.15663C4.68611 4.95488 4.80479 4.74719 4.88786 4.53357C4.97094 4.31995 5.01248 4.02919 5.01248 3.66128C5.01248 3.29338 4.91753 3.08569 4.72765 3.03822C4.40721 2.87207 4.20546 2.70592 4.12239 2.53977C4.05118 2.36175 4.01557 2.14813 4.01557 1.8989C4.01557 1.73275 4.00371 1.61408 3.97997 1.54287C3.97997 1.26991 4.11052 1.03848 4.37161 0.848598C4.6327 0.658712 4.91753 0.56377 5.2261 0.56377C5.57027 0.56377 5.86103 0.67058 6.09839 0.884201C6.34761 1.08595 6.50189 1.43012 6.56123 1.91671C6.56123 2.41516 6.54936 2.81866 6.52563 3.12723C6.50189 3.42393 6.42475 3.74436 6.29421 4.08853C6.09245 4.72939 5.78982 5.34059 5.38631 5.92211C5.31511 5.99332 5.23203 6.02892 5.13709 6.02892Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[14px] font-medium text-white">{name}</p>
          <p class="text-[14px] font-normal text-[#ADAEAD]">{position}</p>
        </div>
      </div>
      <p class="text-[14px] font-normal text-white mt-4">{description}</p>
    </div>
  );
}

export default Testimonials;
