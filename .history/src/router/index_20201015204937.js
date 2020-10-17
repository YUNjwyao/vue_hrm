import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeQuery from '../components/Employee/EmployeeQuery.vue'
import ShowAddEmployee from '../components/Employee/ShowAddEmployee.vue'
import ShowUpdateEmployee from '../components/Employee/ShowUpdateEmployee.vue'

Vue.use(VueRouter)

const routes = [
 {
   path: '/employee',component: EmployeeQuery
 },
 {
   path: '/addEmployee',component: ShowAddEmployee
 },
 {
   path: '/updateEmployee',component: ShowUpdateEmployee
 }
]

const router = new VueRouter({
  routes
})

export default router
