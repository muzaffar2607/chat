import { ref } from "vue";
import { defineStore } from "pinia";
import $axios from "@/plugins/axios/index";
import JwtService from "@/plugins/axios/jwtService";
import type IUser from "@/types/user";
import { $api } from "@/api";

export interface IAuth {
  user: IUser;
  jwt: string;
}

const AUTH_STORE = "authStore";

export const useAuthStore = defineStore(AUTH_STORE, () => {
  const errors = ref({});
  const user = ref<IUser>({} as IUser);
  //   const isAuthenticated = ref(!!JwtService.getToken());
  const isAuthenticated = ref(false);
  const local = localStorage.getItem(AUTH_STORE);
  if (local && localStorage.getItem(AUTH_STORE)) {
    user.value = JSON.parse(local).user as IUser;
    // isAuthenticated.value = JSON.parse(local).isAuthenticated;
  }

  async function setAuth(authUser: IAuth) {
    console.log("SetAuth");
    isAuthenticated.value = true;
    JwtService.saveToken(authUser.jwt);
    user.value = await $api.user.getById(authUser.user.id, { populate: "*" });
    errors.value = {};
    setToTheStore();
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as IUser;
    errors.value = {};
    JwtService.destroyToken();
    setToTheStore();
  }

  function login(credentials: { identifier: string; password: string }) {
    return new Promise((resolve, reject) => {
      return $axios
        .post("/auth/local", credentials)
        .then(async ({ data }) => {
          await setAuth(data);
          resolve(user.value);
        })
        .catch(({ response }) => {
          setError(response.data.error);
          reject(response.data.error);
        });
    });
  }

  function logout() {
    purgeAuth();
  }

  function register(credentials: IUser) {
    return $axios
      .post("register", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function forgotPassword(email: string) {
    return $axios
      .post("forgot_password", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function verifyAuth() {
    if (JwtService.getToken()) {
      // ApiService.setHeader();
      // ApiService.post("verify_token", { api_token: JwtService.getToken() })
      //   .then(({ data }) => {
      //     setAuth(data);
      //   })
      //   .catch(({ response }) => {
      //     setError(response.data.errors);
      //     purgeAuth();
      //   });
    } else {
      purgeAuth();
    }
  }

  function setToTheStore() {
    localStorage.setItem(
      AUTH_STORE,
      JSON.stringify({
        user: user.value,
        isAuthenticated: isAuthenticated.value,
      })
    );
  }

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
  };
});
