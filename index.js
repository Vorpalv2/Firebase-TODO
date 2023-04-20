import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref ,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const AppSetting ={ databaseURL:"https://playground-507f5-default-rtdb.asia-southeast1.firebasedatabase.app/"}

const app = initializeApp(AppSetting);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");


const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const listItem = document.getElementById("list");

addButtonEl.addEventListener("click",function(){
    let inputValue = inputFieldEl.value;
    console.log(typeof inputValue);
    let toupper = inputValue.toUpperCase();
    console.log(toupper);
    push(shoppingListInDB,toupper);
    console.log(toupper);


    listItem.innerHTML += `<li>${toupper}</li>`;

});
