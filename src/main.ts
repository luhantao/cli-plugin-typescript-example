/**
 * @description: cli-plugin-typescript-example
 * @author: luhantao
 * @email: luhantao@bytedance.com
 *
 * @created: 2019-03-03 18:44:42
 */

import Vue from 'vue';
import App from './app.vue';

const vm = new Vue({
    render: (h) => h(App)
}).$mount('#app');
