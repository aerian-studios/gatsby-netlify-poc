import styled from "styled-components";

const gradientH = "125px";
const subMenuIndicatorSpace = `calc(27px + var(--s-4))`;

export const NavbarHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--c-black-90, #0c0c0c);
  top: 0;
  left: 0;
  z-index: 300;
  transition: transform 0.5s ease 0s, opacity 0.2s ease 0.2s;
  height: 55px;
  color: var(--whiteish, #fff);

  & svg {
    height: 55px;
  }
`;

// UI
export const BurgerMenuWrapper = styled.div`
  // set to relative to align menu
  position: relative;
  // re-align with the top
  margin-top: -55px;
}`;

export const MenuToggle = styled.input.attrs({
  type: "checkbox",
  id: "menu-toggle",
  className: "menu-toggle"
})`
  position: absolute;
  clip: rect(0, 0, 0, 0);

  &:focus + label {
    outline: auto;
    outline-color: -webkit-focus-ring-color;
  }

  &:active + label,
  &:checked + label,
  &:hover + label {
    outline-color: transparent;
    outline-width: 0;
  }

  &:checked {
    + label {
      .burger-menu__content-icon {
        opacity: 0.6;
        background-color: transparent;
        &::before {
          top: 0;
          transform: rotate(135deg);
        }

        &::after {
          bottom: 0;
          transform: rotate(-135deg);
        }
      }
    }
    ~ .menu--main,
    .menu--main:focus {
      position: fixed;
      width: 100vw;
      z-index: 500;
      opacity: 1;

      .menu-item {
        opacity: 1;
      }
    }
  }
`;

export const MenuToggleLabel = styled.label`
  position: absolute;
  top: 18px;
  right: 0;
  z-index: 101;
  transform: translateZ(101px);
  cursor: pointer;
  display: block;
  width: 32px;
  height: 25px;

  &:focus,
  &:hover,
  &:active {
    outline-color: transparent;
    outline-width: 0;
  }

  &:hover {
    * {
      will-change: opacity, display, transform;
    }
  }
`;

// icon styles
export const BurgerMenuContentIcon = styled.span`
  transition: opacity 0.2s;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  margin-top: -4px;
  background-color: var(--whiteish);
  text-align: center;

  &::before,
  &::after {
    transition: all 0.3s;
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #fff;
    content: "";
  }

  &::before {
    top: -12px;
  }

  &::after {
    bottom: -12px;
  }
}`;

// MENU
export const MenuMain = styled.div`
  position: absolute;
  overflow: hidden;
  height: calc(100vh - 55px);
  width: 0;
  top: 55px;
  left: 0;
  opacity: 0;
  transition: all 0.8s ease-in-out 0.5s;
  background: $c-black-90;
  z-index: -1;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: flex-end;

  @supports (display: grid) {
    align-items: stretch;
    justify-items: end;
  }

  button {
    appearance: none;
    background: none;
    height: 1em;
  }

  a {
    border: 0;
  }

  .menu:hover {
    .menu-item {
      opacity: 0.5;
    }
  }

  .menu {
    overflow: auto;
  }

  .menu .menu {
    @extend %grid-setup;
    grid-auto-rows: max-content;
    position: fixed;
    width: 0;
    height: calc(100% - 55px);
    right: 0;
    top: 55px;
    z-index: -1;
    transform: translateX(100%);
    opacity: 0;
    background: $c-black-90;

    .menu-item {
      opacity: 0;
      transform: translateX(50%);
      transition: opacity 0.6s ease-out 0s, transform 0.6s ease-out 0s;

      @for $i from 1 through 10 {
        &:nth-of-type(#{$i}) {
          transition-delay: ($i - 1) * 0.15s, ($i - 1) * 0.15s;
        }
      }
    }

    &.active {
      width: 100%;
      transform: translateX(0%);
      opacity: 1;
      z-index: 2;
      transition: opacity 0.3s ease 0s;

      .menu-item {
        opacity: 1;
        transform: translateX(0);
      }

      .js-list-title {
        display: block;
      }
    }
  }

  .menu-item {
    text-align: right;
    position: static;
    margin-bottom: initial;
    transition: opacity 0.3s ease-in-out 0s;
    opacity: 0;
    line-height: 1.2em;
    @include font-size($t-menu, "s");

    @media (--bp-s) {
      @include font-size($t1-menu, "m");
    }

    @media (--bp-m) {
      @include font-size($t2-menu, "l");
    }

    > a {
      display: inline-block;
      color: $whiteish;
      font-weight: 100;
      padding: $vertical-rythym 0;

      &:hover,
      &:visited {
        color: $whiteish;
      }
    }

    &:hover {
      opacity: 1 !important;
    }

    &:last-of-type {
      padding-bottom: gradientH;
    }
  }

  .submenu-indication {
    position: relative;
    display: inline-block;
    padding: 12px 0;
    margin: 0 (-const subMenuIndicatorSpace) 0 $s-2;
    width: 27px;
    vertical-align: middle;
  }
  .dots {
    clip: initial;
    @include submenu-indicator();
  }

  .menu-item--active-trail {
    opacity: 1;
  }
}

.menu--main__content-wrap {
  margin-top: 39px;
  flex: 1;
  color: $whiteish;
  height: calc(100vh - 55px);
  width: 100%;

  @media (--bp-s) {
    flex: 0;
    margin-top: 0;
  }

  > .menu {
    position: relative;
    padding-right: const subMenuIndicatorSpace + 2px;
    max-height: calc(100% - #{gradientH});

    @media (min-width: $bp-xxl) {
      padding-right: const subMenuIndicatorSpace + 20px;
      margin-right: -(const subMenuIndicatorSpace + 20px);
    }
  }

  .js-menu-level-title {
    padding-top: 12 * $vertical-rythym;
    @include font-size($t, "s");
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: flex-start;
  
    > * {
      margin-left: 7 * $vertical-rythym;
    }
  }
  
  .js-current-level-title {
    opacity: 0.6;
  }
  
  .js-prev-level-title {
    min-width: initial;
    padding: 4px 0;
  }
  
  .js-list-title {
    display: none;
  }
}`;

// MENU social links etc
export const MenuOnwardJourneys = styled.div`
  position: absolute;
  pointer-events: none;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: $social-link-colour !important;
  padding-bottom: 4 * $vertical-rythym;
  @include scrimGradient($c-black-90, "to top");

  @media (min-height: 600px) {
    justify-content: space-between;
  }

  .icon {
    color: currentColor;
    fill: currentColor;
  }

  p {
    margin-bottom: 3 * $vertical-rythym;
  }

  a {
    height: 29px;
    width: 50px;
    padding: 0;
    flex: 1;
    display: block;
    color: $social-link-colour;
    pointer-events: all;

    * {
      max-height: 100%;
      max-width: 100%;
    }
  }

  .subscribe_link {
    width: 39px;
  }

  > * {
    grid-row: 1 / 2;
    justify-self: flex-start;
  }

  .social-wrapper {
    margin-left: 77px + $s-2;
    @media (min-height: 600px) {
      justify-self: flex-end;
      text-align: right;
    }
  }
  .social-wrapper,
  .social-links-wrapper {
    padding: 0;
  }
}`;