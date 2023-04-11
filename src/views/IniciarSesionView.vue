<template>
   <div class="limiter">
		<div class="centrar">
			<div class="login">
				<form v-on:submit.prevent="Login" class="loginFormulario">
					<span class="logo p-b-48">
						<img src="../assets/logoHR_MAGNAMENT.png" />
					</span>
					<div class="container-input">
						<input class="input-text" type="text" name="usuario"  placeholder="Usuario" v-model="usuario" required>
						<span class="focus-input-text"></span>
					</div>

					<div class="container-input">
						<input class="input-text" type="password" name="pass" placeholder="Contraseña" v-model="pass" required>
						<span class="focus-input-text"></span>
					</div>

					<div class="container-btn">
						<div class="form-btn">
							<div class="login100-form-bgbtn"></div>
							<button  type="submit" class="login100-form-btn">
								Iniciar Sesion
							</button>
						</div>
					</div>

					<div class="text-center p-t-115">
						<span class="txt1">
							Olvidaste tu contraseña
						</span>

						<a class="txt2" href="#">
							Aqui
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	<ModalComponent v-if="error" :img="urlImg" :msg="error_msg" @close="error = false"></ModalComponent>
</template>

<script>
import router from "../router"
import {loginServices} from "../services/SesionServices"
import ModalComponent from "../components/ModalComponent.vue"
export default{
	components:{
		ModalComponent
	},

	data(){
		return{
			usuario:null,
			pass:null,
			error:false,
			error_msg:"",
			urlImg:""
		}
	},methods:{

		Login(){
			const reponse=loginServices(this.usuario,this.pass).then(res=>{
				if(res.status==200){
					router.push("Inicio")
				}	
			}).catch(error=>{
				console.log("aqui error "+error)
				this.error=true
				this.error_msg=error.response.data.message
				this.urlImg="error.svg"

			})
			
			
		}
	}

	
}
</script>

