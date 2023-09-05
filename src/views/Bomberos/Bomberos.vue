<template>
    <div class="container">
        <h1>Listado de Bomberos</h1>
        <br>
        <div>
            <RouterLink to="/bomberos/nuevo" class="btn btn-primary">Agregar Bombero</RouterLink>
        </div>
        <br>
        <ListarBomberos>
        </ListarBomberos>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import ListarBomberos from '../../components/Bomberos/ListarBomberos.vue'

export default{
    components:{
    ListarBomberos,
    RouterLink
}
}
</script>