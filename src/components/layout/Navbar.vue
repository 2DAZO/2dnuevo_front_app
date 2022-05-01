<template>
  <div class="navbar-container w-full">
    <div class="navbar-content py-5 px-5 flex justify-between w-full">
      <div class="left flex w-full justify-start m-0">
        <router-link to="/">
          <img
            class="h-10 mr-4 w-auto select-none"
            src="https://res.cloudinary.com/segundazo/image/upload/v1646694599/NUEVOS/MATERIAL%20GRAFICO/LOGO_SVG_Mesa_de_trabajo_1_c3thsb.svg"
            alt=""
          />
        </router-link>
        <div class="search-container w-full py-2 px-5 mx-7">
          <form class="flex">
            <input type="text" placeholder="¿Que estas buscando?" name="busqueda"/>
            <button class="w-auto" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2.5"
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
            </button>
          </form>
        </div>
      </div>
      <div class="rigth flex w-auto m-0 select-none">
        <div class="bt-acount flex py-2 px-5 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <p style="width: max-content">Mi cuenta</p>
        </div>

        <div class="bt-location flex py-2 px-5 mr-4 w-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p>Ubicación</p>
        </div>

        <div class="bt-car py-2 px-5 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>

        <div class="bt-menu py-2 pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>

.navbar-content{
  max-width: 1300px;
  margin: 0 auto;
}

.search-container{
    background: var(--gris-claro);
    border-radius: 10px;
}

.search-container svg {
    color: var(--verde);
    height: 18px;
}

input {
  width: 100%;
  background: var(--gris-claro);
  border-style: none;
  outline: none;
}

.bt-acount {
  width: auto;
  color: var(--verde);
  border: 1px solid var(--verde);
  border-radius: 10px;
  cursor: pointer;
}

.bt-location {
  width: auto;
  color: var(--blanco);
  background: var(--morado);
  border-radius: 10px;
  cursor: pointer;
}

.bt-car {
  background: var(--morado);
  color: var(--blanco);
  border-radius: 10px;
  cursor: pointer;
}

.bt-menu {
  cursor: pointer;
  color: var(--morado);
}


</style>