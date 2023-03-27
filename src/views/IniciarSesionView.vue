<style scoped src="@/assets/css/IniciarSesion.css"/>
<template>
   <div class="limiter">
		<div class="centrar">
			<div class="login">
				<form v-on:submit.prevent="Login" class="loginFormulario">
					<span class="logo p-b-48">
						<img src="../assets/logoHR_MAGNAMENT.png" />
					</span>
					<div class="container-input">
						<input class="input-text" type="text" name="usuario"  placeholder="Usuario" v-model="usuario">
						<span class="focus-input-text"></span>
					</div>

					<div class="container-input">
						<input class="input-text" type="password" name="pass" placeholder="Contraseña" v-model="pass">
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
</template>

<script>
import {loginServices} from "../services/SesionServices"
export default{
	data(){
		return{
			usuario:"",
			pass:"",
			error:"",
			error_msg:""
		}
	},methods:{
		Login(){
			const request=loginServices(this.usuario,this.pass)
			
		}
	}

	
}
</script>

