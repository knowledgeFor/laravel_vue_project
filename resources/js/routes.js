import Posts from "./Pages/Post/Posts.vue";
import CreatePost from "./Pages/Post/CreatePost.vue";
export const routes = [
    {
        path: "/",
        name: "Posts",
        component: Posts,
    },
    {
        path: "/create-post",
        name: "CreatePost",
        component: CreatePost,
    },
];
