import Index from '../Views/Home/Navigation/Index/Index'
import Category from '../Views/Home/Navigation/Category/Category'
import Circle from '../Views/Home/Navigation/Circle/Circle'
import Shoping from '../Views/Home/Navigation/Shoping/Shoping'
import MyIndex from '../Views/Home/Navigation/Personal/Index/Index'
import Per from '../Views/Home/Navigation/Personal/Per/Per'
import Setup from '../Views/Home/Navigation/Personal/Setup/Setup'
import Address from '../Views/Home/Navigation/Address/Address'
import AddressFrom from '../Views/Home/Navigation/Address/AddressFrom/AddressFrom'
import Edit from '../Views/Home/Navigation/Address/Edit/Edit'
import AddressIndex from '../Views/Home/Navigation/Address/Index/Index'
import Goods from '../Views/Home/Navigation/Goods/Goods'
import Search from '../Views/Home/Navigation/Search/Search'
import User from '../Views/Home/Navigation/User/User'
import Login from '../Views/Home/Navigation/User/Login/Login'
import Register from '../Views/Home/Navigation/User/Register/Register'
import Reset from '../Views/Home/Navigation/User/Reset/Reset'
import Home from '../Views/Home/Home'
console.log(Home)
let routes = [
    {
        path: '/',
        name: 'default',
        component: Home,
        redirect: '/home/index',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,  
        children: [
            {
                path: '/home/index',
                name: 'Index',
                component: Index
            },
            {
                path: '/home/category',
                name: 'Category',
                component: Category
            },
            {
                path: '/home/circle',
                name: 'Circle',
                component: Circle
            },
            {
                path: '/home/personal',
                name: 'MyIndex',
                component: MyIndex,
                redirect: '/home/personal/index',
                children: [
                    {
                        path: 'index',
                        name: 'Per',
                        component: Per  
                    },
                    {
                        path: 'setup',
                        name: 'Setup',
                        component: Setup  
                    }
                ]
            },
            {
                path: '/home/shoping',
                name: 'Shoping',
                component: Shoping
            },
            {
                path: '/home/goods',
                name: 'Goods',
                component: Goods
            },
            {
                path: 'search',
                name: 'Search',
                component: Search
            },
            {
                path: 'address',
                name: 'Address',
                component: Address,
                redirect: '/home/address/index',
                children: [
                    {
                        path: 'index',
                        name: 'AddressIndex',
                        component: AddressIndex,
                    },
                    {
                        path: 'from',
                        name: 'AddressFrom',
                        component: AddressFrom,
                    },
                    {
                        path: 'edit',
                        name: 'Edit',
                        component: Edit,
                    }
                ]
            },
            {
                path: 'user',
                name: 'User',
                component: User,
                redirect: '/home/user/login',
                children: [
                    {
                        path: 'login',
                        name: 'Login',
                        component: Login,
                    },
                    {
                        path: 'register',
                        name: 'Register',
                        component: Register,
                    },
                    {
                        path: 'reset',
                        name: 'Reset',
                        component: Reset,
                    }
                ]
            }
        ]
    },

]
export default routes