console.log("script.js loaded");

// Global Variables

let hoursObj = [
    {
        hourNum: 0,
        hourText: "9AM",
        milText: "9",
        hourTaskText: ""
    },
    {
        hourNum: 1,
        hourText: "10AM",
        milText: "10",
        hourTaskText: ""
    },
    {
        hourNum: 2,
        hourText: "11AM",
        milText: "11",
        hourTaskText: ""
    },
    {
        hourNum: 3,
        hourText: "12PM",
        milText: "12",
        hourTaskText: ""
    },
    {
        hourNum: 4,
        hourText: "1PM",
        milText: "13",
        hourTaskText: ""
    },
    {
        hourNum: 5,
        hourText: "2PM",
        milText: "14",
        hourTaskText: ""
    },
    {
        hourNum: 6,
        hourText: "3PM",
        milText: "15",
        hourTaskText: ""
    },
    {
        hourNum: 7,
        hourText: "4PM",
        milText: "16",
        hourTaskText: ""
    },
    {
        hourNum: 8,
        hourText: "5PM",
        milText: "17",
        hourTaskText: ""
    }
];

console.log(hoursObj);

// DEBUG STUFF
debugTime = 9;


// Functions


/*  Function: initialSetup()  
    => used to handle the button clicks
    args: none
    return: none
*/

let initalSetup = function ()  {

    //create elements to make the hourly list
    for (let i = 0; i < 9; i++) {

        //checkDueDates();
        var tmpTimeStr = moment().format('LLLL');
        // lets put the current date up
        $("#currentDay").text(tmpTimeStr);

         // add the hour to the left

         // creating a string to make our elementname
      
         let objName1 = "hour" + i + "TextDivEl";
         objName1 = $("<div>")
            .addClass("hour col-1 ")
            .text(hoursObj[i].hourText);
         // set the id so we can get it later
         let idStr =("hour" + i + "TextID") ;
         $(objName1).attr("id", idStr);
         $(".container").append(objName1);
         /////////console.log(objName1);


        // add the task section to the middle
        let tmpStr2 = "hour" + i + "taskDivEl";
        let objName2 = tmpStr2;
        objName2 = $("<div>")
        .addClass("time-block col-10  border")
        .text("Sample text");
        idStr =("hour" + i + "TaskID") ;
        $(objName2).attr("id", idStr);

        $(".container").append(objName2);
        ////////////console.log(objName2);


        //add the save button to the right
        let tmpStr3 = "hour" + i + "taskDivEl";
        let objName3 = tmpStr3;
        objName3 = $("<div>")
        .addClass("saveBtn col-1  border border-dark ");
        idStr =("hour" + i + "SaveID") ;
        $(objName3).attr("id", idStr);

        $(".container").append(objName3);
        ////////console.log(objName3);    
    }
    checkDueDates();
    
};//end initial step


let buttonHandler = function(event) {


    //console.log(event.target);
    //DEBUG
    debugTime++ // raise the time
    checkDueDates();
    if (debugTime > 17) {

        debugTime = 8;
    }   
}

let checkDueDates = function() {
    
   // debug
   tmpTimeStr = debugTime;
   console.log("currentTime= " + tmpTimeStr)
   // DEBUG DEBUG
    tmpTimeStr = parseInt(tmpTimeStr);
    console.log(tmpTimeStr);

    for (let i = 0; i < 9; i++) {
        // lets change colors based on time
        // add the task section to the middle
        let tmpStr2 = "hour" + i + "taskDivEl";
        let objName2 = tmpStr2;

        idStr =("#hour" + i + "TaskID") ;
        taskTimeStr = hoursObj[i].milText;
        taskTimeStr = parseInt(taskTimeStr);


        // Past so assign past class
        if(tmpTimeStr > taskTimeStr) {
            $(idStr).removeClass("future present");
            $(idStr).addClass("past");
            console.log(idStr + " is past");

        }
        // present to assign present class
         else if (tmpTimeStr === taskTimeStr ) {
            $(idStr).removeClass("future past");
            $(idStr).addClass("present");
            console.log(idStr + " is present");

        } 
        // future so assign future class
        else if(tmpTimeStr < taskTimeStr) {
        
            $(idStr).removeClass("present past");
            $(idStr).addClass("future");
            let tempObj = $(idStr);
            console.log(tempObj);
            console.log(idStr + " is future");
        } 
        
    }

}


























// timers



setInterval(function() {
    //Check the time and update event's colors based on time
    //$(".card .list-group-item").each(function(index, el) {
    //    checkTask(el);
   // });
   var tmpTimeStr = moment().format('LLLL');

   // lets put the current date up
   $("#currentDay").text(tmpTimeStr);

   // lets check the tasts to see if they are due
   // turning off for testin
   //
   // DEBUG
   //checkDueDates();
}, (1000 * 10)); // Every 10 sec


// Function Calls
initalSetup();

//Listeners
document.addEventListener("click", buttonHandler)


