<script>
export let name = '';
</script>
<div class="setting">
    <h1 class="profile w-20 h-20 bg-scheme-dark flex justify-center items-center text-white text-3xl mx-auto my-2 rounded-full">{name[0]}</h1>
    <table class="settings max-w-screen-sm mx-auto">
        <tr class="w-full flex justify-between py-2">
            <td class="flex-grow"><input type="text" name="new_name" bind:value="{name}" class="w-full h-full px-2 outline-none border-b-2 border-scheme-dark" placeholder="Name"></td>
            <td class="mx-2 my-2"><ion-icon name="create-outline" class="text-xl text-scheme-dark"></ion-icon></td>
        </tr>
    </table>
</div>
<style lang="scss">
table{
    width: calc(100% - 1rem);
}
</style>