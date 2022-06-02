import { createList } from "./components/list.js";
import { createh1 } from "./components/h1.js";
import { createLi } from "./components/li.js";
import { createImg } from "./components/img.js";
function list(name,order,sprites,stats,types){
    createList(name,order,sprites,stats,types)
}
function h1(error){
   
    createh1 (error)
}
function li(name,text,ul){
    createLi(name,text,ul)
}
function img(name,ul){
    createImg(name,ul)
}

export {list,h1,li,img}