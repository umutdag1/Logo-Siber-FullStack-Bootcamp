const vueApp = new Vue({
    data: {
        list: ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"],
        logs: []
    },
    methods: {
        removeOrRecoverElem(elemIndex) {
            this.list[elemIndex].isRemoved = !this.list[elemIndex].isRemoved;
            this.list[elemIndex].isRemoved ?
                this.addLog({info : `${this.list[elemIndex].elem} is Removed`, class : true}) :
                this.addLog({info : `${this.list[elemIndex].elem} is Recovered`, class : false})
        },
        addLog(log) {
            this.logs.push(log);
        }
    },
    computed: {
        isListNotEmpty() {
            const nonZeroList = this.list.filter(listElem => listElem.isRemoved == false);
            return nonZeroList.length > 0;
        },
        isListEmpty() {
            const zeroList = this.list.filter(listElem => listElem.isRemoved == true);
            return zeroList.length > 0;
        },
        isLogsEmpty() {
            return this.logs.length == 0;
        }
    },
    created() {
        this.list = this.list.map(listElem => ({ elem: listElem, isRemoved: false }));
    }
})

vueApp.$mount('#app');

