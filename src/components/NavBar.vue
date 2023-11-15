<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <!-- NAV BAR LATERAL -->
        <section 
            @click="Open"
            :class="{ 'hidden' : isHidden }"
            class="lg:flex nav-bar border-r border-gray-700 fixed left-0 top-0 w-2/6 md:w-20-vw z-30" id="nav-bar">
            <div class="flex container">
                <!-- logo -->
                <div class="flex logo">
                    <span style="padding-left: 25px;">
                        BRAZINO
                    </span>
                    <span class="text-purple-700">
                        777
                    </span>
                </div>

                <!-- nav -->
                <nav class="flex nav">
                    <!-- nav da plataforma -->
                    <div class="flex nav-pag">
                        <router-link 
                            :to="{ name: 'home' }" 
                            :class="{ 'classe-ativa': isRotaAtual('home') }"
                            class="flex link">
                            <!-- home link -->
                            <span class="material-symbols-outlined">
                                movie
                            </span>
                            <span class="text">
                                Inicio
                            </span>
                        </router-link>

                        <!-- favorite link -->
                        <router-link 
                            :to="{ name: 'favorite' }" 
                            :class="{ 'classe-ativa': isRotaAtual('favorite') }"
                            class="flex link">

                            <span class="material-symbols-outlined">
                                favorite
                            </span>
                            <span class="text">
                                Favoritos
                            </span>
                        </router-link>

                        <!-- Filmes link -->
                        <router-link 
                            :to="{ name: 'trending' }" 
                            :class="{ 'classe-ativa': isRotaAtual('trending') }"
                            class="flex link">
        
                            <span class="material-symbols-outlined">
                                moving
                            </span>
                            <span class="text">
                                Em alta
                            </span>
                        </router-link>

                        <!-- slr link -->
                        <a href="#" class="flex link">
                            <span class="material-symbols-outlined">
                                calendar_today
                            </span>
                            <span class="text">
                                Lançamentos
                            </span>
                        </a>
                    </div>

                    <!-- nav de redes sociais -->
                    <div class="flex nav-midia">
                        <a href="#" class="flex link">
                            <span class="material-symbols-outlined">
                                group
                            </span>
                            <span class="text">
                                Comunidade
                            </span>
                        </a>
                        <a href="#" class="flex link">
                            <span class="material-symbols-outlined">
                                forum
                            </span>
                            <span class="text">
                                Sociais
                            </span>
                        </a>
                    </div>

                    <!-- nav de configurações -->
                    <div class="flex nav-exit">
                        <router-link to="/home" class="flex link">
                            <span class="material-symbols-outlined">
                                settings
                            </span>
                            <span class="text">
                                Configurações
                            </span>
                        </router-link>
                        <span @click="GetLogin()" class="flex link">
                            <span class="material-symbols-outlined">
                                logout
                            </span>
                            <span class="text">
                                Sair
                            </span>
                        </span>
                    </div>
                </nav>
            </div>
        </section>

        <span
            :class="{ 'hidden' : !isHidden }" 
            class="lg:hidden text-white text-lg fixed left-8 top-8 z-30 cursor-pointer" id="open" 
            @click="Open">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </span>
</template>

<script>
export default {
    name : 'NavBar',

    data() {
        return {
            isHidden : true
        }
    },

    methods : {
        Open() {
            this.isHidden = !this.isHidden
        },

        isRotaAtual(rota) {
            return this.$route.name == rota;
        },

        GetLogin() {
            this.$store.dispatch('GetMutation', {
                mutation : 'UpdateLogin',
                data : true
            })
        }
    }
}
</script>

<style scoped>
  .flex {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }

    .nav-bar, .btn {
        background-color: black;
        flex-direction: row;
        justify-content: space-between;
        height: 100vh;
        width: 70vw;
        max-width: 260px;
        padding: 0;
        gap: 0;
    }

    .container {
        height: 100%;
        width: 100%;
        gap: 40px;
        padding: 0;
    }

    .logo {
        margin-top: 25px;
        flex-direction: row;
        justify-content: start;
        font: bolder 1.4em 'Arial', sans-serif;
        width: 100%;
        height: 40px;
        color: white;
    }

    .nav {
        justify-content: space-around;
        width: 100%;
        height: 90%;  
    }

    .nav-pag, .nav-midia, .nav-exit {
        width: 100%;
        height: 33%;
    }

    .link {
        font: normal 1em 'Arial', sans-serif;
        color: rgb(200, 198, 198);
        text-decoration: none;
        justify-content: start;
        flex-direction: row;
        width: 75%;
    }

    .link:hover, .classe-ativa{
        font-weight: bold;
        color: white;
    }

    .btn {
        border: none;
        outline: none;
        width: auto;
        height: 100%;
        padding: 0 5px;
        margin: 0;
        gap: 0;
    }
</style>