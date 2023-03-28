import { writable } from "svelte/store";

export const primaryColor = writable({ r: 0, g: 232, b: 0 });
export const secondaryColor = writable("#ed8282")