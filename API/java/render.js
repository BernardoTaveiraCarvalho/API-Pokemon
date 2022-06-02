import { addE,qs } from "./helper/dom.js"
import { GetApi } from "./Api/GetApi.js"
function render (){

addE(qs('input[type=submit]'),"click",(e)=>{
    e.preventDefault()
    const input = qs('input[type=text]').value
    GetApi(input)
})
}
export {render}