import { ToDo } from ".";
import { projectList } from ".";
import { defaultProject } from ".";

const projHolder= document.querySelector('.projectHolder')
export let currentSelection;
export function formDOM(){
    const cancelButton = document.querySelector('#cancel');
    const submitButton = document.querySelector('#submit');
    const formButton= document.getElementById('showDialog');
    const dialog= document.querySelector('.makeToDo');
    const title=document.getElementById('title');
    const desc=document.getElementById('description');
    const dueDate=document.getElementById('dueDate');
    const prio=document.getElementsByName('priority')
        formButton.addEventListener('click',()=>{
            dialog.showModal();
            })
        cancelButton.addEventListener('click',(e)=>{
                e.preventDefault();
                dialog.close();
        })
            
        submitButton.addEventListener('click',(e)=>{
            e.preventDefault();
            let t= title.value;
            let d= desc.value;
            let dd=dueDate.value;
            let p;
            for(let i=0;i<prio.length;i++){
                if(prio[i].checked)
                    p= prio[i].value;
            }
            let newItem= new ToDo(t,d,dd,p);
            defaultProject.data.push(newItem)
            currentSelection.data.push(newItem)
            dialog.close();
            //call reset on the form element not the dialog dummy
            })
        
    }
export function displayOnDom(){
        const area=document.getElementById('border')
        area.textContent=''
        for(let item of defaultProject.data){
            let a=item.title;
            let b=item.description;
            let c=item.dueDate;
            let d= item.priority;
            
            let card=document.createElement('div')
            card.setAttribute('class','card')
            let title=document.createElement('h1')
            let description= document.createElement('p')
            let due= document.createElement('p')
            let priority= document.createElement('p')
            
            title.textContent=a
            description.textContent=b
            due.textContent=c
            priority.textContent=d

            card.appendChild(title)
            card.appendChild(description)
            card.appendChild(due)
            card.appendChild(priority)

            area.appendChild(card)
        }
        for(let item of currentSelection.data){
            let a=item.title;
            let b=item.description;
            let c=item.dueDate;
            let d= item.priority;
            
            let card=document.createElement('div')
            card.setAttribute('class','card')
            let title=document.createElement('h1')
            let description= document.createElement('p')
            let due= document.createElement('p')
            let priority= document.createElement('p')
            
            title.textContent=a
            description.textContent=b
            due.textContent=c
            priority.textContent=d

            card.appendChild(title)
            card.appendChild(description)
            card.appendChild(due)
            card.appendChild(priority)

            area.appendChild(card)
        }
        
    }
export let projectUpdate =function(){
        projHolder.textContent=""
        for(let project of projectList){
            const index=projectList.indexOf(project)
            let projectDiv= document.createElement('div')
    
            let projectTitle=document.createElement('h1')
            projectTitle.textContent=project.name
    
            let deleteProject=document.createElement('button')
            deleteProject.textContent='Delete Project!'
            deleteProject.addEventListener('click',()=>{
                projectList.splice(index,1)
                projectUpdate()
            })
            let selectProject= document.createElement('button')
            selectProject.textContent='Pick Me!'
            selectProject.addEventListener('click',()=>{
                currentSelection=projectList[index]
            })
            projectDiv.appendChild(projectTitle)
            projectDiv.appendChild(deleteProject)
            projectDiv.appendChild(selectProject)
            projHolder.appendChild(projectDiv)
        
        }
    }