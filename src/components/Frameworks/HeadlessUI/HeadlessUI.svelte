<script>
    // @ts-nocheck
    import Dialog from "./Dialog/Dialog.svelte";
    import Menu from "./Menu/Menu.svelte";
    import RadioButton from "./RadioButton/RadioButton.svelte";
    import Switch from "./Switch/Switch.svelte";
    import Tabs from "./Tabs/Tabs.svelte";
    import Disclosure from "./Disclosure/Disclosure.svelte";

    import { primaryColor, secondaryColor } from "../../../store/stores";

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });

    // Helper variables for Components
    let enabled = false;
</script>

<div class="container-ui-comparison">
    <div class="sub-container-button">
        <button
            class="btn"
            style={"background-color:" + colorP + "; color:" + colorS}
            >Click me</button
        >
    </div>
    <div class="sub-container-button">
        <Switch/>
    </div>

    <div class="sub-container-button"   style="width: 100%; height: 100%; margin-top: 1em; margin-bottom: 1em">
        <RadioButton />
    </div>

    <div class="sub-container-button" style="width: 100%; height: 100%; margin-top: 1em; margin-bottom: 1em">
        <Tabs/>
    </div>
    <div class="sub-container-button">
        <Disclosure/>
    </div>

    <div class="sub-container-button">
        <Dialog/>
    </div>

</div>


<style>
    :global(.switch) {
        position: relative;
        display: inline-flex;
        align-items: center;
        border-radius: 9999px;
        height: 1.5rem;
        width: 2.75rem;
    }

    :global(.switch-enabled) {
        /* Blue */
        background-color: rgb(37 99 235);
    }

    :global(.switch-disabled) {
        /* Gray */
        background-color: rgb(229 231 235);
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    .toggle {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background-color: rgb(255 255 255);
        border-radius: 9999px;
    }

    .toggle-on {
        transform: translateX(1.1rem);
    }

    .toggle-off {
        transform: translateX(-0.25rem);
    }
</style>
