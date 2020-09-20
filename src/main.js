import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Ads from 'vue-google-adsense'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import GSignInButton from 'vue-google-signin-button'
import VueSuggestion from 'vue-suggestion'

Vue.use(VueSuggestion)

Vue.use(GSignInButton)

Vue.component("v-select", vSelect);
Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')