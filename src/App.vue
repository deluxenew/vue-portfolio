<template>
    <div id="app">
        <header-component/>
        <sidebar-component/>
        <main-component/>
        <footer-component/>
    </div>
</template>

<script>
    import HeaderComponent from "@/components/temeplate/HeaderComponent";
    import SidebarComponent from "@/components/temeplate/SidebarComponent";
    import MainComponent from "@/components/temeplate/MainComponent";
    import FooterComponent from "@/components/temeplate/FooterComponent";

    export default {
        name: 'App',
        components: {
            FooterComponent,
            MainComponent,
            SidebarComponent,
            HeaderComponent,
        }
    }
</script>

<style lang="scss">
    @import '../src/assets/scss/main.scss';
</style>
