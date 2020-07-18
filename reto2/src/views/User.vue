<template>
  <div class="usuarios">
    <h3>Listado de Usuarios</h3>
    <button @click="obtenerUsuarios">Obtener Usuarios</button>
    <ul v-for="u in usuarios" :key="u.id">
      <li>{{u.name}}</li>
    </ul>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'User',
  computed: {
    ...Vuex.mapState(['usuarios']),
  },
  methods: {
    ...Vuex.mapActions(['obtenerUsuarios']),
  },
};
</script>
