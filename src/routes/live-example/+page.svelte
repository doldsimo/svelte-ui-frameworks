<script>
    import LiveExample from "../../components/LiveExample/LiveExample.svelte";
    import { Text, Button } from "@svelteuidev/core";
    import { goto } from "$app/navigation";
</script>

<Text style="margin: 1em"
    >Choose your Framework to visit the live page example:</Text
>
<div class="container">
    <Button
        on:click={() => goto("/live-example/svelte-material-ui")}
        style="margin: 0.5em">Svelte Material UI</Button
    >
    <Button
        on:click={() => goto("/live-example/svelte-ui")}
        style="margin: 0.5em">Svelte UI</Button
    >
    <Button
        on:click={() => goto("/live-example/headless-ui")}
        style="margin: 0.5em">Headless UI</Button
    >
    <Button on:click={() => goto("/live-example/daisyui")} style="margin: 0.5em"
        >Daisyui</Button
    >
    <Button
        on:click={() => goto("/live-example/sveltestrap")}
        style="margin: 0.5em">Sveltestrap</Button
    >
    <Button
        on:click={() => goto("/live-example/attractions")}
        style="margin: 0.5em">Attractions</Button
    >
    <Button on:click={() => goto("/live-example/smelter")} style="margin: 0.5em"
        >Smelter</Button
    >
    <Button
        on:click={() => goto("/live-example/carbon-compoents")}
        style="margin: 0.5em">Carbon Components</Button
    >
    <Button
        on:click={() => goto("/live-example/agnosticui")}
        style="margin: 0.5em">Agnosticui</Button
    >
</div>

<!-- <LiveExample/> -->
<style>
    .container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>
