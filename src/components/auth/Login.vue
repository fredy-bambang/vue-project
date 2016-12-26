<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel panel-heading">
                    <div style="text-align: center;">
                        Login Or <a href="">Register</a>
                    </div>
                </div>
                <div class="panel-body">
                    <form>
                        <div class="form-group" :class="{'has-error': errors.has('email') }">
                            <input v-model="email" v-validate data-vv-rules="required|email" type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter">
                            <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {

}
</script>