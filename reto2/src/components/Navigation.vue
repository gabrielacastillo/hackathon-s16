<template>
  <div class="navigation">
    <nav>
      <ul>
        <li class="navigation-inicio"><router-link to="/">Inicio</router-link></li>
        <li class="navigation-item"><router-link to="/user">Usuarios</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped lang="scss">

ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: .5% 0 .5% 0;
}

li {
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
  font-family: 'Poppins';
  font-size: 1.2rem;
  cursor: pointer;
}

a:hover {
  color: #049E99;
}

.navigation {

  padding: 1% 0 1% 0;

  & .router-link-active {
      color: #049E99;
  }

  &-inicio {
    border-bottom: 2px solid #049e99;
  }

  &-item:hover {
    border-bottom: 2px solid #049e99;
  }

  &-reserva {
    border: 2px solid #049e99;
    background-color: #049e99;
    padding: .5% 1% .5% 1%;
    border-radius: 20px;
    cursor: pointer;
  }

  &-reserva:hover {
    background: none;
  }

  &-reserva a:hover {
    color: white;
  }
}
</style>
