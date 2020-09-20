<template>
    <div>
       <!-- <loading
        :active.sync="isLoading" 
        :can-cancel="true" 
        ></loading>-->
        <div v-if="isLoading == true">   <div id="overlayer"></div>
            <span class="loader">
            <span class="loader-inner"></span>
            </span>
        </div>
        <section class="login-signup">
			<div class="container">
                <div class="breadcrumb2">
				    <ul>
                        <li><router-link :to="{ name: 'home'}">
                        Home</router-link></li>
				        <li><a>Reset Password</a></li>
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
						<div class="log-reg-tab-wrapper loginblk">
						    <div class="log-reg-tab-menu">
							    <ul class="nav">
        							<li class="nav-item">
                                        <span class="nav-link" data-toggle="tab">
                                            RESET PASSWORD
                                        </span>
								    </li>
							    </ul>
						    </div>
							<div class="login-area signup-area">
								<div class="login-form signup-form">
										<div class="row">
										    <div class="col-lg-12">
												<div class="form-input">
													<input name="password" 
                                                    :type="passwordFieldType"
                                                    v-model="password"
                                                    class="Password" placeholder="New password*" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Password*'" id="password-field" >
												    <i class="fas fa-key"></i>
													<span toggle="#password-field" class="toggle-password fa-show" @click="switchVisibility"></span>
                                                </div>
                                                <p v-if="passwordError" style="text-align: left;color: red;font-size: medium;">{{passwordError}}</p>
											</div>
										</div>
                                        <div class="row">
										    <div class="col-lg-12">
												<div class="form-input">
													<input name="password" type="password" 
                                                    v-model="cpassword"
                                                    class="Password" placeholder="Confirm password*" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Password*'" id="password-field" >
												    <i class="fas fa-key"></i>
												</div>
                                                <p v-if="cpasswordError" style="text-align: left;color: red;font-size: medium;">{{cpasswordError}}</p>
											</div>
										</div>
										<button type="button" class="submit-btn" :isLoggedin="isLoggedin" v-on:click="checkForm()">Reset Password</button>
                      
								</div>
							</div>			
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>
<script>
import axios from "axios";
//import VueRecaptcha from 'vue-recaptcha';
axios.defaults.headers.common["Locale"] = localStorage.locale;
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "app",
  components: { ContentLoader,FacebookLoader,Loading },
  data() {
    return {
        email: '',
        password: '',
        passwordFieldType: 'password',
        cpassword: '',
        nameError: '',
        emailError:'',
        passwordError:'',
        cpasswordError:'',
        message:'',
        errorMessage:'',
        successMessage:'',
        isLoading:false,
        isLoggedin:false
    }
  },
  methods: {
    switchVisibility: function() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    checkForm : function(){
      var vm = this;
      if (vm.password == ''){
        vm.passwordError = "Please enter a password.";
      }else if(!vm.validatePassword1(vm.password)){
          vm.passwordError = "Password should contain alteast 8 characters including numbers and special character";
      }else{
        vm.passwordError = "";
      }
      
      if(vm.cpassword != vm.password)
      {
        vm.cpasswordError = "Password does not match"
      }else{
        vm.cpasswordError = "";
      }
      if (!vm.passwordError) {
        //console.log('ok');
        vm.resetPassword();
        //return true;
      }
      else{
        
      }
    },
    validatePassword1: function(password){
      var vm = this;
      var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      return regularExpression.test(password);
    },
    validatePassword: function(value){
      var vm = this;
      let difference = 8 - value.length;
      
      if (value.length<8) {
        vm.passwordError = 'Must be 8 characters! '+ difference + ' characters left' ;
      } else {
         vm.passwordError = '';
      }
      
    },
    resetPassword: function() {
        var vm = this;
        vm.isLoading = true;
        vm.errorMessage='';
        vm.successMessage='';
        vm.myData=0;
        console.log(vm);
        var email = this.$route.query.email;
        var params = {
            email: email,
            password: vm.password,
        };
        console.log(email);
        if (vm.email != "" || vm.password != "" || vm.cpassword != "") {
            if(vm.password == vm.cpassword) {
                axios
                .post(base_url + "api/resetpassword", params, {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })

                .then(function(response) {
                    vm.isLoading = false;
                    if (response.data.success == 1) {
                        vm.successMessage = response.data.message;
                        //vm.$router.push("login");
                    } else {
                        
                        vm.errorMessage = response.data.message
                        
                    }
                });
            } else {
                vm.myData=1;
                var message = "Password Not Matching";
                vm.sending = false;
            }
        }else {
            vm.myData=1;
            var message = "required";
            vm.sending = false;
        }
    }
  }
}
</script>