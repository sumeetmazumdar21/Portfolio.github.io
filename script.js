// button identifiers

let randomize = document.getElementById("randomize");
let selection_sort = document.getElementById("selection-sort");
let insertion_sort = document.getElementById("insertion-sort");
let shell_sort = document.getElementById("shell-sort");
let quick_sort = document.getElementById('quick-sort');
let merge_sort = document.getElementById("merge-sort");
let change_size = document.getElementById("change-size");
let bubble_sort = document.getElementById("bubble-sort");

var sort_button=document.querySelectorAll(".sort");
var bar_width = 10;

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

// Array Creation

var min = 1;
var max = 255;
var arraySize = 50;

let array = [arraySize];
let sortedArray = [arraySize];


randomize.addEventListener("click", generateArray);

generateArray();



function generateArray(){
    for(var i = 0; i < arraySize; i++){
        array[i] = Math.floor(Math.random() * (max- min) + min);;

        if(array[i] == array[i - 1]){
            array[i] =Math.floor(Math.random() * (max- min) + min);;
        }
    }

    showBars();
}




// Updating Array Size


change_size.addEventListener("click", updateArraySize);
change_size.addEventListener("click", decreaseArraySize);

function updateArraySize(){
    arraySize = 100;
    generateArray();

    change_size.addEventListener("click", decreaseArraySize);
}

function decreaseArraySize(){
    arraySize = 50;
    generateArray();

    change_size.addEventListener("click", updateArraySize);
}


// Creating bars for the array

function showBars(){

    array_container.innerHTML= "";

    for(let i = 0; i < array.length; i++){
        const bar = document.createElement("div");
        bar.style.height= array[i] + "px";
        bar.classList.add("bar");
        array_container.appendChild(bar);
    }
}


// Sorting

function insertionSort(){
    disable_buttons();
    insertion(array);
    showBars();
}














//Running the appropriate algorithm.

selection_sort.addEventListener("click", selectionSort);


function disable_buttons()
{
    for(var i=0;i<sort_button.length;i++)
    {
        sort_button[i].classList=[];
        sort_button[i].classList.add("butt_locked");
        sort_button[i].disabled=true;
        randomize.disabled="true";
        change_size.disabled="true";

       
    }
}

