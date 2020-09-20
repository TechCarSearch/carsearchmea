<template>
  <div>
    <div>
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
       About Area Start -->
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
            <li><a>Login</a></li>
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
                      <span class="nav-link" data-toggle="tab">LOGIN</span>
                    </li>
                  </ul>
                </div>
                
                <div class="login-area signup-area">
                  <div class="login-form signup-form">
                    <div class="mobile_number">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-input">
                            <input
                              name
                              type="text"
                              v-model="email"
                              placeholder="Email Address*"
                            />
                            <i class="fas fa-envelope"></i>
                          </div>
                          <p v-if="emailError" style="text-align: left;color: red;font-size: medium;">{{emailError}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-input">
                            <input
                              name
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
                            <label></label>
                            <vue-recaptcha ref="recaptcha"
                              @verify="onVerify" sitekey="6LcdwcAZAAAAADJV0EozvE_UZC_AcA1BLVEZ2doz">
                            </vue-recaptcha>
                          </div>
                          <p v-if="captchaError" style="text-align: left;color: red;font-size: medium;">{{captchaError}}</p>
                        </div>
                      </div>
                      <button type="button" class="submit-btn" :isLoggedin="isLoggedin" v-on:click="checkLoginForm()">Login</button>
                      <a  class="loginalways"><input type="checkbox">Keep Me Logged In </a>
											<a  class="forgot-pass pull-right" id="btn1">Forgotten your password? </a>
                      <div class="or">
                          <span>OR</span>
                      </div>
                      <div class="login-blk">
                        <facebook-login class="loginwith"
                        appId="2495755967388497"
                        @login="onLogin"
                        @logout="onLogout"
                        @sdk-loaded="sdkLoaded"><i class="fab fa-facebook-f"></i> Login with Facebook
                        </facebook-login>
                        <!--<a href="https://www.facebook.com/CarSearch-Middle-East-101481558297604" class="loginwith">
                          <i class="fab fa-facebook-f"></i> Login with Facebook
                        </a>-->
                       <!--  <GoogleLogin :params="params" :renderParams="renderParams"></GoogleLogin>
                       --> <!--<a href class="loginwith">
                          <i class="fab fa-google"></i> Login with Google
                        </a>-->
                        <g-signin-button
                        :params="googleSignInParams"
                        @success="onSignInSuccess"
                        @error="onSignInError" class="loginwith">
                        <i class="fab fa-google"></i>Login with Google
                      </g-signin-button>
                      </div>
                      <!--<button @click="loginWithGoogle()">Login</button>-->
                      <div class="tosignin">
                        Don't have an account?
                        <router-link :to="{ name: 'register'}">Register</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="log-reg-tab-wrapper for-pwd">
                <div class="log-reg-tab-menu">
                  <ul class="nav">
                    <li class="nav-item">
                      <span class="nav-link" data-toggle="tab">Trouble Logging In?</span>
                    </li>
                  </ul>
                  <p>Enter your username or email and we'll send you a link to get back into your account.</p>
                </div>

                <div class="login-area signup-area">
                  <div class="login-form signup-form">
                    <!--<form id="loginform" action method="POST">-->
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-input">
                            <input
                              type="email"
                              v-model="email1"
                              placeholder="Enter Your Email Address*"
                            />
                            <i class="fas fa-envelope"></i>
                          </div>
                        </div>
                      </div>

                      <button type="button" class="submit-btn" v-on:click="checkForgotForm()">Send Login Link</button>

                      <div class="or">
                        <span>OR</span>
                      </div>

                      <a class="forgot-pass" id="btn2">Back to Login</a>
                   <!-- </form>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   <!-- </div> -->
  </div>
  <!-- About Area End -->
</template>
<script>
import axios from "axios";
axios.defaults.headers.common["Locale"] = localStorage.locale;
import facebookLogin from 'facebook-login-vuejs';
import GoogleLogin from 'vue-google-login';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueRecaptcha from 'vue-recaptcha';
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
//import EventBus from './EventBus';
export default {
  name: "app",
  /*props: {
    is_loggedin: {
      default:false
    }
  },*/
  components: {
        facebookLogin,
        GoogleLogin,
        Loading,
        'vue-recaptcha': VueRecaptcha
        ,ContentLoader,FacebookLoader
    },
  data() {
    return {
      email: '',
      email1: '',
      password: '',
      passwordFieldType: 'password',
      isLoggedin: false,
      username:'',
      emailError:'',
      passwordError:'',
      errorMessage:'',
      successMessage:'',
      captchaError:'',
      list:[],
      isLoading: false,
			loading: false,
     myData:0,
     facebook_id:0,
     first_name:'',
     email_code_id:0,
     googleSignInParams: {
        client_id: '704655804124-82c3vfd04b4uvodcsncsili94uaqq8vq.apps.googleusercontent.com'
      },
      recaptcha: '',
      renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                }
    };
  },
  methods: {
    onVerify : function(){
    this.recaptcha = true;
    },
    checkLoginForm : function(){
       var vm = this;
      if (!vm.email) {
        vm.emailError ="Email required.";
      }else{
        vm.emailError ="";
      }
      if (!vm.password) {
        vm.passwordError ="Password required.";
      }else{
        vm.passwordError="";
      }
     // if (!vm.emailError && !vm.passwordError) {
        //console.log('ok');
        //vm.postLogin();
        //return true;
      //}
      if (vm.recaptcha == true){
        vm.postLogin();
      }else{
        vm.captchaError = "Please Verify Captcha";
      }
    },
    postLogin: function() {
      var vm = this;
      vm.myData=0;
      vm.isLoading = true;
      console.log(vm);
      console.log(vm.recaptcha);
      var email;
      var password;
      var params = {
        email: vm.email,
        password: vm.password
      };
      console.log(vm);
     // if (this.form.robot) {
      if (vm.email != "" || vm.password != "") {
        axios
          .post(base_url + "api/login", params, {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })

          .then(function(response) {
            vm.myData=1;
            //if (response.status == 200) {
            if (response.data.success == 1) {
              vm.isLoading = false;
              console.log(response.data);
              vm.list = response.data.user_id[0];
             // localStorage.id = vm.list[0];
              localStorage.id = vm.list.id;
              localStorage.username = vm.list.first_name;
              localStorage.email = vm.list.email;
             // localStorage.email = vm.email;
            // localStorage.getItem('username',response.data.token);
              localStorage.tocken = response.data.token;
              vm.successMessage = response.data.message;
              vm.$parent.isLoggedin = true;
              localStorage.isLoggedin = true;
              console.log(localStorage.isLoggedin);
               console.log(vm.list);
            console.log(localStorage.tocken);
            console.log(localStorage.id);
            vm.$refs.recaptcha.reset();
              vm.$router.go(-1);
              //vm.$router.push("home")
            } else {
              vm.errorMessage = response.data.message;
              vm.$refs.recaptcha.reset();
              vm.alert = {
                show: true,
                title: "Error",
                message: response.data.message
              };
              vm.isLoading = false;
            }
            //}
            vm.isLoading = false;
          })
          .catch(function(error) {
            vm.myData=1;
            vm.isLoading = false;
          });
      } else {
        vm.myData=1;
        var message = "required";
       vm.isLoading = false;
      }
     /* }else{
         vm.errorMessage = "Invalid recaptcha verification";
         vm.isLoading = false;
      }*/
      //vm.emitMethod();
    },
   /* emitMethod: function() {
      EventBus.$emit('logged-in','loggedin')
    },*/
    switchVisibility: function() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },

    getUserData: function(){
      this.FB.api('/me','GET',{ feilds: 'id,name,email'},
        userInformation => {
          console.warn("get data from FB" , userInformation)
         // this.personalID = userInformation.id;
         //this.personalID = 358207442238880;
         //this.name = "Salna Mohanan";
          this.first_name = userInformation.name;
          this.facebook_id = userInformation.id;
         this.loginWithFacebook();
        }
      )
    },
    sdkLoaded : function(payload){
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin : function(){
      this.isConnected = true;
      this.getUserData()
    },
    onLogout : function(){
      this.isConnected = false;
    },
    loginWithFacebook : function(){
      var vm = this;
      var params = {
        first_name:vm.first_name,
        facebook_id:vm.facebook_id,
      };
      console.log(params);
       if (vm.first_name != "" || vm.facebook_id != "") {
      axios
          .post(base_url + "api/fblogin", params, {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })

          .then(function(response) {
            vm.myData=1;
            if (response.data.success == 1) {
              vm.isLoading = false;
              console.log(response.data);
              vm.list = response.data.user_id[0];
             // localStorage.id = vm.list[0];
              localStorage.id = vm.list.id;
              localStorage.username = vm.list.first_name;
              localStorage.email = vm.list.email;
             // localStorage.email = vm.email;
            // localStorage.getItem('username',response.data.token);
              localStorage.tocken = response.data.token;
              vm.successMessage = response.data.message;
              vm.$parent.isLoggedin = true;
              localStorage.isLoggedin = true;
               localStorage.isConnected = true;
              vm.$parent.username = response.data.token;
              console.log(localStorage.isLoggedin);
               console.log(vm.list);
            console.log(localStorage.tocken);
            console.log(localStorage.id);
            vm.$refs.recaptcha.reset();
              //vm.$router.go(-1);
              if(localStorage.email){
                vm.$router.go(-1);
              }else{
                vm.$router.push("profile");
              }
              
            } else {
              vm.errorMessage = response.data.message;
              vm.$refs.recaptcha.reset();
              vm.alert = {
                show: true,
                title: "Error",
                message: response.data.message
              };
              vm.isLoading = false;
            }
            //}
            vm.isLoading = false;
          })
          .catch(function(error) {
            vm.myData=1;
            vm.isLoading = false;
          });
       }
       else{
         vm.errorMessage = "Login";
       }
    },
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      this.email_code_id = profile.NT;
      this.first_name = profile.Ad;
      this.email = profile.$t;
      this.loginWithGoogle();
      console.log(profile);
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
      this.errorMessage = "Change your browser";
    },
    loginWithGoogle : function(){
      var vm = this;
      var params = {
        first_name:vm.first_name,
        email_code_id:vm.email_code_id,
        email:vm.email,
        /* first_name:"dilna kv",
        email_code_id:7867976121465772848,
        email:"dilna@gmail.com",*/
      };
      console.log(params);
       if (vm.first_name != "" || vm.email_code_id != "" || vm.email != "") {
      axios
          .post(base_url + "api/googlelogin", params, {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })

          .then(function(response) {
            vm.myData=1;
            if (response.data.success == 1) {
              vm.isLoading = false;
              console.log(response.data);
              vm.list = response.data.user_id[0];
             // localStorage.id = vm.list[0];
              localStorage.id = vm.list.id;
              localStorage.username = vm.list.first_name;
              localStorage.email = vm.list.email;
             // localStorage.email = vm.email;
            // localStorage.getItem('username',response.data.token);
              localStorage.tocken = response.data.token;
              vm.successMessage = response.data.message;
              vm.$parent.isLoggedin = true;
               localStorage.isConnected = true;
              vm.$parent.username = response.data.token;
              localStorage.isLoggedin = true;
              console.log(localStorage.isLoggedin);
               console.log(vm.list);
            console.log(localStorage.tocken);
            console.log(localStorage.id);
            vm.$refs.recaptcha.reset();
              vm.$router.go(-1);
              //vm.$router.push("home")
            } else {
              vm.errorMessage = response.data.message;
              vm.$refs.recaptcha.reset();
              vm.alert = {
                show: true,
                title: "Error",
                message: response.data.message
              };
              vm.isLoading = false;
            }
            //}
            vm.isLoading = false;
          })
          .catch(function(error) {
            vm.myData=1;
            vm.isLoading = false;
          });
       }
       else{
         vm.errorMessage = "Login";
       }
    },
    checkForgotForm : function(){
      var vm = this;
      vm.isLoading = true;
      var params = {
        email1: vm.email1,
      };
      if (vm.email1 != "") {
        axios
          .post(base_url + "api/forgotpassword", params, {
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
      }
    },
  },
  mounted() {
   
    if (typeof localStorage.email != "undefined")
      this.email = localStorage.email;
    if (typeof localStorage.password != "undefined")
      this.password = localStorage.password;
  
  $(".js-example-basic-hide-search").select2({
		minimumResultsForSearch: Infinity
    });
    $(function(){
			$('.search2')
			.comboSelect()
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
}
</script>
<!--<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>-->