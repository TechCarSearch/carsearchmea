<template>
  <div id="app">
    <div>
        <div class="preloader" id="preloader" style="background: url(assets/front/images/loader.gif) no-repeat scroll center center #FFF;"></div>
        <div v-if="isLoading == true">   <div id="overlayer"></div>
      <span class="loader">
        <span class="loader-inner"></span>
      </span>
    </div>
        <header>
            <div class="mainmenu-area">
                <div class="top_header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 logo">
                                <router-link :to="{ name: 'home'}" class="navbar-brand">
                               <!-- <img class="logo-style" src="assets/front/images/logo.png" alt="">--></router-link>    
                            </div>
                            <!--<div class="col-md-5 col-sm-12 m_ato search">
                                <form class="classNameHere" action="" method="get" role="search" autocomplete="off">
                                    <div class="input-group">
                                        <div class="dropdown2">
                                            <div class="input-group-btn tpsch">
                                                <button class="btn btn-default" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                                            </div>
                                            <input onclick="myFunction()" type="text" placeholder="Popular Searches or All Brands" class="sinput" id="myInput" onkeyup="filterFunction()">
                                            <div id="myDropdown" class="dropdown-content sdrop">
                                                <span class="search-label">Popular Searches</span>
                                                <div v-for="cars in popular_car_list" class="demo">
                                                <a v-bind:value='cars.id' @click='searchCar(cars.id)'>{{cars.car_name}}</a>
                                               </div>
                                                <span class="search-label">All Brands </span>
                                                <div v-for="brand in brand_list" class="demo">
                                                <router-link :to="{ name: 'brand-search-list', params: {id: brand.id }}">{{brand.name}}</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div> -->
                            <div class="col-md-5 col-sm-12 m_ato search">
                                <form class="classNameHere" action="" method="get" role="search" autocomplete="off">
                                    <div class="input-group">
                                        <div class="dropdown2">
                                            <div class="input-group-btn tpsch">
                                                <button class="btn btn-default" type="button" @click='mainsearch()'><i class="fa fa-search" aria-hidden="true"></i></button>
                                            </div>
                                            <input onclick="myFunction()" v-model="carsearch" type="text" placeholder="Popular Searches or All Brands" class="sinput" id="myInput" onkeyup="filterFunction()">
                                            <div id="myDropdown" class="dropdown-content sdrop">
                                                <span class="search-label" id="lab1">Popular Searches</span>
                                                <div v-for="cars in myfilter" class="demo">
                                                <a v-bind:value='cars.id' @click='searchCar(cars.id)'>{{cars.name}}</a>
                                               </div>
                                                <span class="search-label" id="lab2">All Brands </span>
                                                <div v-for="brand in brand_list" class="demo lab2" id="lab2">
                                                    <a v-bind:value='brand.id' @click='searchbrand(brand.id)'>{{brand.name}}</a>
                                                    <!--<router-link :to="{ name: 'brand-search-list', params: {id: brand.id }}">{{brand.name}}</router-link>
                                               -->
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </form>
                            </div> 
                           <!-- <div class="col-md-5 col-sm-12 m_ato search">
                                <form class="classNameHere" action="" method="get" role="search" autocomplete="off">
                                    <div class="input-group">
                                        <vue-suggestion :items="car_list" 
                                                        v-model="item" 
                                                        :setLabel="setLabel"
                                                        :itemTemplate="itemTemplate"
                                                        @changed="inputChange" 
                                                        @selected="itemSelected">
                                        </vue-suggestion>
                                    </div>
                                </form>
                            </div>  -->
                            <div class="col-md-4  m_ato login lang-bar">
                                <ul class="m_ato f_right  rspsbnavhdn">
                                    <li  class="hdrht"> 				 
                                        <div class="dropdown gwidget">
                                           <!-- <select onchange="doGTranslate(this);" class="langbar">
                                                <option value="en|en" title="English">English</option>
                                                <option value="en|ar" title="Arabic">Arabic</option>
                                            </select>-->
                                            <select onchange="doGTranslate(this);" class="langbar">
                                            <option value="en|en" title="English">🇪🇳🇬🇱🇮🇸🇭</option>
                                            <option value="en|ar" title="Arabic">&#1593;&#1584;&#1576;&#1609;</option>
                                            </select>
                                           <!-- <select onchange="doGTranslate(this);" class="langbar">
							<option value="en|en" title="English">&#127466&#127475</option>
							<option value="en|ar" title="Arabic">&#127462&#127479 </option>
							</select>-->
                                            <div id="google_translate_element2"></div>
                                        </div>
                                    </li>
                                    <li class="hdrht">
								        <div class="dropdown loreg" v-if="isLoggedin == false">
                                       <!-- <div class="dropdown loreg login_btn" v-if="username == ''">-->
                                            <button class="dropbtn loreg"><i class="fa fa-user-o" aria-hidden="true"></i>
                                            Login/Register<i class="fa fa-sort-desc" aria-hidden="true"></i></button>
                                            <div class="dropdown-content loreg" >
                                                <router-link :to="{ name: 'login'}">Login</router-link>
                                                <router-link :to="{ name: 'register'}">Register</router-link>
                                            </div>
                                        </div>
                                        <div class="dropdown loreg" v-if="isLoggedin == true">
                                     <!--   <div class="dropdown loreg login_btn" v-if="username != ''">-->
                                            <button class="dropbtn loreg"><i class="fa fa-user-o" aria-hidden="true"></i>
                                            Profile/Logout<i class="fa fa-sort-desc" aria-hidden="true"></i></button>
                                            <div class="dropdown-content loreg" >
                                                <router-link :to="{ name: 'profile'}">Profile</router-link>
                                                <a v-on:click="logoutfun()">Logout</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>			
                        </div>
                    </div>
                </div>

                <div class="bottom_header">
                    <div class="container cnt_bbtmhead">
			            <div class="row">			
			                <div class="navmenu">
                                <!--<select onchange="doGTranslate(this);">
                                   <option value="">Select Language</option>
                                   <option value="en|ar">Arabic</option>
                                   <option value="en|en">English</option>
                                </select>
                                <div id="google_translate_element2"></div>--->
<!-- GTranslate: https://gtranslate.io/ -->
 




                                <div class="nbg" id="nbg"></div>
                                
                                <a id="showRight" class="menu_bx"><span></span><span></span><span></span></a>
                                <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s2">
                               <span id="showclose"><img src="images/close.png" width="30px"></span>
                                <li  class="moblang">
                                     <!--<select class="js-example-basic-hide-search">
										 <option value="1">English</option>
										 <option value="2">Arabic</option>
									 </select>-->
								</li>
                                <ul>
                                    <li @click="active = 'home'"  :class="{active:active === 'home'}">
                                        <router-link :to="{ name: 'home'}">
                                        Home</router-link>
                                    </li>
                                    <li @click="active = 'new-cars'"  :class="{active:active === 'new-cars'}">
                                        <router-link :to="{ name: 'new-cars'}">
                                        New Cars</router-link>
                                    </li>
                                    <li @click="active = 'used-cars'"  :class="{active:active === 'used-cars'}">
                                        <router-link :to="{ name: 'used-cars'}">
                                        Preowned Cars</router-link>
                                    </li>
                                    <li @click="active = 'compare'"  :class="{active:active === 'compare'}">
                                        <router-link :to="{ name: 'compare'}">
                                        Compare Cars</router-link>
                                    </li>
                                    <li @click="active = 'blog'"  :class="{active:active === 'blog'}">
                                        <router-link :to="{ name: 'blog'}">
                                        Blog</router-link>
                                    </li>	
                                    <li @click="active = 'news'"  :class="{active:active === 'news'}">
                                        <router-link :to="{ name: 'news'}">
                                        News</router-link>
                                    </li>			
                                    <li @click="active = 'contact'"  :class="{active:active === 'contact'}">
                                        <router-link :to="{ name: 'contact'}">
                                        Contact</router-link>
                                    </li>
						        </ul>
                            </nav>
                        </div>
                    </div>
                </div>
		    </div>
        </div>
    </header>
    <!--Main-Menu Area Start-->
    <router-view></router-view>


    <!-- Footer Area Start -->
    <footer class="footer" id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-lg-3 col-sm-6">
                    <div class="footer-widget about-widget">
                        <h4 class="title">
                            OVERVIEW
                        </h4>
                        <ul class="ftr_overview">
                            <li><a href=""><router-link :to="{ name: 'new-cars'}">
                            New Cars</router-link></a></li>
							<li><a href=""><router-link :to="{ name: 'used-cars'}">
                            Preowned Cars</router-link></a></li>
                            <li><a href=""><router-link :to="{ name: 'compare'}">
                            Compare Cars</router-link></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3  col-sm-6">
                    <div class="footer-widget address-widget">
                        <h4 class="title">
                            OTHERS
                        </h4>
                        <ul class="ftr_overview">
                            <li><a href=""><router-link :to="{ name: 'blog'}">
                            Blog</router-link></a></li>
                            <li><router-link :to="{ name: 'news'}">
                            News</router-link></li>	
                            <li><a href=""><router-link :to="{ name: 'contact'}">
                            Contact</router-link></a></li>
                            <li><a href=""><router-link :to="{ name: 'privacy'}">
                            Privacy Policy</router-link></a></li>
						</ul>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3  col-sm-6">
                    <div class="footer-widget address-widget">
                        <h4 class="title">
                            FOLLOW US
                        </h4>
                        <div class="footer-social">
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
                </div>
            </div>
        </div>
        <div class="copy-bg">
            <div class="container">
                <div class="row">
                    <div class="content">
                        <p class="copyRight"> © 2020 carsearchme </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Area End -->
    <!-- Back to Top Start -->
    <div class="bottomtotop">
        <i class="fas fa-chevron-right"></i>
    </div>
    <!-- Back to Top End -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.common["Locale"] = localStorage.locale;
import Login from './views/Login';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import itemTemplate from './item-template.vue';
export default {
    name: "app",
    components: {Loading},
    data() {
        return {
        list:[],
        brandkey:0,
        brand_list:[],
        tocken:'',
        username:localStorage.getItem("tocken"),
        isLoggedin:localStorage.getItem("isLoggedin") == null ? false : true,
        //isLoggedin:false,
        brand_list:[],
        popular_car_list:[],
        isLoading: false,
        loading: false,
        car_id:0,
        carsearch:'',
        active: null,
        item: {},
        car_list:[],
        items: [
        { id: 1, name: 'Golden Retriever'},
        { id: 2, name: 'Cat'},
        { id: 3, name: 'Squirrel'},
      ],
      itemTemplate,
        };
    },
    
    methods:
    {
        itemSelected (item) {
            this.item = item;
        },
        setLabel (item) {
            return item.name;
        },
        inputChange (text) {
            console.log(this.car_list);
            // your search method
            this.items = items.filter(item => item.name.contains(text));
            // now `items` will be showed in the suggestion list
        },
        getbranddd: function(){
            var vm = this;
            vm.brandkey = vm.brandkey;
            console.log(vm.brandkey);
        },
        logoutfun: function(){
            var vm = this;
            localStorage.tocken = '';
           // vm.isLoggedin=false;
            localStorage.isLoggedin=false;
            //vm.$parent.isLoggedin = false;
           // vm.$parent.username = '';
            localStorage.username = '';
            localStorage.email = '';
            localStorage.isConnected = false;
            vm.$router.go();
           // vm.$router.push({ 
           //         path: '/login'
           // });
            //vm.$router.push('login');
            //vm.$router.go(vm.$router.push('login'));
        },
        searchbrand : function(key){
            var vm = this;
            var id = key;
            vm.isLoading = true;
            let r =  vm.$router.resolve({ path: '/brand-search-list/' + id, });
            window.location.assign(r.href);
        },
        searchCar : function (key) {
            var vm = this;
            var id = key;
            vm.isLoading = true;
            var params = {
               car_id : id,
            };
             axios
                .post(base_url + "api/searchpopularcar", params, {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
                .then(function(response) {
                    vm.isLoading = false;
                    vm.$nextTick(function(){
                        document.getElementById("myDropdown").classList.toggle("show");
                    });
                    let r =  vm.$router.resolve({ path: '/car-details/' + id, });
                  
                    window.location.assign(r.href);
                });
            //console.log(vm.priceId);
        },
        showRight: function() {
            $('.nbg').fadeIn();
            classie.toggle(this, 'active');
            classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther( 'showRight' );


        },
        mainsearch : function(){
            var vm = this;
            vm.carsearch = vm.carsearch;
            console.log(vm.carsearch);
            let searchTerm = (vm.carsearch || "").toLowerCase()
            var results = this.brand_list.filter(function(brand) {
                let name = (brand.name || "").toLowerCase() 
                return name.indexOf(searchTerm) > -1 
            })
            var brandids=[];
            results.forEach(element => {
                brandids = element['id'];
            });
            console.log(brandids.length);
            if(!brandids.length){
                let r =  vm.$router.resolve({  name: 'newcar-search-details', 
                    query: { brandsearchkey: brandids }  });
                  
                    window.location.assign(r.href);
            }
            console.log(brandids);
        }
        
    },
    computed :{
        myfilter: function() {
            var vm = this;
            console.log(vm.carsearch);
             
                //$('#myDropdown').hide();
                //$('#myDropdown1').show();
                //var vm = this;
                if(vm.carsearch != ''){
                    
                    $('#lab1').hide();
                    $('#lab2').hide();
                    $('#br1').hide();
                    $('.lab2').hide();
                    let searchTerm = (this.carsearch || "").toLowerCase()
                    return this.car_list.filter(function(brand) {
                        let name = (brand.name || "").toLowerCase() 
                        return name.indexOf(searchTerm) > -1 
                    })
                }
               else{
                   $('#lab1').show();
                    $('#lab2').show();
                    $('#br1').show();
                    $('.lab2').show();
                   let searchTerm = (this.carsearch || "").toLowerCase()
                    return this.popular_car_list.filter(function(brand) {
                        let name = (brand.name || "").toLowerCase() 
                        return name.indexOf(searchTerm) > -1 
                    })
               }
           
           
        }
    },

    mounted() {
        console.log(this.isLoggedin);
        $('#myDropdown1').hide();
        var vm = this;
       /* EventBus.$on('logged-in', status => {
            vm.auth = status
        })*/

         console.log(vm.username);
      
        axios
          .get(base_url + "api/common",  {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })

          .then(function(response) {
         
            vm.brand_list = response.data.brand_list;
            vm.popular_car_list = response.data.popular_car_list;
            vm.car_list = response.data.car_list;
            console.log( vm.list);
          });


        var menuRight = document.getElementById('cbp-spmenu-s2'),
    body = document.body;
showRight.onclick = function() {
    $('.nbg').fadeIn();
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther( 'showRight' );


};
showclose.onclick = function() {
    $('.nbg').fadeOut();
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther( 'showRight' );


};
nbg.onclick = function() {
    $('.nbg').fadeOut();
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther( 'showRight' );


};


$('#area').keyup(function(){
    $('.word-counter').text(this.value.length+'/1000');
})

$('#area2').keyup(function(){
$('.word-counter.w2').text(this.value.length+'/1000');
})

function showDiv() {
   document.getElementById('popup1').style.display = "block";
}
function showDiv2() {
   document.getElementById('popup1').style.display = "block";
}
function closDiv() {
document.getElementById('popup1').style.display = "none";
}
console.log(localStorage.tocken);

  $(".cbp-spmenu li a").click(function() {
           // alert("sucees");
            $('.nbg').fadeOut();
            classie.toggle(this, 'active');
            classie.toggle(menuRight, 'cbp-spmenu-open');
        });


function myFun(x) {
  if (x.matches) { 
   $('.login_btn .dropdown-content a').click(function() {
  // alert("None");
    $(".login_btn .dropdown-content").toggle();
  });
  $('.login_btn .dropbtn').click(function() {
  // alert("Block");
    $(".login_btn .dropdown-content").toggle();
  });
  
  } 
}
var x = window.matchMedia("(max-width: 992px)")
myFun(x) 
x.addListener(myFun);



 }
 
    
}
 window.onclick = function(searchevent) {
            // alert("aa");
            if ((!searchevent.target.matches('.sinput')) && (!searchevent.target.matches('.demo a'))) {
                // if (!searchevent.target.matches('.sinput')) {
                //alert("uu");
                var dropdowns = document.getElementsByClassName("sdrop");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    var offset = 160;

            $('.car-nav-blk li a').click(function(event) {
                event.preventDefault();
                $($(this).attr('href'))[0].scrollIntoView();
                scrollBy(0, -offset);
            });
</script>
<style>
    
	.router-link-exact-active .router-link-active
    {
	    color: blue; 
	}
	
</style>
<!-- some-sample-css-as-example-for-your-dropdown-autocomplete  -->
<style scope>
.vue-suggestion .vs__list {
    width: 100%;
    text-align: left;
    border: none;
    border-top: none;
    max-height: 400px;
    overflow-y: auto;
    border-bottom: 1px solid #023d7b;
    position: relative;
}
.vue-suggestion .vs__list .vs__list-item {
    background-color: #fff;
    padding: 10px;
    border-left: 1px solid #023d7b;
    border-right: 1px solid #023d7b;
}
.vue-suggestion .vs__list .vs__list-item:last-child {
    border-bottom: none;
}
.vue-suggestion .vs__list .vs__list-item:hover {
    background-color: #eee !important;
}
.vue-suggestion .vs__list,
.vue-suggestion .vs__loading {
    position: absolute;
}
.vue-suggestion .vs__list .vs__list-item {
    cursor: pointer;
}
.vue-suggestion .vs__list .vs__list-item.vs__item-active {
    background-color: #f3f6fa;
}
</style>