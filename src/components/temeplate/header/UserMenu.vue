<template>
    <div id="nav" class="user-menu">
       <ul>
          <li v-for="item in menuItems.items" :key="item.title">
             <router-link class="list-item" :to="item.url" :title="item.title">
                <div
                   class="menu-icon"
                   :style="{color: item.color}"
                   v-html="item.svg"
                ></div>

                <div class="title">
                   {{item.title}}
                </div>
             </router-link>
          </li>
       </ul>
    </div>
</template>

<script>
    import {USER_MENU} from "@/assets/static/contentPortfolio";

    export default {
        name: "UserMenu",
        data() {
            return {
                menuItems: USER_MENU,
            }
        },
    }
</script>

<style scoped>

</style>
