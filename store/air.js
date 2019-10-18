export const state = () => {
    return{
        history:[],
        airinfo:{},
        AllPirce:0
    }
  }
  
  export const mutations = {
    setHistory(state, data) {
      state.history.unshift(data);
    },
    setairinfo(state, data) {
      state.airinfo=data
    },
    setAllPirce(state, price) {
      state.AllPirce=price
    },
  }

  