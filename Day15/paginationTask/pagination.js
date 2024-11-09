var url="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
var details=new XMLHttpRequest();
console.log(details);
details.open('GET',url);
details.send();
details.onreadystatechange=function(){
    if(this.status==200 && this.readyState==4){
        //console.log(this.responseText);
        var array=JSON.parse(this.responseText);
        console.log(array);
        var arrayLength=array.length;

        //Dynamic web page code goes here
          
        var pageCount;
        var currentBtn=1;
        
        //function for page numbers generation

        function pageNumberGeneration(entries){

            const pageNumberSec=document.getElementById('page-numbers');
            
            if(100%entries==0) pageCount=100/entries;
            else pageCount=Math.floor(100/entries)+1;

            pageNumberSec.innerHTML=`<button value="first">First</button><button value="previous">Previous</button>`;
            for(let i=1;i<=pageCount;i++){
                pageNumberSec.insertAdjacentHTML("beforeend",`<button value="${i}">${i}</button>`);
            }
            pageNumberSec.insertAdjacentHTML("beforeend",`<button value="next">Next</button><button value="last">Last</button>`);
            
            //function for buttons clicking
        
            var buttons=document.querySelectorAll('button');
            console.log(buttons);
            buttons.forEach((button)=>{
                button.addEventListener('click',(ev)=>{

                    const BtnValue=ev.target.value;
                    
                    document.querySelector('.selected')?.classList.remove('selected');
                    button.classList.add('selected');
                    
                    //function for checking whether the btnValue is integer or not

                    function checkInteger(num){
                        let a=Number(num);
                        return Number.isInteger(a);
                    }

                    //Actions for different buttons
                    let entryValue=Number(document.getElementById('entries').value);
                    if (checkInteger(BtnValue)==true){                             
                        dataDisplay(BtnValue,entryValue);
                        currentBtn=Number(BtnValue);
                    }
                    else if(BtnValue=='previous'){
                        currentBtn=currentBtn-1;
                        if(currentBtn<1) currentBtn=1;
                        dataDisplay(currentBtn,entryValue);                   
                    }
                    else if(BtnValue=='next'){
                        currentBtn=currentBtn+1;
                        if(currentBtn>pageCount) currentBtn=pageCount;
                        dataDisplay(currentBtn,entryValue);                    
                    }
                    else if(BtnValue=='first'){
                        currentBtn=1;
                        dataDisplay(currentBtn,entryValue);
                    }
                    else if(BtnValue=='last'){
                        currentBtn=pageCount;
                        dataDisplay(currentBtn,entryValue);  //since pageCount is global variable ie it is 
                    }                                       //declared as var so i have used it  here
                })
            })
            
        }
        pageNumberGeneration(15);   //default page on page load
        dataDisplay(1,15);          //default data on page load
        document.querySelector('button[value="1"]').classList.add('selected');   //defaultly page 1 selected.
                
        //function for adding and displaying data in table body

        function dataDisplay(pageNo,entryValue){

                let tbody=document.getElementById('tbody');
                let existingRows=document.querySelectorAll('td');
                let footerText=document.getElementById('footer-text');

                let startIndex=(pageNo-1)*entryValue;    //since this  is array start index and endindex calculated based on the index value
                let endIndex=entryValue*pageNo;
                
                existingRows.forEach((td)=>td.remove());   //removing all existing tabledata

                for(let i=startIndex;i<endIndex;i++){

                    if(array[i]){      //To avoid undefined entries
                        let row =document.createElement('tr');
                        row.innerHTML=`<td value="${array[i].id}">${array[i].id}</td>
                                    <td value="${array[i].name}">${array[i].name}</td>
                                    <td value="${array[i].email}">${array[i].email}</td>`;        
                        tbody.appendChild(row);
                    }
                    else{
                        endIndex=i;
                        break;
                    }
                }
                footerText.innerText=`Showing ${startIndex+1} to ${endIndex} of 100 entries`;
        }  
        
        //event listener when selection of entries changes

        const option=document.getElementById("entries");
        option.addEventListener('change',(ev)=>{
            var newEntryValue=ev.target.value;
            pageNumberGeneration(newEntryValue);
            dataDisplay(1,newEntryValue);            
            document.querySelector('button[value="1"]').classList.add('selected');
        })
    }
    else
        console.log("error occured");    

}