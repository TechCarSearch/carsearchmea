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
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <h1 class="title">Blog Details</h1>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area Start -->

    <div class="breadcrumb2">
      <div class="container">
        <ul>
          <li><router-link :to="{ name: 'home'}">
          Home</router-link></li>
          <li><router-link :to="{ name: 'blog'}">
          Blog List</router-link></li>
          <li>
            <a>Blog Details</a>
          </li>
        </ul>
      </div>
    </div>
   

    <!-- Blog Area Start -->
    <section class="blog blog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12" v-for="blog in list">
            <article
              id="post-7904"
              class="post_mod-b post_mod-d clearfix blog-item-gallery post-7904 post type-post status-publish format-gallery has-post-thumbnail hentry category-uncategorized post_format-post-format-gallery"
            >
              <div class="entry-media">
                <img :src="blog_image_url + blog.photo" class="img-responsive wp-post-image" alt />
              </div>
              <div class="entry-main entry-main_mod-a">
                <div class="entry-main__inner">
                  <h3 class="entry-title" >
                    <a href>{{ blog.title }}</a>
                  </h3>
                  <div class="entry-meta">
                    <span class="entry-meta__item">
                      By::
                      <span class="entry-meta__link">
                        <a href title="Posts by admin" rel="author">Admin</a>
                      </span>
                    </span>
                    <span class="entry-meta__item">
                      COMMENTS::
                      <a href class="entry-meta__link">0</a>
                    </span>
                  </div>
                </div>
                <div class="decor-1"></div>
                <div class="entry-date">
                  <span class="entry-date__inner">
                    <span class="entry-date__number">{{getDay(blog.created_at)}}</span>
                    <br />{{getMonth(blog.created_at)}}
                  </span>
                </div>
                <div class="entry-content">
                  {{ blog.details }}
                </div>
                <div class="entry-footer">
                  <div class="wrap-post-btn"></div>
                  <div class="wrap-social-block wrap-social-block_mod-c pull-right">
                    <div class="social-block">
                      <div class="social-block__inner">
                        <span class="social-block__title">Share This</span>
                        <ul class="social-block__list list-inline">
                          <li>
                            <a
                              href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%2FAlison-Work-From-Nov-1%2F2020%2Fcarsearch%2Fblog%2F24"
                            >
                              <i class="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/intent/tweet?text=my share text&amp;url=http%3A%2F%2Flocalhost%2FAlison-Work-From-Nov-1%2F2020%2Fcarsearch%2Fblog%2F24"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://plus.google.com/share?url=http%3A%2F%2Flocalhost%2FAlison-Work-From-Nov-1%2F2020%2Fcarsearch%2Fblog%2F24"
                            >
                              <i class="fab fa-google-plus-g"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Flocalhost%2FAlison-Work-From-Nov-1%2F2020%2Fcarsearch%2Fblog%2F24&amp;title=my share text&amp;summary=dit is de linkedin summary"
                            >
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
         <!-- <div class="col-lg-4">
            <div class="blog-aside">
              <aside class="sidebar">
                <div id="search-5" class="widget_search widget block_content">
                  <form action method="get" id="search-global-form">
                    <input type="text" placeholder="Search Posts" v-model="searchkey" id="search" value />
                    <button class="btn btn-primary btn-round submit" v-on:click="searchData()" type="button">Search</button>
                  </form>
                </div>

                <!--<div id="archives-3" class="widget_archive widget block_content recent-post-widget">
                  <h4 class="widget-title">
                    <span>Recent Post</span>
                  </h4>
                  <ul class="post-list" v-for="(blog,index) in list1" v-if="index <= 2">
                    <li>
                      <div class="post">
                        <div class="post-img">
                          <img
                            :src="blog_image_url + blog.photo"
                            alt
                          />
                        </div>
                        <div class="post-details">
                         <router-link :to="{ name: 'blog-details', params: { slug: blog.slug, id: blog.id }}">
                            <h4 class="post-title">{{ blog.title }}</h4>
                         </router-link>
                          <p class="date">{{getMonth(blog.created_at)}} {{getDay(blog.created_at)}} - {{getYear(blog.created_at)}}</p>
                        </div>
                      </div>
                    </li>
                    
                  </ul>
                </div>-->

                <!--<div id="mc4wp_form_widget-3" class="widget_mc4wp_form_widget widget block_content newsletter">
                  <h4 class="widget-title">
                    <span>Newsletter</span>
                  </h4>
                  <div id="mc_embed_signup">
                    <form action="https://carsearchme.us10.list-manage.com/subscribe/post?u=b09e293deac35a80ae6c814d4&amp;id=7a62dea82a" 
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                          
                    <div class="mc-field-group">
                      <input type="email" value="" name="EMAIL" placeholder="Enter your Email" class="required email" id="mce-EMAIL" style="
                          border: 1px solid #ececec;
                          padding: 15px 10px;
                      " required/>
                      <div class="indicates-required"><span class="asterisk">*</span> Email required</div>
                    </div>
                      <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                      </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                       <!-- <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b09e293deac35a80ae6c814d4_7a62dea82a" tabindex="-1" value=""></div>
                        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary btn-round submit" style="width: 82px;
    margin: 0px;"></div>
                        </div>
                    </form>
                  </div>
                </div>
              </aside>
            </div>
          </div>-->
        </div>
      </div>
    </section>
    </div>
    <!-- Blog Area End-->
  <!--</div>-->
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
      blog_image_url,
      searchkey:"",
      loading: false,
      isLoading: false,
    loading: false,
     myData:0,
    };
    },
    components: {Loading,ContentLoader,FacebookLoader},
    methods: {
     
      loadData: function() {
         var id = this.$route.params.id;
         console.log(id);
        var vm = this;
        vm.myData=0;
        vm.isLoading = true;
       axios
          .get(base_url + "api/blogdetails/" + id , {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          })
          .then(function(response) {
            vm.myData=1;
             vm.list = response.data.blog_details;
             vm.list1 = response.data.blog_list;
             console.log(vm.list);
             vm.isLoading = false;
          });
          vm.isLoading = false;
          
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
      searchData: function() {
         //this.loading = true
          var vm = this;
          var id = this.$route.params.id;
          //var params = {
          //searchkey: vm.searchkey
          //};
          
          if (vm.searchkey != "") {
          this.$router.push({ 
                  name: 'blog-search-details', 
                  query: { searchkey: vm.searchkey }
                 
          });
          
          }
              //console.log(response.data.blog_list.data);
      },
  
    },
    mounted() {
      this.loadData();
      this.searchData();
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