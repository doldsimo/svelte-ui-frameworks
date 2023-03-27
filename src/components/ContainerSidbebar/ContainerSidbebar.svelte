<script>
    import { page } from "$app/stores";
    /**
     * @type {any}
     */
    export let showSidebar;
    /**
     * @type {any}
     */
    export let showHideMenue;

    /**
     * @type {any}
     */
    export let nav;
</script>

<div class={showSidebar ? "side-drawer show" : "side-drawer hide"}>
    <div style="display: flex; flex-direction:column; align-items:flex-end">
        <iconify-icon
            icon="mdi:close"
            on:click={showHideMenue}
            on:keydown={showHideMenue}
            style="cursor: pointer;"
        />
        <p>Navigation</p>
        <nav>
            {#each nav as item}
                <ul>
                    <li>
                        <a
                            on:click={showHideMenue}
                            class:active={$page.url.pathname === item.path}
                            href={item.path}>{item.title}</a
                        >
                    </li>
                </ul>
            {/each}
        </nav>
    </div>
</div>

<style>
    /* For showing/hiding Sidebar */
    .side-drawer {
        z-index: 0;
        position: fixed;
        /* width: 650px; */
        max-width: 35%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 200;
        background-color: rgb(197, 197, 197);
        padding: 16px 16px;
        box-sizing: border-box;
        transition: transform 0.3 ease-out;
    }
    /* For mobile devices from min-width side-drawer have max-width from 100% */

    @media only screen and (max-width: 1400px) {
        .side-drawer {
            max-width: 45%;
        }
    }

    @media only screen and (max-width: 1200px) {
        .side-drawer {
            max-width: 55%;
        }
    }

    @media only screen and (max-width: 800px) {
        .side-drawer {
            max-width: 100%;
        }
    }

    .show {
        transform: translateX(0);
        transition: 0.2s ease-in-out;
    }

    .hide {
        transform: translateX(-100%);
        transition: 0.2s ease-in-out;
    }

    /* For highlighting active page */
    ul {
        display: flex;
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    li {
        margin-right: 1em;
        font-weight: bold;
    }
    li:hover {
        text-decoration: underline;
    }

    .active {
        text-decoration: underline;
    }
</style>
