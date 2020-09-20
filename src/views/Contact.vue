<template>
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
    <div v-if="myData==1">-->
	 <div v-if="isLoading == true">   <div id="overlayer"></div>
      <span class="loader">
        <span class="loader-inner"></span>
      </span>
    </div>
	<div class="breadcrumb2 mtop">
		<div class="container">
			<ul>
				<li><router-link :to="{ name: 'home'}">
          Home</router-link></li>
				<li><a >Contact</a></li>
			</ul>
		</div>
	</div>
	<!-- Contact Us Area Start -->
	<section class="contact-us">
		<div class="container">
			
			<h3>Contact Form </h3>
			<div class="alert alert-danger alert-dismissible" v-if="errorMessage">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				<strong>Error!</strong> {{errorMessage}}
			</div>
			<div class="alert alert-success alert-dismissible" v-if="successMessage">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				<strong>Success!</strong> {{successMessage}}
			</div>    
			<div class="row justify-content-between">
				<div class="col-xl-7 col-lg-7 dflex">
					<div class="left-area">
						<div class="contact-form">
							<div class="gocover" style="background: url(assets/front/images/loader.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5);"></div>
								
									<input type="hidden" name="_token" value="o8GQvwbx2ztMb26tI78xdKw82iimE6kvxutG5J9e">
									<div class="row">
										<div class="col-lg-12">
											<div class="form-input">
												<input type="text" v-model="name" placeholder="Name*" minlength="3" maxlength="32" required onfocus="this.placeholder = ''"
												onblur="this.placeholder = 'Name*'">
												<i class="fas fa-user"></i>
												<p v-if="nameError" style="text-align: left;color: red;font-size: medium;">{{nameError}}</p>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-input">
												<input type="email" v-model="email" placeholder="Email*" required onfocus="this.placeholder = ''"
												onblur="this.placeholder = 'Email*'">
												<i class="fas fa-envelope"></i>
												<p v-if="emailError" style="text-align: left;color: red;font-size: medium;">{{emailError}}</p>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-input">
												<input type="text" v-model="subject" placeholder="Subject*" :maxlength="15" required onfocus="this.placeholder = ''"
												onblur="this.placeholder = 'Subject*'">
												<i class="fas fa-pen-square"></i>
												<p v-if="subjectError" style="text-align: left;color: red;font-size: medium;">{{subjectError}}</p>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-input">
												<textarea v-model="message" required :maxlength="1000" minlength="15" placeholder="Message*" id="area" onfocus="this.placeholder = ''"
												onblur="this.placeholder = 'Message'"></textarea>
												<i class="fas fas fa-comment"></i>
												<div class="word-counter">0/1000</div>
											</div>
											<p v-if="messageError" style="text-align: left;color: red;font-size: medium;">{{messageError}}</p>
										</div>
										<div class="col-lg-12">
												<button class="submit-btn mybtn1" type="button" v-on:click="checkContactForm()">Send Message</button>
										</div>
									</div>
								
							</div>
						</div>
					</div>
				
					<div class="col-xl-5 col-lg-5 dflex">
						<div class="right-area">
							<div class="contact-info">
								<div class="left ">
									<div class="icon">
										<a href="mailto:info@carsearchme.com"><i class="fa fa-envelope" style="color: white;"></i></a>						
									</div>
								</div>
								<div class="content d-flex align-self-center">
									<div class="content">
										<a href="mailto:info@carsearchme.com">info@carsearchme.com</a>
									</div>
								</div>
							</div>						
							<div class="contact-info">
								<div class="left">
									<div class="icon">
										<a href="tel:+880356237683"><i class="fa fa-whatsapp" style="color: white;"></i></a>
									</div>
								</div>
								<div class="content d-flex align-self-center">
									<div class="content">
										<a href="tel:+880356237683">Reach us on whatsapp</a>
									</div>
								</div>
							</div>
							<div class="contact-info">
								<div class="left">
									<div class="icon">
										<a href="https://www.facebook.com/CarSearch-Middle-East-101481558297604"><i class="fab fa-facebook" style="color: white;"></i></a>
									</div>
								</div>
								<div class="content d-flex align-self-center">
									<div class="content">
										<a href="https://www.facebook.com/CarSearch-Middle-East-101481558297604">Join our facebook family</a>
									</div>
								</div>
							</div>
							<div class="contact-info">
								<div class="left">
									<div class="icon">
										<a href="https://www.linkedin.com/company/carsearchme/"><i class="fab fa-linkedin-in" style="color: white;"></i></a>
									</div>
								</div>
								<div class="content d-flex align-self-center">
									<div class="content">	
										<a href="https://www.linkedin.com/company/carsearchme/">Follow us on LinkedIn</a>
									</div>
								</div>
							</div>
							<div class="contact-info">
								<div class="left">
									<div class="icon">
										<a href="https://www.instagram.com/carsearchme/"><i class="fab fa-instagram" style="color: white;"></i></a>
									</div>
								</div>
								<div class="content d-flex align-self-center">
									<div class="content">
										<a href="https://www.instagram.com/carsearchme/">Follow us on Instagram</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
	<!-- Contact Us Area End-->
	<!--</div>-->
</template>
<script>
import axios from "axios";
axios.defaults.headers.common["Locale"] = localStorage.locale;
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
export default {
	name: "app",
   	data() {
    	return {
			list:[],
			Whatsapp_number:[],
			fb_number:[],
			linkedin_number:[],
			insta_number:[],
			loading: false,
			isLoading: false,
			name: "",
			email: "",
			subject: "",
			message: "",
			messages:"",
			nameError:'',
			emailError:'',
			subjectError:'',
			messageError:'',
			errorMessage:'',
			successMessage:'',
			myData:0,
   		 };
	},
	components: {
           ContentLoader,FacebookLoader
    },
	methods: {
		loadData: function() {
         	this.loading = true;
			 var vm = this;
			 vm.isLoading = true;
			 vm.myData=0;
       		axios
          		.get(base_url + "api/contact", {
            		"Access-Control-Allow-Origin": "*",
            		"Content-Type": "application/json"
          	})
          	.then(function(response) {
				  vm.myData=1;
				  vm.isLoading = false;
				 vm.list = response.data.contact_list;
				 vm.Whatsapp_number = response.data.contact_list.Whatsapp_number;
				 vm.fb_number = response.data.contact_list.fb_number;
				 vm.linkedin_number = response.data.contact_list.linkedin_number;
				 vm.insta_number = response.data.contact_list.insta_number;
				 console.log(vm.Whatsapp_number);
          	});
          	this.loading = false;
		},
		checkContactForm: function(){
			var vm = this;
			console.log(vm.name);
			
			if(vm.name == '')
			{
				vm.nameError ="Please enter your Name.";
				//vm.validateName1(vm.name);
			}else if(vm.validateName(vm.name))
			{
				vm.nameError ="Name must be characters..";
				//vm.validateName1(vm.name);
			}else{
				vm.validateName1(vm.name);
			}
			if (!vm.email) {
				vm.emailError = "Please enter your email ID to receive our response.";
			} else if (!vm.validEmail(vm.email)) {
				vm.emailError = "Invalid email.";
			}else{
				vm.emailError ="";
			}
			if(!vm.subject){
				vm.subjectError = "Subject is required"
			}else{
				vm.validateSubject(vm.subject);
			}
			if(!vm.message){
				vm.messageError= "Please type your message. Minimum 15 characters."
			}else{
				vm.validateMessage(vm.message);
			}
			if (!vm.nameError && !vm.emailError && !vm.subjectError && !vm.messageError) {
					vm.postContact();
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
			if(min>name.length){
				vm.nameError = 'Name should contain atleast 3 letters';
			}else if(max<name.length){
				vm.nameError = 'Name should not contain atleast more thane 32 letters';
			}else{
				vm.nameError = '';
			}
		},
		validEmail: function (email) {
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		validateSubject: function(name){
			var vm = this;
			var min = 2;
			var max = 15;
			if(min>name.length){
				vm.subjectError= 'Subject should contain atleast 3 characters';
			}else if(max<name.length){
				vm.subjectError = 'Subject should not contain atleast more thane 100 letters';
			}else{
				vm.subjectError = '';
			}
		},
		validateMessage: function(name){
			var vm = this;
			var min = 15;
			var max = 100;
			if(min>name.length){
				vm.messageError= 'Message should contain atleast 15 letters';
			}else if(max<name.length){
				vm.messageError = 'Message should not contain atleast more thane 100 letters';
			}else{
				vm.messageError = '';
			}
		},
		postContact: function() {
			var vm = this;
			vm.isLoading = true;
			vm.myData=0;
			var params = {
				name: vm.name,
				email: vm.email,
				subject: vm.subject,
				message: vm.message,
			};
			console.log(vm.name);
			if (vm.name != "" || vm.email != "" || vm.subject != "" || vm.message != "") {
				axios
          		.post(base_url + "api/sendcontactmail", params, {
            		"Access-Control-Allow-Origin": "*",
            		"Content-Type": "application/json"
          		})

          		.then(function(response) {
					  vm.myData=1;
					  vm.isLoading = false;
            		if (response.data.success == 1) {
					vm.successMessage = response.data.message;
				//	$('.vali').show();
					//console.log(response.data.message);
            	} else {
             		vm.alert = {
						show: true,
						title: "Error",
						message: response.data.message
					};
					vm.errorMessage = response.data.message
            	}
				vm.sending = false;
				vm.isLoading = false;
          		})
          		.catch(function(error) {
					vm.sending = false;
					vm.isLoading = false;
          		});
			}else{
				vm.myData=1;
				var message = "required";
				vm.sending = false;
				vm.isLoading = false;
			}
		}
	},
	mounted() {
		this.loadData();
      	$(function(){
            $('.search2')
            .comboSelect()
    	})
        $(".js-example-basic-hide-search").select2({
            minimumResultsForSearch: Infinity
		});
		$('.vali').hide();
		$('.vali1').hide();
    },
}
</script>