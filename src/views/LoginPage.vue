<template>
  <div class="flex flex-col gap-8 justify-center items-center w-screen h-screen bg">
    <div class="flex flex-col justify-center items-center text-white gap-2 w-full">
      <div class="flex gap-2 text-2xl">
          <span>
            BRAZINO
          </span>
          <span class="text-purple-700 font-bold">
            777
          </span>
      </div>
      <span class="text-base text-center">
          Se sua estrela não brilha, não tente apagar a minha!
      </span>
    </div>

      <!-- FORM DE LOGIN --> 
      <form 
        v-if="true" 
        @submit="Login"
        action="" 
        class="flex flex-col justify-center items-center gap-2 w-4/5 h-auto p-4 md:w-2/5 rounded-xl">

        <InputView 
            :type="'email'"
            :name="'email'"
            :id="'email'"
            :placeholder="'E-mail'"
            v-model="email"
            class="w-3/5 md:2/5 h-10 border-0 outline-0 bg-white text-purple-950 rounded-lg pl-4 mt-2"
            autofocus
        />

        <InputView 
            :type="'password'"
            :name="'senha'"
            :id="'senha'"
            :placeholder="'Senha'"
            v-model="senha"
            class="w-3/5 md:2/5 h-10 border-0 outline-0 bg-white text-purple-950 rounded-lg pl-4"
        />

        <a href="#" class="w-2/5 text-white text-center mt-2 mb-2 hover:underline">Esqueceu a senha?</a>

        <InputView 
            :type="'submit'"
            :name="'submit'"
            :id="'submit'"
            :value="'Entrar'"
            class="w-3/5 md:2/5 h-10 border-0 outline-0 bg-purple-950 text-white rounded-lg cursor-pointer scale-95 hover:scale-100 shadow"
        />

        <a href="#" class="w-2/5 text-white text-center mt-2 mb-2 hover:underline">Criar conta</a>
      </form>

      <!-- FORM DE CRIAR CONTA -->
      <form 
        v-else
        @submit="AddUser()" 
        action="" 
        class="flex flex-col justify-center items-center gap-4 w-4/5 h-auto p-4 md:w-2/5 rounded-xl">

        <InputView 
            :type="'name'"
            :name="'name'"
            :id="'name'"
            :placeholder="'Apelido'"
            v-model="nome"
            class="w-3/5 md:2/5 h-10 border-0 outline-0 bg-white text-purple-950 rounded-lg pl-4"
            autofocus
        />

        <InputView 
            :type="'email'"
            :name="'email'"
            :id="'email'"
            :placeholder="'E-mail'"
            v-model="email"
            class="w-3/5 md:2/5 h-10 border-0 outline-0 bg-white text-purple-950 rounded-lg pl-4"
        />

        <InputView 
            :type="'password'"
            :name="'senha'"
            :id="'senha'"
            :placeholder="'Senha'"
            v-model="senha"
            class="w-3/5 md:2/5 h-10 border-0 outline-0 bg-white text-purple-950 rounded-lg pl-4"
        />

        <InputView 
            :type="'submit'"
            :name="'submit'"
            :id="'submit'"
            :value="'Criar conta'"
            class="w-3/5 md:2/5 h-10 border-0 outline-0 bg-purple-950 text-white rounded-lg cursor-pointer scale-95 hover:scale-100 shadow"
        />

        <a href="#" class="w-2/5 text-white text-center mt-2 mb-2 hover:underline">Voltar</a>
    </form>
  </div>
</template>

<script>
import InputView from '../components/Input.vue'

export default {
  name: 'LoginPage',

  components : {
    InputView
  },

  data() {
    return {
      nome : '',
      email : '',
      senha : ''
    }
  },

  methods : {
     async Login(event) {
      event.preventDefault()

      if(this.email != '' || this.senha != '') {
        const req = await fetch('http://localhost:3000/users')
        const res = await req.json()
        const login = res.find((user) => user.email == this.email)
        
        if(!login || login == null) {
          // MODAL DE AVISO - usuário não existe
        } else {
          if(login.senha == this.senha) {
            // ABRIR HOME
          } else {
            // MODAL DE AVISO - senha errada
          }
        } 
      } else {
        // MODAL DE AVISO - preencher campos
      }
    }
  }
}
</script>

<style scoped>
  .bg {
    background-image: linear-gradient( 45deg, rgb(22, 2, 38), rgb(58, 2, 61), rgb(0, 0, 0));
  }
</style>
