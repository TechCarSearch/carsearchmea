<template>
  <div class="app">
    <div>
         <!--<content-loader
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
</span></div>
      <section class="hero-area">
        <!-- <img class="cars" src="images/heroarea-img.jpg" alt=""> -->

        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="content searchara">
                <div class="heading-area">
                  <h1 class="title">{{searchbox.header_btxt}}</h1>
                  <p class="sub-title">{{searchbox.header_stxt}}</p>
                </div>

                <div class="col-md-12">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >New Cars</a>
                      <a
                        class="nav-item nav-link"
                        id="nav-preowned-tab"
                        data-toggle="tab"
                        style="background: transparent;color: #000;"
                        href="#nav-preowned"
                        role="tab"
                        aria-controls="nav-preowned"
                        aria-selected="true"
                      >Preowned Cars</a>
                      <!-- <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Used Car</a> -->
                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                    <div
                      class="tab-pane active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="card-body text-white">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                             
                                <ul class="select-list">
                                  <li style="margin-bottom: 20px;">
                                    <div class="car-condition">
                                      
                                    <v-select v-model="brandSearchId" :reduce="brand_select_list => brand_select_list.id" :options="brand_select_list" placeholder="Select Brand"></v-select>
      
                                     <!-- <v-select v-model="brandSearchId" :options="brand_select_list" placeholder="Select Brand" >
                                      </v-select>-->
                                      
                                    </div>
                                  </li>

                                  <li>
                                    <div class="car-price readonly">
                                      <v-select v-model="priceSearchId" :reduce="price_select_list => price_select_list.id" :options="price_select_list" placeholder="Select Price" :searchable="false">
                                      </v-select>
                                     
                                      
                                    </div>
                                  </li>
                                  <li>
                                    <button
                                      type="button"
                                      class="mybtn1"
                                      style="width: 100%; outline: 0;"
                                      v-on:click="searchData()"
                                    >Search</button>
                                  </li>

                                  <li></li>
                                </ul>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="nav-preowned"
                      role="tabpanel"
                      aria-labelledby="nav-preowned-tab"
                    >
                      <div class="card-body text-white">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                             
                                <ul class="select-list">
                                  <li style="margin-bottom: 20px;">
                                    <div class="car-condition">
                                      <v-select v-model="brandSearchId1" :reduce="brand_select_list => brand_select_list.id" :options="brand_select_list" placeholder="Select Brand">
                                      </v-select>
                                     

                                    </div>
                                  </li>

                                  <li>
                                    <div class="car-price readonly">
                                     <v-select v-model="priceSearchId1" :reduce="price_select_list => price_select_list.id" :options="price_select_list" placeholder="Select Price" :searchable="false">
                                      </v-select>
                                     
                                    </div>
                                  </li>
                                  <li>
                                    <button
                                      type="button"
                                      class="mybtn1"
                                      style="width: 100%; outline: 0;"
                                      v-on:click="searchPreData()"
                                    >Search</button>
                                  </li>

                                  <li></li>
                                </ul>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="banner in list.banner_list">
                   <a :href="banner.banner_link"> <img class="banner-slide-inner" :src="banners_image_url + banner.banner_image" /> </a>
                </div>
            </div>

            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
			      <div class="swiper-pagination"></div>
        </div>      
        
      </section>
      <!-- OLD    Hero Area End -->
      <section class="mobisearch"> 
        <ul class="homemenu nav nav-tabs">
          <li class=""><a href="#newcar" data-toggle="tab" class="active"><i class="icon-new-car"></i>New Cars</a></li>
          <li class=""><a href="#usedcar" data-toggle="tab"><i class="icon-used-car"></i>Preowned</a></li>
          <li class="">
            <router-link :to="{ name: 'compare'}" data-toggle="tab" >
              <i class="icon-compare-car"></i>Compare
            </router-link>
          </li>
          <li class="">
            <router-link :to="{ name: 'blog'}" data-toggle="tab">
              <i class="icon-news"></i>Blog
            </router-link>
          </li>
        </ul>
        <div class="tab-content">
          <div id="newcar" class="tab-pane fade in active">
            <h2 class="title"> What is your budget? </h2>
						<div class="budgetwrap">
              <div class="buttonblock" v-for="prices in list.price_select_list">
                <button v-bind:value='prices.id' @click='searchPriceData(prices.id)'> {{prices.label}}</button>
              </div>
              <!--<router-link :to="{ name: 'brand-search-list', params: {id: prices.id }}">AED {{prices.text}}</router-link>-->
						</div>
            <a title="search by brand" class="mobsearch" data-toggle="modal" data-target="#searchbrand"><i class="icon-overview"></i>Search By Brand</a>
            <router-link :to="{ name: 'newcars-search'}" title="search by brand" class="mobsearch">
             <i class="icon-cd-filter"></i>More Filters </router-link>
          </div>
          <div id="usedcar" class="tab-pane fade">
            <h2 class="title">Age of cars</h2>
						<div class="budgetwrap" >
              <div class="buttonblock" v-for="ages in age_select_list">
               <button v-bind:value='ages.id' @click='searchAgeData(ages.id)'>{{ages.label}}</button>
              </div>
            </div>
            <a title="search by brand" class="mobsearch" data-toggle="modal" data-target="#searchmodal"><i class="icon-overview"></i>Search By Model</a>
            <router-link :to="{ name: 'preownedcar-search'}" title="search by brand" class="mobsearch">
             <i class="icon-cd-filter"></i>More Filters </router-link>
          </div>
        </div>
      </section>

      <!-- Search Brand -->
      <div id="searchbrand" class="modal fade mobsearpop" role="dialog" aria-modal="true">
        <div class="modal-dialog">
        <!-- Modal content-->
          <div class="modal-content">
	          <span class="close3" data-dismiss="modal">×</span>
            <h4>Search By Brand </h4>
            <ul class="select-list">
              <li style="margin-bottom: 20px;">
                <div class="car-condition optgrp">
                  <v-select v-model="brandSearchId" :reduce="brand_select_list => brand_select_list.id" :options="brand_select_list" placeholder="Select Brand">
                  </v-select>
						    </div>
              </li>
              <li>
                <div class="car-price nooptgrp notype">
	                <v-select v-model="priceSearchId" :reduce="price_select_list => price_select_list.id" :options="price_select_list" placeholder="Select Price" :searchable="false">
                  </v-select>
                </div>
              </li>
              <li>
                <button type="button" class="mybtn1" style="width: 100%; outline: 0;"  v-on:click="searchData()">Search</button>
              </li>
              <li>                                                 
              </li>
            </ul>	
          </div>
        </div>
      </div>

      <!-- Search Modal -->

      <div id="searchmodal" class="modal fade mobsearpop" role="dialog" aria-modal="true">
        <div class="modal-dialog">
        <!-- Modal content-->
          <div class="modal-content">
	          <span class="close3" data-dismiss="modal">×</span>
            <h4>Search By Brand </h4>
            <ul class="select-list">
              <li style="margin-bottom: 20px;">
                <div class="car-condition optgrp">
                  <v-select v-model="brandSearchId" :options="brand_select_list" placeholder="Select Brand">
                  </v-select>
						    </div>
              </li>
              <li>
                <div class="car-price nooptgrp notype">
	                <v-select v-model="priceSearchId" :options="price_select_list" placeholder="Select Price">
                  </v-select>
                </div>
              </li>
              <li>
                <button type="button" class="mybtn1" style="width: 100%; outline: 0;" v-on:click="searchPreData()">Search</button>
              </li>
              <li>
              </li>
            </ul>
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

              <div class="featured-cars-slick-slider" >
                <div class="product-item" v-for="featured in list.featured_cars" >
                
                  <div class="card shadowWPadding" data-img-fit="true">
                    <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                      <div
                        class="imageTransition active"
                        data-autofit="true"
                        data-autofitmobile="true"
                        title=""
                      >
                        <router-link :to="{ name: 'car-details', params: {id: featured.id }}">
                          <img
                            class="hover imageTransition hide active"
                            :src="featured.featured_image == '' ? car_image_url + 'No IMage Available.jpg' : car_image_url + featured.featured_image"
                            data-lazy="true"
                          />
                        </router-link>
                      </div>
                    </div>
                    <div class="gsc_col-xs-12 holder">
                      <router-link :to="{ name: 'car-details', params: {id: featured.id }}" title="Erica Neal" class="title">
                       {{ featured.car_name == '' || featured.car_name == null ? 'NA' : featured.car_name }}</router-link>
                      <div class="price">
                        <span class="icon-cd_R">{{ featured.currency_code == '' || featured.currency_code == null ? 'NA' : featured.currency_code}}</span> {{ featured.price == '' || featured.price == null ? 'NA' : featured.price}} 
                      </div>
                      <div class="BtnFull buttonHolder buttonHolder virtualNumberBtn">
                        <div class="primaryButton btn-dcb">
                          <a href=""><router-link :to="{ name: 'car-details', params: {id: featured.id }}">
                            View Details</router-link></a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
             
                <div class="product-item view-all">
                  <div class="card shadowWPadding" data-img-fit="true">
                    <a href="" class="viewallbtn"><router-link :to="{ name: 'featured-car-list'}">
                      <i class="fas fa-arrow-right"></i>
                      View All Featured Cars</router-link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Featured Cars Area End -->
      
      <!--google ads-->
      <!--<section class="Googl_ads">
        <div class="container">
          <div class="row">
            <div class="adsgg">
           <Adsense
                data-ad-client="ca-pub-1633588049951661"
                data-ad-slot=""
                data-ad-format="auto"
                :data-full-width-responsive="true"
             >
             </Adsense>
             </div>
          </div>
        </div>
      </section>-->

      <!--popular brands-->
      <div class="brands container">
        <div class="row">
          <div class="brand brdr shadow24 wrap">
            <div class="section-heading">
              <h2 class="title mb-30">Popular Brands</h2>
            </div>
            <div class="brand-customer-logos">
              <div class="slide" v-for="brand in list.brand_list">
                 <router-link :to="{ name: 'brand-search-list', params: {id: brand.id }}">
                <img :src="brand_image_url + brand.brand_image" />
                <!-- <h6 class="text-center">{{ brand.name == '' || brand.name == null ? 'NA' : brand.name }}</h6>-->
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

      <section class="featuredCars">
        <div class="container">
          <div class="row">
            <div class="brdr shadow24 wrap">
              <div class="section-heading">
                <h2 class="title">New Launched cars</h2>
              </div>
              <div class="newlaunch-cars-slick-slider" >
                <div class="product-item" v-for="newkaunch in list.newlaunch_cars">
                  <div class="card shadowWPadding" data-img-fit="true">
                    <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                      <div
                        class="imageTransition active"
                        data-autofit="true"
                        data-autofitmobile="true"
                        title=" "
                      >
                        <router-link :to="{ name: 'car-details', params: {id: newkaunch.id }}">
                          <img
                            class="hover imageTransition hide active"
                            :src="newkaunch.featured_image == '' ? car_image_url + 'No IMage Available.jpg' : car_image_url + newkaunch.featured_image"
                            data-lazy="true"
                          />
                        </router-link>
                      </div>
                    </div>
                    <div class="gsc_col-xs-12 holder">
                      <router-link :to="{ name: 'car-details', params: {id: newkaunch.id }}" 
                        class="title">
                          {{ newkaunch.car_name == ''  || newkaunch.car_name == null ? 'NA' : newkaunch.car_name }}</router-link>
                      <div class="price">
                        <span class="icon-cd_R">{{newkaunch.currency_code == '' || newkaunch.currency_code == null ? 'NA' : newkaunch.currency_code}}</span>
                        {{ newkaunch.price == '' || newkaunch.price == null ? 'NA' : newkaunch.price }}
                      </div>
                      <div class="BtnFull buttonHolder buttonHolder virtualNumberBtn">
                        <div class="primaryButton btn-dcb">
                          <router-link :to="{ name: 'car-details', params: {id: newkaunch.id }}">
                            View Details</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
                <div class="product-item view-all">
                  <div class="card shadowWPadding" data-img-fit="true">
                    <a href="" class="viewallbtn"><router-link :to="{ name: 'new-car-list'}">
                      <i class="fas fa-arrow-right"></i>
                      View All Cars</router-link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonial Area Start -->
      <!--<section class="testimonial">
        <div class="container" v-for="testimonial in list.testimonial">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-10">
              <div class="section-heading">
                <h2 class="title text-center">Customer Reviews</h2>
                <p
                  class="text text-center"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="testimonial-slider2">
                <div class="single-testimonial">
                  <div class="people">
                    <div class="img">
                      <img
                        :src="testimonials_image_url + testimonial.image"
                        alt
                      />
                    </div>
                    <h4 class="title">{{testimonial.name == '' || testimonial.name == null ? 'NA' : testimonial.name}}</h4>
                    <p class="designation">{{testimonial.rank == '' || testimonial.rank == null ? 'NA' : testimonial.rank}}</p>
                  </div>
                  <div class="review-text">
                    <p>"{{testimonial.comment == '' || testimonial.comment == null ? 'NA' : testimonial.comment}}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>-->
      <!-- Testimonial Area End -->

      <section class="featuredCars upcomingcars">
        <div class="container">
          <div class="row">
            <div class="brdr shadow24 wrap">
              <div class="section-heading">
                <h2 class="title">Upcoming Cars</h2>
              </div>

              <div class="upcoming-cars-slick-slider">
                <div class="product-item" v-for="upcoming in list.upcoming_cars">
                  <div class="card shadowWPadding" data-img-fit="true">
                    <div class="gsc_col-xs-12 paddingnone imgTopRound hover">
                      <div
                        class="imageTransition active"
                        data-autofit="true"
                        data-autofitmobile="true"
                        title=" "
                      >
                        <router-link :to="{ name: 'car-details', params: {id: upcoming.id }}">
                          <img
                            class="hover imageTransition hide active"
                            :src="upcoming.featured_image == '' ? car_image_url + 'No IMage Available.jpg' : car_image_url + upcoming.featured_image"
                            data-lazy="true"
                          />
                        </router-link>
                      </div>
                    </div>
                    <div class="gsc_col-xs-12 holder">
                      <router-link :to="{ name: 'car-details', params: {id: upcoming.id }}" class="title">
                      {{upcoming.car_name == '' || upcoming.car_name == null ? 'NA' : upcoming.car_name}}
                      </router-link>
                      <div class="price">
                        <span class="icon-cd_R">{{upcoming.currency_code == '' || upcoming.currency_code == null ? 'NA' : upcoming.currency_code}}</span>
                        {{upcoming.price == '' || upcoming.price == null ? 'NA' : upcoming.price}}
                        
                      </div>
                      <div class="BtnFull buttonHolder buttonHolder virtualNumberBtn">
                        <div class="primaryButton btn-dcb">
                        <router-link :to="{ name: 'car-details', params: {id: upcoming.id }}">
                            View Details</router-link></div>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div class="product-item view-all">
                  <div class="card shadowWPadding" data-img-fit="true">
                     <a href="" class="viewallbtn"><router-link :to="{ name: 'upcoming-car-list'}">
                      <i class="fas fa-arrow-right"></i>
                      View All Cars</router-link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Area Start -->
      <section class="blog">
        <div class="container">
          <div class="row">
            <div class="brdr shadow24 btm_blog wrap">
              <div class="section-heading">
                <h2 class="title">News to help choose your car</h2>
              </div>
              <div class="blog-slider2">
                <div class="blog-wr" v-for="news in list.news_list">
                  <div class="car-info-box">
                    <div class="img-area">
                      <router-link :to="{ name: 'news-details', params: {slug:news.slug ,id: news.id}}">
                        <img :src="news_image_url + news.photo"
                        alt />
                      </router-link>
                    </div>
                    <div class="entry-main entry-main_mod-a">
                      <div class="entry-main__inner entry-main__inner_mod-a">
                        <h3 class="entry-title">
                          <a><router-link :to="{ name: 'news-details', params: {id: news.id,slug:news.slug }}">{{ news.title == '' || news.title == null ? 'NA' : news.title }}</router-link></a>
                        </h3>
                        <div class="entry-meta">
                          <span class="entry-meta__item">
                            By::
                            <a href title="Visit admin’s website" rel="author external">Admin</a>
                          </span>
                          <span class="entry-meta__item">
                            Posted Date ::
                            <a class="entry-meta__link" href>{{ news.created_at }}</a>
                          </span>
                        </div>
                      </div>
                      <div class="decor-1"></div>
                      <div
                        class="entry-content"
                      >{{ news.details }}</div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  <!--</div>-->
</template>
<script>
import axios from "axios";
axios.defaults.headers.common["Locale"] = localStorage.locale;
import Select2 from 'v-select2-component';
import { ContentLoader ,FacebookLoader} from 'vue-content-loader';
//import vSelect from "vue-select"
export default {
  name: "app",
 components: {Select2,ContentLoader,FacebookLoader},

 data() {
    return {
      list:[],
      brand_list: [],
      featured_cars: [],
      upcoming_cars: [],
      popular_brands: [],
      car_image_url,
      news_image_url,
      brand_image_url,
      banners_image_url,
      brandSearchId:0,
      priceSearchId:0,
      brandSearchId1:0,
      priceSearchId1:0,
      preloader:false,
      brand_select_list:[],
      price_select_list:[],
      username:localStorage.getItem("tocken"),
      testimonials_image_url,
      searchbox:'',
      myData:0,
      isLoading: false,
      age_select_list : [{id:1, label: '1 Year'}, 
                                          {id:2, label: '2 Year'},
                                          {id:3, label: '3 Year'},
                                          {id:4, label: '4 Year'},
                                          {id:5, label: '5+ Year'}
                                          ],
       index: 1,
      options: [{
          value:1,
          label:'option1'
      },{
          value:2,
          label:'option2'
      }],
      selected:{
          value:1,
          label:'option1'
      },
      placement:'down',
      priceId:'',
    };
  },
  props:['isLoggedin'],
  methods: {
    loadData: function() {
      this.preloader = true
      var vm = this;
      vm.isLoading = true;
      vm.myData=0;
        axios
          .get(base_url + "api/home",  {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })

          .then(function(response) {
            vm.myData=1;
            vm.isLoading = false;
            vm.list = response.data;
            vm.brand_list = response.data.brand_list;
            vm.price_select_list = response.data.price_select_list;
            vm.brand_select_list = response.data.brand_select_list;
            vm.searchbox = response.data.searchbox;
            console.log(vm.brand_list);
            vm.preloader = false;
            vm.$nextTick(function(){
              //this.blogSlider();
              
              $(function() {
                  $('.search2')
                      .comboSelect()
              })
               $(".js-example-basic-single").select2({
            });
            $(".js-example-basic-hide-search").select2({
                minimumResultsForSearch: Infinity
            });
   
              $(".featured-cars-slick-slider")
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
            })
            $(".brand-customer-logos").slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5500,
              arrows: true,
              dots: false,
              pauseOnHover: false,
              infinite: false,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 520,
                  settings: {
                    slidesToShow: 3
                  }
                }
              ]
            });
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
            })

            $(".upcoming-cars-slick-slider")
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
            })
            
               $(".blog-slider2")
      .slick({
        // centerMode: true,
        slidesToShow: 3,
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
              slidesToShow: 1,
              centerMode: false
            }
          }
        ]
      })
      .on("setPosition", function(event, slick) {
        slick.$slides.css("height", slick.$slideTrack.height() + "px");
      });

          var interleaveOffset = 0.5;
    var swiperOptions = {
    loop: true,
            speed: 1000,
            grabCursor: true,
            autoplay: true,
            watchSlidesProgress: true,
            mousewheelControl: true,
            keyboardControl: true,
			slidesPerView: 'auto',
			paginationClickable: true,
      autoplay:{
        delay:5000,
      },
			pagination: {
			el: '.swiper-pagination',
			},
			
            navigation: {
            nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
            },
            on: {
            progress: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".banner-slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
            }
            },
                    touchStart: function () {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                    }
                    },
                    setTransition: function (speed) {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".banner-slide-inner").style.transition =
                            speed + "ms";
                    }
                    }
            }
    };
    var swiper = new Swiper(".swiper-container", swiperOptions);

            })

          })
          .catch(function(error) {
         
          });
    
    },

    
    searchData: function() {
         //this.loading = true
          var vm = this;
          vm.brandSearchId = vm.brandSearchId;
          vm.priceSearchId = vm.priceSearchId;
          console.log(vm.brandSearchId);
          console.log(vm.priceSearchId);
          if (vm.brandSearchId != "0" && vm.priceSearchId != "0") {
            this.$router.push({ 
                    name: 'home-search-details', 
                    query: { brandsearchkey: vm.brandSearchId ,pricesearchkey :vm.priceSearchId } 
            });
          }else{
            console.log("no data");
          }
    },
    searchPreData: function() {
         //this.loading = true
          var vm = this;
          vm.brandSearchId1 = vm.brandSearchId1;
          vm.priceSearchId1 = vm.priceSearchId1;
          console.log(vm.brandSearchId);
          console.log(vm.priceSearchId);
          if (vm.brandSearchId1 != "0" && vm.priceSearchId1 != "0") {
            this.$router.push({ 
                    name: 'home-preownedsearch-details', 
                    query: { brandsearchkey: vm.brandSearchId1 ,pricesearchkey :vm.priceSearchId1 } 
            });
          }else{
            console.log("no data");
          }
    },
    searchPriceData : function (key) {
      var vm = this;
      vm.priceId = key;
      if (vm.priceId != "0") {
            this.$router.push({ 
                    name: 'price-search-list', 
                    query: { mobilePricesearchkey :vm.priceId } 
            });
          }else{
            console.log("no data");
          }
     //console.log(vm.priceId);
    },
    searchAgeData : function (key) {
      var vm = this;
      vm.agesId = key;
      if (vm.agesId != "0") {
            this.$router.push({ 
                    name: 'age-search-list', 
                    query: { mobileAgechkey :vm.agesId } 
            });
          }else{
            console.log("no data");
          }
     //console.log(vm.priceId);
    }
  },

  computed: {
   /* filteredBrands: function() {
       let searchTerm = (this.brandSearchId || "").toLowerCase()
       return this.brand_list.filter(function(brand) {
       let name = (brand.name || "").toLowerCase() 
       return name.indexOf(searchTerm) > -1 
      })
    },*/
    /*filteredPrice: function(){
       let searchTerm = (this.priceSearchId || "").toLowerCase()
        return this.price_list.filter(function(price) {
        let name = (price.name || "").toLowerCase() 
        return name.indexOf(searchTerm) > -1 
    })
    }*/
  },
  mounted() {
 this.loadData();
// this.searchData();
 //this.blogSlider();
 
    
  /*  $(document).ready(function() {
      $(".MultiCarousel-inner").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5500,
        arrows: true,
        dots: false,
        pauseOnHover: false
      });
    });
    $(document).ready(function() {
      $(".testimonial-slider2").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5500,
        arrows: true,
        dots: false,
        pauseOnHover: false
      });
    });
    $(document).ready(function() {
      $(".customer-logos").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5500,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      });
    });
    
*/
    
    //var swiper = new Swiper(".swiper-container", swiperOptions);
  }
};
</script>



