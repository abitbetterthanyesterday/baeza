<template>
  <div>
    <nav class="sticky top-0 bg-white md:relative z-50 shadow-md">
      <div
        class="nav__top flex justify-between items-center max-w-screen-lg mx-auto pt-2 pb-2 bg-white px-6"
      >
        <nuxt-link class="flex items-center mr-2 md:mr-0" to="/">
          <img class="h-16 w-16" src="logo.jpg" />
          <h3 class="text-gray-800 hidden md:block">
            <span class="font-bold">BAEZA</span> WATERS
          </h3>
        </nuxt-link>
        <div>
          <p class="text-md hidden md:block">
            100 Rue René Panhard, 30900 Nîmes
          </p>
          <p class="text-md">
            <span class="text-red-600 text-sm md:text-md font-bold">
              <font-awesome-icon
                :icon="['fas', 'phone-square-alt']"
                size="lg"
                style="height: 20px; display: inline-block;"
              />
              06 16 84 22 91 | 04 67 75 13 39
            </span>
          </p>
        </div>
      </div>
      <div
        class="nav__links flex justify-start md:justify-center bg-red-600 shadow-md"
      >
      <div clas='md:hidden block'>
        <div class="menu__btn md:hidden block ml-6 py-3 text-white">
          <font-awesome-icon
            class="text-3xl hamburger"
            :icon="['fas', 'bars']"
            size="lg"
            style="height: 30px"
          />
        </div>
        <div
          class="md:hidden block arrow-up block ml-6 py-3 text-white"
        >
          <font-awesome-icon class="text-3xl" :icon="['fas', 'arrow-up']"  size="lg" style="height: 30px"/>
        </div>
      </div>
        <ul
          class="
            menu
            justify-around
            items-stretch
            w-4/5
            max-w-screen-lg
            text-red-100
            uppercase
            text-sm
            font-medium
            md:flex
            hidden"
        >
          <li class="flex items-center">
            <nuxt-link class="hover:bg-red-400             p-4" to="/"
              >Accueil</nuxt-link
            >
          </li>
          <li class="flex items-center">
            <nuxt-link
              class="hover:bg-red-400             p-4"
              to="/desinfection/"
              >Désinfection</nuxt-link
            >
          </li>
          <li class="flex items-center">
            <nuxt-link class="hover:bg-red-400             p-4" to="/ecodo/"
              >Détection de fuite</nuxt-link
            >
          </li>
          <li class="flex items-center">
            <nuxt-link
              class="hover:bg-red-400             p-4"
              to="/nettoyage-industriel/"
              >Nettoyage industriel</nuxt-link
            >
          </li>
          <li class="flex items-center">
            <nuxt-link class="hover:bg-red-400             p-4" to="/contact/"
              >Contact</nuxt-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <nuxt />
    <footer class="bg-red-600 flex justify-center">
      <div class="max-w-screen-lg w-4/5 flex">
        <div class="w-1/2 flex justify-start">
          <ul
            class="
            flex
            flex-col
            md:flex-row
            justify-around
            text-red-100"
          >
            <li class="p-2 hover:bg-red-400">
              <nuxt-link to="/contact/">Contactez-nous</nuxt-link>
            </li>
            <li class="p-2 hover:bg-red-400">
              <nuxt-link to="/desinfection/">Désinfection</nuxt-link>
            </li>
            <li class="p-2 hover:bg-red-400">
              <nuxt-link to="/ecodo/">Écodo</nuxt-link>
            </li>
            <li class="p-2 hover:bg-red-400">
              <nuxt-link to="/nettoyage-industriel/"
                >Nettoyage industriel</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="w-1/2 flex justify-end">
          <div
            class="p-2 hover:bg-red-400 text-white text-2xl mr-2 cursor-pointer"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" style="height: 30px"/>
          </div>
          <div
            id="scroll-top"
            class="p-2 hover:bg-red-400 text-white text-2xl cursor-pointer"
          >
            <font-awesome-icon :icon="['fas', 'arrow-up']" style="height: 30px"/>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    const menuBtn = document.querySelector('.menu__btn')
    const menu = document.querySelector('.menu')
    const hamburger = document.querySelector('.hamburger')
    const arrowUp = document.querySelector('.arrow-up')

    arrowUp.classList.add('hidden')

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden')
      arrowUp.classList.toggle('hidden')
      hamburger.classList.toggle('hidden')
    })

    if(window.innerWidth <= 768) {
    menu.addEventListener('click', () => {
      menu.classList.toggle('hidden')
      arrowUp.classList.toggle('hidden')
      hamburger.classList.toggle('hidden')
    })
  }

    const scrollTop = document.querySelector('#scroll-top')

    scrollTop.addEventListener('click', () => {
      window.scrollTo(0, 0)
    })
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
