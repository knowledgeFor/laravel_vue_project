<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h1>Create Posts</h1>
                <router-link to="/" class="btn btn-secondary">Back</router-link>
            </div>
        </div>
        <div class="card-body">
            <form action="">
                <div class="form-group">
                    <label for="title">Title;</label>
                    <input type="text" name="title" id="title" class="form-control" v-model="post.title" />
                </div>
                <div class="form-group">
                    <label for="description">Description;</label>
                    <input type="text" name="description" id="description" v-model="post.description"
                        class="form-control" />
                </div>
                <button type="button" class="btn btn-secondary mt-2" @click="savePost()">Save</button>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "../config/axios"
import toastr from "toastr";
//??????????????????
//??    States
//??????????????????

const post = ref({});

//??????????????????
//??    Actions
//??????????????????
const savePost = async() =>{

}
</script>
