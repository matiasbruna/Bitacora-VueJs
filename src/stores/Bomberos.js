import { defineStore } from 'pinia'

export const url = defineStore('url',{

    //satate
    state: () => {
        return{
            url: 'http://localhost:3000'
        }
    },
    //getters
    actions:{

    }
    //actions
})