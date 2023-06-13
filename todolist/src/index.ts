
//Primitive and Reference type
// Primitive type data occupies separate space whereas Reference type data does not occupy and seprate memory space . number,bigint ,boolean, undefined,null ,symbol  are primitive data type . Array and objects are reference data type or non primitive data type.



interface task {
    id:number,
    description:string,
    iscompleted:boolean
}

class Todo {
   tasks:task[]

   constructor(){
    this.tasks=[]
   }
   getid():number{

      if(this.tasks.length==0){
         return 1;
      }
    let ids:number[]=this.tasks.map((el)=>{
        return el.id
    });
    
  console.log(ids);

    let max:number=Math.max(...ids);
    return max+1;
   }

   addtask(description:string):void{
       
      let id:number=this.getid();

      let obj:task={
        id,
        description,
        iscompleted:false
      }

      this.tasks=[...this.tasks,obj];
    
   }

   removetask(id:number):void{

     let y=this.tasks.filter((el)=>{
        return el.id!=id;
     });
     this.tasks=y;
     console.log(`Task with id ${id} is deleted`);
   }

   togglestatus(id:number):void{
      this.tasks.forEach((el)=>{
         if(el.id==id){
            el.iscompleted=!el.iscompleted;
         }
      })
   }

   edittask(id:number,new_desc:string):void{
      this.tasks.forEach((el)=>{
         if(el.id==id){
            el.description=new_desc;
         }
      });

      console.log(`Task with id ${id} has been updated`);
   }

   
}

let todos=new Todo();
todos.addtask("study");
todos.addtask("playing");


// console.log("Tasks added");
// todo.removetask(2);
todos.togglestatus(2);

todos.edittask(2,"doing exercise");
console.log(todos);


todos.getid();


