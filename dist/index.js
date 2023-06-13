"use strict";
//Primitive and Reference type
// Primitive type data occupies separate space whereas Reference type data does not occupy and seprate memory space . number,bigint ,boolean, undefined,null ,symbol  are primitive data type . Array and objects are reference data type or non primitive data type.
class Todo {
    constructor() {
        this.tasks = [];
    }
    getid() {
        if (this.tasks.length == 0) {
            return 1;
        }
        let ids = this.tasks.map((el) => {
            return el.id;
        });
        console.log(ids);
        let max = Math.max(...ids);
        return max + 1;
    }
    addtask(description) {
        let id = this.getid();
        let obj = {
            id,
            description,
            iscompleted: false
        };
        this.tasks = [...this.tasks, obj];
    }
    removetask(id) {
        let y = this.tasks.filter((el) => {
            return el.id != id;
        });
        this.tasks = y;
        console.log(`Task with id ${id} is deleted`);
    }
    togglestatus(id) {
        this.tasks.forEach((el) => {
            if (el.id == id) {
                el.iscompleted = !el.iscompleted;
            }
        });
    }
    edittask(id, new_desc) {
        this.tasks.forEach((el) => {
            if (el.id == id) {
                el.description = new_desc;
            }
        });
        console.log(`Task with id ${id} has been updated`);
    }
}
let todos = new Todo();
todos.addtask("study");
todos.addtask("playing");
// console.log("Tasks added");
// todo.removetask(2);
todos.togglestatus(2);
todos.edittask(2, "doing exercise");
console.log(todos);
todos.getid();
