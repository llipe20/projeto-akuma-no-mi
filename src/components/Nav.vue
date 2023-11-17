<template>
    <div 
        class="flex justify-between items-center w-full md:w-5/6 h-20 text-white pr-4 pl-4 lg:pr-8 lg:pl-10 max-md:justify-end fixed z-20"
        :class="{ 'bg-black': isScroll, 'transition-all' : isScroll }"
    >
        <div class="flex justify-center items-center gap-10 h-full max-md:hidden">
            <a href="#" class="hover:border-b">Filmes</a>
            <a href="#" class="hover:border-b">Séries</a>
            <a href="#" class="hover:border-b">Lançamentos</a>
        </div>

        <div class="flex items-center gap-5 lg:gap-10 hover:cursor-pointer w-auto">
            <!-- Lupa de Pesquisa retrátil -->
            <div class="caixa-pesquisa">
                <input type="text" class="texto-pesquisa" placeholder="Pesquisar" required>
                <a href="#" class="botao-pesquisa">
                    <!-- Lupa de pesquisa -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </a>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-95 hover:scale-110">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>

            <div class="flex justify-center items-center gap-2 w-auto h-auto">
                <span class="h-10 w-10 bg-white border" @click="Esconder()">
                    <img :src="user.avatar != null ? user.avatar : '/sad.png'">
                </span>

                <div class="flex flex-col md:flex-row md:gap-1 md:text-base justify-center items-center">
                    <span v-if="isName" class="text-sm">
                        Hey, 
                    </span>
                    <span v-if="isName" class="text-sm">
                        {{user.name != null ? user.name : 'faça login'}}!
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'NavGation',

    data() {
        return {
            isScroll : false,
            user : this.$store.state.user || '',
            isName : false
        }
    },

    mounted() {
        window.addEventListener('scroll', this.Gaia)
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.Gaia);
    },

    methods : {
        Gaia() {
            this.isScroll = window.scrollY > 5
        },
        
        Esconder() {
            this.isName = !this.isName
        }
    }
}
</script>

<style scoped>

.caixa-pesquisa{
    background-color: transparent;
    margin-right: -20px;
    height: 40px;
    padding: 10px;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.texto-pesquisa{
    border: none;
    background: none;
    outline: none;
    color: black;
    font-size: 16px;
    line-height: 40px;
    width: 0;
    border-radius: 40px;
    transition: all .5s;
}

/* Muda a cor dos placeholders, coloca a cor que melhor combinar */
::-webkit-input-placeholder{
    color: black;
}

.botao-pesquisa i{
    height: 20px;
    width: 20px;
}

.botao-pesquisa{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Passando as propriedades ao texto inserido na barra de pesquisa assim que o mouse tocar na lupa*/
.caixa-pesquisa:hover > .texto-pesquisa{
    background-color: white;
    width: 240px;
    padding: 0 7px;
}

@media (max-width: 800px) {
    .caixa-pesquisa:hover > .texto-pesquisa{
        width: 120px;
    }
}

/* Fazendo o mesmo com o botão de pesquisa */
.caixa-pesquisa:hover > .botao-pesquisa{
    background-color: white;
    color: black;
}

.caixa-pesquisa:hover {
    background-color: white;
    color: black;
}
</style>