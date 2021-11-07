
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

//#region  Functions


/*  Function: CheckDueDates()
    => checks the due dates and colors tasks accordingly.
    args: none
    return: none
*/

let checkDueDates = function() {

    
    
    let currentTime = moment().hour();
   
     for (let i = 0; i < 9; i++) {
         // lets change colors based on time
         // add the task section to the middle
  
         idStr =("#hour" + i + "TaskID") ;
         taskTimeStr = hoursObj[i].milText;
         taskTimeStr = parseInt(taskTimeStr);
 
         // Past so assign past class
         if(currentTime > taskTimeStr) {
             $(idStr).removeClass("future present");
             $(idStr).addClass("past");
         }
         // present to assign present class
          else if (currentTime === taskTimeStr ) {
             $(idStr).removeClass("future past");
             $(idStr).addClass("present");
         } 
         // future so assign future class
         else if(currentTime < taskTimeStr) {
         
             $(idStr).removeClass("present past");
             $(idStr).addClass("future");
      
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
    //no savedTasks make one
    if (!savedTasks) {
        savedTasks = [];
    } else {
        // load and parse savedTasks
       savedTasks = JSON.parse(localStorage.getItem("savedTasks"));
      
    }
    
    return savedTasks;
};


/*  Function: initialSetup()  
    => used to handle the button clicks
    args: none
    return: none
*/

let initalSetup = function ()  {
    // load save
    let savedTasks = loadSavedTasks();
    // lets set today's date
     var tmpTimeStr = moment().format('dddd');
    tmpTimeStr = tmpTimeStr + ", " + moment().format('MMMM Do');


    // lets put the current date up
    $("#currentDay").text(tmpTimeStr);

    //create elements to make the hourly list
    for (let i = 0; i < 9; i++) {

         // add the hour to the left
         // creating a string to make our elementname
         let objName1 = "hour" + i + "TextDivEl";
         objName1 = $("<div>")
            .addClass("hour col-2 col-l-1")
            .text(hoursObj[i].hourText);
         $(".container").append(objName1);


        // add the task section to the middle
        objName2 = $("<div>")
        .addClass("taskDiv col-8 col-l-10 border");

        idStr =("hour" + i + "TaskID") ;
       $(objName2).attr("id", idStr);

      // Add a p element to store the tesk text.
        objPName = $("<p>")
            .addClass("time-block")
            .text(savedTasks[i])
        idStr =("hour" + i + "taskPDivEl") ;
        $(objPName).attr("id", idStr);

        $(".container").append(objName2);
        $(objName2).append(objPName);
      
        
        //add the save button to the right
        objName3 = $("<div>")
        .addClass("saveBtn fas fa-save  col-2 col-l-1 border border-dark ");
        $(objName3).attr("myindex" , i);

        $(".container").append(objName3);
   
    }
    checkDueDates();
    
};//end initial step

//#endregion 

//#region EventListeners


// if saveBtn clicked save the tasks
$(".container").on("click", ".saveBtn", function() {
 
    // traverse the dom to get the text from the row
    let text = ($(this).prev(".col-10").children("p").text());
    // get the index
    let index = $(this).attr("myindex");
    // load all the current tasks
    let savedTasks = loadSavedTasks();
    // Lets save the task of the row we just clicked save on.
    savedTasks[index] = text;
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));  
});

// Converts .time-block p to a textarea for editing.
$(".container").on("click", ".time-block", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
 
  $("textarea").attr("class", "textarea");   
});
// converts the textarea back to a p on blur
$(".container").on("blur", "textarea", function() {
    var text = $(this)
        .val()
        .trim();

    this.text = text;
    let taskP = $("<p>")
        .addClass("time-block")
        .text(text);
    $(taskP).attr("id", this.parentElement.id);
    // replace text area with p element
    $(this).replaceWith(taskP);
});


//#endregion

//#region Timers

setInterval(function() {
    //Check the time and update event's colors based on time
   var tmpTimeStr = moment().format('dddd');
   tmpTimeStr = tmpTimeStr + ", " + moment().format('MMMM Do');
   // lets put the current date up
   $("#currentDay").text(tmpTimeStr);
   checkDueDates();

}, (1000 * 15)); // Every 15 sec

//#endregion

// Function Calls
initalSetup();


