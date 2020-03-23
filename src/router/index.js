import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Location from '../components/location/Location.vue'
import PLocation from '../components/location/P_Location.vue'
import Age from '../components/age/Age.vue'
import PAge from '../components/age/P_Age.vue'
import Person from '../components/person/Person.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home',
      component: Home,
      redirect: '/Welcome',
      children: [
        { path: '/Welcome', component: Welcome },
        { path: '/Location', component: Location },
        { path: '/P-Location', component: PLocation },
        { path: '/age', component: Age },
        { path: '/p-age', component: PAge },
        { path: '/person', component: Person }] }
] })
