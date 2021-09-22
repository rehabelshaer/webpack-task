import "./hello.css";
const HelloWorld=( elem ,html) =>{
        const ele = document.createElement(elem);
        ele.innerHTML= html;
        ele.classList.add("main");
        document.body.appendChild(ele);
}    
export default HelloWorld;