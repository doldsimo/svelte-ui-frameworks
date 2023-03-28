<script>
    // @ts-nocheck

    import VerticalList from "../../components/VerticalList/VerticalList.svelte";
    import ColorPicker from "svelte-awesome-color-picker";
    import { primaryColor, secondaryColor } from "../../store/stores";

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
    <h1>UI-Framework comparison</h1>

    <div style="margin-right: 5em">
        <div>{getHexColor(rgb)}</div>
        <ColorPicker bind:rgb label={"Primary"} isAlpha={false} />
        <br />
        <div>{hex}</div>
        <ColorPicker bind:hex label={"Secondary"} isAlpha={false} />
    </div>
</div>

<VerticalList />

<style>
    .header-container {
        display: flex;
        justify-content: space-between;
    }
</style>
