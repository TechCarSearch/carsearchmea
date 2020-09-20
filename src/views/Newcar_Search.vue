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
  </content-loader>-->
       <!--<div v-if="myData==1">-->
        <div v-if="isLoading == true">   <div id="overlayer"></div>
            <span class="loader">
            <span class="loader-inner"></span>
            </span>
        </div>
        <section class="Googl_ads ads2 mtop">
            <div class="container">
                <!--<div class="adsgg">
                    <img src="images/kbb-banner-march-2019.jpg">
                </div>-->
            </div>
        </section>
       
        <div class="breadcrumb2">
            <div class="container">
                <ul>
                    <li><router-link :to="{ name: 'home'}">
                        Home</router-link></li>
                    <li><router-link :to="{ name: 'new-cars'}">
                        New Cars</router-link></li>
                    <li><a>New Cars Search</a></li>
                </ul>
            </div>
        </div>
        <!-- Mobile -->
        <ul class="filtersticky">
            <li data-toggle="modal" data-target="#sortby"><span class="icon-cd-sorting"></span>Sort</li>
            <li data-toggle="modal" data-target="#filterpopup"><span class="icon-cd-filter"></span>Filters</li>
        </ul>

        <div id="sortby" class="sortby modal" role="dialog" aria-modal="true">
	        <div class="">
                <span class="close3"  data-dismiss="modal">×</span>
	            <h2>Sort by :</h2>
                <ul>
                    <li v-for="sort in sort_select_list">
                        <button v-bind:value='sort.id' @click='sideSearchd(sort.id)' data-dismiss="modal" 
                        style="background: white;border-color: white;border-bottom: 0px;border-right: 0px;"> {{sort.label}}</button>
                    </li>	
	            </ul>
               <!-- <ul class="sortbymob" v-for="sort in sort_select_list">
                    <li>
                        <a v-bind:value='sort.id' @click="sideSearchhh(sort.id)">{{ sort.label }}</a>
                    </li>
                    
	            </ul>-->
                
	        </div>
	    </div>
	    <!-- Mobile -->

        <!-- sub-categori Area Start -->
        <section class="sub-categori product">
            <div class="container">
		        <div class="row">
		            <div id="filterpopup" class="filterpopup modal col-md-4 col-lg-3 col-left" role="dialog" aria-modal="true">
                        <div class="modal-wrap">
	                        <span class="close3" data-dismiss="modal">×</span>
			                    <div class="left-area" id="mobfilter">
                                    <!--<div class="filter-result-area">
                                        <div class="header-area filter-title">
                                            <h4 class="title ">
                                                Filter Results By <div class="clearall">Clear all filters</div>
                                            </h4>
					                    </div>
						                <div class="header-area accordion active">
							                <h4 class="title">
								            Price
							                </h4>
						                </div>
						                <div class="body-area panel" style="display:block;max-height:100%">
							            <form action="#">
								            <div class="price-range-block">
									            <div id="slider-range" class="price-filter-range" name="rangeInput"></div>
								                <div class="livecount">
										            <input type="number"  id="min_price" v-model="min_search_price" class="price-range-field" placeholder="10000"  step="5000"/>
										            <span>To</span>
										            <input type="number"  id="max_price" v-model="max_search_price" class="price-range-field" placeholder="5000000" step="5000"/>
									            </div>
								            </div>
                                            <button class="filter-btn price-btn apply-btn" type="button" @click='updateSearch()'>Apply</button>
							            </form>
						            </div>
					            </div>-->
                                <!-- Price sorting function start-->
					            <div class="design-area">
				                    <div class="header-area accordion">
							            <h4 class="title">
								        Price
							            </h4>
						            </div>
						            <div class="body-area panel">
						                <ul class="filter-list brand-list">
											<li v-for="price in price_list">
									            <div class="content">
										            <div class="check-box">
											            <div class="form-check form-check-inline" >
                                                            <input class="chb" type="radio" 
                                                            v-bind:value='price.id' v-model='pricekey' @change='updateSearch()'>
												            <span class="checkmark"></span>
												            <label class="form-check-label brand-label" for="b142">
													       AED {{price.minimum_text == '' || price.minimum_text == null ? 'N/A' : price.minimum_text}}
                                                            -{{price.maximum_text == '' || price.maximum_text == null ? 'N/A' : price.maximum_text}} <span class="count"></span>
												            </label>
											            </div>
										            </div>
									            </div>
								            </li>
										</ul>
                                    </div>
                                </div>
					            <!-- price sorting function  end -->
					            <!-- brand type sorting function start-->
					            <div class="design-area">
				                    <div class="header-area accordion">
							            <h4 class="title">
								        Brand
							            </h4>
						            </div>
						            <div class="body-area panel">
						                <input type="text" class="searchinput" placeholder="eg . Maruti" onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'eg . Maruti*'" v-model="brandsearch">
						                <ul class="filter-list brand-list">
											<li v-for="brand in filteredBrands">
									            <div class="content">
										            <div class="check-box">
											            <div class="form-check form-check-inline">
                                                            <input class="form-check-input brand-check" type="checkbox" v-bind:id='brand.name'
                                                            v-bind:value='brand.id' v-model='brandKey' @change='updateSearch()'>
												            <span class="checkmark"></span>
												            <label class="form-check-label brand-label" for="b142">
													        {{brand.name == '' || brand.name == null ? 'N/A' : brand.name}} 
												            </label>
											            </div>
										            </div>
									            </div>
								            </li>
										</ul>
                                    </div>
                                </div>
					            <!-- brand type sorting function  end -->

					            <!-- model sorting function start-->
					            <div class="design-area">
                                    <div class="header-area accordion">
                                        <h4 class="title">
                                            Model
                                        </h4>
                                    </div>
						            <div class="body-area panel">
						                <input type="text" class="searchinput" placeholder="eg . Swift" onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'eg . Swift*'" v-model="modelsearch">
						                <ul class="filter-list brand-list">
                                            <li v-for="model in filteredModels">
                                                <div class="content">
                                                    <div class="check-box">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input model_id-check" type="checkbox"
                                                             v-bind:value='model.id' v-model='modelKey' @change='updateSearch()' >
                                                            <span class="checkmark"></span>
                                                            <label class="form-check-label brand-label" for="mo677">
                                                                {{model.name == '' || model.name == null ? 'N/A' : model.name}} 
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
							            </ul>
                                    </div>
                                </div>
					            <!-- model sorting function end-->
					            <!-- fuel type sorting function start-->
                                <div class="design-area">
                                    <div class="header-area accordion">
                                        <h4 class="title">
                                            Fuel Types
                                        </h4>
                                    </div>
                                    <div class="body-area panel">
                                        <ul class="filter-list brand-list fueltype">
                                            <li class="d-block" v-for="fuel in fuel_type_list">
                                                <div class="content">
                                                    <div class="check-box">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input fuel_type_id-check" type="checkbox" 
                                                            v-bind:value='fuel.id' v-model='fuelKey' @change='updateSearch()'>
                                                            <span class="checkmark"></span>
                                                            <label class="form-check-label brand-label" for="f8">
                                                                {{ fuel.name == '' || fuel.name == null ? 'N/A' : fuel.name}}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>							
							            </ul>
                                    </div>
                                </div>
					            <!-- seating_capacity  sorting function start-->
					            <div class="design-area">
						            <div class="header-area accordion">
                                        <h4 class="title">
                                            Seating Capacity
                                        </h4>
						            </div>
						            <div class="body-area panel">
							            <ul class="filter-list brand-list">
                                            <li v-for="seat in seating_capacity_list">
                                                <div class="content">
                                                    <div class="check-box">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input seating_capacity_id-check" type="checkbox" 
                                                            v-bind:value='seat.id' v-model='seatKey' @change='updateSearch()' >
                                                            <span class="checkmark"></span>
                                                            <label class="form-check-label brand-label" for="se8">
                                                                {{seat.name == '' || seat.name == null ? 'N/A' : seat.name}}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="design-area">
					                <div class="header-area accordion">
                                        <h4 class="title">
                                            Transmission
                                        </h4>
                                    </div>
                                    <div class="body-area panel">
                                        <ul class="filter-list brand-list transimission">
                                            <li v-for="transmission in transmission_list">
                                                <div class="content">
                                                    <div class="check-box">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input 	transmission_id-check" type="checkbox" 
                                                            v-bind:value='transmission.id' v-model='transmissionKey' @change='updateSearch()' >
                                                            <span class="checkmark"></span>
                                                            <label class="form-check-label brand-label" for="tr1">
                                                                {{transmission.name == '' || transmission.name == null ? 'N/A' : transmission.name}}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
							            </ul>
                                    </div>
                                </div>
                                <div class="applybutton"><button class="filter-btn price-btn apply-btn" type="button" data-dismiss="modal">Apply Now</button></div>
                            </div>
                        </div>
                    </div>
		            <div class="col-md-8 col-lg-9  order-lg-last">
				        <div class="right-area">
				            <div class="item-filter">
					            <div class="filter-selcted">
                                   <ul class="filter_rslt" v-for="(key,index) in brand_search_list">
                                       <li>
                                            <button class="close-btn" v-bind:value='key.id' @click='removeSearchbrand(key.id)'>{{key.name}} <i class="fa fa-closet">x</i> </button>
                                        </li>
                                   </ul>
                                   <ul class="filter_rslt" v-for="(key,index) in model_search_list">
                                        <li>
                                            <button class="close-btn" v-bind:value='key.id' @click='removeSearchmodel(key.id)'>{{key.name}} <i class="fa fa-closet">x</i> </button>
                                        </li>
                                   </ul>
                                   <ul class="filter_rslt" v-for="(key,index) in fuel_search_list">
                                        <li>
                                            <button class="close-btn" v-bind:value='key.id' @click='removeSearchfuel(key.id)'>{{key.name}} <i class="fa fa-closet">x</i> </button>
                                        </li>
                                   </ul>
                                   <ul class="filter_rslt" v-for="(key,index) in seat_search_list">
                                        <li>
                                            <button class="close-btn" v-bind:value='key.id' @click='removeSearchseat(key.id)'>{{key.name}} <i class="fa fa-closet">x</i> </button>
                                        </li>
                                   </ul>
                                   <ul class="filter_rslt" v-for="(key,index) in transmission_search_list">
                                        <li>
                                            <button class="close-btn" v-bind:value='key.id' @click='removeSearchtransmission(key.id)'>{{key.name}} <i class="fa fa-closet">x</i> </button>
                                        </li>
                                   </ul>
                                   <ul class="filter_rslt" v-for="(key,index) in vehicletype_search_list">
                                        <li>
                                            <button class="close-btn" v-bind:value='key.id' @click='removeSearchvehicletype(key.id)'>{{key.name}} <i class="fa fa-closet">x</i> </button>
                                        </li>
                                   </ul>
                                   <ul class="filter_rslt" v-if="min != '' && max != ''">
                                        <li>
                                            <button class="close-btn"  @click='removeSearchprice()'>AED {{max}}-{{min}} <i class="fa fa-closet">x</i> </button>
                                        </li>
                                   </ul>
                                   <a href="" class="clear-filter" @click="removeAllFilter()">
                                    Clear All Filter </a>
					            </div>
					            <ul class="filter-list">
							        <li class="item-short-area" >
                                        <!-- <Select2 v-model="searchId" :options="sort_select_list" placeholder="Sort By" @change="sideSearch()">
                                        </Select2>-->
                                        <v-select v-model="searchId" :reduce="sort_select_list => sort_select_list.id" :options="sort_select_list" placeholder="Sort By" @input="sideSearch()" :searchable="false">
                                        </v-select>
								        <!--<select placeholder="Sort By" v-model="searchId" @change="sideSearch()" >
									        <option></option>
								            <option v-bind:value="1">Price - Low to High</option>
                                            <option v-bind:value="2">Price - High to Low</option>
                                            <option v-bind:value="3">Popularity</option>
                                            <option v-bind:value="4">Latest</option>
									    </select>-->
							        </li>
                                </ul>
					        </div>
					        <div class="categori-item-area">
						        <div class="row">
                                <!--<div id="myList">-->
							        <div class="col-12 info-wrap" v-for="cars in car_list">
								        <div class="car-info-box" href="">
									        <div class="img-area">
									            <a href=""><img class="light-zoom" :src="car_image_url + cars.featured_image" alt=""></a>
									        </div>
											
									        <div class="content">
                                                <h4 class="title">
                                                    <a href="">{{cars.car_name == '' || cars.car_name == null ? 'N/A' : cars.car_name}}</a>
                                                </h4>
											    <div class="startRating">
                                                    <star-rating :inline="true" :read-only="true" :show-rating="false" :increment="0.100"
                                                    v-model="cars.average_rating" active-color="#FFA500" :star-size="20"></star-rating>
                                                    <a class="bottomText">
                                                        {{cars.review}} reviews</a>
                                                </div>
										        <div class="footer-area">
										            <div class="left-area nncls">
                                                        <p class="price"><span>{{cars.currency_code == '' || cars.currency_code == null ? 'N/A' : cars.currency_code}}
                                                            </span> {{cars.price == '' || cars.price == null ? 'N/A' : cars.price}}
                                                        </p>
										            </div>
										        </div>
										        <ul class="detailbox1">
                                                    <li>{{cars.fuel_type == '' || cars.fuel_type == null ? 'N/A' : cars.fuel_type}}</li>
                                                    <li>{{cars.transmission == '' || cars.transmission == null ? 'N/A' : cars.transmission}}</li>
                                                    <li>{{cars.seating_capacity == '' || cars.seating_capacity == null ? 'N/A' : cars.seating_capacity}}</li>
                                                </ul>
										        <router-link :to="{ name: 'car-details', params: {id: cars.id }}" class="viewdetailsbtn">
                            View Details</router-link>
									        </div>
								        </div>
							        </div>
                                    
                                </div>
                                <div class="text-center" v-show="moreExists == true">
                                <button id="loadMore" v-on:click="loadMore"> Load more </button>
						        </div>
                                <div class="text-center" v-show="moreExists1 == true">
                                 <button id="loadMore" v-on:click="loadMore1"> Load more </button>
                                </div>
                               <!-- <button href="" id="loadMore">Load more </button>-->
					        </div>
				        </div>
			        </div>
		        </div>
	        </div>
        </section>
       <!--</div>-->
    </div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.common["Locale"] = localStorage.locale;
import StarRating from 'vue-star-rating';
import Select2 from 'v-select2-component';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
export default {
    name: "app",
    components: {Select2,Loading,ContentLoader,FacebookLoader,StarRating},
    data() {
        return {
            preloader:false,
            list:[],
            brand_list: [],
            //filteredBrands:[],
            featured_cars: [],
            upcoming_cars: [],
            popular_brands: [],
            model_list:[],
            popular_cars:[],
            fuel_type_list:[],
            transmission_list:[],
            seating_capacity_list:[],
            price_list:[],
            car_list:[],
            car_image_url,
            news_image_url,
            brandsearch:'',
            modelsearch:'',
            brandKey:[],
            brandKeys:[],
            modelKey:[],
            fuelKey:[],
            seatKey:[],
            pricekey:0,
            priceKeys:[],
            priceid:0,
            vehicleTypeKey:[],
            transmissionKey:[],
            selectedlang: "",
            brand_search_list:[],
            model_search_list:[],
            fuel_search_list:[],
            seat_search_list:[],
            price_search_list:[],
            transmission_search_list:[],
            vehicletype_search_list:[],
            latestsearch:0,
            populartysearch:0,
            highTolow:0,
            lowTohigh:0,
            searchId:0,
            min:'',
            max:'',
            isLoading: false,
            loading: false,
            moreExists:false,
            moreExists1:false,
            nextpage:0,
            myData:0,
            page : 'page',
            mylist:[],
            sort_select_list:[ {id:2, label: 'Price - Low to High'}, 
                                {id:1, label: 'Price - High to Low'},
                                {id:3, label: 'Popularity'},
                                {id:4, label: 'Latest'}
                            ]
           
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
            $(".js-example-basic-single").select2({
            });
            $(".js-example-basic-hide-search").select2({
                minimumResultsForSearch: Infinity
            });

          //console.log(this.minprice);
            // pricing range
            var minprice = 10000;
            var maxprice = 30000000;
            
            var minprice1=100000;
            var maxprice1=30000000;

            // pricing range
            $(document).ready(function() {
                $("#price-range-submit").hide(), $("#min_price,#max_price").on("change", function() {
                    $("#price-range-submit").show();
                    var e = parseInt($("#min_price").val()),
                        i = parseInt($("#max_price").val());
                    e > i && $("#max_price").val(e), $("#slider-range").slider({
                        values: [e, i]
                    })
                }), $("#min_price,#max_price").on("paste keyup", function() {
                    $("#price-range-submit").show();
                    var e = parseInt($("#min_price").val()),
                        i = parseInt($("#max_price").val());
                    e == i && (i = e , $("#min_price").val(e), $("#max_price").val(i)), $("#slider-range").slider({
                        values: [e, i]
                    })
                }), $(function() {
                    $("#slider-range").slider({
                        range: !0,
                        orientation: "horizontal",
                        min: minprice1,
                        max: maxprice1,
                        values: [minprice, maxprice],
                        step: 5000,
                        slide: function(e, i) {
                            if (i.values[0] == i.values[1]) return !1;
                            $("#min_price").val(i.values[0]), $("#max_price").val(i.values[1])
                        }
                    }), $("#min_price").val($("#slider-range").slider("values", 0)), $("#max_price").val($("#slider-range").slider("values", 1))
                }), $("#slider-range,#price-range-submit").click(function() {
                    var e = $("#min_price").val(),
                        i = $("#max_price").val();
                    $("#searchResults").text("Here List of products will be shown which are cost between " + e + " and " + i + ".")
                })
            });
             
            

        },
        loadData: function() {
            this.preloader = true
            var vm = this;
            vm.isLoading = true;
            vm.myData = 0;
            var priceid = this.$route.query.mobilePricesearchkey;
            var brandsearchkey = this.$route.query.brandsearchkey;
            var pricesearchkey = this.$route.query.pricesearchkey;
            var modelsearchkey = this.$route.query.modelsearchkey;
            var vehicletypesearchkey = this.$route.query.vehicletypesearchkey;
            var brandid = this.$route.params.id;
            console.log(priceid);
            axios
                .get(base_url + "api/advance_search_newcar",  {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
                .then(function(response) {
                    vm.myData = 1;
                    vm.preloader = false;
                    vm.isLoading = false;
                    vm.list = response.data;
                    console.log(vm.list);
                    vm.brand_list = response.data.brand_list;
                   // vm.filteredBrands = response.data.brand_list;
                    vm.model_list = response.data.model_list;
                    vm.fuel_type_list = response.data.fuel_type_list;
                    vm.seating_capacity_list = response.data.seating_capacity_list;
                    vm.transmission_list = response.data.transmission_list;
                    vm.price_list = response.data.price_range_list;
                    //vm.min_price_search_list = response.data.min_price_search_list;
                    //vm.max_price_search_list = response.data.max_price_search_list;
                    //vm.car_list= response.data.car_list;
                    vm.car_list= response.data.car_list.data;
                    if(response.data.car_list.current_page < response.data.car_list.last_page){
                        vm.moreExists = true;
                        vm.nextpage = response.data.car_list.current_page + 1;
                        console.log(vm.nextpage);
                    }else{
                        vm.moreExists = false;
                    }
                    console.log(vm.list);
                    /*vm.$nextTick(function(){

                    });*/
                    if(brandsearchkey != undefined && pricesearchkey != undefined){

                            vm.brandKey.push(brandsearchkey);
                            vm.pricekey=pricesearchkey;
                            vm.updateSearch();
                    }
                    if(brandsearchkey != undefined && modelsearchkey != undefined){

                            vm.brandKey.push(brandsearchkey);
                            vm.modelKey.push(modelsearchkey);
                            vm.updateSearch();
                    }
                    if(pricesearchkey != undefined && vehicletypesearchkey != undefined){

                            vm.pricekey=pricesearchkey;
                            vm.vehicleTypeKey.push(vehicletypesearchkey);
                            vm.updateSearch();
                    }
                    if(brandid != undefined)
                    {
                            vm.brandKey.push(brandid);
                            vm.updateSearch();
                    }
                    if(priceid != undefined)
                    {
                            vm.pricekey = priceid;
                            vm.updateSearch();
                    }
                    if(modelsearchkey != undefined)
                    {
                           vm.modelKey.push(modelsearchkey);
                            vm.updateSearch();
                    }
                    if(pricesearchkey != undefined){

                            vm.pricekey=pricesearchkey;
                            vm.updateSearch();
                    }
                    if(vehicletypesearchkey != undefined){

                            vm.vehicleTypeKey.push(vehicletypesearchkey);
                            vm.updateSearch();
                    }
                    if(brandsearchkey != undefined){

                            vm.brandKey.push(brandsearchkey);
                            vm.updateSearch();
                    }
                    
                });
           //vm.isLoading = false;
        },
        updateSearch:function () {
            var vm = this;
            vm.car_list = [];
            vm.myData=0;
            vm.isLoading = true;
            vm.moreExists = false;
            //vm.selectedlang="";
            console.log(vm.brandKey);
            console.log(vm.modelKey);
            console.log(vm.pricekey);
            //var pricekey = vm.pricekey;
            //vm.priceKeys.push(pricekey);
            //console.log(vm.priceKeys);
            vm.moreExists = false;
            var params = {
                brandKey: vm.brandKey,
                modelKey: vm.modelKey,
                fuelKey: vm.fuelKey,
                seatKey:vm.seatKey,
                pricekey:vm.pricekey,
                transmissionKey:vm.transmissionKey,
                searchId:vm.searchId,
                vehicleTypeKey:vm.vehicleTypeKey
            };
            axios
            .post(base_url + "api/advance_newcar_filter_search", params, {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            })
            .then(function(response) {
                vm.myData=1;
              vm.isLoading = false;
              vm.car_list = response.data.car_list.data;
              vm.brand_search_list = response.data.brand_search_list;
              vm.model_search_list = response.data.model_search_list;
              vm.fuel_search_list = response.data.fuel_search_list;
              vm.seat_search_list = response.data.seat_search_list;
              vm.transmission_search_list = response.data.transmission_search_list;
              vm.vehicletype_search_list = response.data.vehicletype_search_list;
              vm.min = response.data.max;
              vm.max = response.data.min;
              if(response.data.car_list.current_page < response.data.car_list.last_page){
                     vm.moreExists1 = true;
                    vm.nextpage = response.data.car_list.current_page + 1;
                    console.log(vm.nextpage);
              }else{
                    vm.moreExists1 = false;
              }
              
              vm.searchId = 0;
             console.log(vm.brand_search_list);
                 //console.log(vm.price_search_list);
              console.log(response.data);

             
            })

        },
        removeSearchbrand:function(key){
            var vm = this;
            vm.brandKey.splice(vm.brandKey.indexOf(key),1);
            vm.updateSearch();
        },
        removeSearchmodel:function(key){
            var vm = this;
            vm.modelKey.splice(vm.modelKey.indexOf(key),1);
            vm.updateSearch();
        },
        removeSearchfuel:function(key){
            var vm = this;
            vm.fuelKey.splice(vm.fuelKey.indexOf(key),1);
            vm.updateSearch();
        },
        removeSearchseat:function(key){
            var vm = this;
            vm.seatKey.splice(vm.seatKey.indexOf(key),1);
            vm.updateSearch();
        },
        removeSearchtransmission:function(key){
            var vm = this;
            vm.transmissionKey.splice(vm.transmissionKey.indexOf(key),1);
            vm.updateSearch();
        },
        removeSearchprice:function(key){
            var vm = this;
            vm.min = '';
            vm.max = '';
            vm.pricekey = 0;
            vm.updateSearch();
        },
        removeSearchvehicletype:function(key){
            var vm = this;
            vm.vehicleTypeKey.splice(vm.vehicleTypeKey.indexOf(key),1);
            vm.updateSearch();
        },
        sideSearch:function (){
            var vm = this;
            console.log(vm.searchId);
            vm.updateSearch();
        },
        sideSearchd : function(key) {
             console.log(key);
          //  alert("hello");
            var vm = this;
           
            console.log(key);
            vm.searchId = key;
            vm.updateSearch();
        },
        removeAllFilter : function()
        {
            var vm = this;
            vm.brandKey = [];
            vm.modelKey = [];
            vm.fuelKey = [];
            vm.seatKey = [];
            vm.vehicleTypeKey = [];
            vm.transmissionKey = [];
            vm.pricekey = 0;
            vm.searchId = 0;
            vm.$router.push({ 
                    name: 'newcars-search' 
            });
           
        },
        loadMore : function()
        {
            var vm = this;
            vm.myData=0;
           vm.isLoading = true;
            axios
                .get(base_url + "api/advance_search_newcar?" + vm.page + "=" + vm.nextpage, {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
                .then(async function(response) {
                    
                    vm.myData=1;
                    vm.mylist= response.data.car_list.data;
                    console.log(vm.mylist);
                   if(response.data.car_list.current_page < response.data.car_list.last_page){
                        vm.moreExists = true;
                        console.log(response.data.car_list.current_page);
                        vm.nextpage = response.data.car_list.current_page + 1;
                    }else{
                        vm.moreExists = false;
                    }
                    vm.mylist.forEach(element => {
                        vm.car_list.push(element);
                    });
                    vm.isLoading = false;
                    console.log(vm.car_list);
                })
        },
        loadMore1 : function()
        {
            var vm = this;
            vm.myData=0;
            vm.isLoading = true;
            var params = {
                brandKey: vm.brandKey,
                modelKey: vm.modelKey,
                fuelKey: vm.fuelKey,
                seatKey:vm.seatKey,
                pricekey:vm.pricekey,
                transmissionKey:vm.transmissionKey,
                searchId:vm.searchId,
                vehicleTypeKey:vm.vehicleTypeKey
            };
            axios
                .post(base_url + "api/advance_newcar_filter_search?" + vm.page + "=" + vm.nextpage,params, {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
                .then(async function(response) {
                    vm.myData=1;
                    vm.isLoading = false;
                    vm.mylist= response.data.car_list.data;
                    console.log(vm.mylist);
                    console.log(response.data.car_list.current_page);
                    console.log(response.data.car_list.last_page);
                    if(response.data.car_list.current_page < response.data.car_list.last_page){
                        vm.moreExists1 = true;
                        console.log("abc");
                        console.log(response.data.car_list.current_page);
                        vm.nextpage = response.data.car_list.current_page + 1;
                    }else{
                        vm.moreExists1 = false;
                    }
                    vm.mylist.forEach(element => {
                        vm.car_list.push(element);
                    });
                    
                    console.log(vm.car_list);
                })
           }
    },
    computed: {
        filteredBrands: function() {
            let searchTerm = (this.brandsearch || "").toLowerCase()
            return this.brand_list.filter(function(brand) {
                let name = (brand.name || "").toLowerCase() 
                return name.indexOf(searchTerm) > -1 
            })
        },
        filteredModels: function(){
            let searchTerm = (this.modelsearch || "").toLowerCase()
            return this.model_list.filter(function(model) {
                let name = (model.name || "").toLowerCase() 
                return name.indexOf(searchTerm) > -1 
            })
        }
        
    },
    
    mounted() {
        this.loadData();
        this.accordion();
        $(".loader").delay(2000).fadeOut("slow");
        $("#overlayer").delay(2000).fadeOut("slow");
        //this.sideSearch();
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