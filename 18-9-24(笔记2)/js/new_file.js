Vue.component('note', {
	props:['todo'],
	template: `	
		<div class="ui card">
  				<div class="content">
    				<div class="header">{{titleLnegth||"仙剑奇侠传"}}</div>
    					<div class="meta">
      						<span>{{createDate}}</span>
      						<span>{{todo.title.length}}字</span>
   						 </div>
 						 <textarea rows="5" v-model="todo.title">笔记内容</textarea>
  						 <i class="trash icon" @click="del"></i>
 				 </div>
			</div>
	
	`,
	computed:{
		titleLnegth:function(){
		    return _.truncate(this.todo.title , {'length':24})
		},
		createDate:function(){
//		return Date.parse( new Date())
		return moment(this.todo.time ).fromNow()

	},
		getDate:function(){
	return Date.parse( new Date())
		}
	},
	methods:{
		del:function(){
//			console.log(this._uid)
			app.notes.splice(this._uid-1,1)
		}
	}
	
})
var app = new Vue({
	el:"#app",
	data:{
		notes:[
		{
			"title":"远处蔚蓝天空下 涌动着金色的麦浪 就在那里曾是你和我 爱过的地方 当微风带着收获的味道 吹向我脸庞	想起你轻柔的话语 曾打湿我眼眶  我们曾在田野里歌唱 在冬季盼望 却没能等到阳光下 这秋天的景象 就让失散的誓言飞舞吧随西风飘荡 就像你柔软的长发 曾芬芳我梦乡 ",
			"time":1537842838000
		},
		{
			"title":"但望余生 漫漫回忆如你 无言似你 酒里忧愁若你 柔情依你 心底荒凉都是你 四目相对也是你",
			"time":1537842838000
		},
		
		]
	},
	computed:{
		
	},
	methods:{
		add:function(){
			this.notes.unshift({"title":"","time":Date.parse(new Date())})
			document.querySelector("textarea").focus()
		}
	}
})
