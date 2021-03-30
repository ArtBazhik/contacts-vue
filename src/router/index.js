import { createRouter, createWebHistory } from 'vue-router'
import ContactsList from '../views/ContactsList'

const routes = [
  {
    path: '/',
    name: 'contact-list',
    component: ContactsList
  },
  {
    path: '/contact-info/:id',
    name: 'contact-info',
    component: () => import('../views/ContactInfo')
  },
  {
    path: '/contact-info/:id/delete',
    name: 'delete-popup',
    component: () => import('../components/popups/DeletePopup')
  },
  {
    path: '/contact-info/:id/new-row',
    name: 'new-row-popup',
    component: () => import('../components/popups/RowContact')
  },
  {
    path: '/contact-info/:id/delete-row',
    name: 'delete-popup-row',
    component: () => import('../components/popups/DeletePopupRow')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
