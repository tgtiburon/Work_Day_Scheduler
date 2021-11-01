console.log("script.js loaded");

// Global Variables

let hoursObj = [
    {
        hourNum: 0,
        hourText: "9AM",
        hourTaskText: ""
    },
    {
        hourNum: 1,
        hourText: "10AM",
        hourTaskText: ""
    },
    {
        hourNum: 2,
        hourText: "11AM",
        hourTaskText: ""
    },
    {
        hourNum: 3,
        hourText: "12PM",
        hourTaskText: ""
    },
    {
        hourNum: 4,
        hourText: "1PM",
        hourTaskText: ""
    },
    {
        hourNum: 5,
        hourText: "2PM",
        hourTaskText: ""
    },
    {
        hourNum: 6,
        hourText: "3PM",
        hourTaskText: ""
    },
    {
        hourNum: 7,
        hourText: "4PM",
        hourTaskText: ""
    },
    {
        hourNum: 8,
        hourText: "5PM",
        hourTaskText: ""
    }
];

console.log(hoursObj);


// Functions


/*  Function: initialSetup()  
    => used to handle the button clicks
    args: none
    return: none
*/

let initalSetup = function ()  {

    //create elements to make the hourly list
  

  //debugger;
    for (let i = 0; i < 9; i++) {
    
         // add the 3 sub divs

         // add the hour to the left
         // creating a string to make our elementname
         // hour1TimeDivEl would be the first
        // let tmpStr1 = "hour"+ i + "TimeDivEl";
        // let objName1 = tmpStr1;
         let objName1 = "hour" + i + "TextDivEl";
         objName1 = $("<div>")
         .addClass("hour col-1 ")
         .text(hoursObj[i].hourText);
         // set the id so we can get it later
         let idStr =("hour" + i + "TextID") ;
         $(objName1).attr("id", idStr);
         $(".container").append(objName1);
         console.log(objName1);

        // add the task section to the middle
        let tmpStr2 = "hour" + i + "taskDivEl";
        let objName2 = tmpStr2;
        objName2 = $("<div>")
        .addClass("time-block col-10  border")
        .text("Sample text");
        idStr =("hour" + i + "TaskID") ;
        $(objName2).attr("id", idStr);

        $(".container").append(objName2);
        console.log(objName2);

        //add the save button to the right
        let tmpStr3 = "hour" + i + "taskDivEl";
        let objName3 = tmpStr3;
        objName3 = $("<div>")
        .addClass("saveBtn col-1  border border-dark ");
        idStr =("hour" + i + "SaveID") ;
        $(objName3).attr("id", idStr);

        $(".container").append(objName3);
        console.log(objName3);

       

        



        
    }
    




};//end initial step


let buttonHandler = function(event) {


    console.log(event.target);
}


























// timers



setInterval(function() {
    //Check the time and update event's colors based on time
    //$(".card .list-group-item").each(function(index, el) {
    //    checkTask(el);
   // });
}, (1000 * 60) *5); // Every 


// Function Calls
initalSetup();

//Listeners
document.addEventListener("click", buttonHandler)


