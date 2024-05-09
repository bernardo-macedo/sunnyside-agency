/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"], // Add Barlow as the primary sans-serif font
      serif: ["Fraunces", "serif"], // Add Fraunces as the primary serif font
    },
    extend: {
      backgroundImage: {
        "hero-image-desktop": "url('/dist/images/desktop/image-header.jpg')",
        "hero-image-mobile": "url('/dist/images/mobile/image-header.jpg')",
      },
      colors: {
        primary: {
          "soft-red": "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
          "dark-blue": "hsl(198, 62%, 26%)",
          "dark-moderate-cyan": "hsl(168, 34%, 41%)",
        },
        neutral: {
          "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
          "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
          "dark-grayish-blue": "hsl(232, 10%, 55%)",
          "grayish-blue": "hsl(210, 4%, 67%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
