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
    <div v-if="myData==1">--->
        <div v-if="isLoading == true">   <div id="overlayer"></div>
            <span class="loader">
            <span class="loader-inner"></span>
            </span>
        </div>
        <section class="Googl_ads ads2 mtop">
           <!-- <div class="container">
                <div class="adsgg">
                    <img src="images/kbb-banner-march-2019.jpg">
                </div>
            </div>-->
        </section>
        <div class="breadcrumb2 bggrey">
            <div class="container">
                <div class="row">
                    <ul>
                    <li><router-link :to="{ name: 'home'}">
                        Home</router-link></li>
                    <li><router-link :to="{ name: 'used-cars'}" >
                        Preowned Cars</router-link></li>
                    <li><router-link :to="{ name: 'precar-details', params: {id:cars_ids }}" >
                        Cars Details</router-link></li>
                    <li><a class="">Reviews</a></li>
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
        <div class="cardetails reviews">
            <section class="section2">
                <div class="container">
                    <div class="row">
                        <div class="bx-details bx-details4">
                            <h2>
                            {{car_name}} User Reviews
                            </h2>
                            <div class="box4">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a class="nav-item active" data-toggle="tab" href="#questions" role="tab">Latest Reviews</a>
                                    </div>
								</nav>
                            </div>
                            <div class="answers-blk">
                                <div class="box" v-for="review in list.car_rating">
                                    <div class="startRating">
										<star-rating :inline="true" :read-only="true" :show-rating="false" :increment="0.1"
                                        v-model="review.rating" active-color="#FFA500" :star-size="20"></star-rating>	
									</div>
                                    <h2>{{review.title}}</h2>
                                    <p class="asked2">By {{review.first_name}} <span>on {{getDay(review.created_at.date)}} {{getMonth(review.created_at.date)}} {{getYear(review.created_at.date)}}</span></p>
                                    <div class="recentanswer">
                                        <!--<i class="thumb"><img src="images/user-icon.png"></i>-->
                                        <p>{{review.description}}</p>
                                    </div>
                                </div>

                                <div class="usercomment" v-if="tockens != ''">
                                    <!--<span class="usercommenticon"><img src="images/user-icon.png"></span>-->
                                    <div class="answer">
                                        <textarea  v-model="title" placeholder="Write your heading" id="typing"></textarea>
                                        <button class="button postAnsBtn btndisabled hide">Write Review</button>
                                    </div>
                                    <div class="answer">
                                        <textarea v-model="description" placeholder="Write your review" id="typing"></textarea>
                                        <button class="button postAnsBtn btndisabled hide">Write Review</button>
                                    </div>
                                    <div class="btn-blk">
                                        <a class="viewdetailsbtn" v-on:click="addreview()">Write Review</a>
                                    </div>
                                </div>
                                <div class="usercomment" v-if="tockens == ''">
                                    <div class="btn-blk">
                                        <router-link :to="{ name: 'login'}" class="viewdetailsbtn">Write Review</router-link>
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
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
export default {
    name: "app",
    components: {
        StarRating,Loading,ContentLoader,FacebookLoader
    },
    data() {
        return {
        tockens:localStorage.getItem("tocken"),
        userid:localStorage.getItem("id"),
        isLoading: false,
        loading: false,
        errorMessage:'',
        successMessage:'',
        rating:'',
        list:'',
        title:'',
        description:'',
        car_name:'',
        cars_ids:0,
        myData:0
        };
    },
    methods: {
       
        loadData: function() {
            var id = this.$route.params.id;
            var vm = this;
            vm.cars_ids = id;
            vm.isLoading = true;
            vm.myData=0;
            console.log(id);
            axios
            .get(base_url + "api/usedcarreviewdetails/" + id , {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            })
            .then(function(response) {
                vm.isLoading = false;
                vm.myData=1;
                vm.list = response.data;
                vm.car_name = response.data.car_name;
                console.log(vm.list);
                vm.$nextTick(function(){
                    $(function(){
                        $('.search2')
                        .comboSelect()
                    })
                    $(".js-example-basic-hide-search").select2({
                        minimumResultsForSearch: Infinity
                    });
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
                    $('.question-slider').slick({
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
                })
            })
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
        addreview : function(){
          var vm = this;
          vm.isLoading = true;
          vm.myData=0;
          var params = {
            car_id : this.$route.params.id,
            title : vm.title,
            description : vm.description,
            token : vm.tockens
          };
          axios
          .post(base_url + "api/addusedreview", params, {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })

          .then(function(response) {
            if (response.data.success == 1) {
                vm.isLoading = false;
                vm.myData=1;
                vm.successMessage = response.data.message;
                vm.list = response.data;
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
        }
    },
    mounted() {
        this.loadData();
        //this.accordion();
    }
}
</script>