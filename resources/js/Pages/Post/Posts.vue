<template>
<div class="card">
    <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
            <h1>Posts</h1>
            <router-link to="/create-post" class="btn btn-secondary"
                >Create</router-link
            >
        </div>
    </div>
    <div class="card-body">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post, key) in posts" :key="post.id">
                    <td>{{ key }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'EditPost',
                                params: { id: post.id },
                            }"
                            class="btn btn-info"
                            >Edit</router-link
                        >
                        <button
                            type="button"
                            class="btn btn-danger ms-2"
                            @click="deletePost(post.id)"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "../config/axios"
import toastr from "toastr";

//??????????????????
//??    States
//?????????????????

const posts = ref([]);

//??????????????????
//??    Actions
//??????????????????

// Fetch posts from the server
const getPosts = async () => {
    try{
        let res = await axios.get("/posts");
        posts.value = res.data.posts; // Update ref value
    }catch(err){
        console.error('Error fetching Error: ', err)
    }
};

// Delete a post by ID
const deletePost = async (id) => {

};

// Fetch posts when the component is mounted
onMounted(() => {
    getPosts();
});
</script>
