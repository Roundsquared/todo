import { formDOM } from "./DOM";
import { displayOnDom } from "./DOM";

import './style.css';
export const toDoList=[]

export class ToDo {

    constructor(title,description,dueDate,priority){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
    }
}

formDOM();


document.getElementById('testButton').addEventListener('click',()=>{
    displayOnDom()
})