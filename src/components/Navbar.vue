<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="topnav" id="myTopnav">


            <template v-if="user.loggedIn">
                <a href="/dashboard" class="lol">Home</a>
                <a class="nav-link" style="cursor: pointer;color: lightskyblue;font-size: 18px;float: right;display: block"
                   @click.prevent="signOut"> <i class="fa fa-sign-out" aria-hidden="true"></i></a>
            </template>
            <template v-else>
                <a href="/dashboard" class="active">Home</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </template>


        </div>
        <div class="container">
            <tamplate v-if="user.loggedIn">
                <router-link to="/dashboard" class="navbar-brand"
                             style="font-size: 25px;text-align: center;color: skyblue;">Vue Firebase Auth Welcome
                </router-link>
            </tamplate>
            <template v-else>
                <router-link to="/login" class="navbar-brand"
                             style="font-size: 25px;text-align: center;color: skyblue;">Please login or Register
                </router-link>
            </template>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto"></ul>

                <ul class="navbar-nav ml-auto">


                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from "vuex";
    import firebase from "firebase";

    export default {
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        },
        methods: {
            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.replace({
                            name: "home"
                        });
                    });
            }
        }
    };
</script>
