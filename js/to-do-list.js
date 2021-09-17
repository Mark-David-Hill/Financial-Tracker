
let toDo = {
    unorganized: [],
    soon: [],
    today: [],
    thisWeek: [],
    thisMonth: [],
    someday: [],

    newItem(item) {
        this.unorganized.push(item);
        this.unorganized.push(item);
        this.unorganized.push(item);
        console.log(this.unorganized)
    },

    assignTo() {
        console.log("hello")
    },
}

toDo.newItem("Walk the Dog")