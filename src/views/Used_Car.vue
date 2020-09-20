<template>
    <div>
       <!--  <content-loader class="container"
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
        <!-- Breadcrumb Area Start -->
        <div class="breadcrumb-area searchwrap advsearchblk" v-bind:style="{'background-image': 'url(' + usedcar_banners_image_url + bannerlist.banner_image + ')' }">
		<img :src="usedcar_banners_image_url + bannerlist.banner_image" />
        <!--<div class="breadcrumb-area searchwrap advsearchblk">
            <div class="b-slider" >
                <div v-for="banner in bannerlist" class="b-img">
                    <a :href="banner.banner_link"> <img :src="usedcar_banners_image_url + banner.banner_image" /> </a>
                </div>
            </div>-->
			<div class="container">
				<div class="row">
					<div class="col-lg-12 p0">
						<h1 class="title">
							Preowned Cars
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
                                                                <div class="car-price nooptgrp notype readonly">
                                                                    <v-select v-model="priceId" :reduce="price_select_list => price_select_list.id" :options="price_select_list" placeholder="Select Budget">
                                                                    </v-select>
                                                                    <!--<select v-model="priceId">
			                                                            <option  value disabled selected> Select Budget</option>
                                                                        <option value v-for="price in list.price_list" v-bind:value="price.id"> AED {{price.minimum}} - {{price.maximum}}</option>
                                                                    </select>-->
                                                                  
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="car-condition nooptgrp notype readonly">
                                                                    <v-select v-model="ageId" :reduce="age_select_list => age_select_list.id" :options="age_select_list" placeholder="Age of Car" :searchable="false">
                                                                    </v-select>
                                                                    <!--<select v-model="ageId">
                                                                        <option  value disabled selected> Age of Car</option>
                                                                        <option v-bind:value="1">1 Years</option>
		                                                                <option v-bind:value="2">2 Years</option>
                                                                        <option v-bind:value="3">3 Years</option>
                                                                        <option v-bind:value="4">4 Years</option>
                                                                        <option v-bind:value="5">5+ Years</option>
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
                                                                    <!--<select v-model="brandId">
                                                                        <option  value="" disabled selected> Select Brand</option>
                                                                        <option value v-for="brand in list.brand_list" v-bind:value="brand.id"> {{brand.name}}</option>
                                                                    </select> -->                                                                      
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="car-condition nooptgrp readonly">
                                                                    <!--<v-select v-model="ageIdd" :reduce="age_select_list => age_select_list.id" :options="age_select_list" placeholder="Age of Car" :searchable="false">
                                                                    </v-select>-->
                                                                    <v-select v-model="modelId" :reduce="model_select_list => model_select_list.id" :options="model_select_list" placeholder="Select Model">
                                                                    </v-select>
                               										<!--<select v-model="ageIdd">
                                                                        <option  value="" disabled selected> Age of Car</option>
                                                                        <option v-bind:value="1">1 Years</option>
		                                                                <option v-bind:value="2">2 Years</option>
                                                                        <option v-bind:value="3">3 Years</option>
                                                                        <option v-bind:value="4">4 Years</option>
                                                                        <option v-bind:value="5">5+ Years</option>
                                                                    </select>-->
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <button type="button" class="mybtn1" style="width: 100%; outline: 0;" v-on:click="searchBrandData()">Search</button>
                                                            </li>
                                                        </ul>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        
                                </div>
                            </div>
							<router-link :to="{ name: 'preownedcar-search'}" class="searchlink">
                            Advance Search ></router-link>
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
                        <li><a>Preowned Cars</a></li>
                    </ul>
                </div>
            </div>
	    </div>
        <section class="featuredCars new-car">
            <div class="container">
                <div class="row">
                    <h1 class="head">Preowned Cars</h1>
                    <div class="brdr shadow24 wrap">
                        <div class="section-heading">
                            <h2 class="title">
                            Popular Preowned cars
                            </h2>
                        </div>
                        <div class="newlaunch-cars-slick-slider">
                            <div class="product-item" v-for="popular in list.popular_cars">
                                <div class="card shadowWPadding " data-img-fit="true">
                                    <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                                        <div class="imageTransition active" data-autofit="true" data-autofitmobile="true" title=" ">
                                            <a href="">
                                            <img class="hover imageTransition hide active" 
                                            :src="usedcar_image_url + popular.featured_image" 
                                            data-lazy="true"></a>
                                        </div>
                                    </div>
                                    <div class="gsc_col-xs-12 holder ">
                                        <a  class="title" href="">
                                        {{ popular.car_name == '' || popular.car_name == null ? 'N/A' : popular.car_name}}</a>
                                        <div class="price">
                                            <span class="icon-cd_R">{{ popular.currency_code == '' || popular.currency_code == null ? 'N/A' : popular.currency_code }}
                                                </span>{{ popular.price == '' || popular.price == null ? 'N/A' : popular.price}}
                                        </div>
                                        <div class="BtnFull buttonHolder buttonHolder virtualNumberBtn ">
                                            <div class="primaryButton btn-dcb ">
                                                <a href=""><router-link :to="{ name: 'precar-details', params: {id: popular.id }}">
                            View Details</router-link></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-item view-all">
								<div class="card shadowWPadding " data-img-fit="true">
									<a href="" class="viewallbtn"><router-link :to="{ name: 'popular-used-car-list'}"><i class="fas fa-arrow-right"></i>
									View All Cars </router-link></a>
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
                            <router-link :to="{ name: 'brand-search-list-usedcar', params: {id: brand.id }}">
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
                                <div class="card shadowWPadding" data-img-fit="true">
                                    <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                                        <div class="imageTransition active" data-autofit="true" data-autofitmobile="true" title=" ">
                                            <a href="">
                                            <img class="hover imageTransition hide active"
                                            :src="usedcar_image_url + featured.featured_image"  
                                            data-lazy="true"></a>
                                        </div>
                                    </div>
                                    <div class="gsc_col-xs-12 holder ">
                                        <a class="title" href="">
                                            {{ featured.car_name == '' || featured.car_name == null ? 'N/A' : featured.car_name}}</a>
                                        <div class="price">
                                            <span class="icon-cd_R">{{ featured.currency_code == '' || featured.currency_code == null ? 'N/A' : featured.currency_code}}
                                                </span>{{ featured.price == '' || featured.price == null ? 'N/A' : featured.price }}
                                        </div>
                                        <div class="BtnFull buttonHolder buttonHolder virtualNumberBtn ">
                                            <div class="primaryButton btn-dcb ">
                                                <a href=""><router-link :to="{ name: 'precar-details', params: {id: featured.id }}">
                            View Details</router-link></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div class="product-item view-all">
								<div class="card shadowWPadding " data-img-fit="true">
									<a href="" class="viewallbtn"><router-link :to="{ name: 'featured-used-car-list'}"><i class="fas fa-arrow-right"></i>
                                    View All Featured Cars</router-link></a>
								</div>
							</div>
						</div>
                    </div>
                </div>
			</div>
        </section>
        <!-- Featured Cars Area End -->
       <!-- </div>-->
    <!--End --->
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
    components: {Select2,Loading,ContentLoader,FacebookLoader},
    data() {
        return {
        preloader:false,
        list:[],
        brand_list: [],
        featured_cars: [],
        upcoming_cars: [],
        popular_brands: [],
        usedcar_image_url,
        news_image_url,
        brand_image_url,
        priceId:0,
        ageId:0,
        brandId:0,
        modelId:0,
        ageIdd:0,
        brand_select_list:[],
        price_select_list:[],
        model_select_list:[],
        age_select_list:[],
        usedcar_banners_image_url,
        isLoading: false,
        loading: false,
        myData:0,
        bannerlist:[]
        };
    },
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
            console.log("abc");
            axios
                .get(base_url + "api/preownedcar",  {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
                .then(function(response) {
                    vm.myData=1;
                    vm.isLoading = false;
                    vm.list = response.data;
                    vm.bannerlist = response.data.banner_list[0];
                    vm.brand_select_list = response.data.brand_select_list;
                    vm.price_select_list = response.data.price_select_list;
                    vm.age_select_list = [{id:1, label: '1 Year'}, 
                                          {id:2, label: '2 Year'},
                                          {id:3, label: '3 Year'},
                                          {id:4, label: '4 Year'},
                                          {id:5, label: '5+ Year'}
                                          ];
                    vm.$nextTick(function(){
                            $('.newlaunch-cars-slick-slider').slick({
                                slidesToShow: 4,
                                dots: false,
                                arrows: true,
                                swipe: true,
                                swipeToSlide: true,
                                infinite:false,
                                rows: 1,
                                responsive: [{
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
                                        slidesToShow: 3,
                                        }
                                },
                                ]

                                }).on('setPosition', function (event, slick) {
                                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
                            });

                            
                            $(function(){
                                $('.search2')
                                .comboSelect()
                            })
                            $(".js-example-basic-single").select2({
                            });
                            $(".js-example-basic-hide-search").select2({
                                minimumResultsForSearch: Infinity
                            });
                            $(document).ready(function(){
                                $(".notype .combo-input").prop("readonly", true);
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

                    });
              
                });
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
        searchPriceData: function() {
         //this.loading = true
            var vm = this;
            vm.priceId = vm.priceId;
            vm.ageId = vm.ageId;
            console.log(vm.priceId);
            //console.log(vm.vehicleTypeId);
            if (vm.priceId != "0" && vm.ageId != "0") {
                this.$router.push({ 
                        name: 'preowned-search-details', 
                        query: { pricesearchkey: vm.priceId ,agesearchkey :vm.ageId } 
                });
            }else{
                if (vm.priceId != "0") {
                    this.$router.push({ 
                            name: 'preowned-search-details', 
                            query: { pricesearchkey: vm.priceId } 
                    });
                }
                if (vm.ageId != "0") {
                    this.$router.push({ 
                            name: 'preowned-search-details', 
                            query: { agesearchkey :vm.ageId } 
                    });
                }
                console.log("no data");
            }
        },
        searchBrandData:function() {
            var vm = this;
            vm.brandId = vm.brandId;
            vm.modelId = vm.modelId;
            console.log(vm.priceId);
            //console.log(vm.vehicleTypeId);
            if (vm.brandId != "0" && vm.modelId != "0") {
                this.$router.push({ 
                        name: 'preowned-search-details', 
                        query: { brandsearchkey: vm.brandId ,modelsearchkey :vm.modelId } 
                });
            }else{
                if (vm.brandId != "0") {
                    this.$router.push({ 
                            name: 'preowned-search-details', 
                            query: { brandsearchkey: vm.brandId } 
                    });
                }
                if (vm.modelId != "0") {
                    this.$router.push({ 
                            name: 'preowned-search-details', 
                            query: { modelsearchkey :vm.modelId } 
                    });
                }
                console.log("no data");
            }
        }
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