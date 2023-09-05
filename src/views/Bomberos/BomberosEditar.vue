<script>
import axios from 'axios'
import {urlServidor} from '../../stores/urlServidor'

export default {

  data: () => {
    return {
      bombero: [],
      grados: [],
      estados: []
    }
  },
  async created() {


    let url = urlServidor().url +"/bomberos/" + this.$route.params.id;
    let urlGrados = urlServidor().url + "/bomberos/grados";
    let urlEstados = urlServidor().url + "/bomberos/estados";

    await axios.get(url).then((res) => (this.bombero = res.data));
    await axios.get(urlGrados).then((res)=>(this.grados = res.data));
    await axios.get(urlEstados).then((res)=>(this.estados = res.data));

  }
}


</script>

<template>
  <div class="col-md-4 mx-auto">
    <div class="card">
      <div class="card-header text-center">
        <h3>Editar Bombero</h3>
      </div>
      <div class="card-body">

        <form action="" method="POST">
          <div class="mb-3 d-none">
            <label for="title">Id:</label>
            <input type="text" name="_id" class="form-control" v-model="bombero._id" />
          </div>
          <div class="mb-3">
            <label for="title">Nombre:</label>
            <input type="text" name="nombre" class="form-control" v-model="bombero.nombre" />
          </div>
          <div class="mb-3">
            <label for="title">Apellido:</label>
            <input type="text" name="apellido" class="form-control" v-model="bombero.apellido" />
          </div>
          <div class="mb-3">
            <label for="title">Dni:</label>
            <input type="text" name="dni" class="form-control" v-model="bombero.dni" />
          </div>
          <div class="mb-3">
            <label for="title">Numero de Orden:</label>
            <input type="text" name="nOrden" class="form-control" v-model="bombero.nOrden" />
          </div>
          <div class="mb-3">
            <label for="title">Rango Actual:</label>
            <input type="text" class="form-control" v-model="bombero.rango" />
          </div>
          <div class="mb-3">
            <label for="title">Rango Nuevo:</label>
            <br>
            <select class="form-select" name="rango">

              <option v-for="grado in grados" :key="grado.numero">{{ grado.nombre}}</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="title">Estado:</label>
            <br>
            <select class="form-select" name="estado">

              <option v-for="estado in estados" :key="estado">{{ estado.estado }}</option>

            </select>
          </div>

          <div class="mb-3">
            <label>
              <input type="checkbox" name="despachador" v-model="bombero.despachador">
              Despachador.
            </label>
          </div>
          <div class="mb-3">
            <label>
              <input type="checkbox" name="admin" v-model="bombero.admin"> Administrador.
            </label>
          </div>
          <div class="d-grid gap-2">

            <button class="btn btn-primary" type="submit">Guardar</button>

            <a href="/bomberos" class="btn btn-primary">Volver</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>