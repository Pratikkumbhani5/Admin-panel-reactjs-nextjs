module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-flexbugs-fixes": {},

    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },

    "@fullhuman/postcss-purgecss": {
      content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-multi-carousel/lib/styles.css",
        "./node_modules/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css",
        "./node_modules/react-modal-video/scss/modal-video.scss",
        "./node_modules/rc-tooltip/assets/bootstrap.css",
        "./node_modules/react-toastify/dist/ReactToastify.css",
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ["html", "body"],
    },
  },
};
