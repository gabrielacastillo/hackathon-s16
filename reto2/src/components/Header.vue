<template>
  <div class="header">
    <div class="header-textos">
        <h1>{{nombreNegocio}}</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    nombreNegocio: String,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">

.header {
  display: flex;
  padding: 1% 0 1% 0;
  justify-content: center;
  align-items: center;

  &-textos {
    margin-left: 15px;
  }

  h1, p {
    color: white;
    font-family: 'Poppins';
  }

  h1 {
    font-size: 4.5rem;
    height: 90px;
  }
}

</style>
