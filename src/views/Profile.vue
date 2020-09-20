<template>
    <div>
		 <div v-if="isLoading == true">   <div id="overlayer"></div>
            <span class="loader">
            <span class="loader-inner"></span>
            </span>
        </div>
        <!-- About Area Start -->
		<section class="login-signup">
			<div class="container">
				<div class="breadcrumb2">
                    <ul>
                        <li><router-link :to="{ name: 'home'}">
                        Home</router-link></li>
                        <li><a>My Profile</a></li>
                    </ul>
	            </div>
				<div class="alert alert-danger alert-dismissible" v-if="errorMessage">
					<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					<strong>Error!</strong> {{errorMessage}}
				</div>
				<div class="alert alert-success alert-dismissible" v-if="successMessage">
					<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					<strong>Success!</strong> {{successMessage}}
				</div>
                <div class="row justify-content-center">
					<div class="col-lg-6">
						<div class="log-reg-tab-wrapper loginblk signblk myprofile">
						    <div class="log-reg-tab-menu">
							    <ul class="nav">
								    <li class="nav-item">
                                        <span class="nav-link" data-toggle="tab">
                                            <a href="" class="pro-ic"><img src="images/profile.jpg" alt="image"></a>
                                                Hello, User
                                        </span>
								    </li>
							    </ul>
						    </div>
							<div class="login-area signup-area">
								<div class="login-form signup-form">
									<p v-if="emails"></p>
									<p v-else style="text-align: left;color: red;font-size: medium;">Please complete the registration by submitting your active email ID.
										If you already submitting your email ID, please avoid this message.</p>
									<form  action="" method="POST">
										<h3>Personal Information </h3>
										<div class="row">
											<div class="col-lg-12">
												<div class="form-input first">
													<input name="first_name" type="text" v-model="username"  disabled="disabled">
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-lg-12">
												<div class="form-input" v-if="emails">
													<input name="text" type="text" v-model="emails" disabled="disabled">
												</div>
												<div class="form-input" v-else>
													<input name="email" type="text" v-model="emails" placeholder="Email">
												</div>
												
												<p v-if="emailError" style="text-align: left;color: red;font-size: medium;">{{emailError}}</p>
											</div>
										</div>
										<div v-if="emails"></div>
                                       <div class="text-center" v-else>
		                                    <button type="button" class="save" v-on:click="checkForm()">SAVE</button>
									    </div>
		                            </form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
	<!-- About Area End -->
    </div>
</template>
<script>
import axios from "axios";
//import VueRecaptcha from 'vue-recaptcha';
axios.defaults.headers.common["Locale"] = localStorage.locale;
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
export default {
    name: "app",
    data() {
        return {
            username:localStorage.getItem("username"),
			emails:localStorage.getItem("email"),
			emailss:'',
			isLoading:false,
			emailError:'',
			successMessage:'',
			errorMessage:'',
			userid : localStorage.getItem("id"),
        };
	},
	methods: {
		checkForm : function(){
			var vm = this;
			if (!vm.emails) {
				vm.emailError = "Please enter a valid email ID.";
			} else if (!vm.validEmail(vm.emails)) {
				vm.emailError = "Invalid email.";
			}else{
				vm.emailError ="";
			}
			if (!vm.emailError) {
				vm.postEmail();
			}
		},
		validEmail: function (emails) {
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(emails);
		},
		postEmail: function() {
			var vm = this;
			vm.isLoading= true;
			var params = {
				email: vm.emails,
				name: vm.username,
				userid: vm.userid
			};
			if (vm.emails != "" || vm.username != "") {
				axios
					.post(base_url + "api/postemail", params, {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json"
					})
				.then(function(response) {
					vm.isLoading= false;
					console.log(response.data.success);
					if (response.data.success == 1) {
						localStorage.email = response.data.email;
						vm.emails = response.data.email;
						vm.successMessage = response.data.message;
						console.log(vm.successMessage);
						
					}else{
						vm.errorMessage = response.data.message;
					}
              
				})
			}
		}
	},
	mounted() {
		
		//Script
		$('.forgot-pass').click(function(){    
			$('.for-pwd').show();
			$('.loginblk').hide();
		})
		$('#btn2').click(function(){    
			$('.loginblk').show();
			$('.for-pwd').hide();
		})

		$(".edit").click(function (evt) {
			$(this).hide();
			$(".form-input input").prop('disabled', false);
			$(".form-input.first input").focus();
		});	
		//vm.email = vm.emailss == "" ? "Email Not Available" : vm.emailss;
	}
}
</script>