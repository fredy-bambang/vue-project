<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel panel-heading">
                    <div style="text-align: center;">
                        Sample Vue Form Generator
                    </div>
                </div>
                <div class="panel-body">
                    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from "vue-form-generator"

Vue.use(VueFormGenerator);

export default {
  data () {
      return {
        model: {             
            id: 1,
            name: "John Doe",
            password: "J0hnD03!x4",
            type: ["VueJS"],
            email: "john.doe@gmail.com",
            status: true
        },

        schema: {
            fields: [{
                type: "text",
                label: "ID (disabled text field)",
                model: "id",
                readonly: true,         
                disabled: true
            },{
                type: "text",
                label: "Name",
                model: "name",
                placeholder: "Your name",
                featured: true,
                required: true
            },{
                type: "password",
                label: "Password",
                model: "password",
                min: 6,
                required: true,
                hint: "Minimum 6 characters",
                validator: VueFormGenerator.validators.string
            },{
                type: "select",
                label: "skills",
                model: "type",      
                values: ["Javascript", "VueJS", "CSS3", "HTML5"]
            },{
                type: "email",
                label: "E-mail",
                model: "email",
                placeholder: "User's e-mail address"
            },{
                type: "checkbox",
                label: "Status",
                model: "status",
                default: true
            },{
                type: "submit",
                label: "button",
                buttonText: "Hello World", 
                class: "btn btn-primary"
            }]
        },

        formOptions: {
            validateAfterLoad: true,
            validateAfterChanged: true
        }
      }
  }
}
</script>