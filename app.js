let list =[
  {
       title:"我想这周把vue学会",
       isCompleted:false
      },
      {
       title:"我想这周学武术",
       isCompleted:true
      }

];

var app =new Vue({
	el:"#todolist",
	data:{
		listItems:[
          {
          	 title:"我想这周把vue学会",
          	 isCompleted:false
          },
          {
          	title:"我想这周学武术",
          	isCompleted:true
          }
		]
	},
     methods:{
          //添加列表
          
     }
})