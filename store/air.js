export const state = () => {
    return{
        history:[],
        airinfo:{}
    }
  }
  
  export const mutations = {
    setHistory(state, data) {
      state.history.unshift(data);
    },
    setairinfo(state, data) {
      state.airinfo=data
    },
  }

  