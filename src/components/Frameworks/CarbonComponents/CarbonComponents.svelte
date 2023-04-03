<script>
    // @ts-nocheck
    import "carbon-components-svelte/css/white.css";
    import { Button } from "carbon-components-svelte";

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

<Button style={"background-color:" + colorP + "; color:" + colorS}
    >Primary button</Button
>
