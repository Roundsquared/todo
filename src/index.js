import { formDOM } from "./DOM";
import { displayOnDom } from "./DOM";

import './style.css';

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
document.getElementById('testButton2').addEventListener('click',()=>{
    console.log(defaultProject)
})
class Project{
    constructor(name){
        this.name=name;
        this.data=[];
    }

}
export let defaultProject= new Project('default')
