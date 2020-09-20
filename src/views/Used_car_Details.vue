<template>
    <div>
      <!--   <content-loader class="container"
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
        <!-- Google Ad-->
        <section class="Googl_ads ads2 mtop">
            <!--<div class="container">
                <div class="adsgg">
                    <img src="assets/images/kbb-banner-march-2019.jpg">
                </div>
            </div>-->
        </section>
        <div class="breadcrumb2 bggrey">
            <div class="container">
                <div class="row">
                    <ul>
                        <li><a href=""><router-link :to="{ name: 'home'}">
                        Home</router-link></a></li>
                        <li><router-link :to="{ name: 'used-cars'}">
                        Preowned Cars</router-link></li>
                        <li><a  class="disabled">Preowned Car Details</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="alert alert-danger alert-dismissible" v-if="errorMessage" style="width: 1097px;margin-left: 144px;">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <strong>Error!</strong> {{errorMessage}}
        </div>
        <div class="alert alert-success alert-dismissible" v-if="successMessage" style="width: 1097px;margin-left: 144px;">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <strong>Success!</strong> {{successMessage}}
        </div>
        <div id="ratecar" class="quespoop ratecar fade modal " role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
	                <div class="modal-body">
       	                <h3>Rate your experience</h3>
                        <div class="startRating">
                            <star-rating @rating-selected="rating = $event" :rating="rating" v-model="rating"></star-rating>
                            <!--<a href=""><i class="fa fa-star" aria-hidden="true"></i></a>
							<a href=""><i class="fa fa-star" aria-hidden="true"></i></a>
							<a href=""><i class="fa fa-star" aria-hidden="true"></i></a>
							<a href=""><i class="fa fa-star" aria-hidden="true"></i></a>
							<a href=""><i class="fa fa-star-half-o" aria-hidden="true"></i>	</a>-->
                        </div>
                        <button class="viewdetailsbtn" @click="setRating()" data-dismiss="modal">Publish</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="cardetails">
            <section class="single-details shadow">
                <div class="container">
                    <div class="row">
                        <div class="wrap">
                            <div class="bx-left">
                                <div class="carslider">
                                    <div class="item"  v-for="imgg in imagelist">
                                        <img :src="detail_car_image_url + imgg.image" alt="">
                                    </div>
                                    
                                </div>
                                <!--<div class="box">
                                    <ul>
                                        <li class="img-bx allimages" style="background:url(assets/front/images/cars/sliders/5d3d7c53e4418.jpg)">
                                            <a href="car-gallery.html#exterior">
                                            +71 <br>images
                                            </a>
                                        </li>

                                        <li class="img-bx fullview" style="background:url(assets/front/images/cars/sliders/5d3d7c53e4418.jpg)">
                                            <a href="car-gallery.html#dview">
                                            <i class="icon-360"></i>  
                                            </a>
                                        </li>

                                        <li class="img-bx colours" style="background:url(assets/front/images/cars/sliders/5d3d7c53e4418.jpg)">
                                            <a href="car-gallery.html#colours">
                                            +5 <br>Colours
                                            </a>
                                        </li>

                                        <li class="img-bx vidos" style="background:url(assets/front/images/cars/sliders/5d3d7c53e4418.jpg)">
                                            <a href="car-gallery.html#videos">
                                            <i class="icon-cd-play_icon"></i>  
                                            </a>
                                        </li>
                                    </ul>
                                </div>-->
                            </div>
                            <div class="bx-right">
                                <div class="footer-social">
                                    <span class="social-share"><i class="icon-share"></i></span>
                                    <div class="share">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/CarSearch-Middle-East-101481558297604" target="_blank">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/carsearchme/" target="_blank">
                                                    <i class="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/company/carsearchme/" target="_blank">
                                                    <i class="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="car-info-box">
									<div class="content">
									    <h4 class="title">
											{{list.car_name}}
										</h4>
										<div class="startRating">
                                            <star-rating :inline="true" :read-only="true" :show-rating="false" :increment="0.1"
                                            v-model="totalrating" active-color="#FFA500" :star-size="20"></star-rating>
									        <router-link :to="{ name: 'review', params: {id: list.id }}" class="bottomText">
                                                {{review_count}} reviews</router-link>
                                            <div v-if="tockens == ''">
										    <router-link :to="{ name: 'login'}" class="ratethisButton">Rate This Car</router-link>
                                            </div>
                                            <div v-if="tockens != ''">
										    <a class="ratethisButton" data-toggle="modal" data-target="#ratecar">Rate This Car</a>
                                            </div>
										</div>
                                        <div class="footer-area">
											<div class="left-area nncls">
											    <p class="price"><span>{{list.currency_code == '' || list.currency_code== null ? 'NA' : list.currency_code}}</span> 
                                                {{list.price == '' || list.price == null ? 'NA' : list.price}}</p>
											</div>
                                        </div>
									<!--	<a class="viewdetailsbtn" href=""><router-link :to="{ name: 'compare'}">
                        <font style="
    color: white;
"> Compare Cars </font></router-link></a>-->
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 p0">
                            <!--<div class="add-space1">
                                <img src="images/add-banner.jpg">
                            </div>-->
                            <div class="bx-details">
                                <h2>
                                Key Specs of Renault Duster
                                </h2>
                                <div class="spec_box">
                                    <div class="box">
                                        <div class="icon-cd-Engine"></div>
                                        <div class="iconame">Engine</div>
                                        <div class="icodisc">{{list.engine_capacity == '' || list.engine_capacity == null ? 'NA' : list.engine_capacity}}</div>
                                    </div>
                                    <div class="box">
                                        <div class="icon-cd-Transmission"></div>
                                        <div class="iconame">Transmission</div>
                                        <div class="icodisc">{{list.transmission == '' || list.transmission == null ? 'NA' : list.transmission}}</div>
                                    </div>
                                    <div class="box">
                                        <div class="icon-cd-seats"></div>
                                        <div class="iconame">Seats</div>
                                        <div class="icodisc">{{list.seating_capacity == '' || list.seating_capacity == null ? 'NA' : list.seating_capacity}}</div>
                                    </div>
                                    <div class="box">
                                        <div class="icon-bootspace"></div>
                                        <div class="iconame">Boot Space</div>
                                        <div class="icodisc">{{list.bootspace == '' || list.bootspace == null ? 'NA' : list.bootspace}} litres</div>
                                    </div>
                                    <div class="box">
                                        <div class="icon-airbag"></div>
                                        <div class="iconame">Airbags</div>
                                        <div class="icodisc" v-if="list.airbags == 0">NO</div>
                                        <div class="icodisc" v-if="list.airbags == 1">Yes</div>
                                    </div>
                                </div>
                            </div>
                            <div class="bx-details">
                                <h2>
                                Key Specifications of {{list.car_name == '' || list.car_name == null ? 'N/A' : list.car_name}}
                                </h2>
                                <div class="box2">
                                    <ul>
                                        <li>Fuel Type<span>{{list.fuel_type == '' || list.fuel_type == null ? 'N/A' : list.fuel_type}}</span></li>
                                        <li>Engine Displacement <span>{{ list.displacement == '' || list.displacement == null ? 'N/A' : list.displacement }}</span></li>
                                        <li>Max Power (bhp@rpm) <span>{{ list.maxpower == '' || list.maxpower == null ? 'N/A' : list.maxpower }}</span></li>
                                        <li>Seating Capacity <span>{{list.seating_capacity == '' || list.seating_capacity == null ? 'N/A' : list.seating_capacity}}</span></li>
                                        <li>Transmission Type <span>{{list.transmission == '' || list.transmission == null ? 'N/A' : list.transmission}}</span></li>
                                        <li>Boot Space (Litres) <span>{{list.bootspace == '' || list.bootspace == null ? 'N/A' : list.bootspace}}</span></li>
                                    </ul>
                                   <!-- <ul>
                                        <li>Make<span>{{list.make}}</span></li>
                                        <li>Model<span>{{list.model}}</span></li>
                                        <li>Acceleration<span>{{list.acceleration}}</span></li>
                                        <li>Engine Capacity <span>{{list.engine_capacity}}</span></li>
                                        <li>Fuel Type<span>{{list.fuel_type}}</span></li>
                                        <li>Cylinders <span>{{list.cylinders}}</span></li>
                                        <li>Seating Capacity <span>{{list.seating_capacity}}</span></li>
                                        <li>Transmission Type <span>{{list.transmission}}</span></li>
                                        <li>Fuel Economy <span>{{list.fuel_economy}}</span></li>
                                        <li>Fuel Tank Capacity <span>{{list.fuel_tank_capacity}}</span></li>
                                        <li>Length<span>{{list.length}}</span></li>
                                        <li>Horse Power<span>{{list.horsepower}}</span></li>
                                        <li>Top Speed<span>{{list.top_speed}}</span></li>
                                        <li>Torque<span>{{list.torque}}</span></li>
                                        <li>Transmission<span>{{list.transmission}}</span></li>
                                        <li>Trunck Capacity<span>{{list.trunk_capacity}}</span></li>
                                        <li>Wheel Base<span>{{list.wheelbase}}</span></li>
                                    </ul>-->
                                </div>
                                <h2>
                                Key Features of {{list.car_name}}
                                </h2>
                                <div class="box2">
                                    <ul>
                                        <li>Power Steering
                                            <span v-if="list.powersteering == 0"><i class="icon-deletearrow"></i></span>
                                            <span v-if="list.powersteering == 1"><i class="icon-check"></i></span>
                                        </li>
                                        <li>Power Windows Front 
                                            <span v-if="list.powerwindowsfront == 0"><i class="icon-deletearrow"></i></span>
                                            <span v-if="list.powerwindowsfront == 1"><i class="icon-check"></i></span>
                                        </li>
                                        <li>Anti Lock Braking System 
                                            <span v-if="list.antilockbrakingsystem == 0"><i class="icon-deletearrow"></i></span>
                                            <span v-if="list.antilockbrakingsystem == 1"><i class="icon-check"></i></span>
                                        </li>
                                        <li>Air Conditioner 
                                            <span v-if="list.airconditioner == 0"><i class="icon-deletearrow"></i></span>
                                            <span v-if="list.airconditioner == 1"><i class="icon-check"></i></span>
                                        </li>
                                        <li>Driver Airbag
                                            <span v-if="list.driverairbag == 0"><i class="icon-deletearrow"></i></span>
                                            <span v-if="list.driverairbag == 1"><i class="icon-check"></i></span>
                                        </li>
                                        <li>Passenger Airbag 
                                            <span v-if="list.passengerairbag == 0"><i class="icon-deletearrow"></i></span>
                                            <span v-if="list.passengerairbag == 1"><i class="icon-check"></i></span>
                                        </li>
                                        <li>Fog Lights - Front
                                            <span v-if="list.foglightsfront == 0"><i class="icon-deletearrow"></i></span>
                                            <span v-if="list.foglightsfront == 1"><i class="icon-check"></i></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="bx-details bx-details3">
                                <h2>
                               Overview {{list.car_name == '' || list.car_name == null ? 'N/A' : list.car_name}}
                                </h2>
                                <div class="box3 scrollspy">
                                    <div class="row">
                                        <div class="col-md-4 nav-blk">
                                            <nav id="NavbarList">
                                                <ul class="nav nav-pills flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" href="#menu1">Engine and Transmission</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#menu2">Fuel & Performance</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#menu3">Suspension, Steering & Brakes</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div class="col-md-8 item-content" data-spy="scroll" data-target="#NavbarList" data-offset="125">
                                            <div id="menu1">
                                                <h3><span>Engine and Transmission</span></h3>
                                                <ul>
                                                    <li><span>Engine Type</span><span>{{ list.enginetype == '' || list.enginetype == null ? 'N/A' : list.enginetype }}</span></li>
                                                    <li><span>Fast Charging </span>
                                                        <span v-if="list.fastcharging == 0"><i class="icon-deletearrow"></i></span>
                                                        <span v-if="list.fastcharging == 1"><i class="icon-check"></i></span>
                                                    </li>
                                                    <li><span>Displacement (cc) </span><span>{{ list.displacement == '' || list.displacement == null ? 'N/A' : list.displacement}}</span></li>
                                                    <li><span>Max Power (bhp@rpm) </span><span>{{ list.maxpower == '' || list.maxpower == null ? 'N/A' : list.maxpower }}</span></li>
                                                    <li><span>Max Torque (nm@rpm) </span><span>{{list.maxtorque == '' || list.maxtorque == null ? 'N/A' : list.maxtorque}}</span></li>
                                                    <li><span>Valves Per Cylinder </span><span>{{list.valvespercylinder}}</span></li>
                                                    <li><span>No. of cylinder </span><span>{{list.noofcylinders}}</span></li>
                                                </ul>
                                            </div>
                                            <div id="menu2">
                                                <h3><span>Fuel & Performance</span></h3>
                                                <ul>
                                                    <li><span>Fuel Type</span><span>{{list.fuel_type == '' || list.fuel_type == null ? 'N/A' : list.fuel_type}}</span></li>
                                                    <li><span>Fuel Tank Capacity (Litres)</span> <span>{{list.fuel_tank_capacity == '' || list.fuel_tank_capacity == null ? 'N/A' : list.fuel_tank_capacity}}</span></li>
                                                    <li><span>Emission Norm Compliance </span><span>{{list.emissionnormcompliance == '' || list.emissionnormcompliance == null ? 'N/A' : list.emissionnormcompliance}}</span></li>
                                                </ul>
                                            </div>
                                            <div id="menu3">
                                                <h3><span>Suspension, Steering & Brakes</span></h3>
                                                <ul>
                                                    <li><span>Front Suspension</span><span>{{list.frontsuspension == '' || list.frontsuspension == null ? 'N/A' : list.frontsuspension}}</span></li>
                                                    <li><span>Rear Suspension </span><span>{{list.rearsuspension == '' || list.rearsuspension == null ? 'N/A' :list.rearsuspension}}</span></li>
                                                    <li><span>Steering Type </span><span>{{list.steeringtype == '' || list.steeringtype == null  ? 'N/A' : list.steeringtype}}</span></li>
                                                    <li><span>Steering Column </span><span>{{list.steeringcolumn == '' || list.steeringcolumn == null ? 'N/A' : list.steeringcolumn}}</span></li>
                                                    <li><span>Steering Gear Type </span><span>{{list.steeringgeartype == '' || list.steeringgeartype == null ? 'N/A' : list.steeringgeartype}}</span></li>
                                                    <li><span>Turning Radius (Metres) </span><span>{{list.turningradius == '' || list.turningradius == null ? 'N/A' : list.turningradius}}</span></li>
                                                    <li><span>Front Brake Type</span><span>{{list.frontbraketype == '' || list.frontbraketype == null ? 'N/A' : list.frontbraketype}}</span></li>
                                                    <li><span>Rear Brake Type</span><span>{{list.rearbraketype == '' || list.rearbraketype == null ? 'N/A' : list.rearbraketype}}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bx-details douhaveque">
                                <!--<div class="imageholder">
                                    <img src="images/ask-que.jpg" alt="image">
                                </div>-->
                                <div class="quespoop" v-if="tockens != ''">
                                    <h2>Need Help?</h2>
		                            <p>Ask anything get answer in 48 hours</p>
	                                <div class="inputfield-blk">
		                                <input v-model="question" type="text" maxlength="1000" data-gsv-type="required" data-gsv-min-length="50" data-gsf-name="otherquestion" placeholder="Write your question here">
		                                <button class="quebtn btndisabled" v-on:click="addquestion()">Ask Question</button>
		                            </div>
                                    <p v-if="questionErrorMessage" style="text-align: left;color: red;font-size: medium;">{{questionErrorMessage}}</p>
                                </div>
                                <div class="quespoop" v-if="tockens == ''">
                                    <h2>Need Help?</h2>
		                            <p>Ask anything get answer in 48 hours</p>
                                    <router-link :to="{ name: 'login'}">
	                                <div class="inputfield-blk">
		                                <button class="quebtn btndisabled">Ask Question</button>
                                    </div>
                                    </router-link>
                                </div>
                            </div>
                            <div class="bx-details bx-details4">
                                <h2>
                                Questions & Answers
                                </h2>
                                <div class="box4">
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-item active" data-toggle="tab" href="#questions" role="tab">Latest Questions</a>
                                        </div>
								    </nav>
                                    <div class="tab-content">
							            <div class="tab-pane active" id="questions" role="tabpanel" aria-labelledby="nav-home-tab">
							                <div class="details-question-slider">
							                    <div class="queans"  v-for="que in question_list">
                                                    <p class="asked">{{que.first_name}} asked on {{getDay(que.created_at)}} {{getMonth(que.created_at)}} {{getYear(que.created_at)}}</p>
                                                    <p class="que cpad"><span>Q.</span> {{que.question}}?</p>
                                                    <div class="answer-link">
                                                        <ul>
                                                            <li>
                                                            <router-link :to="{ name: 'question-answer', params: {id: que.id }}">View Answer <i class="drpdown"></i></router-link>
                                                            </li>
                                                        </ul>
							                        </div>
							                    </div>
							                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 p0">
                            <div class="bx-right">
                                <!--<div class="add-space2">
                                    <img src="images/banner-ads2.jpg">
                                </div>
                                <div class="rbox1">
                                    <h2>
                                        <a data-toggle="modal" data-target="#quest">
                                            <i><img src="images/question.png" alt="icon"></i>
                                            Do you have any question ?
                                        </a>
                                    </h2>
                                </div>-->
                                <div id="quest" class="quespoop fade modal" role="dialog">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <div class="modal-body">
                                                <h3>Need Help?</h3>
                                                <p>Ask anything get answer in 48 hours</p>
                                                <div class="inputfield-blk">
                                                    <input type="text" maxlength="1000" data-gsv-type="required" data-gsv-min-length="50" data-gsf-name="otherquestion" placeholder="Write your question here">
                                                    <button class="quebtn btndisabled">Ask Question</button>
                                                </div>
		                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!--</div>-->
    </div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.common["Locale"] = localStorage.locale;
import StarRating from 'vue-star-rating'
//import Rating from 'v-rating';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name: "app",
    components: {
        StarRating,Loading
    },
    data() {
    return {
      preloader:false,
      list:[],
      imagelist:[],
      detail_car_image_url,
      rating:0,
      car_id:'',
      tockens:localStorage.getItem("tocken"),
      userid:localStorage.getItem("id"),
      isLoading: false,
      loading: false,
      errorMessage:'',
      successMessage:'',
      totalrating:'',
      review_count:'',
      question:'',
      question_list:[],
      questionErrorMessage:''
    };
    },
    methods: {
       
        loadData: function() {
         var id = this.$route.params.id;
         
        var vm = this;
        vm.isLoading = true;
        console.log(id);
       axios
          .get(base_url + "api/cardetails/" + id , {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })
          .then(function(response) {
             vm.isLoading = false;
             vm.list = response.data.car_details[0];
             vm.imagelist= response.data.car_image_list;

             vm.totalrating = response.data.totalrating;
             vm.review_count =  response.data.review_count;
             vm.question_list = response.data.question;
            console.log(vm.totalrating);
             vm.preloader = false;
            // vm.list1 = response.data.blog_list;
             console.log(vm.list);
             vm.$nextTick(function(){
                $(function(){
			$('.search2')
			.comboSelect()
        })
        $(".js-example-basic-hide-search").select2({
		minimumResultsForSearch: Infinity
		});

                 $(function(){
                $('.search2')
                .comboSelect()
            })
            var offset = 160;

            $('.nav-blk li a').click(function(event) {
                event.preventDefault();
                $($(this).attr('href'))[0].scrollIntoView();
                scrollBy(0, -offset);
            });

            var $slider = $('.carslider');
	        if ($slider.length) {
	            var currentSlide;
	            var slidesCount;
	            var sliderCounter = document.createElement('div');
	            sliderCounter.classList.add('slider__counter');
	            var updateSliderCounter = function(slick, currentIndex) {
                    currentSlide = slick.slickCurrentSlide() + 1;
                    slidesCount = slick.slideCount;
                    $(sliderCounter).text(currentSlide + '/' +slidesCount)
	            };
	            $slider.on('init', function(event, slick) {
                    $slider.append(sliderCounter);
                    updateSliderCounter(slick);
	            });
	            $slider.on('afterChange', function(event, slick, currentSlide) {
                    updateSliderCounter(slick, currentSlide);
	            });
                $slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    focusOnSelect: true,
                    fade: true, 
                    
                });
            }
            
            $('.social-share').click(function(){    
                $('.share').toggle();
            })

            $(document).ready(function () {
                $('.details-question-slider').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 5500,
                    arrows: true,
                    dots: false,
                    pauseOnHover: false,
                    infinite:false,
                    responsive: [{
                    breakpoint: 768,
                            settings: {
                            slidesToShow: 2
                            }
                    }, {
                    breakpoint: 520,
                            settings: {
                            slidesToShow: 1
                            }
                    }]
                });
            });
             });
          });
      
          
      },
      setRating : function(){
          var vm = this;
          vm.isLoading = true;
          var params = {
            car_id : this.$route.params.id,
            rating : vm.rating,
            //userid : vm.userid,
            token : vm.tockens
          };
          
          //vm.rating = vm.rating;
          //vm.userid = vm.userid;
          axios
          .post(base_url + "api/starrating", params, {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })

          .then(function(response) {
            if (response.data.success == 1) {
                vm.isLoading = false;
                vm.successMessage = response.data.message;
                vm.totalrating = response.data.totalrating;
                console.log(vm.totalrating);
                
              //vm.$router.push("login");
            } else {
              vm.isLoading = false;
               vm.errorMessage = response.data.message
            }
          }) .catch(function(error) {
           vm.isLoading = false;
               vm.errorMessage = "Session Expired! Please Login Again"
          });
        },
        addquestion : function(){
          var vm = this;
          vm.isLoading = true;
          var params = {
            car_id : this.$route.params.id,
            question : vm.question,
            token : vm.tockens
          };
          if(vm.question != ''){
          axios
          .post(base_url + "api/addquestion", params, {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })

          .then(function(response) {
            if (response.data.success == 1) {
                vm.isLoading = false;
                vm.successMessage = response.data.message;
                vm.question_list = response.data.question;
               // vm.list = response.data;
               // console.log(vm.totalrating);
                
              //vm.$router.push("login");
            } else {
              vm.isLoading = false;
               vm.errorMessage = response.data.message
            }
          }) .catch(function(error) {
               vm.isLoading = false;
               vm.errorMessage = "Session Expired! Please Login Again"
          });
          }else{
               vm.isLoading = false;
               vm.questionErrorMessage = "Please enter the question"
          }
        },
        getMonth(datetime) {
            const event = new Date(datetime);
            let mlist = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
            return mlist[event.getMonth()];
        },
        getDay(datetime) {
            const date = new Date(datetime);
            let day = date.getDate();
            //let day = event.getDay();
            return day;
        },
        getYear(datetime){
            const date = new Date(datetime);
            let year = date.getUTCFullYear();
            return year;
        },
    },
    mounted() {
        this.loadData();
        //this.accordion();
    },
}
</script>