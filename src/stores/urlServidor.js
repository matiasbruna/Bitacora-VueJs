import {defineStore} from 'pinia'

export const urlServidor = defineStore('urlServidor', {
    state:()=>{
        return {url:'http://localhost:3000'}
    }
});