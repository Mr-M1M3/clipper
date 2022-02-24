import {writable} from "svelte/store";

export const authStateStore = writable(false);
export const shouldDisplay = writable('creator');