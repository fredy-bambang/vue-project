<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel panel-heading">Data Anggota</div>
                <div class="panel-body">
                    <table class="table table-hover table-striped">
                        <tr>
                            <th>Nama Anggota</th>
                            <th>Alamat</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        <tr>
                            <td><a href="show/jd">Nama Anggota</a></td>
                            <td>Alamat Boy</td>
                            <td><a href="edit/id" class='btn btn-info'>Edit</a></td>
                            <td><a href="delete/id" class='btn btn-danger'>Delete</a></td>
                        </tr>
                    </table>
                    <p>
                        <a :href="create_url">Tambah Anggota</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../store'
import * as env from '../../env.js'

export default {
  data () {
    return {
        create_url: env.BASE_URL + 'anggota/input'
    }
  },
  components: {

  }
}
</script>