<template>
    <div>
         <!--<content-loader class="container"
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
        <div class="comapre-results">
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
                           <li><router-link :to="{ name: 'compare'}">
                         Compare Cars</router-link></li>
                         <li><a>Compare Details</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <section class="sub-categori compare-cars padbtm">
                <div class="container">
                    <div class="row">
		                <h2 v-if="arraylenth == 2">{{car_list_first.car_name}} vs {{car_list_second.car_name}}</h2>
                        <h2 v-if="arraylenth == 3">{{car_list_first.car_name}} vs {{car_list_second.car_name}} vs {{car_list_third.car_name}}</h2>
                        <div class="col-md-12 box-wrap p0">
                            <div class="row">
                                <div class="col-md-4 col-sm-6 col-xs-6 col-mob">
                                <div class="compare_div" style="text-align:center">
    							    <div class="select_wrap d1">
                                        <div class="adcaricn">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        <div class="addTitle">Add car</div>
                                    </div>
							        <div class="inputfield pl1">
                                        <v-select v-model="modelId" :reduce="model_list => model_list.id" :options="model_list" placeholder="Select Brand" @input="getVariant()">
                                        </v-select>
							        </div>
        							<div class="inputfield pl1">
		            					<v-select v-model="carId" :reduce="variant_list => variant_list.id" :options="variant_list" placeholder="Select Variant" @input="getCarDetails()">
                                        </v-select>
				        			</div>
				    			</div>
                                <div class="result-box-1 rb1">
                                            <div class="card shadowWPadding">
                                                <a href=""><img  :src="car_image_url + car_list_first.featured_image"></a>
                                                <div class="gsc_col-xs-12 holder">
                                                    <a class="title click1">{{car_list_first.car_name}} <i class="icon-cd-write-a-comment" @click="brandSelect3()"></i></a>
                                                    <!--<div class="select-list">
                                	                    <select v-model="carId" @change="getCarDetails()">
                                                            <option  value="" disabled selected> All Vehicle Type</option>
		                                                    <option v-for="variant in variant_list" v-bind:value="variant.id"> {{variant.car_name}}</option>
                                                        </select>
			                                        </div>-->

                                                    <div class="price"><span class="icon-cd_R">AED</span>{{car_list_first.price}}</div>
                                                </div>
                                                
                                            </div>                                        
                                </div>
                            </div>
                            <div class="vsTag">VS</div>
                        </div>
                        
                        
                        
                                <!--<div class="col-md-4 col-sm-6 col-xs-6 col-mob">
                                    <div class="compare_div cd1" style="text-align:center">
							            <div class="compre_wrap" style="display:none">
							                <div class="adcaricn">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                <div class="addTitle">Add car</div>
                                            </div>
                                            <div class="inputfield customSelect">
                                                <input type="button" onclick="showDiv()" value="Select Brand/Model">
							                </div>
                                            <div class="inputfield customSelect inputdisabled">
							                    <input disabled="" placeholder="Select Variant" data-id="" autocomplete="off" type="text">
							                </div>
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
                                            <div class="card shadowWPadding">
                                                <a href=""><img  :src="car_image_url + car_list_first.featured_image"></a>
                                                <div class="gsc_col-xs-12 holder">
                                                    <a class="title click1">{{car_list_first.car_name}} <i class="icon-cd-write-a-comment" ></i></a>
                                                   

                                                    <div class="price"><span class="icon-cd_R">AED</span>{{car_list_first.price}}</div>
                                                </div>
                                                <div class="vsTag">VS</div>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>-->
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
						                <v-select v-model="carId1" :reduce="variant_list1 => variant_list1.id" :options="variant_list1" placeholder="Select Variant" @input="getCarDetails()">
                                        </v-select>
						        	</div>
						    	</div>
                                <div class="result-box-1 rb2">
                                            <div class="card shadowWPadding">
                                                <a href=""><img  :src="car_image_url + car_list_second.featured_image"></a>
                                                <div class="gsc_col-xs-12 holder">
                                                    <a class="title">{{car_list_second.car_name}} <i class="icon-cd-write-a-comment" @click="brandSelect()"></i></a>
                                                    <!--<div class="select-list">
                                	                    <select v-model="carId1" @change="getCarDetails()">
                                                            <option  value="" disabled selected> All Vehicle Type</option>
		                                                    <option v-for="variant1 in variant_list1" v-bind:value="variant1.id"> {{variant1.car_name}}</option>
                                                        </select>
			                                        </div>-->

                                                    <div class="price"><span class="icon-cd_R">AED</span>{{car_list_second.price}}</div>
                                                </div>
                                                
                                            </div>                                        
                                        </div>
                            </div>
                            <div class="vsTag">VS</div>
                        </div>
                               <!-- <div class="col-md-4 col-sm-6 col-xs-6 col-mob">
                                    <div class="compare_div cd1" style="text-align:center">
							            <div class="compre_wrap" style="display:none">
							                <div class="adcaricn px2">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                <div class="addTitle">Add car</div>
                                            </div>
                                            <div class="inputfield customSelect px2">
                                                <input type="button" value="Select Brand/Model">
							                </div>
                                            <div class="inputfield customSelect inputdisabled px2">
							                    <input disabled="" placeholder="Select Variant" data-id="" autocomplete="off" type="text">
							                </div>
										</div>
                                        <div id="popup1"  style="display:none;" class="popuplist1 px1" >
                                            <a @click="brandclose()" class="close2" >X</a>
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
                                                    <Select2 v-model="carId1" :options="variant_list1" placeholder="All Vehicle Type" @change="getCarDetails()">
                                                     </Select2>
                                                    
                                                </div>
	                                        </div>
                                        </div>
                                        <div class="result-box-1 rb2">
                                            <div class="card shadowWPadding">
                                                <a href=""><img  :src="car_image_url + car_list_second.featured_image"></a>
                                                <div class="gsc_col-xs-12 holder">
                                                    <a class="title">{{car_list_second.car_name}} <i class="icon-cd-write-a-comment" @click="brandSelect()"></i></a>
                                                    

                                                    <div class="price"><span class="icon-cd_R">AED</span>{{car_list_second.price}}</div>
                                                </div>
                                                <div class="vsTag">VS</div>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>-->

                                <div class="col-md-4 col-sm-6 col-xs-6 col-mob sec2 dl12">
                                    <div class="compare_div second" style="text-align:center">
                                        <div class="select_wrap d12">
                                            <div class="adcaricn">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                <div class="addTitle hh1">Add car</div>
                                            </div>
                                            <div class="inputfield">
                                                <v-select v-model="modelId1" :reduce="model_list1 => model_list1.id"  :options="model_list1" placeholder="Select Brand" @input="getVariant1()">
                                                </v-select>
                                            </div>
                                            <div class="inputfield">
                                                <v-select v-model="carId1" :reduce="variant_list1 => variant_list1.id" :options="variant_list1" placeholder="Select Variant" @input="getCarDetails()">
                                                </v-select>
                                            </div>
                                        </div>
                                        <div class="result-box-1 rb3">
                                            <div class="card shadowWPadding">
                                                <a href=""><img  :src="car_image_url + car_list_third.featured_image"></a>
                                                <div class="gsc_col-xs-12 holder">
                                                    <a class="title">{{car_list_third.car_name}} <i class="icon-cd-write-a-comment" @click="brandSelect1()"></i></a>
                                                    <div class="price"><span class="icon-cd_R">AED</span>{{car_list_third.price}}</div>
                                                </div>
                                                
                                            </div>                                        
                                        </div>
                                    </div>
                                    <div class="vsTag">VS</div>
                                </div>
                                <div class="col-md-4 col-sm-6 col-xs-6 col-mob sec2"  v-if="arraylenth == 2">
                                    <div class="compare_div second" style="text-align:center">
                                        <div class="select_wrap d4">
                                            <div class="adcaricn">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                <div class="addTitle">Add car</div>
                                            </div>
                                            <div class="inputfield">
                                                <v-select v-model="modelId2" :reduce="model_list2 => model_list2.id" :options="model_list2" placeholder="Select Brand" @input="getVariant2()">
                                                </v-select>
                                            </div>
                                            <div class="inputfield">
                                                <v-select v-model="carId2" :reduce="variant_list2 => variant_list2.id" :options="variant_list2" placeholder="Select Variant" @input="getCarDetails()">
                                                </v-select>
                                            </div>
                                        </div>
                                        <!--<div class="result-box-1 rb3 " style="display:none">
                                            <div class="card shadowWPadding">
                                                <a href=""><img  :src="car_image_url + car_list_third.featured_image"></a>
                                                <div class="gsc_col-xs-12 holder">
                                                    <a class="title">{{car_list_third.car_name}} <i class="icon-cd-write-a-comment" @click="brandSelect1()"></i></a>
                                                   

                                                    <div class="price"><span class="icon-cd_R">AED</span>{{car_list_third.price}}</div>
                                                </div>
                                                <div class="vsTag">VS</div>
                                            </div>                                        
                                        </div>-->
                                    </div>
                                    <div class="vsTag">VS</div>
                                </div>
                                <!--<div class="col-md-4 col-sm-6 col-xs-6 col-mob" v-if="arraylenth == 3">
                                    <div class="compare_div cd1" style="text-align:center">
							            <div class="compre_wrap" style="display:none">
							                <div class="adcaricn pw2">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                <div class="addTitle">Add car</div>
                                            </div>
                                            <div class="inputfield customSelect pw2">
                                                <input type="button" value="Select Brand/Model">
							                </div>
                                            <div class="inputfield customSelect inputdisabled pw2">
							                    <input disabled="" placeholder="Select Variant" data-id="" autocomplete="off" type="text">
							                </div>
										</div>
                                        <div id="popup1"  style="display:none;" class="popuplist1 pw1" >
                                            <a @click="brandclose1()" class="close2" >X</a>
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
                                                    <Select2 v-model="carId2" :options="variant_list2" placeholder="All Vehicle Type" @change="getCarDetails()">
                                                     </Select2>
                                                    
                                                </div>
	                                        </div>
                                        </div>
                                        <div class="result-box-1 rb3">
                                            <div class="card shadowWPadding">
                                                <a href=""><img  :src="car_image_url + car_list_third.featured_image"></a>
                                                <div class="gsc_col-xs-12 holder">
                                                    <a class="title">{{car_list_third.car_name}} <i class="icon-cd-write-a-comment" @click="brandSelect1()"></i></a>
                                                   

                                                    <div class="price"><span class="icon-cd_R">AED</span>{{car_list_third.price}}</div>
                                                </div>
                                                <div class="vsTag">VS</div>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>-->
                                <!--<div class="col-md-4 col-sm-6 col-xs-6 col-mob rsp_hid" v-if="arraylenth == 2">
				                    <div class="compare_div cd3" style="text-align:center">
										
							                <div class="adcaricn pw1">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                <div class="addTitle">Add car</div>
                                            </div>
                                            <div class="inputfield customSelect pw1">
                                                <input type="button" class="show1" value="Select Brand/Model" @click="brandSelect1()">
							                </div>
                    						<div class="inputfield customSelect inputdisabled pw1">
							                    <input disabled="" placeholder="Select Variant" data-id="" autocomplete="off" type="text">
							                </div>
										
										<div style="display:none;" class="popuplist1 pw1">
                                            <a class="close2 cs3" >X</a>
                                            <ul class="nav nav-tabs">
                                                <li><a data-toggle="tab" href="#brand4" class="active">Brand/Model</a></li>
                                                <li><a data-toggle="tab" href="#variant4">Variant</a></li>
                                            </ul>
                                            <div class="tab-content">
                                                    <div id="brand4" class="tab-pane fade in active">
                                                        <Select2 v-model="modelId2" :options="model_list2" placeholder="Select Brand" @change="getVariant2()">
                                                        </Select2>
                                                        
                                                            <option  value="" disabled selected> Select Brand</option>
		                                                    <option v-for="model2 in model_list2" v-bind:value="model2.id"> {{model2.make_name}}/{{model2.name}}</option>
                                                        
                                                    </div>
                                                    <div id="variant4" class="tab-pane fade">
                                                        <Select2 v-model="carId2" :options="variant_list2" placeholder="All Vehicle Type" @change="getCarDetails()">
                                                        </Select2>
	                                                    
	                                            	</div>
                                                </div>
                                                <div class="result-box-1 rs3" style="display:none">
                                                    <div class="card shadowWPadding">
                                                        <a href=""><img  alt="Maruti Swift" src="assets/front/images/cars/featured/5d415f85be7de.jpg"></a>
                                                        <div class="gsc_col-xs-12 holder">
                                                            <a class="title">Mazda <i class="icon-cd-write-a-comment"></i></a>
                                                            <div class="select-list">
                                    				            <select class="search2">
			  				                                        <option value="" selected disabled>Select Variant</option>
                                                                    <option value="142">Abarth</option>
                                                                    <option value="143">Acura</option>
                                                                    <option value="144">Alfa Romeo</option>
                                                                    <option value="145">Aston Martin</option>
                                                                    <option value="146">Audi</option>
				                                                </select>
			                                                </div>
                                                            <div class="price"><span class="icon-cd_R">AED</span>446</div>
                                                        </div>
                                                    </div>                                        
                                                </div>
                                           
                                        </div>
                                    </div>
                                </div>-->
			                </div>
			            </div>
                    </div>
                </div>
                <!-- <h5 class="vali" style="color: red;margin-left: 519px;">PLEASE SELECT ANOTHER CAR</h5>-->
            </section>
            <!--<div class="container">
	                    <div class="row">
                            <div class="accordion">
                                <ul>
                                    <li>Overview</li>
                                    <li>{{car_list_first.car_name}}</li>
                                    <li>{{car_list_second.car_name}}</li>
                                    <li v-if="arraylenth == 3">{{car_list_third.car_name}}</li>
                                </ul>
                            </div>
                            <div class="panel" style="display:block;max-height:100%;">
                                <div class="box">
                                    <ul>
                                        <li class="thead">On Road Price:</li>
                                        <li>AED {{car_list_first.price}}</li>
                                        <li>AED {{car_list_second.price}}</li>
                                        <li v-if="arraylenth == 3">AED {{car_list_third.price}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Fuel Type</li>
                                        <li> {{car_list_first.fuel_type}}</li>
                                        <li> {{car_list_second.fuel_type}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.fuel_type}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Engine Capacity:</li>
                                        <li> {{car_list_first.engine_capacity}}</li>
                                        <li> {{car_list_second.engine_capacity}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.engine_capacity}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Acceleration</li>
                                        <li> {{car_list_first.acceleration}}</li>
                                        <li> {{car_list_second.acceleration}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.acceleration}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Cylinders</li>
                                        <li> {{car_list_first.cylinders}}</li>
                                        <li> {{car_list_second.cylinders}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.cylinders}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Fuel Economy</li>
                                        <li> {{car_list_first.fuel_economy}}</li>
                                        <li> {{car_list_second.fuel_economy}}</li>
                                        <li v-if="arraylenth == 3">{{car_list_third.fuel_economy}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Fuel Tank Capacity:</li>
                                        <li> {{car_list_first.fuel_tank_capacity}}</li>
                                        <li> {{car_list_second.fuel_tank_capacity}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.fuel_tank_capacity}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Length</li>
                                        <li> {{car_list_first.length}}</li>
                                        <li> {{car_list_second.length}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.length}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Horse Power</li>
                                        <li> {{car_list_first.horsepower}}</li>
                                        <li> {{car_list_second.horsepower}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.horsepower}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Make</li>
                                        <li> {{car_list_first.make}}</li>
                                        <li> {{car_list_second.make}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.make}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Seating Capacity:</li>
                                        <li> {{car_list_first.seating_capacity}}</li>
                                        <li> {{car_list_second.seating_capacity}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.seating_capacity}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Top Speed:</li>
                                        <li> {{car_list_first.top_speed}}</li>
                                        <li> {{car_list_second.top_speed}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.top_speed}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Torque:</li>
                                        <li> {{car_list_first.torque}}</li>
                                        <li> {{car_list_second.torque}}</li>
                                        <li v-if="arraylenth == 3">{{car_list_third.torque}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Transmission:</li>
                                        <li>{{car_list_first.transmission}}</li>
                                        <li>{{car_list_second.transmission}}</li>
                                        <li v-if="arraylenth == 3">{{car_list_third.transmission}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Trunk Capacity:</li>
                                        <li> {{car_list_first.trunk_capacity}}</li>
                                        <li> {{car_list_second.trunk_capacity}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.trunk_capacity}}</li>
                                    </ul>
                                    <ul>
                                        <li class="thead">Wheel Base:</li>
                                        <li> {{car_list_first.wheelbase}}</li>
                                        <li> {{car_list_second.wheelbase}}</li>
                                        <li v-if="arraylenth == 3"> {{car_list_third.wheelbase}}</li>
                                    </ul>
                                </div>
                            </div>
            			</div>
                    </div>
                </div> 
            </div>-->
            <div class="container">
	            <div class="row">
                    <div class="accordion active">
                        <ul>
                            <li>Overview</li>
                            <li>{{car_list_first.car_name}}</li>
                            <li>{{car_list_second.car_name}}</li>
                            <li v-if="arraylenth == 3">{{car_list_third.car_name}}</li>
                        </ul>
                    </div>
                    <div class="panel" style="display:block;max-height:100%;">
                        <div class="box">
                            <ul>
                                <li class="thead">Model</li>
                                <li> {{car_list_first.model == '' || car_list_first.model == null ? 'N/A' : car_list_first.model}}</li>
                                <li> {{car_list_second.model == '' || car_list_second.model == null ? 'N/A' : car_list_second.model}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.model == '' || car_list_third.model == null ? 'N/A' : car_list_third.model}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Vehicle Types</li>
                                <li> {{car_list_first.vehicle_types == '' || car_list_first.vehicle_types == null ? 'N/A' : car_list_first.vehicle_types}}</li>
                                <li> {{car_list_second.vehicle_types == '' || car_list_second.vehicle_types == null ? 'N/A' : car_list_second.vehicle_types}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.vehicle_types == '' || car_list_third.vehicle_types == null ? 'N/A' : car_list_third.vehicle_types}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Engine Capacity</li>
                                <li> {{car_list_first.engine_capacity == '' || car_list_first.engine_capacity == null ? 'N/A' : car_list_first.engine_capacity}}</li>
                                <li> {{car_list_second.engine_capacity == '' || car_list_second.engine_capacity == null ? 'N/A' : car_list_second.engine_capacity}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.engine_capacity == '' || car_list_third.engine_capacity == null ? 'N/A' : car_list_third.engine_capacity}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Transmission</li>
                                <li>{{car_list_first.transmission == '' || car_list_first.transmission == null ? 'N/A' : car_list_first.transmission}}</li>
                                <li>{{car_list_second.transmission == '' || car_list_second.transmission == null ? 'N/A' : car_list_second.transmission}}</li>
                                <li v-if="arraylenth == 3">{{car_list_third.transmission == '' || car_list_third.transmission == null ? 'N/A' : car_list_third.transmission}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Seating Capacity</li>
                                <li> {{car_list_first.seating_capacity == '' || car_list_first.seating_capacity == null ? 'N/A' : car_list_first.seating_capacity}}</li>
                                <li> {{car_list_second.seating_capacity == '' || car_list_second.seating_capacity == null ? 'N/A' : car_list_second.seating_capacity}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.seating_capacity == '' || car_list_third.seating_capacity == null ? 'N/A' : car_list_third.seating_capacity}}</li>
                            </ul>
                        </div>
                    </div>
            	</div>
            </div>
            <div class="container">
	            <div class="row">
                    <div class="accordion">
                        <ul>
                            <li>Key Features</li>
                            <li>{{car_list_first.car_name}}</li>
                            <li>{{car_list_second.car_name}}</li>
                            <li v-if="arraylenth == 3">{{car_list_third.car_name}}</li>
                        </ul>
                    </div>
                    <div class="panel">
                        <div class="box">
                            <ul>
                                <li class="thead">Power Steering</li>
                                <li v-if="car_list_first.powersteering == 0 || car_list_first.powersteering == null">NO</li>
                                <li v-if="car_list_first.powersteering == 1">YES</li>
                                <li v-if="car_list_second.powersteering == 0 || car_list_second.powersteering == null">NO</li>
                                <li v-if="car_list_second.powersteering == 1">YES</li>
                                <li v-if="car_list_third.powersteering == 0  || car_list_third.powersteering == null && arraylenth == 3">NO</li>
                                <li v-if="car_list_third.powersteering == 1 && arraylenth == 3">YES</li>
                            </ul>
                            <ul>
                                <li class="thead">ABS</li>
                                <li v-if="car_list_first.antilockbrakingsystem == 0 || car_list_first.antilockbrakingsystem == null">NO</li>
                                <li v-if="car_list_first.antilockbrakingsystem == 1">YES</li>
                                <li v-if="car_list_second.antilockbrakingsystem == 0 || car_list_second.antilockbrakingsystem == null">NO</li>
                                <li v-if="car_list_second.antilockbrakingsystem == 1">YES</li>
                                <li v-if="car_list_third.antilockbrakingsystem == 0 || car_list_third.antilockbrakingsystem == null&& arraylenth == 3">NO</li>
                                <li v-if="car_list_third.antilockbrakingsystem == 1 && arraylenth == 3">YES</li>
                            </ul>
                            <ul>
                                <li class="thead">Airbags</li>
                                <li v-if="car_list_first.airbags == 0 || car_list_first.airbags == null">NO</li>
                                <li v-if="car_list_first.airbags == 1">YES</li>
                                <li v-if="car_list_second.airbags == 0 || car_list_second.airbags == null">NO</li>
                                <li v-if="car_list_second.airbags == 1">YES</li>
                                <li v-if="car_list_third.airbags == 0 || car_list_third.airbags == null && arraylenth == 3">NO</li>
                                <li v-if="car_list_third.airbags == 1 && arraylenth == 3">YES</li>
                            </ul>
                            <ul>
                                <li class="thead">Power Windows Front</li>
                                <li v-if="car_list_first.powerwindowsfront == 0 || car_list_first.powerwindowsfront == null">NO</li>
                                <li v-if="car_list_first.powerwindowsfront == 1">YES</li>
                                <li v-if="car_list_second.powerwindowsfront == 0 || car_list_second.powerwindowsfront == null">NO</li>
                                <li v-if="car_list_second.powerwindowsfront == 1">YES</li>
                                <li v-if="car_list_third.powerwindowsfront == 0 || car_list_third.powerwindowsfront == null && arraylenth == 3">NO</li>
                                <li v-if="car_list_third.powerwindowsfront == 1 && arraylenth == 3">YES</li>
                            </ul>
                            <ul>
                                <li class="thead">Passenger Airbag</li>
                                <li v-if="car_list_first.passengerairbag == 0 || car_list_first.passengerairbag == null">NO</li>
                                <li v-if="car_list_first.passengerairbag == 1">YES</li>
                                <li v-if="car_list_second.passengerairbag == 0 || car_list_second.passengerairbag == null">NO</li>
                                <li v-if="car_list_second.passengerairbag == 1">YES</li>
                                <li v-if="car_list_third.passengerairbag == 0 || car_list_third.passengerairbag == null&& arraylenth == 3">NO</li>
                                <li v-if="car_list_third.passengerairbag == 1 && arraylenth == 3">YES</li>
                            </ul>
                            <ul>
                                <li class="thead">Fog Lights - Front</li>
                                <li v-if="car_list_first.foglightsfront == 0 || car_list_first.foglightsfront == null">NO</li>
                                <li v-if="car_list_first.foglightsfront == 1">YES</li>
                                <li v-if="car_list_second.foglightsfront == 0 || car_list_second.foglightsfront == null">NO</li>
                                <li v-if="car_list_second.foglightsfront == 1">YES</li>
                                <li v-if="car_list_third.foglightsfront == 0 || car_list_third.foglightsfront == null&& arraylenth == 3">NO</li>
                                <li v-if="car_list_third.foglightsfront == 1 && arraylenth == 3">YES</li>
                            </ul>
                        </div>
                    </div>
            	</div>
            </div>
            <div class="container">
	            <div class="row">
                    <div class="accordion">
                        <ul>
                            <li>Engine and Transmission</li>
                            <li>{{car_list_first.car_name}}</li>
                            <li>{{car_list_second.car_name}}</li>
                            <li v-if="arraylenth == 3">{{car_list_third.car_name}}</li>
                        </ul>
                    </div>
                    <div class="panel">
                        <div class="box">
                            <ul>
                                <li class="thead">Engine Capacity</li>
                                <li> {{car_list_first.engine_capacity == '' || car_list_first.engine_capacity == null ? 'N/A' : car_list_first.engine_capacity}}</li>
                                <li> {{car_list_second.engine_capacity == '' || car_list_second.engine_capacity == null ? 'N/A' : car_list_second.engine_capacity}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.engine_capacity == '' || car_list_third.engine_capacity == null ? 'N/A' : car_list_third.engine_capacity}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Transmission</li>
                                <li>{{car_list_first.transmission == '' || car_list_first.transmission == null ? 'N/A' : car_list_first.transmission}}</li>
                                <li>{{car_list_second.transmission == '' || car_list_second.transmission == null ? 'N/A' : car_list_second.transmission}}</li>
                                <li v-if="arraylenth == 3">{{car_list_third.transmission == '' || car_list_third.transmission == null ? 'N/A' : car_list_third.transmission}}</li>
                            </ul>
                            <ul>
                                <li class="thead">No. of cylinder</li>
                                <li>{{car_list_first.noofcylinders}}</li>
                                <li>{{car_list_second.noofcylinders}}</li>
                                <li v-if="arraylenth == 3">{{car_list_third.noofcylinders}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Drive Type</li>
                                <li>{{car_list_first.drive_type == '' || car_list_first.drive_type == null ? 'N/A' : car_list_first.drive_type}}</li>
                                <li>{{car_list_second.drive_type == '' || car_list_second.drive_type == null ? 'N/A' : car_list_second.drive_type}}</li>
                                <li v-if="arraylenth == 3">{{car_list_third.drive_type == '' || car_list_third.drive_type == null ? 'N/A' : car_list_third.drive_type}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Torque</li>
                                <li>{{car_list_first.torque == '' || car_list_first.torque == null ? 'N/A' : car_list_first.torque}}</li>
                                <li>{{car_list_second.torque == '' || car_list_second.torque == null ? 'N/A' : car_list_second.torque}}</li>
                                <li v-if="arraylenth == 3">{{car_list_third.torque == '' || car_list_third.torque == null ? 'N/A' : car_list_third.torque}}</li>
                            </ul>
                        </div>
                    </div>
            	</div>
            </div>
            <div class="container">
	            <div class="row">
                    <div class="accordion">
                        <ul>
                            <li>Fuel and Performance</li>
                            <li>{{car_list_first.car_name}}</li>
                            <li>{{car_list_second.car_name}}</li>
                            <li v-if="arraylenth == 3">{{car_list_third.car_name}}</li>
                        </ul>
                    </div>
                    <div class="panel">
                        <div class="box">
                            <ul>
                                <li class="thead">Fuel Tank Capacity</li>
                                <li> {{car_list_first.fuel_tank_capacity == '' || car_list_first.fuel_tank_capacity == null ? 'N/A' : car_list_first.fuel_tank_capacity}}</li>
                                <li> {{car_list_second.fuel_tank_capacity == '' || car_list_second.fuel_tank_capacity == null ? 'N/A' : car_list_second.fuel_tank_capacity}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.fuel_tank_capacity == '' || car_list_third.fuel_tank_capacity == null ? 'N/A' : car_list_third.fuel_tank_capacity}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Fuel Economy</li>
                                <li> {{car_list_first.fuel_economy == '' || car_list_first.fuel_economy == null ? 'N/A' : car_list_first.fuel_economy}}</li>
                                <li> {{car_list_second.fuel_economy == '' || car_list_second.fuel_economy == null ? 'N/A' : car_list_second.fuel_economy}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.fuel_economy == '' || car_list_third.fuel_economy == null ? 'N/A' : car_list_third.fuel_economy}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Fuel Type</li>
                                <li> {{car_list_first.fuel_type == '' || car_list_first.fuel_type == null ? 'N/A' : car_list_first.fuel_type}}</li>
                                <li> {{car_list_second.fuel_type == '' || car_list_second.fuel_type == null ? 'N/A' : car_list_second.fuel_type}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.fuel_type == '' || car_list_third.fuel_type == null ? 'N/A' : car_list_third.fuel_type}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Top Speed</li>
                                <li> {{car_list_first.top_speed == '' || car_list_first.top_speed == null ? 'N/A' : car_list_first.top_speed}}</li>
                                <li> {{car_list_second.top_speed == '' || car_list_second.top_speed == null ? 'N/A' : car_list_second.top_speed}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.top_speed == '' || car_list_third.top_speed == null ? 'N/A' : car_list_third.top_speed}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Acceleration</li>
                                <li>{{car_list_first.acceleration == '' || car_list_first.acceleration == null ? 'N/A' : car_list_first.acceleration}}</li>
                                <li>{{car_list_second.acceleration == '' || car_list_second.acceleration == null ? 'N/A' : car_list_second.acceleration}}</li>
                                <li v-if="arraylenth == 3">{{car_list_third.acceleration == '' || car_list_third.acceleration == null ? 'N/A' : car_list_third.acceleration}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
	            <div class="row">
                    <div class="accordion">
                        <ul>
                            <li>Dimensions and Capacity</li>
                            <li>{{car_list_first.car_name}}</li>
                            <li>{{car_list_second.car_name}}</li>
                            <li v-if="arraylenth == 3">{{car_list_third.car_name}}</li>
                        </ul>
                    </div>
                    <div class="panel">
                        <div class="box">
                            <ul>
                                <li class="thead">Length</li>
                                <li> {{car_list_first.length == '' || car_list_first.length == null ? 'N/A' : car_list_first.length}}</li>
                                <li> {{car_list_second.length == '' || car_list_second.length == null ? 'N/A' : car_list_second.length}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.length == '' || car_list_third.length == null ? 'N/A' : car_list_third.length}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Width</li>
                                <li> {{car_list_first.width == '' || car_list_first.width == null ? 'N/A' : car_list_first.width}}</li>
                                <li> {{car_list_second.width == '' || car_list_second.width == null ? 'N/A' : car_list_second.width}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.width == '' || car_list_third.width == null ? 'N/A' : car_list_third.width}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Height</li>
                                <li> {{car_list_first.height == '' || car_list_first.height == null ? 'N/A' : car_list_first.height}}</li>
                                <li> {{car_list_second.height == '' || car_list_second.height == null ? 'N/A' : car_list_second.height}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.height == '' || car_list_third.height == null ? 'N/A' : car_list_third.height}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Wheelbase</li>
                                <li> {{car_list_first.wheelbase == '' || car_list_first.wheelbase == null ? 'N/A' : car_list_first.wheelbase}}</li>
                                <li> {{car_list_second.wheelbase == '' || car_list_second.wheelbase == null ? 'N/A' : car_list_second.wheelbase}}</li>
                                <li v-if="arraylenth == 3"> {{car_list_third.wheelbase == '' || car_list_third.wheelbase == null ? 'N/A' : car_list_third.wheelbase}}</li>
                            </ul>
                            <ul>
                                <li class="thead">Trunk Capacity</li>
                                <li>{{car_list_first.trunk_capacity == '' || car_list_first.trunk_capacity == null ? 'N/A' : car_list_first.trunk_capacity}}</li>
                                <li>{{car_list_second.trunk_capacity == '' || car_list_second.trunk_capacity == null ? 'N/A' : car_list_second.trunk_capacity}}</li>
                                <li v-if="arraylenth == 3">{{car_list_third.trunk_capacity == '' || car_list_third.trunk_capacity == null ? 'N/A' : car_list_third.trunk_capacity}}</li>
                            </ul>
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
    components: {Select2,Loading,ContentLoader,FacebookLoader},
    data() {
        return {
             preloader:false,
             carSearchKey:[],
             searchCarlist:[],
             car_list_first:[],
             car_list_second:[],
             car_list_third:[],
             arraylenth:0,
             model_list:[],
             variant_list:[],
             modelId:0,
             carId:0,
             car_image_url,
             model_list1:[],
             variant_list1:[],
             modelId1:0,
             carId1:0,
             model_list2:[],
             variant_list2:[],
             modelId2:0,
             carId2:0,
             isLoading: false,
             loading: false,
              myData:0,
              item:'',
              brandId1:0
        }
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
            $('.click1').click(function(){  
                $('.pl1').show();
                $('.rb1').hide();
                $('.cd1').addClass("excl1");
            });
            $('.close2').click(function(){   
                $('.pl1').hide();
                $('.rb1').show();
                $('.cd1').removeClass("excl1");
            })
            $(function(){
                $('.search2')
                .comboSelect()
            }) 
            $(".js-example-basic-hide-search").select2({
                minimumResultsForSearch: Infinity
            });
            $(".js-example-basic-single ").select2({
		    });
            $('.slick-slider').slick({
                    // centerMode: true,
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
                            }
                        },
                        {
                            breakpoint: 1000,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                    ]

            });
        },
        loadData: function() {
            var vm = this;
            vm.carSearchKey = this.$route.query.carSearchKey;
            console.log(vm.carSearchKey);
            vm.searchCarDetails();
        },
        searchCarDetails:function(){
            var vm = this;
            vm.myData=0;
            vm.isLoading = true;
            var params = {
                carSearchKey: vm.carSearchKey,
            }
            axios
            .post(base_url + "api/getcomparecar", params, {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            })
            .then(function(response) {
                vm.myData=1;
                vm.isLoading = false;
                vm.searchCarlist = response.data.car_list_details.data;
                vm.model_list = response.data.model_list;
                vm.model_list1 = response.data.model_list;
                vm.model_list2 = response.data.model_list;
                vm.arraylenth = vm.searchCarlist.length;
                console.log(vm.arraylenth);
                if(vm.arraylenth == 2){
                    vm.car_list_first = vm.searchCarlist[0];
                    vm.car_list_second = vm.searchCarlist[1];
                    vm.carId = vm.car_list_first.id;
                    vm.carId1 = vm.car_list_second.id;
                    $('.d1').hide();
                    $('.d2').hide();
                    $('.dl12').hide();
                    //$('.d12').hide();
                    vm.brandId1 =  vm.car_list_first['make_id'];

                   // vm.item = vm.car_list_first['model'];
                    console.log( vm.car_list_first['make_id']);
                }else if(vm.arraylenth == 3) {
                    vm.car_list_first = vm.searchCarlist[0];
                    vm.car_list_second = vm.searchCarlist[1];
                    vm.car_list_third = vm.searchCarlist[2];
                    vm.carId = vm.car_list_first.id;
                    vm.carId1 = vm.car_list_second.id;
                    vm.carId2 = vm.car_list_third.id;
                    $('.d1').hide();
                    $('.d2').hide();
                    $('.dl12').show();
                    $('.d12').hide();
                }
                
                //vm.searchCarlist = response.data.car_list_details;
                 console.log(vm.arraylenth);
                 console.log(vm.car_list_first);
                 console.log(vm.searchCarlist);
            });
        },
        getVariant:function () {
            var vm = this;
           // vm.isLoading = true;
            console.log(vm.modelId);
            var id =  vm.modelId
            axios
                .get(base_url + "api/variantcar/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                vm.variant_list = response.data.variant_list;
              // vm.isLoading = false;
               /* vm.$nextTick(function(){
                  // $('#variant').show(); 
                   $('#variant').addClass("active");
                });*/
              // console.log(vm.model_list);
            });

        },
        getVariant1:function () {
            var vm = this;
            //vm.isLoading = true;
            console.log(vm.modelId1);
            var id =  vm.modelId1
            axios
                .get(base_url + "api/variantcar/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                vm.variant_list1 = response.data.variant_list;
                //vm.isLoading = false;
               /* vm.$nextTick(function(){
                  // $('#variant').show(); 
                   $('#variant').addClass("active");
                });*/
               console.log(vm.variant_list1);
            });

        },
        getVariant2:function () {
            var vm = this;
            //vm.isLoading = true;
            console.log(vm.modelId2);
            var id =  vm.modelId2
            axios
                .get(base_url + "api/variantcar/" + id , {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                })
            .then(function(response) {
                vm.variant_list2 = response.data.variant_list;
               // vm.isLoading = false;
               /* vm.$nextTick(function(){
                  // $('#variant').show(); 
                   $('#variant').addClass("active");
                });*/
               //console.log(vm.model_list);
            });

        },
        brandSelect:function(){
             $('.px1').show();
             $('.rb2').hide();
             $('.d2').show();
             //$('.pl1').hide();
        },
        brandclose:function(){
             $('.px1').hide();
             $('.rb2').show();
              $('.d2').show();
        },
        brandSelect1:function(){
            this.carId1 = 0;
             $('.pw1').show();
             $('.rb3').hide();
              $('.d12').show();
            // $('.pl1').hide();
        },
        brandclose1:function(){
             $('.pw1').hide();
             $('.rb3').show();
              $('.d12').show();
        },
        brandSelect3:function(){
            this.carId = 0;
             $('.px1').show();
            // $('.rb2').hide();
             $('.d1').show();
             //$('.pl1').hide();
        },
        getCarDetails:function (){
           var vm = this;
           
           vm.carSearchKey = [];
            vm.carId = vm.carId;
            vm.carId1 = vm.carId1;
            vm.carId2 = vm.carId2;
            console.log(vm.carId);
            console.log(vm.carId1);
            console.log(vm.carId2);
            //if(vm.carId != vm.carId1 || vm.carId != vm.carId2 || vm.carId1 != vm.carId2){
                if (vm.carId != '' && vm.carId1 != '' && vm.carId2 != '') {
                    vm.carSearchKey.push(vm.carId);
                    vm.carSearchKey.push(vm.carId1);
                    vm.carSearchKey.push(vm.carId2);
                    //console
                    this.$router.push({ 
                            name: 'compare-search-details', 
                            query: { carSearchKey: vm.carSearchKey } 
                    });
                    window.location.reload();
                }else if ((vm.carId != '' && vm.carId1 != '') )
                {
                    vm.carSearchKey.push(vm.carId);
                    vm.carSearchKey.push(vm.carId1);
                    this.$router.push({ 
                            name: 'compare-search-details', 
                            query: { carSearchKey: vm.carSearchKey } 
                    });
                    window.location.reload();
                }else if (vm.carId != '' && vm.carId2 != '') {
                    vm.carSearchKey.push(vm.carId);
                    vm.carSearchKey.push(vm.carId2);
                    this.$router.push({ 
                            name: 'compare-search-details', 
                            query: { carSearchKey: vm.carSearchKey } 
                    });
                    window.location.reload();
                }else if (vm.carId1 != '' && vm.carId2 != '') {
                    vm.carSearchKey.push(vm.carId1);
                    vm.carSearchKey.push(vm.carId2);
                    this.$router.push({ 
                            name: 'compare-search-details', 
                            query: { carSearchKey: vm.carSearchKey } 
                    });
                    window.location.reload();
                }
           /* }
            else {
               $('.vali').show();
            }*/
        },
    },
    mounted() {
        
        this.loadData();
        this.accordion();   
         $(".loader").delay(2000).fadeOut("slow");
        $("#overlayer").delay(2000).fadeOut("slow");
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