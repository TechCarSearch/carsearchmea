<template>
	<div>
        <!--<loading
        :active.sync="isLoading" 
        :can-cancel="true" 
        ></loading>
        <div v-if="preloader" class="preloader" id="preloader" style="background: url(assets/front/images/loader.gif) no-repeat scroll center center #FFF;"></div>
   -->
     <!--    <content-loader class="container"
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
        <div class="breadcrumb-area searchwrap advsearchblk" v-bind:style="{'background-image': 'url(' + newcar_banners_image_url + bannerlist.banner_image + ')' }">
		<img :src="newcar_banners_image_url + bannerlist.banner_image" />
        <!--<div class="breadcrumb-area searchwrap advsearchblk" >
            <div class="b-slider" >
                <div v-for="banner in bannerlist" class="b-img">
                    <a :href="banner.banner_link"> <img :src="newcar_banners_image_url + banner.banner_image" /> </a>
                </div>
            </div>-->
			<div class="container">
				<div class="row">
					<div class="col-lg-12 p0">
						<h1 class="title">
							New Cars
						</h1>
						<div class="advsearch">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item2 nav-link2 active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">BY BUDGET</a>
                                    <a class="nav-item2 nav-link2" id="nav-preowned-tab" data-toggle="tab" href="#nav-preowned" role="tab" aria-controls="nav-preowned" aria-selected="true">BY MODEL</a>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div class="card-body text-white">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <form id="searchForm" action="" method="get">
                                                        <ul class="select-list">
															<li>
                                                                <div class="car-price nooptgrp notype">
                                                                    <v-select v-model="priceId" :reduce="price_select_list => price_select_list.id" :options="price_select_list" placeholder="Select Budget" :searchable="false">
                                                                    </v-select>
                                                                   <!-- <select v-model="priceId" >
			                                                            <option  value disabled selected> Select Budget</option>
                                                                        <option value="" v-for="price in filteredPrice" v-bind:value="price.id"> AED {{price.minimum}} - {{price.maximum}}</option>
                                                                    </select>-->
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="car-condition nooptgrp notype readonly">
                                                                    <v-select v-model="vehicleTypeId" :reduce="vehicle_types => vehicle_types.id" :options="vehicle_types" placeholder="All Vehicle Type" :searchable="false">
                                                                    </v-select>
                                                                    <!--<select v-model="vehicleTypeId">
                                                                        <option  value disabled selected> All Vehicle Type</option>
                                                                        <option value="" v-for="vehicle in filteredVehicleType" v-bind:value="vehicle.id">{{vehicle.name}}</option>
                                                                    </select>-->																		
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <button type="button" class="mybtn1" style="width: 100%; outline: 0;" v-on:click="searchPriceData()">Search</button>
                                                            </li>
                                                        </ul>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade " id="nav-preowned" role="tabpanel" aria-labelledby="nav-preowned-tab">
                                    <div class="card-body text-white">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <form id="searchForm" action="" method="get">
                                                        <ul class="select-list">
                                                            <li>
                                                                <div class="car-price nooptgrp">
                                                                    <v-select v-model="brandId" :reduce="brand_select_list => brand_select_list.id" :options="brand_select_list" placeholder="Select Brand" @input="getModel()">
                                                                    </v-select>
                                                                   <!-- <select v-model="brandId" >
                                                                        <option value disabled selected> Select Brand</option>
                                                                        <option v-for="brand in filteredBrands" v-bind:value="brand.id"> {{brand.name}} </option>
                                                                    </select>  -->                                                                 
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="car-condition nooptgrp">
                                                                    <v-select v-model="modelId" :reduce="model_select_list => model_select_list.id" :options="model_select_list" placeholder="Select Model">
                                                                    </v-select>
                               									    <!--<select v-model="modelId">
                                                                        <option value disabled selected> Select Model</option>
								                                        <option value v-for="model in filteredModel" v-bind:value="model.id">{{model.name}}</option>
                                                                    </select>   -->                                                                                                                                                                                                                                                                    </select>
									                            </div>
                                                            </li>
                                                            <li>
                                                                <button type="button" class="mybtn1" style="width: 100%; outline: 0;" v-on:click="searchData()">Search</button>
                                                            </li>
                                                        </ul>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        
                                </div>
                            </div>
                            <router-link :to="{ name: 'newcars-search'}" class="searchlink">
                            Advance Search ></router-link>
							<!--<a href="newcar-search.html" class="searchlink"></a>-->
                        </div>
					</div>
				</div>
			</div>
		</div>
	<!-- Breadcrumb Area Start -->
	<!-- Google Ad-->
        <section class="Googl_ads ads2">
            <div class="container">
                <div class="adsgg">
                    <img src="images/kbb-banner-march-2019.jpg">
                </div>
            </div>
        </section>
	
        <div class="breadcrumb2">
            <div class="container">
                <div class="row">
                    <ul>
                        <li><router-link :to="{ name: 'home'}">
                        Home</router-link></li>
                        <li><a href="#" >New Cars</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <section class="featuredCars new-car pb0">
            <div class="container">
                <div class="row">
                    <h1 class="head">New Cars</h1>
                    <div class="brdr shadow24 wrap">
                            <div class="section-heading">
                                <h2 class="title">
                                New Launched cars
                                </h2>
                            </div>
                        <div class="newlaunch-cars-slick-slider">
                            <div class="product-item" v-for="newkaunch in list.newlaunch_cars">
                                <div class="card shadowWPadding " data-img-fit="true">
                                    <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                                        <div class="imageTransition active" data-autofit="true" data-autofitmobile="true" title=" ">
                                            <a href="">
                                                <img 
                                                class="hover imageTransition hide active" 
                                                :src="newkaunch.featured_image == '' ? car_image_url + 'No IMage Available.jpg' : car_image_url + newkaunch.featured_image"
                                                data-lazy="true">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="gsc_col-xs-12 holder ">
                                        <a class="title" href="">
                                           {{ newkaunch.car_name == '' || newkaunch.car_name == null ? 'N/A' : newkaunch.car_name}}</a>
                                        <div class="price">
                                            <span class="icon-cd_R">{{ newkaunch.currency_code == '' || newkaunch.currency_code == null ? 'N/A' : newkaunch.currency_code}}
                                                </span>{{ newkaunch.price == '' || newkaunch.price == null ? 'N/A' : newkaunch.price}}
                                        </div>
                                        <div class="BtnFull buttonHolder buttonHolder virtualNumberBtn ">
                                            <div class="primaryButton btn-dcb ">
                                                <a href=""> <router-link :to="{ name: 'car-details', params: {id: newkaunch.id }}">
                            View Details</router-link></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-item view-all">
                                <div class="card shadowWPadding " data-img-fit="true">
                                    <a href="" class="viewallbtn"><router-link :to="{ name: 'new-car-list'}">
                                        <i class="fas fa-arrow-right"></i>View All Cars</router-link>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="featuredCars">
            <div class="container">
                <div class="row">
                    <div class="brdr shadow24 wrap">
                        <div class="section-heading">
                            <h2 class="title">
                            Popular cars
                            </h2>
                        </div>
                        <div class="newlaunch-cars-slick-slider">
                            <div class="product-item" v-for="popular in list.popular_cars">
                                <div class="card shadowWPadding " data-img-fit="true">
                                    <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                                        <div class="imageTransition active" data-autofit="true" data-autofitmobile="true" title=" ">
                                            <a href="">
                                            <img class="hover imageTransition hide active"
                                            :src="popular.featured_image == '' ? car_image_url + 'No IMage Available.jpg' : car_image_url + popular.featured_image"
                                            data-lazy="true"></a>
                                        </div>
                                    </div>
                                    <div class="gsc_col-xs-12 holder ">
                                        <a  class="title" href="">
                                        {{ popular.car_name == '' || popular.car_name == null ? 'N/A' : popular.car_name}}</a>
                                        <div class="price">
                                            <span class="icon-cd_R">{{ popular.currency_code == '' || popular.currency_code == null ? 'N/A' : popular.currency_code}}
                                                </span>{{ popular.price == '' || popular.price == null ? 'N/A' : popular.price}}
                                        </div>
                                        <div class="BtnFull buttonHolder buttonHolder virtualNumberBtn ">
                                            <div class="primaryButton btn-dcb "><a href="">
                                                <router-link :to="{ name: 'car-details', params: {id: popular.id }}">
                            View Details</router-link></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-item view-all">
								<div class="card shadowWPadding " data-img-fit="true">
					    			<a href="" class="viewallbtn"><router-link :to="{ name: 'popular-car-list'}"><i class="fas fa-arrow-right"></i>
										View All Cars</router-link>
                                    </a>
								</div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--google ads-->
        <section class="Googl_ads">
            <div class="container">
                <div class="row">
                    <div class="adsgg">
                        <img src="images/kbb-banner-march-2019.jpg">
                    </div>
                </div>
            </div>
        </section>
        <!--popular brands-->
        
        <!--popular brands-->
        <div class="brands container">
            <div class="row">
                <div class="brand brdr shadow24 wrap">
                    <div class="section-heading">
                        <h2 class="title mb-30">
                            Popular Brands
                        </h2>
                    </div>
                    <div class="customer-logos">
                        <div class="slide" v-for="brand in list.brand_list">
                            <router-link :to="{ name: 'brand-search-list', params: {id: brand.id }}">
                            <img :src="brand_image_url + brand.brand_image">
                            </router-link>
                        </div>
                        <div class="view-all">
                            <router-link :to="{ name: 'brand-list'}">
                            <a href="" class="viewallbtn text-center">
                            <img src="images/view-all.png" alt="btn">View All Brands
                            </a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Featured Cars Area Start -->
        <section class="featuredCars">
            <div class="container">
                <div class="row">
                    <div class="brdr shadow24 wrap">
                        <div class="section-heading">
                            <h2 class="title">
                                <!-- Featured Cars -->
                                Featured Cars
                            </h2>
                        </div>
                        <div class="featured-cars-slick-slider">
                            <div class="product-item" v-for="featured in list.featured_cars">
                                <div class="card shadowWPadding " data-img-fit="true">
                                    <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                                        <div class="imageTransition active" data-autofit="true" data-autofitmobile="true" title=" ">
                                            <a href="">
                                            <img class="hover imageTransition hide active"
                                            :src="featured.featured_image == '' ? car_image_url + 'No IMage Available.jpg' : car_image_url + featured.featured_image"
                                            data-lazy="true"></a>
                                        </div>
                                    </div>
                                    <div class="gsc_col-xs-12 holder ">
                                        <a class="title" href="">
                                            {{ featured.car_name == '' || featured.car_name == null ? 'N/A' : featured.car_name}}</a>
                                        <div class="price">
                                            <span class="icon-cd_R">{{ featured.currency_code == '' || featured.currency_code == null ? 'N/A' : featured.currency_code}}
                                                </span>{{ featured.price == '' || featured.price == null ? 'N/A' : featured.price}}
                                        </div>
                                        <div class="BtnFull buttonHolder buttonHolder virtualNumberBtn ">
                                            <div class="primaryButton btn-dcb ">
                                                <a href=""><router-link :to="{ name: 'car-details', params: {id: featured.id }}">
                            View Details</router-link></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="product-item view-all">
                                <div class="card shadowWPadding " data-img-fit="true">
                                    <a href="" class="viewallbtn"><router-link :to="{ name: 'featured-car-list'}"><i class="fas fa-arrow-right"></i>
                                    View All Featured Cars</router-link></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
        <!-- Featured Cars Area End -->
        <!-- Feedback -->
        <div id="feedback" class="modal fade feedbackpop" role="dialog">
            <div class="modal-dialog">
            <!-- Modal content-->
                <div class="modal-content">
                    <h4 class="modal-title">Feedback</h4>
		            <span class="close3" data-dismiss="modal">&times;</span>
		            <div class="input-blk">
		                <div class="box" style="width:100%">
		                    <input type="text" class="input-fi" placeholder="Enter Name" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Name*'">
		                </div>
		            </div>
		            <div class="input-blk">
		                <div class="box">
		                    <input type="text" class="input-fi" placeholder="Enter Email" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Email*'">
		                </div>
		                <div class="box country">
		                    <input type="text" class="input-fi" placeholder="Enter Mobile Number" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Mobile Number*'"><span class="ccode">+971</span>
                        </div>
		            </div>
		            <div class="input-blk text-blk">
		                <textarea name="message" required maxlength="1000" class="input-fi text-area" id="area2" placeholder="Please share your feedback what can we improve?" onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Please share your feedback what can we improve?*'"></textarea>
                        <div class="word-counter w2">0/1000</div>
		            </div>
                    <div class="file-upload-blk">
		                <input type="file" id="myFile" name="filename">
		                <span>Upload .jpg, .png files only.</span>
		            </div>
		            <div class="text-center">
		                <label class="checkblk">I agree to Terms & Conditions <br>Please agree to terms and conditions
                        <input type="checkbox" checked="checked">
                        <span class="checkmark"></span>
                        </label>
                    </div>
		            <div class="virtualNumberBtn">
                        <div class="primaryButton btn-dcb ">
                            <a href="">Submit</a>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        <!--</div>-->
	</div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.common["Locale"] = localStorage.locale;
import Select2 from 'v-select2-component';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
export default {
    name: "app",
    data() {
        return {
        preloader:false,
        list:[],
        brand_list: [],
        featured_cars: [],
        upcoming_cars: [],
        popular_brands: [],
        popular_cars:[],
        vehicle_types:[],
        car_image_url,
        news_image_url,
        newcar_banners_image_url,
        brandId:0,
        model_list:[],
        modelId:0,
        priceId:0,
        vehicleTypeId:0,
        brand_image_url,
        brand_select_list:[],
        price_select_list:[],
        model_select_list:[],
        isLoading: false,
        loading: false,
        myData:0,
        bannerlist:[]
        };
    },
    components: {Loading,ContentLoader,FacebookLoader},
    methods: {
        
        accordion: function() {
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
            $(function(){
			    $('.search2')
			        .comboSelect()
            })
            $(document).ready(function(){
		        $(".notype .combo-input").prop("readonly", true);
            });
            $(".js-example-basic-single").select2({
            });
            $(".js-example-basic-hide-search").select2({
                minimumResultsForSearch: Infinity
            });
            
            
            $('.blog-slider2').slick({
                // centerMode: true,
                slidesToShow: 3,
                dots: false,
                arrows: true,
                swipe: true,
                swipeToSlide: true,
                infinite:false,
                rows: 1,
                responsive: [{
                breakpoint: 600,
                        settings: {
                        slidesToShow: 1,
                        centerMode: false
                        }
                }]
            }).on('setPosition', function (event, slick) {
			slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });
        },
        loadData: function() {
            var vm = this;
            vm.myData=0;
            vm.isLoading = true;
            //vm.preloader = true;
            console.log("abc");
            axios
                .get(base_url + "api/newcar",  {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
                .then(function(response) {
                    vm.myData=1;
                    vm.list = response.data;
                    vm.bannerlist = response.data.banner_list[0];
                   // console.log( vm.bannerlist );
                    vm.brand_select_list = response.data.brand_select_list;
                    vm.price_select_list = response.data.price_select_list;
                    vm.vehicle_types = response.data.vehicle_types;
                    //vm.preloader = false;
                    vm.isLoading = false;
                    vm.$nextTick(function(){
                        $(".newlaunch-cars-slick-slider")
                        .slick({
                        slidesToShow: 4,
                        dots: false,
                        arrows: true,
                        swipe: true,
                        swipeToSlide: true,
                        infinite: false,
                        rows: 1,
                        responsive: [
                            {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                centerMode: false
                            }
                            },
                            {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 2,
                                centerMode: false
                            }
                            },
                            {
                            breakpoint: 1000,
                            settings: {
                                slidesToShow: 3
                            }
                            }
                        ]
                        })
                        .on("setPosition", function(event, slick) {
                        slick.$slides.css("height", slick.$slideTrack.height() + "px");
                        });
                        $(function(){
			            $('.search2')
			                .comboSelect()
                         })
                        $(document).ready(function(){
                            $(".notype .combo-input").prop("readonly", true);
                        });
                        $(".js-example-basic-single").select2({
                        });
                        $(".js-example-basic-hide-search").select2({
                            minimumResultsForSearch: Infinity
                        });
                        $(document).ready(function () {
                            $('.customer-logos').slick({
                                slidesToShow: 5,
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
                                        slidesToShow: 4
                                        }
                                }, {
                                breakpoint: 567,
                                        settings: {
                                        slidesToShow: 3
                                        }
                                }]
                            });
                        });
                        $('.featured-cars-slick-slider').slick({
                            slidesToShow: 4,
                            dots: false,
                            arrows: true,
                            swipe: true,
                            swipeToSlide: true,
                            infinite:false,
                            rows: 1,
                            responsive: [{
                            breakpoint: 567,
                                    settings: {
                                    slidesToShow: 2,
                                    
                                            centerMode: false,
                                            swipeToSlide: false,
                                            arrows: false,
                                            swipe: false,
                                            
                                            
                                    }
                            },
                            {
                            breakpoint: 767,
                                    settings: {
                                    slidesToShow: 3,
                                            centerMode: false,
                                            swipeToSlide: false,
                                            arrows: false,
                                            swipe: false,
                                            
                                    }
                            },
                            {
                            breakpoint: 1000,
                                    settings: {
                                    slidesToShow: 3,
                                    }
                            },
                            ]

                            }).on('setPosition', function (event, slick) {
                            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
                        });
                    });
                     $('.b-slider').slick({
                            slidesToShow: 1,
                                    slidesToScroll: 1,
                                    autoplay: true,
                                    autoplaySpeed: 1500,
                                    arrows: false,
                                    dots: false,
                                    pauseOnHover: false,
                                    infinite:true,
                                    fade:true
                            });

                    console.log(response.data);
                })
                .catch(function(error) {
                        console.log(error);
                });
               // vm.isLoading = false;
        },
        getModel:function () {
            var vm = this;
             vm.isLoading = true;
            console.log(vm.brandId);
            var id =  vm.brandId
            axios
                .get(base_url + "api/modeldetails/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                 vm.isLoading = false;
                vm.model_select_list = response.data.model_select_list;
               console.log(vm.model_select_list);
            });

        },
        searchData: function() {
         //this.loading = true
            var vm = this;
            vm.brandId = vm.brandId;
            vm.modelId = vm.modelId;
           // console.log(vm.brandSearchId);
            //console.log(vm.priceSearchId);
            if (vm.brandId != "0" && vm.modelId != "0") {
                this.$router.push({ 
                        name: 'newcar-search-details', 
                        query: { brandsearchkey: vm.brandId ,modelsearchkey :vm.modelId } 
                });
            }else {
                if(vm.brandId != "0"){
                    this.$router.push({ 
                        name: 'newcar-search-details', 
                        query: { brandsearchkey: vm.brandId } 
                    });
                }
                if(vm.modelId != "0"){
                    this.$router.push({ 
                        name: 'newcar-search-details', 
                        query: {modelsearchkey :vm.modelId  } 
                    });
                }
            }
        },
        searchPriceData: function() {
         //this.loading = true
            var vm = this;
            vm.priceId = vm.priceId;
            vm.vehicleTypeId = vm.vehicleTypeId;
            console.log(vm.priceId);
            console.log(vm.vehicleTypeId);
            if (vm.priceId != "0" && vm.vehicleTypeId != "0") {
                this.$router.push({ 
                        name: 'newcar-search-details', 
                        query: { pricesearchkey: vm.priceId ,vehicletypesearchkey :vm.vehicleTypeId } 
                });
            }else{
                if (vm.priceId != "0") {
                    this.$router.push({ 
                        name: 'newcar-search-details', 
                        query: { pricesearchkey: vm.priceId } 
                    });
                }
                if (vm.vehicleTypeId != "0") {
                    this.$router.push({ 
                            name: 'newcar-search-details', 
                            query: {vehicletypesearchkey :vm.vehicleTypeId } 
                    });
                }
                console.log("no data");
            }
        },
    },
    
    mounted() {
        this.loadData();
        this.accordion();
        
    }
}
</script>
<style>
    iframe
    {
        display: none !important;
    }
	a.goog-logo-link {
        display: none !important;
    }
	.price-range-field
    {
	    width: 100% !important; 
	}
	ul.filter-list.brand-list {
		height: 200px;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>