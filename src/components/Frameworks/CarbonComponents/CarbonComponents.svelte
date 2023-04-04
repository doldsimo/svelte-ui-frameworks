<script>
    // @ts-nocheck
    import "carbon-components-svelte/css/white.css";
    import {
        Button,
        Toggle,
        Checkbox,
        RadioButtonGroup,
        RadioButton,
        ContentSwitcher,
        Switch,
        Modal,
        TextInput,
        StructuredList,
        StructuredListHead,
        StructuredListRow,
        StructuredListCell,
        StructuredListBody,
    } from "carbon-components-svelte";

    import { primaryColor, secondaryColor } from "../../../store/stores";

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });

    let open = false;
</script>

<div class="container-ui-comparison">
    <div class="sub-container-button">
        <Button style={"background-color:" + colorP + "; color:" + colorS}
            >Click me</Button
        >
    </div>
    <div class="sub-container-button">
        <div>
            <Toggle />
        </div>
    </div>
    <div class="sub-container-button">
        <div>
            <RadioButtonGroup selected="standard">
                <RadioButton labelText="On" value="free" />
                <RadioButton labelText="Off" value="standard" />
            </RadioButtonGroup>
        </div>
    </div>
    <div class="sub-container-button">
        <div>
            <Checkbox labelText="Check me" />
        </div>
    </div>
    <div class="sub-container-button" />
    <div class="sub-container-button">
        <div style="width: 100%">
            <ContentSwitcher>
                <Switch text="One" />
                <Switch text="Two" />
                <Switch text="Three" />
            </ContentSwitcher>
        </div>
    </div>
    <div class="sub-container-button">
        <Button kind="danger" on:click={() => (open = true)}>Open modal</Button>

        <Modal
            danger
            bind:open
            modalHeading="Carbon Components Modal"
            primaryButtonText="Close"
            on:click:button--primary={() => (open = false)}
            on:open
            on:close
            on:submit
        >
            <p>Hello from Carbon Components Modal</p>
        </Modal>
    </div>
    <div class="sub-container-button">
        <TextInput placeholder="Your email" />
    </div>
    <div class="sub-container-button" style="width: 100%; height: 100%; margin-top: 1em; margin-bottom: 1em">
        <StructuredList condensed>
            <StructuredListHead>
                <StructuredListRow head>
                    <StructuredListCell head>#</StructuredListCell>
                    <StructuredListCell head>Elements</StructuredListCell>
                </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
                <StructuredListRow>
                    <StructuredListCell noWrap>0</StructuredListCell>
                    <StructuredListCell>List Element 0</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                    <StructuredListCell noWrap>1</StructuredListCell>
                    <StructuredListCell>List Element 1</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                    <StructuredListCell noWrap>2</StructuredListCell>
                    <StructuredListCell>List Element 3</StructuredListCell>
                </StructuredListRow>
            </StructuredListBody>
        </StructuredList>
    </div>
</div>
