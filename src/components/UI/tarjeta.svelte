<script>
      export let imagen;
    export let descrip;
    export let orientacion = false;

</script>


<div class="flex items-center justify-center mb-20 ">
    {#if orientacion === true}
         <img src="{imagen}" alt="{descrip}"  class="rounded-tl-3xl rounded-br-3xl w-32 border-2 border-pink-400  hidden lg:block"/>
        <div class="box-content md:min-h-36 w-full border-2 border-light-grey p-3 mx-2 shadow-xl rounded-br-xl rounded-tr-xl bg-red-50">
            <div class="font-Garamond font-bold text-3xl mb-4 mx-12 flex items-center justify-between ">
                <slot name="imagen"/>
                <div class="ml-6 ">
                    <slot name="title"></slot>
                </div>
            </div>
            <hr>
            <div class="mt-4 mx-6 font-Garamond text-lg xl:text-xl  text-justify">
                <slot/>
            </div>
        </div>
    {/if}
    {#if orientacion === false}

        <div class="box-content md:min-h-36 w-full border-2 border-light-grey p-3 mx-2 shadow-xl rounded-bl-xl rounded-tl-xl bg-red-50">
            <div class="font-Garamond font-bold text-3xl mb-4 mx-12 flex  items-center justify-between">
                <div class=" ml-6 mb-4">
                    <slot name="title"></slot>
                </div>
                <div>
                    <slot name="imagen"/>
                </div>
            </div>
            <hr>
            <div class="mt-4 mx-6 font-Garamond text-lg xl:text-xl text-justify">
                <slot/>
            </div>

        </div>
        <img src="{imagen}" alt="{descrip}" class="rounded-tl-3xl rounded-br-3xl w-32 border-2 border-pink-400 hidden lg:block"/>

    {/if}
</div>





