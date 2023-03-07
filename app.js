
const app = Vue.createApp({
    data(){
        return{
            mouseEventData:'.',
            showBooks:true,
            url:'http://www.thenetninja.co.uk',
            title:'The Final Empire',
            author:'Ibrahim Maher',
            age:55,
            xpos:0,
            ypos:0,
            books:[
                {title:'New Book1' ,author:'ibrahim maher',img:"Assets/1.jpg",isFav:true},
                {title:'New Book2' ,author:'Maher Ibrahim',img:"Assets/2.jpg",isFav:false},
                {title:'New Book3' ,author:'Ahmed maher',img:"Assets/3.jpg",isFav:true}

            ]
            
    }},
    methods:{
 
        changeTitle(title){
          this.title = title
        },
        ToggleShowBooks(){
            this.showBooks =! this.showBooks ;            
        },
        handleEvent(e,data){
                console.log(e,e.type);
                this.mouseEventData =e.type;
                if (data) {
                    console.log(data);
                }
               
        },
        handlemousemove(e){
            console.log(e.offsetX,e.offsetY);
          this.xpos=e.offsetX;
          this.ypos=e.offsetY;          
        },
        ToggleFav(bookObj){
            bookObj.isFav=!bookObj.isFav  

        }        
    },
    computed:{
        filterBooks(){
            return this.books.filter((b)=>b.isFav==true)
        }
    }
});
app.mount('#app');