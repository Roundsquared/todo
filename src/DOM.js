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
    const formContent=document.getElementById('toDoForm')
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
            if(currentSelection===projectList[0]){
                currentSelection.data.push(newItem)
            }
            else{
                currentSelection.data.push(newItem)
                defaultProject.data.push(newItem)
            
            }
            displayOnDom();
            dialog.close();
            formContent.reset()
            })
        
    }
export function displayOnDom(){
        
        const area=document.getElementById('border')
        area.textContent=''
        let listItems=function(){
            area.textContent=''
        for(let item of currentSelection.data){
            const index=currentSelection.data.indexOf(item)
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
            let deleteItem= document.createElement('button')
            deleteItem.textContent='delete item'
            deleteItem.addEventListener('click',()=>{
                currentSelection.data.splice(index,1)
                listItems()
            })
            let editItem=document.createElement('button')
            editItem.textContent='edit item'
            editItem.addEventListener('click',()=>{
                console.log(currentSelection)
            })
            
            title.textContent=a
            description.textContent=b
            due.textContent=c
            priority.textContent=d

            card.appendChild(title)
            card.appendChild(description)
            card.appendChild(due)
            card.appendChild(priority)
            card.appendChild(deleteItem)
            card.appendChild(editItem)
            area.appendChild(card)
        }
        }
        listItems();
        
    }
export let projectUpdate =function(){
        projHolder.textContent="";
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
                displayOnDom()
            })
            projectDiv.appendChild(projectTitle)
            projectDiv.appendChild(deleteProject)
            projectDiv.appendChild(selectProject)
            projHolder.appendChild(projectDiv)
            if(project.default){
                projectDiv.removeChild(deleteProject)
            }
        }
    }