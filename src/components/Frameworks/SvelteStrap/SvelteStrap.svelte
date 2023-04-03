<script>
    // @ts-nocheck

    import { Button } from "sveltestrap";

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

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
/>
<div class="container-ui-comparison">
    <div class="sub-container-button">
        <Button style={"background-color:" + colorP + "; color:" + colorS}
            >Click me</Button
        >
    </div>
</div>
