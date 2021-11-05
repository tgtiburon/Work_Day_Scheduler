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


// DEBUG
debugTime = 9;

//#region  Functions


/*  Function: CheckDueDates()
    => checks the due dates and colors tasks accordingly.
    args: none
    return: none
*/

let checkDueDates = function() {
    
    // debug
    //tmpTimeStr = 9;
    tmpTimeStr = debugTime;
 
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
            // console.log(idStr + " is past");
 
         }
         // present to assign present class
          else if (tmpTimeStr === taskTimeStr ) {
             $(idStr).removeClass("future past");
             $(idStr).addClass("present");
            // console.log(idStr + " is present");
 
         } 
         // future so assign future class
         else if(tmpTimeStr < taskTimeStr) {
         
             $(idStr).removeClass("present past");
             $(idStr).addClass("future");
            // let tempObj = $(idStr);
           //  console.log(tempObj);
            // console.log(idStr + " is future");
         } 
         
     }
 
 }

/*  Function: loadSavedTasks 
    => used to load tasks from localStorage
    args: none
    return: savedTasks
*/
let loadSavedTasks = function() {

    let savedTasks = localStorage.getItem("savedTasks");
    if (!savedTasks) {
        savedTasks = [];
        numOfTasks = 0;
    } else {
       // savedTasks = JSON.parse(savedTasks);
       // numOfTasks = savedTasks.length;
       savedTasks = JSON.parse(localStorage.getItem("savedTasks"));
      
    }
    
    return savedTasks;
};
/*  Function: saveTasks() 
    => used to save tasks to localStorage
    args: none
    return: none
*/
let saveTasks = function(savedTasks) {

    if (!savedTasks) {
        savedTasks = [];
        numOfTasks = 0;
    } 
      

    $(".time-block").each(function(index, element) {
   
        // element == this
        tmpText = $(element).text();
        console.log(tmpText+ "" + index);

        savedTasks[index] = tmpText;
 
    });
    console.log(savedTasks);

    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
   
   
}//end saveTasks()

// GOING TO REMOVE I THINK
//
//
//

  let refreshScreen = function(){
   
    let savedTasks = loadSavedTasks();



    $(".time-block").each(function(index, element) {
        // debugger;
         // element == this
        // debugger;
         $(element).text(savedTasks[index]);
         console.log(savedTasks[index]);
        // console.log(tmpText+ "" + index);
 
        // savedTasks[index] = tmpText;
  
     });

    console.log("in refresh screen")

    checkDueDates();
    
  }

/*  Function: initialSetup()  
    => used to handle the button clicks
    args: none
    return: none
*/

let initalSetup = function ()  {
    // load save
    //debugger;
    let savedTasks = loadSavedTasks();

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
        .addClass("taskDiv col-10 border");//add time-block back if needed
       // .text("Sample text");
        idStr =("hour" + i + "TaskID") ;
        $(objName2).attr("id", idStr);

        // DEBUG --- put a <p> in it
        let objPName ="hour" + i + "taskPDivEl";
        objPName = $("<p>")
            .addClass("time-block")
            //.text("Inside a <p> "+ i);
            .text(savedTasks[i])
        idStr =("hour" + i + "taskPDivEl") ;
        $(objPName).attr("id", idStr);

        $(".container").append(objName2);
        $(objName2).append(objPName);
        ////////////console.log(objName2);


        //add the save button to the right
        let tmpStr3 = "hour" + i + "taskDivEl";
        let objName3 = tmpStr3;
        objName3 = $("<div>")
        .addClass("saveBtn oi oi-lock-locked col-1 border border-dark ");
        idStr =("hour" + i + "SaveID") ;
        $(objName3).attr("id", idStr);

        $(".container").append(objName3);
   
    }
    checkDueDates();
    
};//end initial step

//#endregion 

//#region EventListeners


// if saveBtn clicked save the tasks
$(".container").on("click", ".saveBtn", function() {

    debugger;
    console.log("save clicked");  
    console.log(this);
    saveTasks();
   
});
// Converts .time-block to a textarea for editing.
$(".container").on("click", ".time-block", function() {

    var text = $(this)
        .text()
        .trim();
    console.log(text);
    console.log(this);
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  // HACK
    $("textarea").attr("id", "textareaHack");

    console.log(this);
});
// converts the textarea back to a p
$(".container").on("blur", "textarea", function() {
  
    var text = $(this)
        .val()
        .trim();

    console.log("inside the BLUR");
    console.log(text);

    this.text = text;
    let taskP = $("<p>")
        .addClass("time-block")
        .text(text);

    console.log(this.parentElement.id);
    $(taskP).attr("id", this.parentElement.id);

    // replace text area with p element
    $(this).replaceWith(taskP);

   // refreshScreen();

});


let buttonHandler = function(event) {


    //DEBUG
    if (event.target.id === "currentDay") {
        

        debugTime++ // raise the time
        checkDueDates();
        if (debugTime > 17) {
    
            debugTime = 8;
        }   
        //console.log( $( this ).text());


    }
}

//#endregion

//#region Timers

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

//#endregion

// Function Calls
initalSetup();

//Listeners
document.addEventListener("click", buttonHandler)


