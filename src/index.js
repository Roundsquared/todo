import { formDOM } from "./DOM";
import { displayOnDom } from "./DOM";
import { projectUpdate } from "./DOM";
import { currentSelection } from "./DOM";
import './style.css';

const projButton=document.getElementById('projectButton')
const projForm= document.getElementById('projectForm')

export class ToDo {

    constructor(title,description,dueDate,priority){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
    }
}

formDOM();

export let projectList=[]

projButton.addEventListener('click',(e)=>{
    
    e.preventDefault();
    
    let newProject=document.getElementById('newProj').value
    let createProject= new Project(newProject)
    projectList.push(createProject);
    projForm.reset()
    projectUpdate();
})

class Project{
    constructor(name){
        this.name=name;
        this.data=[];
    }

}
export let defaultProject= new Project('default') 
projectList.push(defaultProject)
defaultProject.default=true;
currentSelection=projectList[0]
