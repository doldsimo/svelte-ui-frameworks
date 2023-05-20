<script>
    // @ts-nocheck
    import {
        Button,
        Switch,
        ChoiceInput,
        Tabs,
        Dialog,
        Input,
        Table,
        Loader,
        Spinner,
        Disclose,
    } from "agnostic-svelte";

    import { primaryColor, secondaryColor } from "../../../store/stores";

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });

    // Dialog
    let dialogInstance;
    const assignDialogInstance = (ev) => {
        console.log("in App.svelte -- assignDialogInstance called...");
        dialogInstance = ev.detail.instance;
    };

    const openDialog = () => {
        console.log("in App.svelte -- openDialog calling instance.show()");
        if (dialogInstance) {
            dialogInstance.show();
        }
    };

    const createRow = (name, elements) => ({
        name,
        elements,
    });

    // Row
    const tableArgs = {
        rows: [
            createRow(0, "List Element 0"),
            createRow(1, "List Element 1"),
            createRow(2, "List Element 2"),
        ],
        headers: [
            {
                label: "#",
                key: "name",
                width: "50%",
                sortable: true,
            },
            {
                label: "Elements",
                key: "elements",
                width: "50%",
            },
        ],
        caption: "List",
    };
</script>

<div class="container-ui-comparison">
    <div class="sub-container-button">
        <Button
            mode="primary"
            style={"background-color:" + colorP + "; color:" + colorS}
            >Click me</Button
        >
    </div>
    <div class="sub-container-button">
        <div class="switch">
            <Switch id="1" />
        </div>
    </div>
    <div class="sub-container-button">
        <ChoiceInput
            id="r1"
            type="radio"
            isInline
            isFieldset={false}
            options={[
                {
                    label: "On",
                },
                {
                    label: "Off",
                },
            ]}
        />
    </div>
    <div class="sub-container-button">
        <ChoiceInput
            id="c1"
            type="checkbox"
            isFieldset={false}
            isInline
            options={[
                {
                    label: "Check me",
                },
            ]}
        />
    </div>
    <div class="sub-container-button" />
    <div class="sub-container-button">
        <Tabs
            size="large"
            tabs={[
                { title: "Tab 1", ariaControls: "panel-1" },
                { title: "Tab 2", ariaControls: "panel-2" },
                { title: "Tab 3", ariaControls: "panel-3" },
            ]}
        />
    </div>

    <div class="sub-container-button">
        <Button
            mode="primary"
            isBlock
            isBordered
            isRounded
            type="button"
            on:click={openDialog}
        >
            Open the dialog
        </Button>
        <Dialog
            id="svelte-dialog"
            dialogRoot="#portal-root"
            closeButtonLabel="My close button label"
            closeButtonPosition="last"
            titleId="uniqueTitleId"
            role="dialog"
            classNames={{
                title: "h4 mbe18 flex justify-center",
            }}
            title="My Dialog Example"
            isAnimationFadeIn
            isAnimationSlideUp
            on:instance={assignDialogInstance}
        >
            <p class="mbs16 mbe16" id="dialog-example-description">
                Fill in the form below to receive our newsletter! Testing
                setting close button last.
            </p>
            <Button type="submit" mode="primary" isRounded isBlock>Test</Button>
        </Dialog>
    </div>
    <div class="sub-container-button">
        <Input
            isLabelHidden={true}
            uniqueId="3"
            isUnderlined
            placeholder="Your Email"
        />
    </div>
    <div
        class="sub-container-button"
        style="width: 100%; height: 100%; margin-top: 1em; margin-bottom: 1em"
    >
        <Table {...tableArgs} />
    </div>
    <div
        class="sub-container-button"
        style="width: 100%; height: 100%; margin-top: 1em; margin-bottom: 1em"
    >
        <section style="width: 100%">
            <Disclose title="Panel 0">Panel 0 content</Disclose>
            <Disclose title="Panel 1">Panel 1 content</Disclose>
            <Disclose title="Panel 2">Panel 2 content</Disclose>
            <Disclose title="Panel 3">Panel 3 content</Disclose>
        </section>
    </div>
    <div class="sub-container-button">
        <Loader />
        <Spinner />
    </div>
</div>

<style>
    .switch {
        display: flex;
        justify-content: center;
    }
</style>
