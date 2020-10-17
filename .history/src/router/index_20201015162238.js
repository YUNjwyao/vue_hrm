import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeQuery from '../components/Employee/EmployeeQuery.vue'

Vue.use(VueRouter)

const routes = [
 {
   path: '/employee'
 }
]

const router = new VueRouter({
  routes
})

export default router
