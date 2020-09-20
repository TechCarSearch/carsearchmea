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
                <!--<div class="adsgg">
                    <img src="images/kbb-banner-march-2019.jpg">
                </div>-->
            </div>
        </section>
        <div class="breadcrumb2 bggrey">
            <div class="container">
                <div class="row">
                    <ul>
                    <li><router-link :to="{ name: 'home'}">
                        Home</router-link></li>
                    <li><a>Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="cardetails reviews ppolicy">
            <div class="container">
                <div class="row">
                    <div class="box">
                        <div  v-for="privacy in list">
                            <h1>{{privacy.title}}</h1>
                            <div class="wrap">
                                <p>{{privacy.details}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <!-- </div>-->
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
        list1:[],
        news_image_url,
        searchkey:"",
        loading: false,
        isLoading: false,
         myData:0,
        };
    },
    components: {Loading,ContentLoader,FacebookLoader},
    methods: {
     
      loadData: function() {
        var vm = this;
        vm.myData=0;
        vm.isLoading = true;
       axios
          .get(base_url + "api/privacy" , {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })
          .then(function(response) {
              vm.myData=1;
             vm.list = response.data.privacy_details;
             console.log(vm.list);
             vm.isLoading = false;
          });
          vm.myData=1;
          vm.isLoading = false;
        },
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
    },
}
</script>