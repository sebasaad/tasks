const app = new Vue({
    el: '#app',
    data:{
        title: 'To Do List :',
        available:true,
        newTodo: '',
        todos: [],
    imgSrc:'12345.jpg',
       image : ''

    },
    methods: {
        imageChanged(e) {
            console.log(r.target)
            var fileReader = new fileReader()
            fileReader.readAsDataURL(e.target.files[0])
            fileReader.onload = (e) => {
                this.data.image = e.target.result
            }
       
        },

        addTodo(){
            this.todos.push({
               title: this.newTodo,
               done: false 
            });
            this.newTodo = '';
        },
        removeTodo(todo){
          const todoIndex = this.todos.indexOf(todo);
         this.todos.splice(todoIndex, 1) ;

        },
          
        
        
    },

});