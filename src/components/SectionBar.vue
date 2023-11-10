<template>
    <div class="SectionBar">
        <div class="title"><strong>Easy Resume</strong></div>
        <ul class="guideList">
            <li
                v-for="(item, index) in guideList"
                :key="item"
                :class="{
          active: index === current,
          background: index === current && background,
        }"
                @mouseover="mouseover(index)"
                @mouseout="mouseout"
                @click="insert()"
            >
                {{ $t(item) }}
            </li>
        </ul>
        <button @click="test1">测试</button>
    </div>


</template>

<script>
import eventBus from "@/eventBus";
import defaultData from "@/defaultData";
import request from "../Utils/request";


export default {
    name: "SectionBar",
    data() {
        return {
            current: "",
            background: false,
            guideList: [
                "personal information",
                "contact",
                "professional experience",
                "awards",
                "education activities",
                "scentific activities",
                "research programm",
                "education experience",
                "publish",
            ],
            responseData: []
        };
    },
    methods: {
        mouseover(index) {
            this.current = index;
            this.background = true;
        },
        mouseout() {
            this.current = "";
            this.background = false;
        },
        insert() {
            var str = '';
            for (var i in this.responseData) {
                str += this.parseJSON(this.responseData[i]);
                console.log(str)
            }
            eventBus.$emit("insert",str);
        },
        parseJSON(jsonObj) {
            if (typeof jsonObj !== 'object' && jsonObj !== null) {
                return jsonObj;
            }
            if (typeof jsonObj === 'object') {
                for (var key in jsonObj) {
                    if (typeof jsonObj[key] === 'object') {
                        this.parseJSON(jsonObj[key]);
                    } else {
                        return jsonObj[key];
                    }
                }
            }
        },
        test1() {
            request.get('/enseignant/findAll').then(res => {
                console.log(res.data[0])
                this.responseData = res.data[0]
            })
        },


    },
};
</script>

<style lang="scss" scoped>
.SectionBar {
    background-color: #dddfcb;
    flex: 2 1;
    max-width: 199px;
    min-width: 199px;
    border-right: 1px solid #ccc;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
}

.guideList > li {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    border-bottom: 1px solid #e2e2e2;
    color: black;
    cursor: pointer;
    text-align: center;
}

.active {
    color: #fff !important;
}

.background {
    background: #dea681;
}

</style>
