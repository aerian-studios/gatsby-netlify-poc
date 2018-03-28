import { injectGlobal } from "./index-styled";

// Put the variables that everything uses into the DOM early
injectGlobal`
:root {
  // BREAKPOINTS - --bp- + name
  // BREAKPOINTS
  @custom-media --bp-xs (min-width: 23.125em); // 370 > standard mobile
  @custom-media --bp-s (min-width: 36.875em); // 590 > mobile or no mq support
  @custom-media --bp-m (min-width: 50em); // 800> portrait tablet
  @custom-media --bp-l (min-width: 67.5em); // 1080 > most tablets
  @custom-media --bp-xl (min-width: 73.0625em); // 1169px; // very large screens - might need to make an xl font size
  @custom-media --bp-xxl (min-width: 81em); // 1296px;

  // COLOURS - --c- + name
  // named colours for ease (please use the more generic colours that use them below)
  --whiteish: #fff;
  --blackish: #000;
  --cnn-red: #d01825;
  --red: #e42025;
  --blue: #368aec;
  --menu-red: #ed2025;

  --c-black-90: #0c0c0c;
  --c-black-80: #231f20;
  --c-black-70: #282828;
  --c-black-60: #333;
  --c-black-50: #535456;
  --c-black-40: #919191;
  --c-black-35: #acadaf;
  --c-black-30: #dddedf;
  --c-black-20: #f1f1f2; // light-grey bg
  --c-black-10: #f7f7f7;
  --c-black-0: #fff;

  --accent-black: #18191a;
  --c-alt-bg: #18191a;
  --dark-grey: #151515;
  --light-grey: #f5f5f5;
  --social-link-colour: #808080;

  // Generic variable names for use in the code (so that the colours only need changing on one place)
  --c-brand-a: --cnn-red;
  --c-brand-b: --red;
  --c-brand-c: --blue;
  --c-text: --c-black-60;
  --c-text-alt: #868788;
  --c-link: --c-black-60;
  --c-link-active: --cnn-red;
  --c-link-visited: --c-black-40;

  --c-separator: #d8d8d8;
  --c-shadow: rgba(42, 40, 40, 0.4);
  --c-shadow-light: rgba(42, 40, 40, 0.16);

  // TYPOGRAPHY - --t- + name
  // https://projects.invisionapp.com/d/main/default/#/console/10686253/226770242/preview
  // NOTE: this is mobile first
  --t-font-basic: Helvetica Neue, Verdana, Helvetica, Arial, Utkal, sans-serif;
  --t-font: Helvetica Neue, Verdana, Helvetica, Arial, Utkal, sans-serif;

  // needs to be here for the text calculations
  --t: 16; // base font size without units


  --t-xxs: 10px;
  --s-h2: calc(4 * var(--vertical-rythym));
  --s-h3: calc(4 * var(--vertical-rythym));
  
  --t-button: 14px;
  --t-xxs: 10px;

  // needs to be here for the text calculations
  --t: 16; // base font size without units

  // XSmall
  --t-base: calc(var(--t) * 1px); // normal text size
  --t-h1: 30;
  --t-h2: 24;
  --t-h3: 18;
  --t-h4: calc((18 / var(--t)) * 1em);
  --t-h5: calc((16 / var(--t)) * 1em);
  --t-h6: calc((14 / var(--t)) * 1em);
  --t-intro: calc((18 / var(--t)) * 1em);
  --t-small: 16px;
  --t-xsmall: 12px;
  // as these are very large, not making them ems
  --t-xl: calc(28 * 1px);
  --t-xxl: calc(48 * 1px);
  --t-menu: 20;

  @media(--bp-s) {
    --s-h2: calc(5 * var(--vertical-rythym));
    --s-h3: calc(4 * var(--vertical-rythym));
    // Medium
    --t: 16; // base font size without units
  @media (--bp-s) {
    --t: 16;
    // Medium
    --t-base: calc(var(--t) * 1px); // normal text size
    --t-h1: 58;
    --t-h2: 32;
    --t-h3: 18;
    --t-h4: calc((20 / var(--t)) * 1em);
    --t-h5: calc((18 / var(--t)) * 1em);
    --t-h6: calc((16 / var(--t)) * 1em);
    --t-intro: calc((20 / var(--t)) * 1em);
    --t-small: 16px;
    --t-xsmall: 14px;
    --t-xl: calc(42 * 1px);
    --t-xxl: calc(82 * 1px);
    --t-menu: 27;
  }

  @media(--bp-m) {
    --s-h2: calc(6 * var(--vertical-rythym));
    --s-h3: calc(4 * var(--vertical-rythym));
    // Large
    --t: 16; // base font size without units
    --t-base: calc(var(--t) * 1px); // normal text size
    --t-h1: 65;
    --t-h2: 50;
    --t-h3: 18;
    --t-h4: calc((24 / var(--t)) * 1em);
    --t-h5: calc((18 / var(--t)) * 1em);
    --t-h6: calc((16 / var(--t)) * 1em);
    --t-intro: calc((20 / var(--t)) * 1em);
    --t-small: 16px;
    --t-xsmall: 14px;
    --t-xl: calc(50 * 1px);
    --t-xxl: calc(90 * 1px);
    --t-menu: 40;
  }

  // SPACING - --s- + name  !! needs cleaning up
  --s-1: 12px;
  --s-2: 20px;
  --s-3: 30px;
  --s-4: 32px;
  --s-5: 100px;
  --s-6: 10px;
  --s-7: 10px;
  --s-8: 10px;

  // MISC
  --border-radius: 10px;
  --max-content-width: 1168px;
  --min-content-width: 280px;
  --side-gutter: var(--s-2);
  --h-grid-spacing: 2.5%;
  --h-grid-spacing-1: calc(var(--s-1) * 2);
  --h-grid-spacing-2: var(--s-4);
  --v-grid-spacing: var(--s-1);
  --vertical-rythym: 8px;
  --grid-gap: 2.74%;
  --grid-column: 5.82%;

  --pad-0: calc(8 * var(--vertical-rythym));
  --pad-1: calc(12 * var(--vertical-rythym));
  --pad-2: calc(14 * var(--vertical-rythym));
  --feature-pad-0: calc(5 * var(--vertical-rythym));
  --feature-pad-1: calc(8 * var(--vertical-rythym));
  --feature-pad-2: calc(10 * var(--vertical-rythym));
}
`;
