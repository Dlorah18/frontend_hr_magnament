<template>
	<div class="limiter">
		<div class="centrar">
			<div class="login">
				<form v-on:submit.prevent="Login" class="loginFormulario">
					<div class="logo p-b-48 containerCenterimg">
						<img src="../assets/logoHR_MAGNAMENT.png" />
					</div>
					<div class="container-input">
						<input class="input-text" type="number" name="usuario" placeholder="Usuario" v-model="usuario"
							required>
						<span class="focus-input-text"></span>
					</div>

					<div class="container-input">
						<input class="input-text" type="password" name="pass" placeholder="Contraseña" v-model="pass"
							required>
						<span class="focus-input-text"></span>
					</div>

					<div class="container-btn">
						<div class="form-btn">
							<div class="login100-form-bgbtn"></div>
							<button type="submit" class="login100-form-btn">
								Iniciar Sesion
							</button>
						</div>
					</div>

					<!--<div class="text-center p-t-115">
						<span class="txt1">
							Olvidaste tu contraseña
						</span>

						<a class="txt2" href="#">
							Aqui
						</a>
					</div>-->
				</form>
			</div>
		</div>
	</div>
	<ModalComponent v-if="error!==null" :redirec="redirec" :img="urlImg" :msg="msg" @close="error = null"></ModalComponent>
</template>

<script>
import router from "../router"
import { loginServices } from "../services/SesionServices"
import ModalComponent from "../components/ModalComponent.vue"
export default {
	components: {
		ModalComponent
	},
	data() {
		return {
			usuario: null,
			pass: null,
			error: null,
			msg: "",
			urlImg: "",
			redirec:null
		}
	}, methods: {

		Login() {
			const reponse = loginServices(this.usuario, this.pass).then(res => {
				this.error=null
				console.log(res)
				if (res.status == 200) {
					router.push({ name: "Inicio", query: { idUser: res.data[0].id } })
				}
			}).catch(error => {
				this.error = true
				this.msg = error.response.data.message
				this.urlImg = "error.svg"
				this.redirec=null
			})


		}
	}


}
</script>

