<script>
import request from "@/Utils/request";

export default {
    methods: {
        test1() {
            request.get('/enseignant/findAll').then(res => {
                console.log(res.data[0])
                this.responseData = res.data[0]
            })
        },
        telecharger() {
            request.get('/Ganerate/pdf/download')
        },
    }
    }
</script>

<template>
    <div class="fonctionbar">
        <img class="logo" src="../../img/logo.png">
        <div class="signin">
            <button class="buttontext" @click="test1"><strong>Se conncecter</strong></button>
        </div>
        <div class="download">
            <button class="downloadtext" @click="telecharger"><strong>Télécharger</strong></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.fonctionbar {
    width: 10%;
    background-color: burlywood;
}

.logo {
    width: 100%;
    height: 100px;
}

.signin {
    width: 100px;
    margin-left:23px;
}

.buttontext{
    width: 120px;
    height: 50px;
    background-color: bisque;
    border: bisque;
    margin-top: 20px;
}

.download {
    width: 100px;
    margin-left:23px;
}

.downloadtext{
    width: 120px;
    height: 50px;
    background-color: bisque;
    border: bisque;
    margin-top: 20px;
}


</style>
