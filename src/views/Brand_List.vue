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
                    <li><a>Popular Brands</a></li>
                </ul>
            </div>
        </div>
        <div class="brands container brandlist">
	        <div class="row">
                <div class="brand brdr shadow24">
                    <div class="section-heading">
                        <h2 class="title mb-30">
                            Popular Brands
                        </h2>
                    </div>
                    <div class="wrap">	
					    <div class="brands-wrap" v-for="brand in list">
                            <div class="slide">
                                <router-link :to="{ name: 'brand-search-list', params: {id: brand.id }}">
                                    <img :src="brand_image_url + brand.brand_image" />
                                </router-link>
                            </div>
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
export default {
    name: "app",
    data() {
        return {
            list:[],
            brand_image_url,
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
          		.get(base_url + "api/brandlist",  {
            		"Access-Control-Allow-Origin": "*",
            		"Content-Type": "application/json"
          		})
          		.then(function(response) {
                    vm.list = response.data.brand_list;
                    vm.myData=1;
                     console.log(vm.list);
                     vm.isLoading = false;
                     vm.$nextTick(function(){
                        $(function(){
                        $('.search2')
                        .comboSelect()
                        })

                        $(".js-example-basic-single").select2({
                        });

                        $(".js-example-basic-hide-search").select2({
                        minimumResultsForSearch: Infinity
                        }); 
                     });
		        
          		});
		}
    },
    mounted() {
        this.loadData();
        this.accordion();
    }
}
</script>