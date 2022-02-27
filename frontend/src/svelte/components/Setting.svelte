<script>

    // imports props
export let name = '';
export let uid = '';
export let email = '';
let name_input_disabled = true;
let email_input_disabled = true;

// imports module
import fetcher from './modules/fetcher';

// imports components
import { SvelteToast, toast } from "@zerodevx/svelte-toast";

async function update(e){
    const DATA = new URLSearchParams(new FormData(e.target));
    const RESPONSE = await fetcher('PUT', '/user/update', DATA);
    let status = await RESPONSE.text();
    if(!RESPONSE.ok){
        toast.push(status, {
          theme: {
            "--toastBackground": "#F56565",
            "--toastBarBackground": "#C53030",
          },
        });
    }else{
        toast.push('Updated', {
          theme: {
            "--toastBackground": "#48BB78",
            "--toastBarBackground": "#2F855A",
          },
        });
    }
}
</script>
<div class="setting">
    <h1 class="profile w-20 h-20 bg-scheme-dark flex justify-center items-center text-white text-3xl mx-auto my-2 rounded-full">{name[0]}</h1>
    <form class="px-2 w-full max-w-screen-sm m-auto" on:submit|preventDefault="{update}">
        <table class="settings max-w-screen-sm mx-auto">
            <tr class="w-full flex justify-between py-2">
                <td class="flex-grow"><input type="text" id="new_name" name="new_name" bind:value="{name}" class="w-full h-full px-2 outline-none {!name_input_disabled ? 'border-b-2' : 'border-0'} border-scheme-dark text-lg" placeholder="Name" disabled={name_input_disabled}></td>
                <td class="mx-2 my-2"><label for="new_name  h-full"><ion-icon name="create-outline" class="text-xl text-scheme-dark cursor-pointer" on:click="{() => {name_input_disabled = !name_input_disabled}}"></ion-icon></label></td>
            </tr>
            <tr class="w-full flex justify-between py-2">
                <td class="flex-grow"><input type="text" id="new_email" name="new_email" value="{email}" class="w-full h-full px-2 outline-none {!email_input_disabled ? 'border-b-2' : 'border-0'} border-scheme-dark text-lg" placeholder="Name" disabled={email_input_disabled}></td>
                <td class="mx-2 my-2"><label for="new_email  h-full"><ion-icon name="create-outline" class="text-xl text-scheme-dark cursor-pointer" on:click="{() => {email_input_disabled = !email_input_disabled}}"></ion-icon></label></td>
            </tr>
            <tr class="w-full flex justify-between py-2">
                <td class="flex-grow"><input type="password" id="new_password" name="new_password" class="w-full h-full px-2 py-1 outline-none border-b-2 border-scheme-dark text-lg" placeholder="New Password, If You Wish"></td>
            </tr>
            <tr class="w-full flex justify-between py-2">
                <td class="flex-grow"><input type="text" name="new_name" value="{uid}" class=" text-center w-full h-full px-2 outline-none border-0 text-lg" placeholder="uid" disabled="true"></td>
            </tr>
        </table>
        <fieldset class="my-4 border-0 border-scheme-dark">
            <legend class="text-lg text-scheme-red font-bold">You Must Authenticate Before Updating Profile</legend>
            <input type="email" name="current_email" value="{email}" class="w-full max-w-full h-full px-2 py-3 m-1 outline-none border-b-2 border-scheme-dark text-lg" placeholder="Current Email">
            <input type="password" name="current_password" class="w-full max-w-full h-full px-2 py-3 m-1 outline-none border-b-2 border-scheme-dark text-lg" placeholder="Current Password">
        </fieldset>
        <button type="submit" class="block w-full px-2 py-3 text-center bg-scheme-red text-white font-bold rounded-md">Submit</button>
    </form>
    <div class="toast-wrapper">
    <SvelteToast/>
    </div>
</div>
<style lang="scss">
table{
    width: calc(100% - 1rem);
}
.toast-wrapper{
    text-transform: capitalize;
}
</style>