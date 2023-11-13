<template>
  <div class="flex justify-center items-center w-screen h-screen bg">
    <div class="flex flex-col gap-4 justify-center items-center w-5/6 md:w-2/5 h-auto bg-black rounded-xl pb-4 pt-8">
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

        <!-- FORMULÁRIO -->
        <form 
            @submit.prevent="isLoginForm ? login() : addUser()" 
            action="" 
            class="flex flex-col justify-center items-center gap-4 w-full h-auto p-4 md:w-full rounded-xl text-black"
        >
            <div
                v-if="!isLoginForm" 
                class="flex justify-between items-center w-72 text-white"
            >
              <label for="name">Nome: </label>
              <InputView 
                  :type="'name'" 
                  :name="'name'" 
                  :id="'name'" 
                  :placeholder="'Apelido'" 
                  v-model="nome" 
                  class="w-58 md:2/5 h-10 border-0 outline-0 bg-white rounded-lg pl-4" 
                  autofocus
              />
            </div>
            
            <div class="flex justify-between items-center w-72">
              <label for="name" class="text-white">Email:</label>
              <InputView 
                  :type="'email'" 
                  :name="'email'" 
                  :id="'email'" 
                  :placeholder="'E-mail'" 
                  v-model="email" 
                  class="w-58 md:2/5 h-10 border-0 outline-0 bg-white rounded-lg pl-4" 
                  autofocus
              />
            </div>

            <div class="flex justify-between items-center w-72">
              <label for="senha" class="text-white">Senha: </label>
              <InputView 
                  :type="'password'" 
                  :name="'senha'" 
                  :id="'senha'" 
                  :placeholder="'Senha'" 
                  v-model="senha" 
                  class="w-58 md:2/5 h-10 border-0 outline-0 bg-white rounded-lg pl-4" 
              />
            </div>

            <a v-if="isLoginForm" href="#" class="w-2/5 text-white text-center mt-1 mb-1 hover:underline">Esqueceu a senha?</a>

            <InputView 
                :type="'submit'" 
                :name="'submit'" 
                :id="'submit'" 
                :value="isLoginForm ? 'Entrar' : 'Criar conta'" 
                class="w-56 md:2/5 h-10 border-0 outline-0 bg-purple-950 text-white rounded-lg cursor-pointer scale-95 hover:scale-100 shadow" 
            />

            <a href="#" class="w-2/5 text-white text-center mb-2 hover:underline">
                {{ isLoginForm ? 'Criar conta' : 'Voltar' }}
            </a>
        </form>
    </div>
    
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
      senha : '',
      isLoginForm : true
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
    background-image: linear-gradient( 45deg, rgb(22, 2, 38), rgb(38, 1, 41), rgb(0, 0, 0));
  }
</style>
