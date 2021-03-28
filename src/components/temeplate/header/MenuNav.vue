<template>
   <div id="nav" class="menu-nav">
      <ul>
         <li v-for="item in menuItems.items" :key="item.title">
            <a class="list-item" :href="item.url" :title="item.title">
               <div
                  class="menu-icon"
                  :style="{color: item.color}"
                  v-html="item.svg"
               ></div>

               <div class="title">
                  {{item.title}}
               </div>
            </a>
         </li>
      </ul>
   </div>
</template>

<script>
    import {MENU_NAV} from "@/assets/static/contentPortfolio";

    export default {
        name: "MenuNav",
        data() {
            return {
                menuItems: MENU_NAV,
            }
        },
    }
</script>

<style lang="scss">
   @import "../../../assets/scss/header/menu-nav";
</style>
