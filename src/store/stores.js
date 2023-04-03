import { writable } from "svelte/store";

export const primaryColor = writable({ r: 0, g: 0, b: 150 });
export const secondaryColor = writable("#ffffff")