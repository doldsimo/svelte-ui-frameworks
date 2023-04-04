<script>
    // @ts-nocheck
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

<div class="container-ui-comparison">
    <div class="sub-container-button">
        <button
            class="btn"
            style={"background-color:" + colorP + "; color:" + colorS}
            >Click me</button
        >
    </div>
    <div class="sub-container-button">
        <input type="checkbox" class="toggle toggle-primary" checked />
    </div>
    <div class="sub-container-button">
        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">On</span>
                <input
                    type="radio"
                    name="radio-10"
                    class="radio checked:bg-red-500"
                    checked
                />
            </label>
        </div>
        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">Off</span>
                <input
                    type="radio"
                    name="radio-10"
                    class="radio checked:bg-blue-500"
                    checked
                />
            </label>
        </div>
    </div>
    <div class="sub-container-button">
        <label class="label cursor-pointer">
            <input type="checkbox" checked="checked" class="checkbox" />
            <span class="label-text ml-3">Check me</span>
        </label>
    </div>
    <div class="sub-container-button" />
    <div class="sub-container-button">
        <div class="btn-group">
            <input type="radio" name="options" data-title="One" class="btn" />
            <input
                type="radio"
                name="options"
                data-title="Two"
                class="btn"
                checked
            />
            <input type="radio" name="options" data-title="Three" class="btn" />
        </div>
    </div>
    <div class="sub-container-button">
        <!-- The button to open modal -->
        <label for="my-modal" class="btn">open modal</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">
                    Congratulations random Internet user!
                </h3>
                <p class="py-4">
                    You've been selected for a chance to get one year of
                    subscription to use Wikipedia for free!
                </p>
                <div class="modal-action">
                    <label for="my-modal" class="btn">Yay!</label>
                </div>
            </div>
        </div>
    </div>
    <div class="sub-container-button">
        <input
            type="text"
            placeholder="Your email"
            class="input w-full max-w-xs"
        />
    </div>
    <div
        class="sub-container-button"
        style="width: 100%; height: 100%; margin-top: 1em; margin-bottom: 1em"
    >
        <ul class="steps steps-vertical">
            <li class="step step-primary">Bullet One</li>
            <li class="step step-primary">Bullet Two</li>
            <li class="step">Bullet Three</li>
            <li class="step">Bullet Four</li>
        </ul>
    </div>
    <div class="sub-container-button">
        <input
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-primary"
        />
    </div>
    <div class="sub-container-button" style="height: 100%; margin-top: 1em; margin-bottom: 1em">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th />
                    <th>Elements</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr>
                    <th>0</th>
                    <td>List Element 0</td>
   
                </tr>
                <!-- row 2 -->
                <tr>
                    <th>1</th>
                    <td>List Element 1</td>

                </tr>
                <!-- row 3 -->
                <tr>
                    <th>2</th>
                    <td>List Element 2</td>

                </tr>
            </tbody>
        </table>
    </div>
</div>
