import {
  async
} from "q";

export const state = () => ({
  userInfo: {
    token: "",
    user: {},
  }
})

export const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  },
}

export const actions = {
  async login(store, data) {

    const res = await this.$axios({
      url: "/accounts/login",
      method: "POST",
      data
    })

    if (res.status === 200) {
      store.commit("setUserInfo", res.data);

    }

    return res;

  },

   register(store, data) {
    this.$axios({
      url: "/accounts/register",
      method: "POST",
      data
    }).then(res => {
      if (res.status === 200) {
        store.commit("setUserInfo", res.data);
      }
       return res;  
    })
    

  },

  async SendCaptcha(store, tel){
    const res = await this.$axios({
      method: "POST",
      url: "/captchas",
      data: {
        tel
      }
    });
    return res
  }
  
}
