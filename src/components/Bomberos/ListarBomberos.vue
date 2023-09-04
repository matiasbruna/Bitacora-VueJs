<script>
import axios from 'axios'

export default{

    data: ()=>{
        return{
            bomberos: []
        }       
    },
    async created(){
        let url = "https://bvsf.onrender.com/bomberos"

        await axios.get(url).then((res)=>(this.bomberos = res.data))

    }
}

</script>

<template>
    <div class="table-responsive">
        <table class="table  table-hover table-sm table-light">
            <thead>
                <tr>
                    <th>Num</th>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>Grado</th>
                    <th>Dni</th>
                    <th>Estado</th>
                    <th>Despachador</th>
                    <th>Administrador</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bombero in bomberos" :key="bombero._id">
                    <td>{{ bombero.nOrden }}</td>
                    <td>{{ bombero.apellido }}</td>
                    <td>{{ bombero.nombre }}</td>
                    <td>{{ bombero.rango }}</td>
                    <td>{{ bombero.dni }}</td>
                    <td>{{ bombero.estado }}</td>
                    <td>{{ bombero.despachador }}</td>
                    <td>{{ bombero.admin }}</td>
                    <td>
                        <router-link :to="'/editarBomberos/' + bombero._id" class="btn btn-info">Modificar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

