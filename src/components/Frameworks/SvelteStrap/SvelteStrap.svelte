<script>
    // @ts-nocheck

    import {
        Button,
        Label,
        Form,
        FormGroup,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Input,
        Table,
        Collapse,
    } from "sveltestrap";
    // import { CustomInput } from "sveltestrap/src";

    import { primaryColor, secondaryColor } from "../../../store/stores";
    import { Card } from "@svelteuidev/core";

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });

    // Helper variables
    let open = false;
    const toggle = () => (open = !open);
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
    <div class="sub-container-button">
        <div class="form-check form-switch">
            <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
            />
        </div>
    </div>
    <div class="sub-container-button">
        <div class="form-check">
            <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
            />
            <label class="form-check-label" for="exampleRadios1"> On </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
            />
            <label class="form-check-label" for="exampleRadios2"> Off </label>
        </div>
    </div>
    <div class="sub-container-button">
        <Label check style="display: flex">
            <Input type="checkbox" />
            <p>Check me</p>
        </Label>
    </div>
    <div class="sub-container-button" />
    <div class="sub-container-button" />
    <div class="sub-container-button">
        <Button on:click={toggle}>Open Modal</Button>
        <Modal body header="Modal title" isOpen={open} {toggle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Modal>
    </div>
    <div class="sub-container-button">
        <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Your email"
        />
    </div>
    <div
        class="sub-container-button"
        style="height: 100%; margin-top: 1em; margin-bottom: 1em"
    >
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Elements</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">0</th>
                    <td>List Element 0</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>List Element 1</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>List Element 2</td>
                </tr>
            </tbody>
        </Table>
    </div>
</div>
