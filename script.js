//your code here!
let container=document.getElementById("infi-list");

let element=1;

function createElement() {
	for(let i=1; i<=10 ; i++ )
	{
		let li= document.createElement("li");
		li.innerText=`item ${element++}`;
		container.appendChild(li);
	}
	
}
// for creating infinite scroll we need three property 
// values 1. container.clientHeight
// 2.container.scrollHeight
// 2.scroll top

container.addEventListener("scroll",() =>{
	
let scrollContainerHeight=container.scrollHeight;
let visibleHeight= container.clientHeight;
let scrollHeight = container.scrollTop;

let reamingHeight= scrollContainerHeight - visibleHeight - scrollHeight;

if (reamingHeight<8){
	createElement();
}
});


createElement();



