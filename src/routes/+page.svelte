<script>
    // @ts-nocheck

    import { goto } from "$app/navigation";
    import { Container, Title } from "@svelteuidev/core";
    import { Button } from "@svelteuidev/core";
    import { Text } from "@svelteuidev/core";
</script>

<Container>
    <Title order={1} weight={"bold"} root="h1"
        >Svelte UI-Frameworks comparison</Title
    >
    <br/> 
    <Text root="p"
        >This sample app compares eight sample Svelte UI-Frameworks. These are:</Text
    >
    <ul>
        <li>
            <a href="https://github.com/agnosticui/agnosticui" target="_blank"
                >AgnosticUI</a
            >
        </li>
        <li>
            <a href="https://github.com/illright/attractions" target="_blank"
                >Attractions</a
            >
        </li>
        <li>
            <a
                href="https://github.com/carbon-design-system/carbon-components-svelte"
                target="_blank">Carbon Components</a
            >
        </li>
        <li>
            <a href="https://github.com/saadeghi/daisyui" target="_blank"
                >daisyUI</a
            >
        </li>
        <li>
            <a
                href="https://github.com/rgossiaux/svelte-headlessui"
                target="_blank">Headless UI</a
            >
        </li>
        <li>
            <a
                href="https://github.com/hperrin/svelte-material-ui"
                target="_blank">Svelte Material UI</a
            >
        </li>
        <li>
            <a href="https://github.com/svelteuidev/svelteui" target="_blank"
                >Svelte UI</a
            >
        </li>
       
      
        <li>
            <a href="https://github.com/bestguy/sveltestrap" target="_blank"
                >Sveltestrap</a
            >
        </li> 
    </ul>

    <Text>
        Since all frameworks have a different number of components, the most
        important ones have been selected in this example and compared with each
        other. For a complete list of components, visit the website of the
        respective framework.
    </Text>
    <Text>
        It is recommended to view the website on a device with a larger screen
        so that the frameworks can be better compared with each other.
    </Text>
    <br />

    <div style="display: flex; justify-content:space-around">
        <Button on:click={() => goto("/component-comparison")}>
            Component comparison</Button
        >
    </div>

</Container>

<style>
    a {
        text-decoration: none;
    }
</style>
