import {writable} from "svelte/store";

export const authStateStore = writable(false);
export const newJSON = writable(true);