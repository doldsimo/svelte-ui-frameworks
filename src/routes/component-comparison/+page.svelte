<script>
    // @ts-nocheck

    import VerticalList from "../../components/VerticalList/VerticalList.svelte";
    import ColorPicker from "svelte-awesome-color-picker";
    import { primaryColor, secondaryColor } from "../../store/stores";
    import { Title, Text } from "@svelteuidev/core";

    // Color for primary
    let rgb = { r: 0, g: 232, b: 0 }; // example initial value
    // Color for secondary
    let hex = "#ed8282";

    function getHexColor(rgb) {
        return (
            "#" +
            ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b)
                .toString(16)
                .slice(1)
        );
    }

    function changePrimaryColor(color) {
        primaryColor.set(color);
    }

    function changeSecondaryColor(color) {
        secondaryColor.set(color);
    }

    // Listening for changes and call function for change global colors
    $: changePrimaryColor(getHexColor(rgb));
    $: changeSecondaryColor(hex);
</script>

<div class="header-container">
    <Title order={1} weight={"bold"} root="h1" style="margin: .2em">UI-Framework comparison</Title>

    <div style="margin-right: 5em; display: flex">

        <div>
            <Text>{getHexColor(rgb)}</Text>
            <ColorPicker bind:rgb label={"Primary"} isAlpha={false} />
        </div>
      
        <div>
            <Text>{hex}</Text>
            <ColorPicker bind:hex label={"Secondary"} isAlpha={false} />
        </div>
    </div>
</div>

<VerticalList />

<style>
    .header-container {
        display: flex;
        justify-content: space-between;
    }
</style>
