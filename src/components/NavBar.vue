<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <!-- NAV BAR LATERAL -->
    <section class="flex nav-bar">
        <div class="flex container">
            <!-- logo -->
            <div class="flex logo">
                <span style="padding-left: 25px;">
                    BRAZINO
                </span>
                <span style="color:yellow;">
                    777
                </span>
            </div>

            <!-- nav -->
            <nav class="flex nav">
                <!-- nav da plataforma -->
                <div class="flex nav-pag">
                    <router-link to="/" class="flex link">
                        <!-- home link -->
                        <span class="material-symbols-outlined">
                            movie
                        </span>
                        <span class="text">
                            Home
                        </span>
                    </router-link>

                    <!-- favorite link -->
                    <router-link to="/favorite" class="flex link">
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                        <span class="text">
                            Fovorite
                        </span>
                    </router-link>

                    <!-- Filmes link -->
                    <router-link to="/trending" class="flex link">
                        <span class="material-symbols-outlined">
                            moving
                        </span>
                        <span class="text">
                            Trending
                        </span>
                    </router-link>

                    <!-- slr link -->
                    <a href="#" class="flex link">
                        <span class="material-symbols-outlined">
                            calendar_today
                        </span>
                        <span class="text">
                            Coming soon
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
                            Community
                        </span>
                    </a>
                    <a href="#" class="flex link">
                        <span class="material-symbols-outlined">
                            forum
                        </span>
                        <span class="text">
                            Social
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
                            Settings
                        </span>
                    </router-link>
                    <a href="#" class="flex link">
                        <span class="material-symbols-outlined">
                            logout
                        </span>
                        <span class="text">
                            Logout
                        </span>
                    </a>
                </div>
            </nav>
        </div>

        <button class="btn">
            <span class="material-symbols-outlined" id="arrow" style="color: white;">
                chevron_left
            </span>
        </button>
    </section>
</template>

<script>
export default {
    name : 'NavBar',

    methods : {
        Esconder() {
            // Evento para esconder a barra
            const btn = document.querySelector(".btn")
            btn.addEventListener("click", () => {
                const icon = document.getElementById("arrow")
                const container = document.querySelector(".container")
                const nav = document.querySelector(".nav-bar")

                if(icon.textContent == 'chevron_left') {
                    nav.style.width = '40px'
                    container.style.display = 'none'
                    icon.textContent = 'chevron_right'
                } else {
                    container.style.display = 'flex'
                    icon.textContent = 'chevron_left'
                    nav.style.width = '100%'
                }

                icon.style.transition = 'all 1s'
                container.style.transition = 'all 1s'
            })
        }
    },

    mounted() {
        this.Esconder()
    }
}
</script>

<style scoped>

    .nav-bar, .btn {
        background-color: black;
        flex-direction: row;
        justify-content: space-between;
        height: 100vh;
        width: 70vw;
        max-width: 220px;
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

    .link:hover {
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