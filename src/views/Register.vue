<template>
  <div>
    <!-- Breadcrumb Area Start -->
   <!-- <div class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <h1 class="title">Register</h1>
        </div>
      </div>
    </div>-->
    <!-- Breadcrumb Area End -->

    <!--<div class="breadcrumb2">
      <div class="container">
        <div class="row">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a class="disabled">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>-->
    <!-- <content-loader class="container"
    viewBox="0 0 400 160"
    height=400
    width=400
    speed=1
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  v-if="myData==0">
      <rect x="0" y="13" rx="4" ry="4" width="400" height="9" />
    <rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
    <rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
    <rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
    <rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
    <rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
  </content-loader>
    <div v-if="myData==1">
    <!-- About Area Start -->

    <!--<loading
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
          <br/>
          <ul>
              <li><router-link :to="{ name: 'home'}">
          Home</router-link></li>
              <li>
                <a>Register</a>
              </li>
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
            <div class="log-reg-tab-wrapper loginblk signblk">
              <div class="log-reg-tab-menu">
                <ul class="nav">
                  <li class="nav-item">
                    <span class="nav-link" data-toggle="tab">REGISTER</span>
                  </li>
                </ul>
              </div>

              <div class="login-area signup-area">
                <div class="login-form signup-form">
                  
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-input">
                          <input  type="text" placeholder="Name*" minlength="3" maxlength="32" v-model="first_name"/>
                          <i class="fas fa-user"></i>
                        </div>
                        <p v-if="nameError" style="text-align: left;color: red;font-size: medium;">{{nameError}}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-input">
                          <input  type="email" placeholder="Email Address*" v-model="email" />
                          <i class="fas fa-envelope"></i>
                        </div>
                         <p v-if="emailError" style="text-align: left;color: red;font-size: medium;">{{emailError}}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-input">
                          <input
                            :type="passwordFieldType"
                            v-model="password"
                            class="Password"
                            placeholder="Password*"
                          />
                          <i class="fas fa-key"></i>
                          <span toggle="#password-field" class="toggle-password fa-show" @click="switchVisibility"></span>
                        </div>
                        <p v-if="passwordError" style="text-align: left;color: red;font-size: medium;">{{passwordError}}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-input">
                          <input
                            type="password" 
                            v-model="cpassword"
                            class="Password"
                            placeholder="Confirm Password*"
                          />
                          <i class="fas fa-key"></i>
                        </div>
                        <p v-if="cpasswordError" style="text-align: left;color: red;font-size: medium;">{{cpasswordError}}</p>
                      </div>
                    </div>

                    <!--<div class="row">
                      <div class="col-lg-12">
                        <div class="form-input">
                          <vue-recaptcha ref="recaptcha" @verify="onVerify" sitekey="6LeNnLMZAAAAALr4j1YbndcTZgHxNF5iM4h-9AGg" :loadRecaptchaScript="true">
                          </vue-recaptcha>
                        </div>
                       
                      </div>
                    </div>-->


                    <button class="submit-btn" v-on:click="checkForm()">Register</button>
                    <br />
                    <p>By clicking register, you agree to our <router-link :to="{ name: 'privacy'}">Terms , Data Policy and Cookies Policy</router-link>.</p>

                    <div class="or">
                      <span>OR</span>
                    </div>

                    <div class="tosignin">
                      Have an account?
                      <router-link :to="{ name: 'login'}">Login</router-link>
                    </div>
                 
                </div>
              
              </div>
               
            </div>
            <!-- <p> 
               <b style="color: green;"> {{url.title}} </b>
               <input type="hidden"  v-model="cutomid" value="cutomid.id" />
               <button class="submit-btn"  v-on:click="verifyEmail()" style="background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;
">Verify Now</button>
              
            </p>-->
          </div>
        </div>
      </div>
    </section>
    </div>
    <!-- About Area End 
  </div>-->
</template>
<script>
import axios from "axios";
//import VueRecaptcha from 'vue-recaptcha';
axios.defaults.headers.common["Locale"] = localStorage.locale;
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
export default {
  name: "app",
  components: { ContentLoader,FacebookLoader },
  data() {
    return {
      first_name: "",
      email: "",
      password: "",
      passwordFieldType: 'password',
      cpassword: "",
      nameError: "",
      emailError:"",
      passwordError:"",
      cpasswordError:"",
      message:"",
      errorMessage:'',
      successMessage:'',
      url:'',
      title:'',
      cutomid:0,
      recaptcha: '',
      errors: [],
       myData:0,
    };
  },
  methods: {
    
    checkForm : function(){
      var vm = this;
      console.log(vm.first_name);
      if(vm.first_name == '')
			{
				vm.nameError ="Please enter your Name.";
				//vm.validateName1(vm.name);
			}else if(vm.validateName(vm.first_name))
			{
				vm.nameError ="Name must be characters..";
				//vm.validateName1(vm.name);
			}else{
				vm.validateName1(vm.first_name);
			}
      if (!vm.email) {
        vm.emailError = "Please enter a valid email ID.";
      } else if (!vm.validEmail(vm.email)) {
        vm.emailError = "Invalid email.";
      }else{
        vm.emailError ="";
      }
      if (vm.password == ''){
        vm.passwordError = "Please enter a password.";
      }else if(!vm.validatePassword1(vm.password)){
          vm.passwordError = "Password should contain alteast 8 characters including numbers and special character";
      }else{
        vm.passwordError = "";
      }
      
      if(vm.cpassword != vm.password)
      {
        vm.cpasswordError = "Confirm your password"
      }else{
        vm.cpasswordError = "";
      }
      if (!vm.nameError && !vm.emailError && !vm.passwordError) {
        //console.log('ok');
        vm.postRegister();
        //return true;
      }
      else{
        
      }
    },
    validateName: function(name){
      var vm = this;
      var regularExpression = /^([a-zA-Z\\-]+)(\\s+)([a-zA-Z\\-]+)?$'/;
      return regularExpression.test(name);

    },
    validateName1: function(name){
      var vm = this;
      var min = 3;
      var max = 15;
      if(min>=name.length){
        vm.nameError = 'Name should contain atleast 3 letters';
      }else if(max<=name.length){
        vm.nameError = 'Name should not contain atleast more thane 15 letters';
      }else{
        vm.nameError = '';
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
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
    verifyEmail:function(){
      var vm = this; 
      vm.isLoading= true;
      vm.errorMessage='';
      vm.successMessage='';
      vm.myData=0;
      var params = {
        id: vm.cutomid,
      };
      console.log(vm.cutomid);
       console.log(params);
      axios
          .post(base_url + "api/verifyEmail", params, {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })
          .then(function(response) {
            vm.myData=1;
             vm.isLoading= false;
            //if (response.status == 200) {
            if (response.data.success == 1) {
              vm.successMessage = response.data.message;
              //localStorage.id = response.data.id;
              //localStorage.email = vm.email;
              //localStorage.tocken = response.data.tocken;
              vm.url = response.data.url;
              //vm.$router.push("login");
              //vm.$router.push("login");
            } else {
              
              vm.errorMessage = response.data.message
              vm.isLoading= false;
            }
          });
    },
    switchVisibility: function() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    postRegister: function() {
      var vm = this;
      vm.errorMessage='';
      vm.successMessage='';
      vm.myData=0;
      vm.isLoading= true;
      console.log(vm);
      var email;
      var password;
      var params = {
        first_name: vm.first_name,
        email: vm.email,
        password: vm.password,
        recaptcha: vm.recaptcha
      };
      console.log(vm);
      if (vm.first_name != "" || vm.email != "" || vm.password != "" || vm.cpassword != "") {
          if(vm.password == vm.cpassword) {
        axios
          .post(base_url + "api/register", params, {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })

          .then(function(response) {
            vm.myData=1;
            vm.isLoading= false;
            //if (response.status == 200) {
            if (response.data.success == 1) {
              vm.successMessage = response.data.message;
              //localStorage.id = response.data.id;
              //localStorage.email = vm.email;
              //localStorage.tocken = response.data.tocken;
              vm.url = response.data.url;
              vm.cutomid = response.data.id;
              vm.$router.push("login");
            } else {
              
              vm.errorMessage = response.data.message
              
            }
            //}
            vm.sending = false;
          })
          .catch(function(error) {
            vm.myData=1;
            vm.sending = false;
            vm.isLoading= false;
          });
      } else {
        vm.myData=1;
        var message = "Password Not Matching";
        vm.sending = false;
        vm.isLoading= false;
      }
      }else {
        vm.myData=1;
        var message = "required";
        vm.sending = false;
        vm.isLoading= false;
      }
    }
  },
  mounted() {
    this.myData = 0;
    $(function(){
			$('.search2')
			.comboSelect()
    }),
    $(".js-example-basic-hide-search").select2({
		minimumResultsForSearch: Infinity
    });
    $('.forgot-pass').click(function(){    
   $('.for-pwd').show();
   $('.loginblk').hide();
})
$('#btn2').click(function(){    
   $('.loginblk').show();
   $('.for-pwd').hide();
})
  }
};
</script>