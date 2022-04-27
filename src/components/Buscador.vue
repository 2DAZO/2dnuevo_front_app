<template>
  <div class="flex mt-16 justify-between mb-16 px-5 py-6 bg-white w-max contenedor select-none">
    <div
      @click="(selectA = !selectA), selectB == false, selectC == false"
      :class="bgA"
      class="flex py-2 px-5 w-max seleccion cursor-pointer m-0 mr-5"
    >
      <div>
        <p class="w-max m-0 font-semibold">Ciudad</p>
        <p class="w-max m-0 text-sm">Villavicencio</p>
      </div>
      <svg
        v-if="selectA == false"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-12 h-10 w-10 m-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="ml-12 h-10 w-10 m-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </div>
    <div
      @click="(selectB = !selectB), selectA == false, selectC == false"
      :class="bgB"
      class="flex py-2 px-5 w-max seleccion cursor-pointer m-0 mr-5"
    >
      <div>
        <p class="w-max m-0 font-semibold">Categoria</p>
        <p class="w-max m-0 text-sm">Hogar</p>
      </div>
      <svg
        v-if="selectB == false"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-12 h-10 w-10 m-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="ml-12 h-10 w-10 m-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </div>
    <div
      @click="(selectC = !selectC), selectA == false, selectB == false"
      :class="bgC"
      class="flex py-2 px-5 w-max seleccion cursor-pointer m-0 mr-5"
    >
      <div>
        <p class="w-max m-0 font-semibold">Comercio</p>
        <p class="w-max m-0 text-sm">Éxito</p>
      </div>
      <svg
        v-if="selectC == false"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-12 h-10 w-10 m-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="ml-12 h-10 w-10 m-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </div>

    <div class="flex items-center py-2 px-5 w-max buscar cursor-pointer m-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-9 w-9 mr-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <p>Buscar</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Buscador",
  data() {
    return {
      selectA: false,
      selectB: false,
      selectC: false,
      currentId: null,
      options: [
        {
          id: 1,
          name: "Comercio",
        },
        {
          id: 2,
          name: "Tiempo de envio",
        },
        {
          id: 3,
          name: "Disponibilidad en tienda",
        },
      ],
    };
  },

  async mounted() {
    await this.$store.dispatch("getShops");
    
  },

  computed: {
    bgA() {
      if (
        this.selectA == true &&
        this.selectB == false &&
        this.selectC == false
      ) {
        return "bg";
      }
      return "";
    },
    bgB() {
      if (
        this.selectA == false &&
        this.selectB == true &&
        this.selectC == false
      ) {
        return "bg";
      }
      return "";
    },
    bgC() {
      if (
        this.selectA == false &&
        this.selectB == false &&
        this.selectC == true
      ) {
        return "bg";
      }
      return "";
    },

    shops(){
        return this.$store.state.shops
    }
  },
};
</script>
<style scoped>
.contenedor {
  border-radius: 10px;
  box-shadow: 0px 0px 12px #e1e1e1;
}
 
.seleccion {
  border-radius: 10px;
  background: var(--blanco);
}

.buscar {
  border-radius: 10px;
  color: var(--blanco);
  background: var(--morado);
}

.buscar svg {
  color: var(--blanco) !important;
}

.bg {
  background: var(--gris-claro);
}

svg {
  color: var(--morado);
  height: 40px;
}
</style>