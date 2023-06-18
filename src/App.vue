<template>
  <!-- Header -->
  <app-header></app-header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <!-- Player -->
  <app-player />

  <!-- Auth Modal -->
  <auth />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/store/user";
import { auth } from "./includes/firebase";
import AppPlayer from "@/components/Player.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Auth,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.4s linear;
}
.fade-leave-to {
  transition: all 0.4s linear;
  opacity: 0;
}
</style>
