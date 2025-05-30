import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        'barra-vertical': 'barraVertical 3s linear infinite',
        'barra-horizontal': 'barraHorizontal 3s linear infinite',
        'fade-in-up': 'fadeInUp 2s cubic-bezier(0.4, 0, 0.2, 1) both',
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        barraVertical: {
          "0%": { top: "50px", opacity: "1" },
          "100%": { top: "calc(100vh - 130px)", opacity: "1" },
        },
        barraHorizontal: {
          "0%": { right: "50px", bottom: "50px", opacity: "1" },
          "100%": { right: "calc(100vw - 130px)", bottom: "50px", opacity: "1" },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens: {
        mobile: { max: "1023px" },
        // =< @media (max-width: 1023px) { ... }

        tablet: "680px",
        // => @media (min-width: 680px) { ... }

        "tablet-large": "768px",
        // => @media (min-width: 768px) { ... }

        desk: "1024px",
        "desk-1000": "1000px",
        // => @media (min-width: 1024px) { ... }

        "desk-small": { max: "1200px" },
        // =< @media (min-width: 1200px) { ... }

        "max-1330": {
          max: "1330px",
        },
        "max-1240": {
          max: "1240px",
        },
        "max-1024": {
          max: "1024px",
        },
        "tabata-screen": {
          raw: "(max-width: 1280px) and (min-height: 500px) and (max-height: 890px) and (min-width: 1080px) ",
        },
        "tabata-screen-2": {
          raw: "(max-width: 1930px) and (min-height: 800px) and (max-height: 890px) and (min-width: 1920px) ",
        },
      },
    },
  },
};
