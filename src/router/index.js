import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Team from '@/components/Team'
import Crowdfunding from '@/components/Crowdfunding'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/crowdfunding',
      name: 'Crowdfunding',
      component: Crowdfunding
    }
  ]
})

router.beforeEach(function (to, from, next) {
  next()
  window.scrollTo(0, 0)
})

export default router
