<template>
    <div class="container col-6 mt-5">
       <div class="card">
          <div class="card-header">
               <h4>Edit student
                <RouterLink class="btn btn-primary float-end" to="/StudentView">Back</RouterLink>
               </h4>
          </div>
          <div class="card-body">
            <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0" > 
                <li v-for="(error,index) in this.errorList" :key="index">
                {{ error[0]}}</li>
            </ul>
              <div class="mb-1 ">
              <label for="">Name</label>
              <input v-model="model.student.fname" type="text" class="form-control" />
              </div>

              <div class="mb-1">
              <label for="">Last Name</label>
              <input v-model="model.student.lname" type="text" class="form-control" />
              </div>

              <div class="mb-1">
              <label for="">Email</label>
              <input v-model="model.student.email" type="text" class="form-control" />
              </div>

              <div class="mb-1">
              <label for="">Phone</label>
              <input v-model="model.student.phone" type="text" class="form-control" />
              </div>

              <div class="mb-1">
              <label for="">Created At</label>
              <input placeholder="Enter Date 2020-12-12" v-model="model.student.birth_date" type="text" class="form-control" />
              </div>

              <div class="mb-3">
                <button  @click="updateStudent()" type="button" class="btn btn-success">Update</button>
              </div>
             
          </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
 
 export default{
    data(){
        return{
            errorList: '',
            model:{
                student:{
                    fname:'',
                    lname:'',
                    email:'',
                    phone:'',
                    birth_date:'',
                }
            }
        }
    },

    mounted(){
     this.getStudentData(this.$route.params.id);
    },

    methods:{

        getStudentData(student_id){
            axios
                  .get(`http://127.0.0.1:8000/api/students/${student_id}/edit`)
                  .then(response => {
                    this.model.student.fname = response.data.data[0].fname;
                    this.model.student.lname = response.data.data[0].lname;
                    this.model.student.email = response.data.data[0].email;
                    this.model.student.phone = response.data.data[0].phone;
                    this.model.student.birth_date = response.data.data[0].birth_date;
               })
               .catch(function (error) {
                if (error.response) {
                    if(error.response.status ==404){
                       alert('Student Id Not Fount')
                    }
                }});
               
        },
       
        updateStudent(){
          var student_id = this.$route.params.id
          var mythis = this;
          axios
		  .put(`http://127.0.0.1:8000/api/students/${student_id}/edit`, this.model.student)
		  .then((res) => {
            console.log('res',res);
            alert(res.data.message);
            // this.model.student = {
            //     fname:'',
            //     lname:'',
            //     email:'',
            //     phone:'',
            //     birth_date:'',
            // }
            this.errorList= '';
          })

          .catch(function (error) {
                if (error.response) {
                    if(error.response.status ==422){

                        mythis.errorList = error.response.data.errors;
                    }
                    if(error.response.status ==404){
                      alert(error.response.data.message);
                    }
                } else if (error.request) {
                } else {
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });

        
        }
    }
 }

</script>
