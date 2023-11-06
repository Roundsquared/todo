import { ToDo } from ".";
import { toDoList } from ".";
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
            toDoList.push(newItem)
            dialog.close();
        
            })
        
    }
    export function displayOnDom(){
        for(let item of toDoList){
            let a=item.title;
            let b=item.description;
            let c=item.dueDate;
            let d= item.priority;
            console.log(a+' '+b+' '+c+' '+d)
        }
    }