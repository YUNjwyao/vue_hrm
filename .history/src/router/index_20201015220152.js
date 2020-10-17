import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeQuery from '../components/Employee/EmployeeQuery.vue'
import ShowAddEmployee from '../components/Employee/ShowAddEmployee.vue'
import ShowUpdateEmployee from '../components/Employee/ShowUpdateEmployee.vue'
import Notice from '../components/Notice/Notice.vue'
import UpdateNotice from '../components/Notice/ShowUpdateNotice.vue'
import AddNotice from '../components/Notice/ShowAddNotice.vue'
import Document from '../components/Document/Document.vue'
import UpdateDocument from '../components/Document/ShowUpdateDocument.vue'
import AddDocument from '../components/Document/ShowAddDocument.vue'

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
 },
 {
   path: '/notice',component: Notice
 },
 {
   path: '/updateNotice',component: UpdateNotice
 },
 {
   path: '/addNotice',component: AddNotice
 },
 {
   path: '/document',component: Document
 },
 {
   path: '/updateDocument',component: UpdateDocument
 },
 {
   path: '/addDocument',component: AddDocument
 }
]

const router = new VueRouter({
  routes
})

export default router
