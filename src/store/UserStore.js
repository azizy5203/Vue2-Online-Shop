import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        Id: localStorage.getItem("ID"),
        Name: localStorage.getItem("NAME"),
        Email: localStorage.getItem("EMAIL"),
        Token: localStorage.getItem("TOKEN"),
        
    }),
    actions: {
        async login(email,password) {
            var Id = null
            var Email = null
            var Name = null
            var Token = null
            await axios
            .post("http://localhost:8080/api/authaccount/login", {"email":email,"password":password}, {
                mode: "no-cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
            })
            .then(function ({data}) {
                if (data.code==1) {
                    alert("errors: ", data.message);
                } else {
                    Id = data.data.Id
                    Email = data.data.Email
                    Name = data.data.Name;
                    Token = data.data.Token;
                }
            })
            .catch((e) => console.log("in action error:", e));
            this.Id = Id
            this.Email = Email
            this.Name = Name;
            this.Token = Token;
            localStorage.setItem("ID", Id);
            localStorage.setItem("EMAIL", Email);
            localStorage.setItem("NAME", Name);
            localStorage.setItem("TOKEN", Token);
        },
        logout() {
            this.Id = this.Email = this.Name = this.Token = null
            localStorage.removeItem("ID");
            localStorage.removeItem("EMAIL");
            localStorage.removeItem("NAME");
            localStorage.removeItem("TOKEN");
        },
    },
});