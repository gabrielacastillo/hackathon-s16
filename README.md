¿Qué es VUEX?
Es un complemento para vue.js que ofrece un almacen de datos centralizados para usar dentro de su aplicacion.

¿Cuáles son los principales conceptos de VUEX? y ejemplificarlos.
- El estado: Es la fuente de verdad que impulsa nuestra aplicación.
- La vista: Es un mapeo declarativo del estado.
- Las acciones: Son las posibles formas en que el estado podría cambiar en reacción a las entradas del usuario desde la vista.
- Las mutaciones: Es La única forma de cambiar realmente el estado en un Store de Vuex

//Store
const store = new Vuex.Store({
  //Estado
  state: {
    cantidad: 0,
  },
  //Mutaciones
  mutations: {
    aumentar(state){
      state.cantidad++;
    },
  },
  //Acciones
  actions: {
    aumentarEnUno({commit}){
      commit('aumentar');
    }
  }
});

const app = new Vue({
    el: '#app',
    store
})

¿Por qué y para qué se necesitaria utilizar un administrador de estados?
Realmente su beneficio es notorio cuando trabajamos con proyectos un poco mas
grandes donde el manejo de la informacion es mas compleja, y trabajarlo de la 
forma comun pasando valores de Padre a Hijo y viceversa a traves de props
ya nos es factible, es alli donde nos beneficia Vuex que centraliza la informacion
y es accesible desde cualquier componente.