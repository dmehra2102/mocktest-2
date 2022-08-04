import { data } from "./data.js";
const mainDiv = document.querySelector(".data-container-div");
const modaldiv = document.querySelector(".modal");
const para = document.querySelector(".para-tag");
const closebtn = document.querySelector(".modal-close");
const ContinueBtn = document.querySelector(".countinue-btn");

function onOpenModal(p){
	para.textContent = `Hello I'm ${p.innerHTML}`
		modaldiv.classList.add("modal-active");
}

function onCloseModal(){
	modaldiv.classList.remove("modal-active");
}

closebtn.addEventListener("click", onCloseModal);
ContinueBtn.addEventListener("click",onCloseModal);

function loadData(){
    let i=0;
    while(i<25){
	const div = document.createElement("div");
	div.classList.add("card-show")
	div.style.border = "1px solid gray";
	div.style.margin = "5px 0px"
	const p = document.createElement("p");
	p.textContent = data[i].title;
	p.style.fontSize = "1.6em";
	p.style.cursor = "pointer";
	p.style.textAlign = "center";
	div.appendChild(p);
	div.addEventListener("click",()=> {onOpenModal(p)})
	mainDiv.append(div);
	i++;
  }
}
// window.stop();


window.addEventListener("scroll", ()=> {
	if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
		loadData();
	}
})

loadData();