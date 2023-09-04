<template>
    <div class="container">
        <h1>Listado de Bomberos</h1>
        <br>
        <div>
            <a href="/bomberoAdd" class="btn btn-primary">Agregar Bombero Nuevo</a>
        </div>
        <br>
        <ListarBomberos>
        </ListarBomberos>
    </div>
</template>

<script>
import ListarBomberos from '../../components/Bomberos/ListarBomberos.vue'

export default{
    components:{
        ListarBomberos
    }
}
</script>