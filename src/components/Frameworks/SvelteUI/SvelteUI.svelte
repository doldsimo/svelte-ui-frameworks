<script>
    // @ts-nocheck

    import { Button } from "@svelteuidev/core";

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

<Button style={"background-color:" + colorP + "; color:" + colorS}>Test</Button>
