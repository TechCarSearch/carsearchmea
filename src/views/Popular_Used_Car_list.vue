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
		<!-- Google Ad-->
		<section class="Googl_ads ads2 mtop">
            <div class="container">
                <div class="adsgg">
                    <img src="images/kbb-banner-march-2019.jpg">
                </div>
            </div>
        </section>

		<div class="breadcrumb2">
			<div class="container">
				<ul>
					<li><router-link :to="{ name: 'home'}">
                        Home</router-link></li>
                    <li><router-link :to="{ name: 'used-cars'}">
                        Preowned Cars</router-link></li>
					<li><a>Popular Preowned Cars</a></li>
				</ul>
			</div>
		</div>
		<!-- sub-categori Area Start -->
		<section class="featuredCars new-car carlist">
			<div class="container">
				<h1 class="head">Popular Preowned Cars</h1>
				<div class="row">
					<div class="wrap">
						<div class="product-item" v-for="cars in list">
							<div class="card shadowWPadding">
								<div class="gsc_col-xs-12 paddingnone imgTopRound hover">
									<div class="imageTransition">
										<router-link :to="{ name: 'car-details', params: {id: cars.id }}">
										<img :src="usedcar_image_url + cars.featured_image"></router-link>
									</div>
								</div>
							    <div class="gsc_col-xs-12 holder ">
									<router-link :to="{ name: 'car-details', params: {id: cars.id }}" class="title">{{ cars.car_name=='' || cars.car_name == null ? 'N/A' : cars.car_name }}</router-link>
									<div class="price"><span class="icon-cd_R">{{ cars.currency_code=='' || cars.currency_code == null ? 'N/A' : cars.currency_code }}
										</span>{{ cars.price=='' || cars.price == null ? 'N/A' : cars.price }}
									</div>
									<div class="BtnFull buttonHolder buttonHolder virtualNumberBtn ">
										<div class="primaryButton btn-dcb "><router-link :to="{ name: 'car-details', params: {id: cars.id }}">
                            <font style="color: white;">View Details</font></router-link></div>
									</div>
								</div>
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
export default {
	name: "app",
   	data() {
    	return {
			preloader:false,
			list:[],
			list1:[],
			usedcar_image_url,
			searchkey:"",
			loading: false,
			isLoading: false,
			myData:0,
		};
	},
	components: {
            Loading,ContentLoader,FacebookLoader
    },
	methods: {
		accordion: function() {
			$(function(){
			$('.search2')
			.comboSelect()
			})

			$(".js-example-basic-single").select2({
			});

			$(".js-example-basic-hide-search").select2({
			minimumResultsForSearch: Infinity
			});


		},
		loadData: function() {
			var vm = this;
			vm.myData=0;
			vm.isLoading = true;
			axios
          		.get(base_url + "api/popularusedcarlist",  {
            		"Access-Control-Allow-Origin": "*",
            		"Content-Type": "application/json"
          		})
          		.then(function(response) {
					  vm.myData=1;
            		vm.isLoading = false;
             		vm.list = response.data.car_list;
             		console.log(vm.list);
          		});
		}
	},
	mounted() {
		this.loadData();
		this.accordion();
	}
}
</script>
