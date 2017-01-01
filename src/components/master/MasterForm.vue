<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <h3>Increment:</h3>
                <increment></increment>
                <h3>Counter:</h3>
                <counter></counter>
                <other-increment></other-increment>

                <div class="panel panel-heading">Data Anggota </div>
                <div class="panel-body">
                    <table class="table table-hover table-striped">
                        <tr>
                            <th>Nama Anggota</th>
                            <th>Alamat</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        <tr>
                            <td><a href="http://localhost:8000/anggota/2">wew ini adalah nama anggota</a></td>
                            <td>dew</td>
                            <td><a href="http://localhost:8000/anggota/2/edit" class="btn btn-info">Edit</a></td>
                            <td><input class="btn btn-danger" type="submit" value="Delete"></td>
                        </tr>
                    </table>
                    <p><a href="http://localhost:8000/anggota/create">Tambah Data Anggota</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../store'
import Counter from './CounterDisplay'
import Increment from './IncrementButton'
import OtherIncrement from './OtherIncrement'
import * as env from '../../env.js'

console.log('===lets load env===');
console.log(env);
console.log(env.KAMBING);
console.log('===end load env===');

export default {
  name: 'master-form',
  data () {
    return {
      
    }
  },
  components: {
    Counter,
    Increment,
    OtherIncrement
  }
}
</script>