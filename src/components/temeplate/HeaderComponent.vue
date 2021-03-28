<template>
    <header class="header row">
        <top-logo/>
        <menu-nav/>
        <user-menu/>
    </header>
</template>

<script>
    import TopLogo from "@/components/temeplate/header/TopLogo";
    import MenuNav from "@/components/temeplate/header/MenuNav";
    import UserMenu from "@/components/temeplate/header/UserMenu";
    export default {
        name: "HeaderComponent",
        components: {UserMenu, MenuNav, TopLogo},
    }
</script>

<style lang="scss">
    @import "../../assets/scss/header/header";
</style>
