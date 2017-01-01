<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel panel-heading">Data Anggota</div>
                    <div class="panel-body">
                        <div class="alert alert-danger">
                            Test Error
                        </div>

                        <form class="form-horizontal">
                            <div class="form-group" :class="{' has-error': errors.has('nama') }">
                                <label class="col-md-4 control-label" for="nama">Nama</label>
                                <div class="col-md-6">
                                    <input type="text" v-model="nama" v-validate data-vv-rules="required|email" name="nama" class="form-control">
                                    <span v-show="errors.has('nama')" class="help-block">{{ errors.first('nama') }}</span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label" for="alamat">Alamat</label>
                                <div class="col-md-6">
                                    <input type="text" name="alamat" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button class="btn btn-primary" type="button" v-on:click="getVueItems">{{ anggota }}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';
    import * as env from '../../env.js'

    Vue.use(VeeValidate);
    const anggota = env.BASE_URL + 'anggota';
    export default {
        name: 'input-anggota',
        data() {
            return {
                baseUrl: env.BASE_URL,
                anggota: anggota,
                nama: '',
                items: [],
                pagination: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 4,
                formErrors: {},
                formErrorsUpdate: {},
                fields: {
                    'nama': '', 'jabatan': '', 'nip': '', 'nip_lama': '', 'tanggal_lahir': '',
                    'tmt_cpns': '', 'tmt_pns': '', 'gol_ruang_tmt': '', 'pendidikan_terakhir': '',
                    'instansi_kerja': '', 'unit_kerja': '', 'unit_kerja_induk': '', 'kedudukan_pns': ''
                },
                // coba: this.getVueItems()
                // newItem: { 'title': '', 'description': '' },
                // fillItem: { 'title': '', 'description': '', 'id': '' }
            }
        },
        computed: {
            
        },
        mounted: function () {
            this.getVueItems();                        

            // console.log(baseUrl);
            // this.getVueItems().bind(this);
        },
        methods: {
            getVueItems: function () {
                console.log('vue item ini berhasil di panggil');
                console.log(this.offset);
                console.log('====offset lolos bro===');
                // this.$http.get('/pns?page=' + page).then((response) => {
                //     this.$set('items', response.data.data.data);
                //     this.$set('pagination', response.data.pagination);
                // });
            }
        }        

    }

    // this.getVueItems();

/*
data: {
        items: [],
        pagination: {
            total: 0,
            per_page: 2,
            from: 1,
            to: 0,
            current_page: 1
        },
        offset: 4,
        formErrors: {},
        formErrorsUpdate: {},
        fields: { 'nama': '', 'jabatan': '', 'nip': '', 'nip_lama' : '', 'tanggal_lahir': '',
            'tmt_cpns':'', 'tmt_pns': '', 'gol_ruang_tmt' : '', 'pendidikan_terakhir' : '', 
            'instansi_kerja' : '', 'unit_kerja': '', 'unit_kerja_induk': '', 'kedudukan_pns':''
        },
        // newItem: { 'title': '', 'description': '' },
        // fillItem: { 'title': '', 'description': '', 'id': '' }
    },

    computed: {
        isActived: function () {
            return this.pagination.current_page;
        },
        pagesNumber: function () {
            if (!this.pagination.to) {
                return [];
            }
            var from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            var to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            var pagesArray = [];
            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }
    },

    ready: function () {
        this.getVueItems(this.pagination.current_page);
    },

    methods: {

        getVueItems: function (page) {
            this.$http.get('/pns?page=' + page).then((response) => {
                this.$set('items', response.data.data.data);
                this.$set('pagination', response.data.pagination);
            });
        },
        
        refreshItem: function () {
            this.fields = { 'nama': '', 'jabatan': '', 'nip': '', 'nip_lama' : '', 'tanggal_lahir': '',
                'tmt_cpns':'', 'tmt_pns': '', 'gol_ruang_tmt' : '', 'pendidikan_terakhir' : '', 
                'instansi_kerja' : '', 'unit_kerja': '', 'unit_kerja_induk': '', 'kedudukan_pns':''
            }
        },

        createItem: function () {
            var input = this.fields;
            this.$http.post('/pns', input).then((response) => {
                this.changePage(this.pagination.current_page);
                this.fields = { 'nama': '', 'jabatan': '', 'nip': '', 'nip_lama' : '', 'tanggal_lahir': '',
                    'tmt_cpns':'', 'tmt_pns': '', 'gol_ruang_tmt' : '', 'pendidikan_terakhir' : '', 
                    'instansi_kerja' : '', 'unit_kerja': '', 'unit_kerja_induk': '', 'kedudukan_pns':''
                };
                $("#modal-input").modal('hide');
                toastr.success('Item Created Successfully.', 'Success Alert', { timeOut: 5000 });
            }, (response) => {
                $("#modal-input").scrollTop(0);
                this.formErrors = response.data;
            });
        },

        deleteItem: function (item) {
            this.$http.delete('/pns/' + item.id).then((response) => {
                this.changePage(this.pagination.current_page);
                toastr.success('Item Deleted Successfully.', 'Success Alert', { timeOut: 5000 });
            });
        },

        editItem: function (item) {
            this.fields = item;
            // this.fields.id = item.id;
            // this.fields.title = item.title;
            // this.fields.description = item.description;
            $("#modal-input").modal('show');
        },

        updateItem: function (id) {
            var input = this.fields;
            this.$http.put('/pns/' + id, input).then((response) => {
                this.changePage(this.pagination.current_page);
                this.fields = { 'nama': '', 'jabatan': '', 'nip': '', 'nip_lama' : '', 'tanggal_lahir': '',
                    'tmt_cpns':'', 'tmt_pns': '', 'gol_ruang_tmt' : '', 'pendidikan_terakhir' : '', 
                    'instansi_kerja' : '', 'unit_kerja': '', 'unit_kerja_induk': '', 'kedudukan_pns':'', 
                    'id': ''
                };
                $("#modal-input").modal('hide');
                toastr.success('Item Updated Successfully.', 'Success Alert', { timeOut: 5000 });
            }, (response) => {
                this.formErrorsUpdate = response.data;
            });
        },

        changePage: function (page) {
            this.pagination.current_page = page;
            this.getVueItems(page);
        }

    }
    */

</script>