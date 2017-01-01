import MasterForm from './components/master/MasterForm'
import Hello from './components/Hello'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ListAnggota from './components/anggota/ListAnggota'
import InputAnggota from './components/anggota/InputAnggota'

module.exports = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/hello',
        component: Hello
    },
    {
        path: '/auth/login',
        component: Login
    },
    {
        path: '/anggota',
        component: ListAnggota
    },
    {
        path: '/anggota/input',
        component: InputAnggota
    },
]

    


