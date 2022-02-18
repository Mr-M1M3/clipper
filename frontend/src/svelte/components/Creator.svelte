<script>
    // imports module
    import {newJSON} from './modules/stores';
</script>
<div class="modal w-screen  px-2 py-3">
    <form method="POST" class="w-full max-w-screen-sm m-auto" on:submit="{() => {alert('Submitted')}}">
        <fieldset class="tab-container px-2 py-1 flex justify-between items-center">
            <div class="tab p-1 flex justify-center items-center border-r-2">
                <input class="name w-24 px-2 outline-none focus:border-b-2 border-scheme-light-dark" value="new-json" type="text" placeholder="Nickname" required>
                <span class="p-1 closer cursor-pointer">.json</span>
            </div>
            <button class="tab-save p-1 flex justify-center items-center justify-self-end" type="submit">
                <ion-icon name="save-outline" class="p-1 closer cursor-pointer"></ion-icon>
            </button>
        </fieldset>
        <fieldset class="josn w-full">
            <textarea name="json" id="json" rows="15" class="resize-none w-full border-2 px-2 py-3 text-lg outline-none"></textarea>
        </fieldset>
    </form>
</div>
<style lang="scss">
    .modal{
        form{
            .tab-container{
                outline: 1px solid rgba(0, 0, 0, 0.1);

                .tab{

                    ion-icon{
                        // background-color: red;
                        font-size: 20px;
                        margin: 4px;
                    }
                }
            }
        }
    }
</style>