<script>
    import Elemento from "./UI/elemento.svelte"
    import portfolio1 from "../assets/portfolio-1.png"
    import portfolio2 from "../assets/portfolio-2.png"
    import portfolio3 from "../assets/portfolio-3.png"
    import portfolio4 from "../assets/portfolio-4.png"
    import portfolio5 from "../assets/portfolio-5.png"
    import {createEventDispatcher} from "svelte";

    const dispatch=createEventDispatcher()

    function selectext(event){

        dispatch('showText',{"laid":event.target.parentElement.id})

    }

</script>
<div class="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 mx-10 my-24 mt-72 md:mt-52 lg:mt-40" >
    <Elemento imagen="https://picsum.photos/id/1005/400/250" titulo="Image overlay" descripcion="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed
              molestiae voluptates incidunt iure sapiente" laid="0" on:click={selectext}/>

    <Elemento imagen="{portfolio1}" titulo="Lorem ipsum dolor sit amet" descripcion="consectetur adipisicing elit. Accusantium aperiam cum debitis deleniti eius" laid="1" on:click={selectext}/>
<!--    <Elemento imagen="{portfolio2}" titulo="Lorem ipsum dolor sit amet" descripcion="consectetur adipisicing elit. Accusantium aperiam cum debitis deleniti eius" laid="2" on:click={selectext}/>-->
<!--    <Elemento imagen="{portfolio3}" titulo="Lorem ipsum dolor sit amet" descripcion="consectetur adipisicing elit. Accusantium aperiam cum debitis deleniti eius" laid="3" on:click={selectext}/>-->
<!--    <Elemento imagen="{portfolio4}" titulo="Lorem ipsum dolor sit amet" descripcion="consectetur adipisicing elit. Accusantium aperiam cum debitis deleniti eius" laid="4" on:click={selectext}/>-->
<!--    <Elemento imagen="{portfolio5}" titulo="Lorem ipsum dolor sit amet" descripcion="consectetur adipisicing elit. Accusantium aperiam cum debitis deleniti eius" laid="5"on:click={selectext}/>-->



</div>