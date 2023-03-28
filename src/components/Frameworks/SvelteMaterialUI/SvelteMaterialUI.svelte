<script>
    // @ts-nocheck

    import Button from "@smui/button";

    import { primaryColor, secondaryColor } from "../../../store/stores";

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });
</script>

<!-- Needed for styles -->
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/bare.min.css"
/>

<Button
    variant="raised"
    style={"background-color:" + colorP + "; color:" + colorS}>Test</Button
>
