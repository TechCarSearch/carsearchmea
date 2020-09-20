import Vue from "vue";
import Router from "vue-router";
//import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('./views/Home.vue')
        },
        {
            path: "/login",
            name: "login",
            // component: Login
            component: () =>
                import ('./views/Login.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('./views/Home.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('./views/Register.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () =>
                import ('./views/Blog.vue')
        },
        {
            path: '/blog-details/:id/:slug',
            name: 'blog-details',
            component: () =>
                import ('./views/Blog_Details.vue')
        },
        {
            path: '/blog-search-details',
            name: 'blog-search-details',
            component: () =>
                import ('./views/Blog.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/contact',
            name: 'contact',
            component: () =>
                import ('./views/Contact.vue')
        },
        {
            path: '/new-cars',
            name: 'new-cars',
            component: () =>
                import ('./views/New_Car.vue')
        },
        /*{
            path: '/car-details/:id/:slug',
            name: 'car-details',
            component: () =>
                import ('./views/Car_Details.vue')
        },*/
        {
            path: '/car-details/:id',
            name: 'car-details',
            component: () =>
                import ('./views/Car_Details.vue')
        },
        {
            path: '/precar-details/:id',
            name: 'precar-details',
            component: () =>
                import ('./views/Pre_Car_Details.vue')
        },
        {
            path: '/used-cars',
            name: 'used-cars',
            component: () =>
                import ('./views/Used_Car.vue')
        },
        {
            path: '/newcars-search',
            name: 'newcars-search',
            component: () =>
                import ('./views/Newcar_Search.vue'),
            meta: {
                reload: true,
            },
        },
        {
            path: '/newcars-search',
            name: 'newcars-search',
            component: () =>
                import ('./views/Newcar_Search.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/preownedcar-search',
            name: 'preownedcar-search',
            component: () =>
                import ('./views/Preownedcar_Search.vue')
        },
        {
            path: '/compare',
            name: 'compare',
            component: () =>
                import ('./views/Compare.vue')
        },

        {
            path: '/compare-result',
            name: 'compare-result',
            component: () =>
                import ('./views/Compare_Result.vue')
        },
        {
            path: '/home-search-details',
            name: 'home-search-details',
            component: () =>
                import ('./views/Newcar_Search.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/newcar-search-details',
            name: 'newcar-search-details',
            component: () =>
                import ('./views/Newcar_Search.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/home-preownedsearch-details',
            name: 'home-preownedsearch-details',
            component: () =>
                import ('./views/Preownedcar_Search.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/preowned-search-details',
            name: 'preowned-search-details',
            component: () =>
                import ('./views/Preownedcar_Search.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/compare-search-details',
            name: 'compare-search-details',
            component: () =>
                import ('./views/Compare_Result.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/featured-car-list',
            name: 'featured-car-list',
            component: () =>
                import ('./views/Featured_Car_list.vue')
        },
        {
            path: '/new-car-list',
            name: 'new-car-list',
            component: () =>
                import ('./views/New_Car_list.vue')
        },
        {
            path: '/popular-car-list',
            name: 'popular-car-list',
            component: () =>
                import ('./views/Popular_Car_list.vue')
        },
        {
            path: '/upcoming-car-list',
            name: 'upcoming-car-list',
            component: () =>
                import ('./views/Upcoming_Car_list.vue')
        },
        {
            path: '/popular-used-car-list',
            name: 'popular-used-car-list',
            component: () =>
                import ('./views/Popular_Used_Car_list.vue')
        },
        {
            path: '/featured-used-car-list',
            name: 'featured-used-car-list',
            component: () =>
                import ('./views/Featured_Used_Car_list.vue')
        },
        {
            path: '/brand-search-list/:id',
            name: 'brand-search-list',
            component: () =>
                import ('./views/Newcar_Search.vue')
        },
        {
            path: '/brand-search-list-usedcar/:id',
            name: 'brand-search-list-usedcar',
            component: () =>
                import ('./views/Preownedcar_Search.vue')
        },
        {
            path: '/brand-list',
            name: 'brand-list',
            component: () =>
                import ('./views/Brand_List.vue')
        },
        {
            path: '/price-search-list/:id',
            name: 'price-search-list',
            component: () =>
                import ('./views/Newcar_Search.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/age-search-list/:id',
            name: 'age-search-list',
            component: () =>
                import ('./views/Preownedcar_Search.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/review/:id',
            name: 'review',
            component: () =>
                import ('./views/Review.vue')
        },
        {
            path: '/question-answer/:id',
            name: 'question-answer',
            component: () =>
                import ('./views/Answer.vue')
        },
        {
            path: '/usedcar-review/:id',
            name: 'usedcar-review',
            component: () =>
                import ('./views/Used_Car_Review.vue')
        },
        {
            path: '/usedcar-question-answer/:id',
            name: 'usedcar-question-answer',
            component: () =>
                import ('./views/Used_Car_Answer.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () =>
                import ('./views/News.vue')
        },
        {
            path: '/news-details/:id/:slug',
            name: 'news-details',
            component: () =>
                import ('./views/News_Details.vue')
        },
        {
            path: '/news-search-details',
            name: 'news-search-details',
            component: () =>
                import ('./views/News.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/compare-car/:id',
            name: 'compare-car',
            component: () =>
                import ('./views/Compare.vue'),
            // props: (route) => ({ query: route.query.q })
        },
        {
            path: '/profile',
            name: 'profile',
            component: () =>
                import ('./views/Profile.vue')
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () =>
                import ('./views/Privacy.vue')
        },
        {
            path: '/advance_search_preownedcar',
            name: 'advance_search_preownedcar',
            component: () =>
                import ('./views/Preownedcar_Search.vue'),
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/resetpassword',
            name: 'resetpassword',
            component: () =>
                import ('./views/Reset.vue'),
            props: (route) => ({ query: route.query.q })
        },
    ],

});