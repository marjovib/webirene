<script>
    export let imagen;
    export let titulo;
    export let descripcion;
    export let laid;
</script>



<!--<div class="card shadow-lg image-full  row-span-1">-->

<div class="card shadow-lg max-w-sm  row-span-1">
    <figure>
<!--        <img src="https://picsum.photos/id/1005/400/250">-->
        <img src="{imagen}">
    </figure>
    <div class="justify-end card-body">
        <h2 class="card-title">{titulo}</h2>
        <p>{descripcion}.</p>
        <div class="card-actions" id="elemento-{laid}">
            <button class="btn btn-primary" on:click>Ver artículo</button>
        </div>
    </div>
</div>