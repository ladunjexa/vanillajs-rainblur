const MAIN_PATH = "master/assets";

export const CONFIG = {
  assets: {
    css: `${MAIN_PATH}/css/style.css`,
    js: `${MAIN_PATH}/js/script.js`,
    media: `${MAIN_PATH}/media`,
    projects: `${MAIN_PATH}/media/projects`,
    tech: `${MAIN_PATH}/media/tech`,
  },

  ghRepo: {
    name: "50-Projects-In-50-Days",
    user: "ladunjexa",
  },
};

export const webData = {
  title: "ladunjexa — 50 Projects In 50 Days",

  navbar: {
    title: {
      heading1: null,
      span: "50 Projects In 50 Days",
      heading2: null,
    },
    githubLink: `https://github.com/${CONFIG.ghRepo.user}/${CONFIG.ghRepo.name}`,
    udemyLink: "https://www.udemy.com/course/50-projects-50-days/",
  },

  hero: {
    title: {
      heading1: "50 mini projects in",
      span: "HTML, CSS & JavaScript",
      heading2: "that relate to the DOM.",
    },
    subtitle: {
      a: {
        text: "Udemy course",
        href: "https://www.udemy.com/course/50-projects-50-days/",
      },
      span: "by Brad Traversy, Florin Pop.",
    },
  },

  dialog: {
    headline: "Projects",
    buttonProps: {
      className:
        "bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white font-semibold py-1 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out",
      activeClassName:
        "from-indigo-800 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 focus:ring-indigo-500",
      type: "button",
    },
  },

  techstack: {
    divProps: {
      className: "h-12 transform hover:scale-125 duration-300 ease-in-out",
    },
  },
};

export const technologiesData = [
  { name: "HTML", img: "html_icon.svg" },
  { name: "CSS", img: "css_icon.svg" },
  { name: "JS", img: "js_icon.svg" },
];

export const projectsData = [
  {
    number: 1,
    name: "expanding-cards",
    imgLink: "1-expanding-cards.png",
  },
  {
    number: 2,
    name: "progress-steps",
    imgLink: "2-progress-steps.png",
  },
  {
    number: 3,
    name: "rotating-navigation-animation",
    imgLink: "3-rotating-navigation-animation.png",
  },
  {
    number: 4,
    name: "hidden-search-widget",
    imgLink: "4-hidden-search-widget.png",
  },
  {
    number: 5,
    name: "blurry-loading",
    imgLink: "5-blurry-loading.png",
  },
  {
    number: 6,
    name: "scroll-animation",
    imgLink: "6-scroll-animation.png",
  },
  {
    number: 7,
    name: "split-landing-page",
    imgLink: "7-split-landing-page.png",
  },
  { number: 8, name: "form-wave", imgLink: "8-form-wave.png" },
  { number: 9, name: "sound-board", imgLink: "9-sound-board.png" },
  { number: 10, name: "dad-jokes", imgLink: "10-dad-jokes.png" },
  {
    number: 11,
    name: "event-keycodes",
    imgLink: "11-event-keycodes.png",
  },
  { number: 12, name: "faq-collapse", imgLink: "12-faq-collapse.png" },
  {
    number: 13,
    name: "random-choice-picker",
    imgLink: "13-random-choice-picker.png",
  },
  {
    number: 14,
    name: "animated-navigation",
    imgLink: "14-animated-navigation.png",
  },
  {
    number: 15,
    name: "incrementing-counter",
    imgLink: "15-incrementing-counter.png",
  },
  { number: 16, name: "drink-water", imgLink: "16-drink-water.png" },
  { number: 17, name: "movie-app", imgLink: "17-movie-app.png" },
  {
    number: 18,
    name: "background-slider",
    imgLink: "18-background-slider.png",
  },
  { number: 19, name: "theme-clock", imgLink: "19-theme-clock.png" },
  {
    number: 20,
    name: "button-ripple-effect",
    imgLink: "20-button-ripple-effect.png",
  },
  { number: 21, name: "drag-n-drop", imgLink: "21-drag-n-drop.png" },
  { number: 22, name: "drawing-app", imgLink: "22-drawing-app.png" },
  {
    number: 23,
    name: "kinetic-loader",
    imgLink: "23-kinetic-loader.png",
  },
  {
    number: 24,
    name: "content-placeholder",
    imgLink: "24-content-placeholder.png",
  },
  {
    number: 25,
    name: "sticky-navbar",
    imgLink: "25-sticky-navbar.png",
  },
  {
    number: 26,
    name: "double-vertical-slider",
    imgLink: "26-double-vertical-slider.png",
  },
  {
    number: 27,
    name: "toast-notification",
    imgLink: "27-toast-notification.png",
  },
  {
    number: 28,
    name: "github-profiles",
    imgLink: "28-github-profiles.png",
  },
  {
    number: 29,
    name: "double-click-heart",
    imgLink: "29-double-click-heart.png",
  },
  {
    number: 30,
    name: "auto-text-effect",
    imgLink: "30-auto-text-effect.png",
  },
  {
    number: 31,
    name: "password-generator",
    imgLink: "31-password-generator.png",
  },
  {
    number: 32,
    name: "good-cheap-fast",
    imgLink: "32-good-cheap-fast.png",
  },
  { number: 33, name: "notes-app", imgLink: "33-notes-app.png" },
  {
    number: 34,
    name: "animated-countdown",
    imgLink: "34-animated-countdown.png",
  },
  {
    number: 35,
    name: "image-carousel",
    imgLink: "35-image-carousel.png",
  },
  { number: 36, name: "hoverboard", imgLink: "36-hoverboard.png" },
  { number: 37, name: "pokedex", imgLink: "37-pokedex.png" },
  {
    number: 38,
    name: "mobile-tab-navigation",
    imgLink: "38-mobile-tab-navigation.png",
  },
  {
    number: 39,
    name: "password-strength-background",
    imgLink: "39-password-strength-background.png",
  },
  {
    number: 40,
    name: "3d-background-boxes",
    imgLink: "40-3d-background-boxes.png",
  },
  {
    number: 41,
    name: "verify-account-ui",
    imgLink: "41-verify-account-ui.png",
  },
  {
    number: 42,
    name: "live-user-filter",
    imgLink: "42-live-user-filter.png",
  },
  {
    number: 43,
    name: "feedback-ui-design",
    imgLink: "43-feedback-ui-design.png",
  },
  {
    number: 44,
    name: "custom-range-slider",
    imgLink: "44-custom-range-slider.png",
  },
  {
    number: 45,
    name: "netflix-mobile-navigation",
    imgLink: "45-netflix-mobile-navigation.png",
  },
  { number: 46, name: "quiz-app", imgLink: "46-quiz-app.png" },
  {
    number: 47,
    name: "testimonial-box-switcher",
    imgLink: "47-testimonial-box-switcher.png",
  },
  {
    number: 48,
    name: "random-image-feed",
    imgLink: "48-random-image-feed.png",
  },
  { number: 49, name: "todo-list", imgLink: "49-todo-list.png" },
  {
    number: 50,
    name: "insect-catch-game",
    imgLink: "50-insect-catch-game.png",
  },
];
