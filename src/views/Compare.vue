<template>
    <div>
        <!-- <content-loader
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
  </content-loader>--->
    <!---<div v-if="myData==1">-->
    <div v-if="isLoading == true">   <div id="overlayer"></div>
    <span class="loader">
    <span class="loader-inner"></span>
    </span></div>
        <!-- Breadcrumb Area Start -->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 p0">
                        <h1 class="pagetitle">
                            Confused? Easy way to compare cars
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Area End -->

        <div class="breadcrumb2">
            <div class="container">
                <div class="row">
                    <ul>
                        <li><router-link :to="{ name: 'home'}">
                        Home</router-link></li>
                        <li><a>Compare Cars</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <section class="sub-categori compare-cars padbtm">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 box-wrap p0">
                        <div class="compare-car">
                            <div class="section-heading">
                                <h2 class="title">
                                Compare Cars
                                </h2>
						        <p class="mb-30"><span class="mthide">Choose at least two cars</span><span class="mtview">Select any two cars</span> to compare  of your choice to see how they compare on price, features, and performance.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-xs-6 col-mob">
                                <div class="compare_div" style="text-align:center">
    							    <div class="select_wrap d1">
                                        <div class="adcaricn">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        <div class="addTitle">Add car</div>
                                    </div>
							        <div class="inputfield pl1">
                                        <v-select v-model="modelId" :reduce="model_select_list => model_select_list.id" :options="model_list" placeholder="Select Brand" @input="getVariant()">
                                        </v-select>
							        </div>
        							<div class="inputfield pl1">
		            					<v-select v-model="carId" :reduce="variant_list => variant_list.id" :options="variant_list" placeholder="Select Variant" @input="getCarDetails()">
                                        </v-select>
				        			</div>
				    			</div>
                                <div class="result-box-1 rb1">
                                    <a class="close3" @click="closbutton()">X</a>
                                    <div class="card shadowWPadding" v-for="car in car_deatils">
                                        <a href="">
                                            <img  :src="car_image_url + car.featured_image">
                                        </a>
                                        <div class="gsc_col-xs-12 holder">
                                            <a class="title">{{car.car_name}} <i class="icon-cd-write-a-comment"  @click="closcar()"></i></a>
                                            <div class="price"><span class="icon-cd_R">AED</span>{{car.price}}</div>
                                        </div>
                                    </div>                                        
                                </div>
                            </div>
                            <div class="vsTag">VS</div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-6 col-mob sec1">
                            <div class="compare_div second" style="text-align:center">
    							<div class="select_wrap d2">
                                    <div class="adcaricn">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        <div class="addTitle">Add car</div>
                                    </div>
        							<div class="inputfield px1">
                                        <v-select v-model="modelId1" :reduce="model_list1 => model_list1.id" :options="model_list1" placeholder="Select Brand" @input="getVariant1()">
                                        </v-select>
						        	</div>
        							<div class="inputfield">
						                <v-select v-model="carId1" :reduce="variant_list1 => variant_list1.id" :options="variant_list1" placeholder="Select Variant" @input="getCarDetails1()">
                                        </v-select>
						        	</div>
						    	</div>
                                <div class="result-box-1 rb2">
                                    <a class="close3" @click="closbutton1()">X</a>
                                    <div class="card shadowWPadding" v-for="car1 in car_deatils1">
                                        <a href="">
                                            <img  :src="car_image_url + car1.featured_image">
                                        </a>
                                        <div class="gsc_col-xs-12 holder">
                                            <a class="title">{{car1.car_name}} <i class="icon-cd-write-a-comment"  @click="closcar1()"></i></a>
                                            <div class="price"><span class="icon-cd_R">AED</span>{{car1.price}}</div>
                                        </div>
                                    </div>                                        
                                </div>
                            </div>
                            <div class="vsTag">VS</div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-6 col-mob disabled sec2">
                            <div class="compare_div second" style="text-align:center">
    							<div class="select_wrap">
                                    <div class="adcaricn">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        <div class="addTitle">Add car</div>
                                    </div>
        							<div class="inputfield">
                                        <v-select v-model="modelId1" :reduce="model_list1 => model_list1.id" :options="model_list1" placeholder="Select Brand" @input="getVariant1()">
                                        </v-select>
						        	</div>
        							<div class="inputfield">
						                <v-select v-model="carId1"  :reduce="variant_list1 => variant_list1.id" :options="variant_list1" placeholder="Select Variant" @input="getCarDetails1()">
                                        </v-select>
						        	</div>
						    	</div>
                                <div class="result-box-1 rb2">
                                    <a class="close3" @click="closbutton1()">X</a>
                                    <div class="card shadowWPadding" v-for="car1 in car_deatils1">
                                        <a href="">
                                            <img  :src="car_image_url + car1.featured_image">
                                        </a>
                                        <div class="gsc_col-xs-12 holder">
                                            <a class="title">{{car1.car_name}} <i class="icon-cd-write-a-comment"  @click="closcar1()"></i></a>
                                            <div class="price"><span class="icon-cd_R">AED</span>{{car1.price}}</div>
                                        </div>
                                    </div>                                        
                                </div>
                            </div>
                            <div class="vsTag">VS</div>
                        </div>
                        <div class="col-md-4 col-mob rsp_hid sec3">
                            <div class="compare_div" style="text-align:center">
    							<div class="select_wrap d3">
                                    <div class="adcaricn">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        <div class="addTitle">Add car</div>
                                    </div>
        							<div class="inputfield">
                                        <v-select v-model="modelId2" :reduce="model_list2 => model_list2.id" :options="model_list2" placeholder="Select Brand" @input="getVariant2()">
                                        </v-select>
				        			</div>
        							<div class="inputfield">
							            <v-select v-model="carId2" :reduce="variant_list2 => variant_list2.id" :options="variant_list2" placeholder="Select Variant" @input="getCarDetails2()">
                                        </v-select>
					        		</div>
						    	</div>
                                <div class="result-box-1 rb3">
                                    <a class="close3" @click="closbutton2()">X</a>
                                    <div class="card shadowWPadding" v-for="car2 in car_deatils2">
                                        <a href="">
                                            <img :src="car_image_url + car2.featured_image">
                                        </a>
                                        <div class="gsc_col-xs-12 holder">
                                            <a class="title">{{car2.car_name}} <i class="icon-cd-write-a-comment"  @click="closcar2()"></i></a>
                                            <div class="price"><span class="icon-cd_R">AED</span>{{car2.price}}</div>
                                        </div>
                                    </div>                                        
                                </div>
                                <div class="vsTag">VS</div>
                            </div>
                        </div>
                        <div class="col-md-4 col-mob rsp_hid disabled sec4">
                            <div class="compare_div" style="text-align:center">
    							<div class="select_wrap">
                                    <div class="adcaricn">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        <div class="addTitle">Add car</div>
                                    </div>
        							<div class="inputfield">
                                        <v-select v-model="modelId2" :reduce="model_list2 => model_list2.id" :options="model_list2" placeholder="Select Brand" @input="getVariant2()">
                                        </v-select>
				        			</div>
        							<div class="inputfield">
							            <v-select v-model="carId2" :reduce="variant_list2 => variant_list2.id" :options="variant_list2" placeholder="Select Variant" @input="getCarDetails2()">
                                        </v-select>
					        		</div>
						    	</div>
                                <div class="result-box-1 rb3">
                                    <a class="close3" @click="closbutton2()">X</a>
                                    <div class="card shadowWPadding" v-for="car2 in car_deatils2">
                                        <a href="">
                                            <img :src="car_image_url + car2.featured_image">
                                        </a>
                                        <div class="gsc_col-xs-12 holder">
                                            <a class="title">{{car2.car_name}} <i class="icon-cd-write-a-comment"  @click="closcar2()"></i></a>
                                            <div class="price"><span class="icon-cd_R">AED</span>{{car2.price}}</div>
                                        </div>
                                    </div>                                        
                                </div>
                                <div class="vsTag">VS</div>
                            </div>
                        </div>
						<div class="col-md-12 compare_now_button_div" v-if = "car_deatils1 != ''">
                            <a id="compare_now" class="compare_now_button" style="border-color: white;"  @click="carCompareId()">
                                <span style="color: white;">Compare Now</span>
                            </a>
                        </div>
                        <div class="col-md-12 compare_now_button_div disabled" v-if = "car_deatils1 == ''">
                            <a id="compare_now" class="compare_now_button" style="border-color: white;"  @click="carCompareId()">
                                <span style="color: white;">Compare Now</span>
                            </a>
                        </div>
                    </div>
                    <h5 class="vali" style="color: red;margin-left: 495px;">SELECT ATLEAST TWO CARS</h5>
                    <h5 class="valil" style="color: red;margin-left: 478px;">PLEASE CHOOSE DIFFERENT CARS</h5>
				    </div>
                </div>
	        </div>
        </section>

        <!--<section class="sub-categori compare-cars padbtm">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 box-wrap p0">
                        <div class="compare-car">
                            <div class="section-heading">
                                <h2 class="title">
                                    Compare Cars
                                </h2>
						        <p class="mb-30"><span class="mthide">Choose at least two cars</span><span class="mtview">Select any two cars</span> to compare  of your choice to see how they compare on price, features, and performance.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-xs-6 col-mob">
                                <div class="compare_div cd1" style="text-align:center">
                                   <div class="adcaricn pl2" onclick="showDiv()">
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                            <div class="addTitle">Add car</div>
                                        </div>
                                        <div class="inputfield customSelect pl2">
                                            <input type="button" onclick="showDiv()" value="Select Brand/Model">
                                        </div>
                                        <div class="inputfield customSelect inputdisabled pl2">
                                            <input disabled="" placeholder="Select Variant" data-id="" autocomplete="off" type="text">
                                        </div>
                                   <div id="popup1"  style="display:none;" class="popuplist1 pl1" >
                                        <a onclick="closDiv()" class="close2" >X</a>
                                        <ul class="nav nav-tabs">
                                            <li><a data-toggle="tab" href="#brand" class="active">Brand/Model</a></li>
                                            <li><a data-toggle="tab" href="#variant">Variant</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div id="brand" class="tab-pane fade in active">
                                                <Select2 v-model="modelId" :options="model_list" placeholder="Select Brand" @change="getVariant()">
                                                </Select2>
                                                
                                            </div>
                                            <div id="variant" class="tab-pane fade">
                                                <Select2 v-model="carId" :options="variant_list" placeholder="All Vehicle Type" @change="getCarDetails()">
                                                </Select2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="result-box-1 rb1">
                                        <a class="close3" @click="closbutton()">X</a>
                                        <div class="card shadowWPadding" v-for="car in car_deatils">
                                            <a href="">
                                                <img  :src="car_image_url + car.featured_image">
                                            </a>
                                            <div class="gsc_col-xs-12 holder">
                                                <a class="title">{{car.car_name}} <i class="icon-cd-write-a-comment"  @click="closcar()"></i></a>
                                                <div class="price"><span class="icon-cd_R">AED</span>{{car.price}}</div>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="vsTag">VS</div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-xs-6 col-mob pq1">
                                <div class="compare_div cd1" style="text-align:center">
                                   <div class="adcaricn px2" @click="brandSelect()">
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                            <div class="addTitle">Add car</div>
                                        </div>
                                        <div class="inputfield customSelect px2">
                                            <input type="button" @click="brandSelect()" value="Select Brand/Model">
                                        </div>
                                        <div class="inputfield customSelect inputdisabled px2">
                                            <input disabled="" placeholder="Select Variant" data-id="" autocomplete="off" type="text">
                                        </div>
                                    <div id="popup1"  style="display:none;" class="popuplist1 px1" >
                                        <a @click="brandClose()" class="close" >X</a>
                                        <ul class="nav nav-tabs">
                                            <li><a data-toggle="tab" href="#brand1" class="active">Brand/Model</a></li>
                                            <li><a data-toggle="tab" href="#variant1">Variant</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div id="brand1" class="tab-pane fade in active">
                                                <Select2 v-model="modelId1" :options="model_list1" placeholder="Select Brand" @change="getVariant1()">
                                                </Select2>
                                               
                                            </div>
                                            <div id="variant1" class="tab-pane fade">
                                                 <Select2 v-model="carId1" :options="variant_list1" placeholder="All Vehicle Type" @change="getCarDetails1()">
                                                </Select2>
                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div class="result-box-1 rb2">
                                        <a class="close3" @click="closbutton1()">X</a>
                                        <div class="card shadowWPadding" v-for="car1 in car_deatils1">
                                            <a href="">
                                                <img  :src="car_image_url + car1.featured_image">
                                            </a>
                                            <div class="gsc_col-xs-12 holder">
                                                <a class="title">{{car1.car_name}} <i class="icon-cd-write-a-comment"  @click="closcar1()"></i></a>
                                                <div class="price"><span class="icon-cd_R">AED</span>{{car1.price}}</div>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="vsTag">VS</div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-xs-6 col-mob disabled pq11">
                                <div class="compare_div" style="text-align:center">
                                    <div class="adcaricn">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        <div class="addTitle">Add car</div>
                                    </div>
                                    <div class="inputfield customSelect">
                                        <input placeholder="Select Brand/Model" autocomplete="off" type="text">
                                    </div>
                                    <div class="inputfield customSelect inputdisabled">
                                        <input disabled="" placeholder="Select Variant" data-id="" autocomplete="off" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-xs-6 col-mob pq2">
                                <div class="compare_div cd1" style="text-align:center">
                                   <div class="adcaricn pw2" @click="brandSelect1()">
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                            <div class="addTitle">Add car</div>
                                        </div>
                                        <div class="inputfield customSelect pw2">
                                            <input type="button" value="Select Brand/Model" @click="brandSelect1()">
                                        </div>
                                        <div class="inputfield customSelect inputdisabled pw2">
                                            <input disabled="" placeholder="Select Variant" data-id="" autocomplete="off" type="text">
                                        </div>
                                    <div id="popup1"  style="display:none;" class="popuplist1 pw1" >
                                        <a @click="brandClose1()" class="close2" >X</a>
                                        <ul class="nav nav-tabs">
                                            <li><a data-toggle="tab" href="#brand2" class="active">Brand/Model</a></li>
                                            <li><a data-toggle="tab" href="#variant2">Variant</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div id="brand2" class="tab-pane fade in active">
                                                <Select2 v-model="modelId2" :options="model_list2" placeholder="Select Brand" @change="getVariant2()">
                                                </Select2>
                                                
                                            </div>
                                            <div id="variant2" class="tab-pane fade">
                                                 <Select2 v-model="carId2" :options="variant_list2" placeholder="All Vehicle Type" @change="getCarDetails2()">
                                                </Select2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="result-box-1 rb3">
                                        <a class="close3" @click="closbutton2()">X</a>
                                        <div class="card shadowWPadding" v-for="car2 in car_deatils2">
                                            <a href="">
                                                <img :src="car_image_url + car2.featured_image">
                                            </a>
                                            <div class="gsc_col-xs-12 holder">
                                                <a class="title">{{car2.car_name}} <i class="icon-cd-write-a-comment"  @click="closcar2()"></i></a>
                                                
                                                <div class="price"><span class="icon-cd_R">AED</span>{{car2.price}}</div>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="vsTag">VS</div>
                            </div>
                            <div class="col-md-4 rsp_hid disabled pq12">
                                <div class="compare_div" style="text-align:center">
                                    <div class="adcaricn">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        <div class="addTitle">Add car</div>
                                    </div>
                                    <div class="inputfield customSelect">
                                        <input placeholder="Select Brand/Model" autocomplete="off" type="text">
                                    </div>
                                    <div class="inputfield customSelect inputdisabled">
                                        <input disabled="" placeholder="Select Variant" data-id="" autocomplete="off" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 compare_now_button_div">
                            <button type="button" class="compare_now_button" id="compare_now"  @click="carCompareId()">Compare Now</button>
                        </div>
                    </div>
                    <h5 class="vali" style="color: red;margin-left: 519px;">SELECT ATLEAST TWO CARS</h5>
                </div>
			</div>
        </section>-->
        <!-- sub-categori Area End -->
        <!-- New Launched cars Start -->
   
        <section class="featuredCars mostcompared">
            <div class="container">
                <div class="row">
                    <div class="brdr shadow24 wrap">
                        <div class="section-heading">
                            <h2 class="title">
                                <!-- New Launched cars -->
                            Most Compared Cars
                            </h2>
                        </div>                           
                        <div class="compare-slick-slider">   
                            <!--<div class="product-item" v-for="compare_cars in compare_car_list" >
                                <div class="card left" data-img-fit="true" v-for="compare in compare_cars.cars_list" >
                                    <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                                        <div class="imageTransition active" data-autofit="true" data-autofitmobile="true" title=" ">
                                            <a href="">
                                                <img class="hover imageTransition hide active" 
                                                :src="car_image_url + compare.featured_image"  data-lazy="true">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="gsc_col-xs-12 holder ">
                                        <a class="title" href="">{{compare.car_name}}</a>
                                        <div class="price">
                                            <span class="icon-cd_R">AED</span>{{compare.price}}
                                        </div>
                                    </div>
									<div class="vsTag">VS</div>
                                </div>
                            </div>-->

                            <div class="product-item" v-for="compare_cars in compare_car_list1">
                                <div v-for="compare in compare_cars">
                                    <div class="card left" data-img-fit="true" >
                                        <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                                            <div class="imageTransition active" data-autofit="true" data-autofitmobile="true" title=" ">
                                                <a>
                                                    <img class="hover imageTransition hide active" 
                                                    :src="car_image_url + compare.featured_image" data-lazy="true">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="gsc_col-xs-12 holder ">
                                            <a>{{compare.car_name}}</a>
                                            <div class="price"><span class="icon-cd_R">AED</span>{{compare.price}}</div>
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="BtnFull buttonHolder buttonHolder virtualNumberBtn ">
                                    <div class="primaryButton btn-dcb "><a>Compare Now</a></div>
                                </div>-->
                            </div>
						</div>
                    </div>
			    </div>
            </div>
        </section>
       <!-- </div>-->
    <!-- Most Compared Cars -->
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
        popular_cars:[],
        car_image_url,
        news_image_url,
        brandId:'',
        model_list:[],
        modelId:'',
        priceId:'',
        vehicleTypeId:'',
        variant_list:[],
        carId:0,
        car_deatils:[],
        variant_list1:[],
        modelId1:'',
        carId1:0,
        model_list1:[],
        car_deatils1:[],
        variant_list2:[],
        modelId2:'',
        carId2:0,
        model_list2:[],
        car_deatils2:[],
        carSearchKey:[],
        compare_car_list:[],
        compare_car_list1:[],
        compare_car_list2:[],
        isLoading: false,
        loading: false,
         myData:0,
        };
    },
    methods: {
        accordion: function() {
            
        },
        loadData: function() {
            var vm = this;
            vm.myData=0;
            vm.isLoading = true;
            vm.carId = vm.$route.params.id; 
            console.log("carId");
            axios
                .get(base_url + "api/comparecar",  {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
                .then(function(response) {
                    vm.myData=1;
                    vm.isLoading = false;
                    vm.model_list = response.data.model_list;
                    vm.model_list1 = response.data.model_list;
                    vm.model_list2 = response.data.model_list;
                    vm.compare_car_list = response.data.car_list;
                    vm.compare_car_list.forEach(element => {
                       vm.compare_car_list1.push(element.cars_list);
                    });
                    console.log(vm.compare_car_list1);
                    //vm.compare_car_list1 = response.data.car_list[1];
                   // vm.compare_car_list2 = response.data.car_list;
                    //console.log(vm.compare_car_list);
                    // console.log(vm.compare_car_list1);
                    //  console.log(vm.compare_car_list2);
                     if(vm.carId > 0){
                        vm.getCarDetails();
                     }

                    vm.$nextTick(function(){
                       $(function(){
                $('.search2')
                .comboSelect()
            })
            $(".js-example-basic-hide-search").select2({
                minimumResultsForSearch: Infinity
            });
            $(".js-example-basic-single ").select2({
            });
            $('.compare-slick-slider').slick({
                slidesToShow: 3,
                dots: false,
                arrows: true,
                swipe: true,
                swipeToSlide: true,
				infinite:false,

                responsive: [{
                    breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
							arrows: false,
							swipe: false,
							swipeToSlide: false,
                        }
                    },
                    {
                    breakpoint: 1000,
                        settings: {
                            slidesToShow: 2,
							arrows: false,
							swipe: false,
							swipeToSlide: false,
                        }
                    },
                ]
            });
                        
                    });
                    console.log(response.data);
                })
                .catch(function(error) {
                        console.log(error);
                });
        },
        getVariant:function () {
            var vm = this;
            vm.myData=0;
           // vm.isLoading = true;
            console.log(vm.modelId);
            var id =  vm.modelId
            axios
                .get(base_url + "api/variantcar/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                vm.myData=1;
               // vm.isLoading = false;
                vm.variant_list = response.data.variant_list;
                vm.$nextTick(function(){
                  // $('#variant').show(); 
                  // $('#variant').addClass("active");
                  //  $('#brand').removeClass("active");
                });
               console.log(vm.model_list);
            });

        },
        getCarDetails:function (){
            var vm = this;
            vm.myData=0;
            vm.isLoading = true;
            console.log(vm.carId);
            var id =  vm.carId
            axios
                .get(base_url + "api/getcar/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                vm.myData=1;
                vm.isLoading = false;
                vm.car_deatils = response.data.car_deatils;
                console.log(vm.car_deatils);
                vm.$nextTick(function(){
                     $('.sec1').show();
                     $('.sec2').hide();
                      $('.rb1').show();
                      $('.d1').hide();
                      
                    /*$('.pl1').hide();
                    $('.pl2').hide();
                    $('.rb1').show();
                    $('.cd1').removeClass("excl1");
                    $('.pq1').show();
                    $('.pq11').hide();*/
                });
            });
        },
        closcar:function(){
            this.carId = 0;
            this.modelId = 0;
            $('.pl1').show();
            $('.pl2').hide();
            $('.rb1').hide();
            $('.cd1').addClass("excl1");
            $('.d1').show();
        },
        closbutton:function(){
             this.carId = 0;
            this.modelId = 0;
             $('.pl1').show();
             $('.pl2').show();
             $('.rb1').hide();
             $('.cd1').addClass("excl1");
             $('.d1').show();
        },
        getVariant1:function () {
            var vm = this;
            vm.myData=0;
           // vm.isLoading = true;
            console.log(vm.modelId);
            var id =  vm.modelId1
            axios
                .get(base_url + "api/variantcar/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                vm.myData=1;
               // vm.isLoading = false;
                vm.variant_list1 = response.data.variant_list;
               console.log(vm.model_list);
            });

        },
        getCarDetails1:function (){
            var vm = this;
            vm.myData=0;
            vm.isLoading = true;
            console.log(vm.carId);
            var id =  vm.carId1
            axios
                .get(base_url + "api/getcar/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                vm.myData=1;
                vm.isLoading = false;
                vm.car_deatils1 = response.data.car_deatils;
               console.log(vm.car_deatils);
                vm.$nextTick(function(){
                    $('.sec3').show();
                    $('.sec4').hide();
                    $('.rb2').show();
                    $('.d2').hide();
                   /* $('.px1').hide();
                    $('.px2').hide();
                    $('.rb2').show();
                    $('.cd1').removeClass("excl1");
                    $('.pq2').show();
                    $('.pq12').hide();*/
                });
            });
        },
        closcar1:function(){
             this.carId1 = 0;
            this.modelId1 = 0;
            $('.px1').show();
            $('.px2').hide();
            $('.rb2').hide();
            $('.cd1').addClass("excl1");
            $('.d2').show();
        },
        closbutton1:function(){
             this.carId1 = 0;
            this.modelId1 = 0;
             $('.px1').show();
             $('.px2').show();
             $('.rb2').hide();
             $('.cd1').addClass("excl1");
             $('.d2').show();
        },
        brandSelect:function(){
             $('.px1').show();
             $('.px2').hide();
        },
        brandClose:function(){
             $('.px1').hide();
             $('.px2').show();
        },
        brandSelect1:function(){
             $('.pw1').show();
             $('.pw2').hide();
        },
        brandClose1:function(){
             $('.pw1').hide();
             $('.pw2').show();
        },
        getVariant2:function () {
            var vm = this;
            vm.myData=0;
           // vm.isLoading = true;
            console.log(vm.modelId2);
            var id =  vm.modelId2
            axios
                .get(base_url + "api/variantcar/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                vm.myData=1;
               // vm.isLoading = false;
                vm.variant_list2 = response.data.variant_list;
               console.log(vm.model_list);
            });

        },
        getCarDetails2:function (){
            var vm = this;
            vm.isLoading = true;
            console.log(vm.carId);
            var id =  vm.carId2;
            vm.myData=0;
            axios
                .get(base_url + "api/getcar/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                vm.myData=1;
                vm.isLoading = false;
                vm.car_deatils2 = response.data.car_deatils;
               console.log(vm.car_deatils);
                vm.$nextTick(function(){
                    $('.pw1').hide();
                    $('.pw2').hide();
                    $('.rb3').show();
                    $('.cd1').removeClass("excl1");
                    $('.d3').hide();
                   // $('.pq2').show();
                   // $('.pq12').hide();
                });
            });
        },
        closcar2:function(){
             this.carId2 = 0;
            this.modelId2 = 0;
            $('.pw1').show();
            $('.pw2').hide();
            $('.rb3').hide();
            $('.cd1').addClass("excl1");
            $('.d3').show();
            
        },
        closbutton2:function(){
             this.carId2 = 0;
            this.modelId2 = 0;
             $('.pw1').show();
             $('.pw2').show();
             $('.rb3').hide();
             $('.cd1').addClass("excl1");
             $('.d3').show();
        },
        carCompareId:function (){
            var vm = this;
            vm.carId = vm.carId;
            vm.carId1 = vm.carId1;
            vm.carId2 = vm.carId2;
            console.log(vm.carId);
            console.log(vm.carId1);
            console.log(vm.carId2);
            if(vm.carId != vm.carId1 && vm.carId != vm.carId2 && vm.carId1 != vm.carId2){
            if (vm.carId != '' && vm.carId1 != '' && vm.carId2 != '') {
                vm.carSearchKey.push(vm.carId);
                vm.carSearchKey.push(vm.carId1);
                vm.carSearchKey.push(vm.carId2);
                console
                this.$router.push({ 
                        name: 'compare-search-details', 
                        query: { carSearchKey: vm.carSearchKey } 
                });
            }else if ((vm.carId != '' && vm.carId1 != '') )
            {
                vm.carSearchKey.push(vm.carId);
                vm.carSearchKey.push(vm.carId1);
                this.$router.push({ 
                        name: 'compare-search-details', 
                        query: { carSearchKey: vm.carSearchKey } 
                });
            }else if (vm.carId != '' && vm.carId2 != '') {
                vm.carSearchKey.push(vm.carId);
                vm.carSearchKey.push(vm.carId2);
                this.$router.push({ 
                        name: 'compare-search-details', 
                        query: { carSearchKey: vm.carSearchKey } 
                });
            }else if (vm.carId1 != '' && vm.carId2 != '') {
                vm.carSearchKey.push(vm.carId1);
                vm.carSearchKey.push(vm.carId2);
                this.$router.push({ 
                        name: 'compare-search-details', 
                        query: { carSearchKey: vm.carSearchKey } 
                });
            }
            else{
               $('.vali').show();
            }
            }else{
               $('.valil').show();
            }
           /* vm.priceSearchId = vm.priceSearchId;
            console.log(vm.brandSearchId);
            console.log(vm.priceSearchId);
            if (vm.brandSearchId != "0" || vm.priceSearchId != "0") {
                this.$router.push({ 
                        name: 'home-search-details', 
                        query: { brandsearchkey: vm.brandSearchId ,pricesearchkey :vm.priceSearchId } 
                });
            }else{
                console.log("no data");
            }*/
        },
    },
    mounted() {
        this.loadData();
        this.accordion();  
        $(".loader").delay(2000).fadeOut("slow");
        $("#overlayer").delay(2000).fadeOut("slow");

        $('.sec1').hide();
        $('.sec2').show();
        $('.sec3').hide();
        $('.sec4').show();
        $('.vali').hide();
        $('.valil').hide();
        
       //$('.pq1').hide();
       //$('.pq11').show();
       //$('.pq2').hide();
       //$('.pq12').show();
       //$('.vali').hide();
    }
    
}
</script>
<style scoped>
/*PRELOADING------------ */
#overlayer {
  width:100%;
  height:100%;  
  position:absolute;
  z-index:1;
  background: rgba(0,0,0,0.9);top: 0;bottom: 0px;position:fixed
}
.loader {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: absolute;
  z-index:3;
  border: 4px solid #Fff;
  top: 50%;
  animation: loader 2s infinite ease;
  margin-left:auto;
  margin-right:auto;
  left:0px;
  right:0px;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }}
label {
  display: block;
}
</style>