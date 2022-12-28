let randomize_array=document.getElementById('randomize_array_btn');

let sort_btn=document.getElementById('sort_btn');

let bars_container = document.getElementById("bars_container");

let min=1;

let max=100;

let Number_of_Bars=100;

let heightFactor=6.5;

let unsorted_array =new Array(Number_of_Bars);

function randomNum(min,max)
{
  return Math.floor(Math.random()*(max-min+1))+min;
}


function createRandomArray()
{
   for(let i=0;i<Number_of_Bars;i++)
   {
      unsorted_array[i]=randomNum(min,max);
   }
}


document.addEventListener("DOMContentLoaded",function(){
    createRandomArray();
    renderBars(unsorted_array);
})

function renderBars(array)
{
   for(let i=0;i<array.length;i++)
   {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height=array[i]*heightFactor+"px";
    bars_container.appendChild(bar);

   }

}


randomize_array.addEventListener("click",function()
{
   createRandomArray();
   bars_container.innerHTML="";
   renderBars(unsorted_array);

});

function sleep(ms)
{
  return new Promise((resolve)=>setTimeout(resolve,ms));

}


async function bubbleSort(array)
{
    let bars = document.getElementsByClassName("bar");
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length-i-1;j++)
        {

            for(let  k=0;k<bars.length;k++)
            {
                if(k!==j && k!==j+1)
                {
                    bars[k].style.backgroundColor="aqua";
                }
            }

            if(array[j]<array[j+1])
            {
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                bars[j].style.height = array[j]*heightFactor +"px";
                bars[j].style.backgroundColor = "lightgreen";
                // bars[j].innerText=array[j];
                bars[j+1].style.height = array[j+1]*heightFactor +"px";
                bars[j+1].style.backgroundColor = "lightgreen";
                // bars[j+1].innerText=array[j+1];
                await sleep(10);
            }
        } 
        await sleep(10);
    }
    return array;
}

sort_btn.addEventListener("click",function()
{
    let sorted_array = bubbleSort(unsorted_array);
    console.log(sorted_array);

});







