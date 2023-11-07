import { ToDo } from ".";
import { toDoList } from ".";
import { defaultProject } from ".";

export function formDOM(){
    const cancelButton = document.querySelector('#cancel');
    const submitButton = document.querySelector('#submit');
    const formButton= document.getElementById('showDialog');
    const dialog= document.querySelector('.makeToDo');
    const title=document.getElementById('title');
    const desc=document.getElementById('description');
    const dueDate=document.getElementById('dueDate');
    const prio=document.getElementsByName('priority')
    const projButton=document.getElementById('projectButton')

    

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
            dialog.close();
            //call reset on the form element not the dialog dummy
            })
        projButton.addEventListener('click',(e)=>{
            e.preventDefault();
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
        
    }
