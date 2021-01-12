<template>
  <div id="app">
    <div class="header">
      <a href="#top" @click="clickRedirect('/'); menuController(true)">
        <img class="logo" src="./assets/img/logo.webp" alt="Animália" >
      </a>
      <div class="fill"/>
      <div class="menu-btn" @click="menuController()">
        <div class="menu-icon" ref="micon"/>
      </div>
      <ul class="menu collapsed" ref="menu">
        <li class="menu-item" ei="animais">
          <a href="#animais" @click="clickRedirect('/'); menuController(true)">Animais</a>
        </li>
        <li class="menu-item" ei="sobre">
          <a href="#sobre" @click="clickRedirect('/'); menuController(true)">Sobre</a>
        </li>
        <li class="menu-item" ei="visite">
          <a href="#visite" @click="clickRedirect('/'); menuController(true)">Visite</a>
        </li>
        <li class="menu-item">
          <router-link to="/quiz" @click.native="menuController(true); setSpyActiveElement();">Quiz</router-link>
        </li>
      </ul>
      <div class="fill"/>
    </div>
    <div class="page">
      <div class="scroller" @scroll="scrollSpy()" ref="scroller">
        <div class="viewport"> 
          <router-view @scrollSpy="updateSubjects($event)"/>
          <div class="void"/>
          <div class="footer">
            <footer-bar></footer-bar>
            <video class="anim web" src="./assets/clips/anim_web.mp4" type="video/mp4" @click.right.prevent muted loop autoplay/>
            <video class="anim mobile" src="./assets/clips/anim_mobile.mp4" type="video/mp4" @click.right.prevent muted loop autoplay/>
          </div>
        </div>
      </div>
      <div class="overlay" ref="overlay" @click="menuController(true)"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';
import { clickRedirect } from '@/assets/functions';

@Component({
  components: {
    'footer-bar': Footer
  }
})
export default class App extends Vue {
  private get menu(): HTMLElement {
    return this.$refs.menu as HTMLElement;
  }

  private get menuIcon(): HTMLElement {
    return this.$refs.micon as HTMLElement;
  }

  private get scroller(): HTMLElement {
    return this.$refs.scroller as HTMLElement;
  }

  private get overlay(): HTMLElement {
    return this.$refs.overlay as HTMLElement;
  }

  private clickRedirect(location: string) {
    clickRedirect(this, location);
  }

  @Watch('$route')
  onRouteChange(current: any, previous: any) {
    if (current.name !== previous.name) {
      this.setSpyActiveElement();
      document.scrollingElement?.scroll(0, 0);
      this.scroller.scroll(0, 0);
    }
  }

  private menuController(close = false) {
    if (close) {
      this.menu.classList.add('collapsed');
      this.overlay.classList.remove('block');
      this.menuIcon.classList.remove('active');
    } else {
      this.menu.classList.toggle('collapsed');
      this.overlay.classList.toggle('block');
      this.menuIcon.classList.toggle('active');
    }
  }

  //#region scrollspy

  private subjects = Array<any>();

  private updateSubjects (list: Array<any>) {
    this.subjects = list;
  } 

  private scrollSpy() {
    if (this.subjects.every(i => i.element !== null)) {
      this.subjects.sort((a, b) => {
        return Math.abs(a.element.getBoundingClientRect().y) - Math.abs(b.element.getBoundingClientRect().y);
      })
    }
    if (this.subjects.length > 0) {
      const closest = this.subjects[0];
      this.setSpyActiveElement(document.querySelector(`.menu-item[ei=${closest.name}]`) as HTMLElement);
    }
  }

  private setSpyActiveElement(el?: HTMLElement) {
    const active = document.querySelector('.active-link') as HTMLElement;
    if (el === null || el !== active) {
      active?.classList.remove('active-link')
      el?.classList.add('active-link');
    }
  }

  //#endregion

  mounted() {
    document.removeEventListener('scroll', this.scrollSpy);
    document.addEventListener('scroll', this.scrollSpy);
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'roboto-regular';
  src: url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'all-round-gothic-bold';
  src: url('./assets/fonts/All-Round-Gothic-Bold.ttf') format('truetype');
  font-display: swap;
}

*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

*::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}

*::-webkit-scrollbar-track {
  border-radius: 50px;
}

*::-webkit-scrollbar-thumb {
  background: $lilac;
  border-radius: 50px;
}

img {
  -webkit-user-drag: none;
}

input[type=checkbox] {
  position: relative;
  margin-right: 5px;
 /*
  &::after {
    content: '';
    
    position: absolute;
    width: 98%;
    height: 98%;
    border: 1px solid;
    border-color: $border;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }

  &:hover::after{
    background-color: lightgrey;
  }

  &:checked::after {
    background-color: white;
    border: 3px solid;
    border-color: $pink;
  }
  */
}

body {
  margin: 0;
  padding: 0;
  font-family: 'roboto-regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  @media screen and (max-width: 720px) {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    width: 100vw;
  }
  position: relative;
  width: calc(100vw - 5px);
  height: calc(100vh - 5px);
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (min-width: 721px) {
    padding-top: 3.5vmax;
    z-index: 500;
    /*
    padding: 3.2vmax 0;
    background-color: white;
    z-index: 700;
    position: sticky;
    top: 0;
    */
  }
  @media screen and (max-width: 720px) {
    border-bottom: 2px solid rgba(black, .2);
  }

  a .logo {
    object-fit: contain;
    height: 52px;
    width: auto;
    margin: 1.4vmax 4vmax;
    z-index: 500;
    @media screen and (max-width: 720px) {
      height: 36px;
    }
  }

  .fill {
    flex-grow: 1;
    flex-shrink: 1;

    @media screen and (max-width: 720px) {
      display: none;
    }
  }

  .menu-btn {
    display: none;

    @media screen and (max-width: 720px) {
      position: absolute;
      right: 0;
      height: 100%;
      padding: 2vmax;
      display: flex;
      align-items: center;

      .menu-icon {
        border: none;
        height: 1px;
        width: 4vmax;
        background-color: rgba($lilac, 1);
        position: relative;
        transition: all 300ms ease;

        &::after, &::before {
          visibility: visible;
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          transform-origin: left center;
          background-color: $lilac;
          transition: all 300ms ease;
        }

        &::after {
          bottom: -1.5vmax;
        }

        &::before {
          top: -1.5vmax;
        }

        &.active {
          background-color: rgba($lilac, 0);

          &::after {
            transform: rotateZ(-45deg) translateY(-1px);
          }
          &::before {
            transform: rotateZ(45deg) translateY(1px);
          }
        }
      }
    }
  }

  .menu {
    align-self: flex-start;
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-left: 12vmax;
    z-index: 500;

    @media screen and (min-width: 721px) {
      margin-top: .5vmax;
    }

    @media screen and (max-width: 720px) {
      background-color: rgba(white, .8);
      margin: 0;
      position: absolute;
      top: 100%;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform-origin: top;
      transform: scaleY(1);
      transition: all 200ms ease;
      
      &.collapsed {
        transform: scaleY(0);

        .menu-item {
          opacity: 0;
        }
      }

      .menu-item {
        margin: 1vmax;
        opacity: 1;
        text-align: center;
        transition: all 100ms ease;
      }
    }

    .menu-item {
      padding: 1vmax;

      a {
        font-size: 18px;
        font-weight: bold;
        color: rgba(black, 0.4);
        padding: .2vmax 0;
        
        @media screen and (max-width: 720px) {
          padding: 1vmax 10vmax;
          border-bottom: 1px solid $border;
        }

        &:link {
          text-decoration: none;
        }
      }

      &.active-link a, a.router-link-exact-active {
        color: black;
        @media screen and (min-width: 721px) {
          border-bottom: 3px solid $orange;
        }
      }
    }
  }
}

.page {
  width: 100%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 720px) {
    overflow: hidden;
  }
  @media screen and (max-width: 720px) {
    border-top: 2px solid rgba(black, .1);
  }

  .scroller {
    height: 100%;
    @media screen and (max-width: 720px) {
      overflow-x: auto;
    }

    .viewport {
      width: 100%;
      min-height: 100%;
      display: grid;
      grid-template-rows: 1fr auto;

      .void {
        &:nth-child(1) {
          height: 100%;
          width: 100%;
        }
      }
    }

    .footer {
      height: max-content;
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;

      .anim {
        object-fit: contain;
        position: absolute;
        bottom: 0;
        z-index: -200;

        &.web {
          left: 0;
          height: 140%;
          display: none;
          @media screen and (min-width: 721px) {
            display: block;
          }
        }

        &.mobile {
          right: 0;
          height: 100%;
          display: none;
          @media screen and (max-width: 720px) {
            display: block;
          }
        }        
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    background-color: rgba(black, 0);
    transition: all 300ms ease;
    overflow: hidden;
    z-index: 400;

    &.block{
      @media screen and (max-width: 720px) {
        visibility: visible;
        background-color: rgba(black, .4);
      }
    }
  }
}

</style>
