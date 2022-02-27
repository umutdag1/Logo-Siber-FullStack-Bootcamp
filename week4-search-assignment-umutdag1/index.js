const vueApp = new Vue({
    data: {
        //list: ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"],
        list: [],
        logs: [],
        request : {
            url : "https://swapi.dev/api/people/?format=json",
            receive : "name"
        }
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
    async created() {
        const jsonData = await fetch(this.request.url);
        const data = await jsonData.json();
        this.list = data.results.map(data => data[this.request.receive]);
        this.list = this.list.map(listElem => ({ elem: listElem, isRemoved: false }));
    }
})

vueApp.$mount('#app');

