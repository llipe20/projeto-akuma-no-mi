<template>
  <div class="flex justify-center items-center w-screen h-full bg-black">
    <div class="flex flex-col gap-4 justify-center items-center w-5/6 md:w-2/5 h-auto bg-black rounded-xl pb-4 pt-8 lg:border">
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
                Seja bem vinde ao jogo da galera!
            </span>
        </div>

        <!-- FORMULÁRIO -->
        <form 
            @submit.prevent="isLoginForm ? login() : addUser()" 
            action="" 
            class="flex flex-col justify-center items-center gap-4 w-full h-auto p-4 rounded-xl text-black"
        >
            <!-- ICONS -->  
            <div
                v-if="!isLoginForm" 
                class="flex justify-center items-center gap-4 p-2 w-full h-auto">
                <div 
                  class="h-16 w-16 bg-purple-950 border border-2 hover:border-purple-950 hover:border-4"
                  @click="Select('icon-1')"
                  id="icon-1"
                >
                    <img src="/sanji.jpg" alt="avatar-sanji">
                </div>

                <div 
                  class="h-16 w-16 bg-purple-950 border border-2 hover:border-purple-950 hover:border-4"
                  @click="Select('icon-2')"
                  id="icon-2"
                >
                    <img src="/usopp.jpg" alt="avatar-usopp">
                </div>

                <div 
                  class="h-16 w-16 bg-purple-950 border border-2 hover:border-purple-950 hover:border-4"
                  @click="Select('icon-3')"
                  id="icon-3"
                >
                    <img src="/nami.jpg" alt="avatar-nami">
                </div>

                <div 
                  class="h-16 w-16 bg-purple-950 border border-2 hover:border-purple-950 hover:border-4"
                  @click="Select('icon-4')"
                  id="icon-4"
                >
                    <img src="/buggy.jpg" alt="avatar-buggy">
                </div>
            </div>

            <!-- NOME --> 
            <div
                v-if="!isLoginForm" 
                class="flex justify-center items-center w-72 text-white"
            >
              <InputView 
                  :type="'name'" 
                  :name="'name'" 
                  :id="'name'" 
                  :placeholder="'Apelido'" 
                  v-model="nome" 
                  :max="10"
                  class="w-58 md:2/5 h-10 border-0 outline-0 bg-white rounded-lg pl-4 text-black" 
                  autofocus
              />
            </div>
            
            <!-- EMAIL --> 
            <div class="flex justify-center items-center w-72">
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

            <!-- SENHA --> 
            <div class="flex justify-center items-center w-72 relative">
              <InputView 
                  :type="type" 
                  :name="'senha'" 
                  :id="'senha'" 
                  :placeholder="'Senha'" 
                  v-model="senha" 
                  class="w-58 md:2/5 h-10 border-0 outline-0 bg-white rounded-lg pl-4" 
              />

              <!-- ocultar senha --> 
              <span 
                  class="absolute w-auto h-auto right-10 top cursor-pointer" 
                  @click="ViewPass()"
                  v-if="isEye"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
              </span>

              <span
                  class="absolute w-auto h-auto right-10 top cursor-pointer" 
                  @click="ViewPass()"
                  v-else
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
              </span>
            </div>

            <a v-if="isLoginForm" href="#" class="w-3/5 text-white text-center mt-1 hover:underline">Esqueceu a senha?</a>

            <!-- SUBMIT --> 
            <InputView 
                :type="'submit'" 
                :name="'submit'" 
                :id="'submit'" 
                :value="isLoginForm ? 'Entrar' : 'Criar conta'" 
                class="w-56 md:2/5 h-10 border-0 outline-0 bg-purple-950 text-white rounded-lg cursor-pointer scale-95 hover:scale-100 shadow mt-2" 
            />

            <!-- CRIAR USER --> 
            <a href="#" class="w-2/5 text-white text-center mb-2 hover:underline" @click="llpe">
                {{ isLoginForm ? 'Criar conta' : 'Voltar' }}
            </a>
        </form>

        <ModalTV
          v-if="isModal"
          class="absolute right-10 top-10" 
          :bg="fundo"
          :msg="msg"
        />
    </div>
  </div>
</template>

<script>
import InputView from '../components/Input.vue'
import ModalTV from '../components/Modal.vue'

export default {
  name: 'LoginPage',

  components : {
    InputView, ModalTV
  },

  data() {
      return {
          nome : '',
          email : '',
          senha : '',
          isLoginForm : true,
          fundo : '',
          msg : '',
          isModal : false,
          icon : '',
          isEye : true,
          type : 'password'
      }
  },

  methods : {

        ViewPass() {
            this.isEye = !this.isEye

            if(!this.isEye) {
                this.type = 'text'
            } else {
                this.type = 'password'
            }
        },

      // Manipulação das icons
      Select(icon) {
          const icons = ['icon-1', 'icon-2', 'icon-3', 'icon-4'];
          icons.forEach((iconId) => {
            const currentIcon = document.getElementById(iconId);
            currentIcon.classList.remove('border-4', 'border-purple-950');
            currentIcon.classList.add('border-2', 'border-white');
          });

          const selectedIcon = document.getElementById(icon);
          selectedIcon.classList.remove('border-2', 'border-white');
          selectedIcon.classList.add('border-4', 'border-purple-950');

          switch (icon) {
            case 'icon-1':
              this.icon = '/sanji.jpg';
              break;
            case 'icon-2':
              this.icon = '/usopp.jpg';
              break;
            case 'icon-3':
              this.icon = '/nami.jpg';
              break;
            case 'icon-4':
              this.icon = '/buggy.jpg';
              break;
            default:
              break;
          }
      },

      // Manipulação de mensagem de aviso
      show(fundo, msg) {
        this.fundo = fundo
        this.msg = msg
        this.isModal = true

        const time = setInterval(() => {
          this.isModal = false
          const stop = true
          if(stop) {
            clearInterval(time)
          }
        }, 2000)
      },

      // Alternancia entre os form de criar user e login
      llpe() {
          this.isLoginForm = !this.isLoginForm
      },

    // Tratamento e verificação de login
     async login() {
      if(this.email != '' || this.senha != '') {
        const req = await fetch('https://json-server-rho-brown.vercel.app/users')
        const res = await req.json()
        const login = res.find((user) => user.email == this.email)
        
        if(!login || login == null) {
          // MODAL DE AVISO - usuário não existe
          this.show('bg-red-700', 'Usuário inexistente!')
        } else {
          if(login.senha == this.senha) {
            // ABRIR HOME 
            // salvar user no state
            this.$store.dispatch('GetMutation', {
              mutation : 'GetUser',
              data : login
            })
            // levar o user para HOME 
            this.$store.dispatch('GetMutation', {
              mutation : 'UpdateLogin',
              data : false
            })

            this.email = ''
            this.senha = ''
          } else {
            // MODAL DE AVISO - senha errada
            this.show('bg-red-700', 'Senha incorreta!')
          }
        } 
      } else {
        // MODAL DE AVISO - preencher campos
        console.log('preencha os campos')
        this.show('bg-red-700', 'Preencha os campos!')
      }
    },

    async addUser() {
      // Verificando se o user ja existe
      if(this.email != '') {
        let req = await fetch('https://json-server-rho-brown.vercel.app/users')
        let res = await req.json()
        const user = res.find((user) => user.email == this.email) || null

        if(user != null) {
          // MODAL DE AVISO - usuário existente
          this.show('bg-red-700', 'Email existente em uma conta!')
        } else {
          // pegando dados do form
          if(this.name == '' || this.senha == '') {
              this.show('bg-red-700', 'Preencha todos os dados!')
          } else {
            const data = {
              name : this.nome,
              email : this.email,
              senha : this.senha,
              avatar : this.icon
            }

            // inserindo no banco
            const dataJson = JSON.stringify(data)
            req = await fetch('https://json-server-rho-brown.vercel.app/users', {
              method : 'POST',
              headers : {'Content-Type' : 'application/json'},
              body : dataJson
            })
            
            this.show('bg-green-700', 'Conta criada com sucesso!')
            this.llpe()
          }
          
        }
      } else {
        this.show('bg-red-700', 'Preencha os dados!')
      }

      this.nome = ''
      this.email = ''
      this.senha = ''
    }
  }
}
</script>

<style scoped>
  .bg {
    background-image: linear-gradient( 45deg, rgb(22, 2, 38), rgb(38, 1, 41), rgb(0, 0, 0));
  }

  ::-webkit-input-placeholder{
    color: black;
}

  .top {
    top: 50%;
    transform: translate(0, -50%)
  }
</style>
