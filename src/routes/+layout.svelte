<script>
    import ContainerSidbebar from "../components/ContainerSidbebar/ContainerSidbebar.svelte";
    import Footer from "../components/Footer/Footer.svelte";
    import 'iconify-icon';

    let showSidebar = false;
    const nav = [
        {title: "Home", path:"/"},
        {title: "About", path:"/about"},
        {title: "Contact", path:"/contact"}
    ]

    function showHideMenue() {
        showSidebar = !showSidebar;
        console.log(showSidebar);
    }


</script>

<iconify-icon icon="mdi:menu" on:click={showHideMenue} on:keydown={showHideMenue} style="cursor: pointer;"></iconify-icon>

<ContainerSidbebar showSidebar={showSidebar} showHideMenue={showHideMenue} nav={nav}/>


<!-- slot is standing for rendering the page content -->
<slot />

<Footer/>

