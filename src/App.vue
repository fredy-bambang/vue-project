<template>
  
    <div id="wrapper">
        <div class="overlay"></div>

            <!-- Sidebar -->
            <side-nav></side-nav>
            <!-- /#sidebar-wrapper -->

            <!-- Page Content -->
            <div id="page-content-wrapper">
                <button type="button" class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas">
                    <span class="hamb-top"></span>
                    <span class="hamb-middle"></span>
                    <span class="hamb-bottom"></span>
                </button>

                <div class="container" >
                    <div class="container-fluid">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import SideNav from './components/SideNav'

export default {
    name: 'app',
    components: {
        SideNav
    },
    activate () {
        store.dispatch('INCREMENT') 
    }
}
</script>
