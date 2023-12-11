<template>
 <div class="container">
    <div class="card"> 
        <div class="card-header">
           <h4>
             Student
             <RouterLink to="/student/create" class="btn btn-primary float-end">Add student</RouterLink>
           </h4>
        </div>

        <div class="card-body">
            <table class="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Birthday</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody v-if="this.students.length > 0">
                    <tr v-for="(student ,index) in this.students" :key="index">
                          <th>{{ student.id }}</th>
                          <th>{{ student.fname }}</th>
                          <th>{{ student.lname }}</th>
                          <th>{{ student.email }}</th>
                          <th>{{ student.phone }}</th>
                          <th>{{ student.birth_date }}</th>
                          <th>
                            <RouterLink :to="{path: '/students/' + student.id+ '/edit'}" class="btn btn-primary btn-sm m-1">Edit</RouterLink>
                            <button @click="deteleRecord(student.id)" class="btn btn-primary btn-sm" >Delete</button>
                          </th>

                    </tr>   
                </tbody>
                <tbody v-else>
                    <tr>
                        <th colspan="7">Loading..</th>
                    </tr>
                 </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default{
    name:'students',
    data(){
        return{
            students:[]
        }
    },
    mounted(){
    this.getStudent();
    },

    methods:{
        getStudent(){
            axios
           .get('http://127.0.0.1:8000/api/students')
           .then((response) => {
             this.students = response.data
           })
        },
        deteleRecord(id){
            if(confirm('Are you sure, you want to delete this data?')){
                axios
                  .delete(`http://127.0.0.1:8000/api/students/${id}/destroy`)
                  .then(response => {
                   alert(response.data.message);
                   this.getStudent();
               })
               .catch(function (error) {
                if (error.response) {
                    if(error.response.status ==404){
                       alert('Student Id Not Fount')
                    }
                }});
            }
            
        }
    }

}
</script>
