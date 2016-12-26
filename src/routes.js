import MasterForm from './components/master/MasterForm'
import Hello from './components/Hello'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

module.exports = [
    {
        path: '/',
        component: MasterForm
    },
    {
        path: '/hello',
        component: Hello
    },
    {
        path: '/auth/login',
        component: Login
    },
]

    


