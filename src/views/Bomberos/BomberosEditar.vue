<script>
import axios from 'axios'

export default {

  data: () => {
    return {
      bombero: [],
      grados: []
    }
  },
  async created() {
    let url = "https://bvsf.onrender.com/bomberos/" + this.$route.params.id;
    let urlGrados = "https://bvsf.onrender.com/bomberos/grados";
    await axios.get(url).then((res) => (this.bombero = res.data));
    await axios.get(urlGrados).then((res)=>(this.grados = res.data));

  }
}


</script>

<template>
  {{ grados }}
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

              <option value="{{this.nombre}}">{{ this.nombre }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="title">Estado:</label>
            <br>
            <select class="form-select" name="estado">

              <option value="{{this.estado}}">{{ this.estado }}</option>

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

            <a href="/Bomberos" class="btn btn-primary">Volver</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>