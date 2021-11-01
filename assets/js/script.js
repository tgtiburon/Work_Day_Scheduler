console.log("script.js loaded");

// Global Variables

let hoursObj = [
    {
        hourNum: 0,
        hourText: "9 a.m.",
        hourTaskText: ""
    },
    {
        hourNum: 1,
        hourText: "10 a.m.",
        hourTaskText: ""
    },
    {
        hourNum: 2,
        hourText: "11 a.m.",
        hourTaskText: ""
    },
    {
        hourNum: 3,
        hourText: "12 p.m.",
        hourTaskText: ""
    },
    {
        hourNum: 4,
        hourText: "1 p.m.",
        hourTaskText: ""
    },
    {
        hourNum: 5,
        hourText: "2 p.m.",
        hourTaskText: ""
    },
    {
        hourNum: 6,
        hourText: "3 p.m.",
        hourTaskText: ""
    },
    {
        hourNum: 7,
        hourText: "4 p.m.",
        hourTaskText: ""
    },
    {
        hourNum: 8,
        hourText: "5 p.m.",
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
  

    let Hour9Div = $("<div>")
        .addClass("timeBlocks col-12  border border-dark")
        .text("hour9Div");
    let Hour10Div = $("<div>")
        .addClass("timeBlocks col-12  border border-dark")
        .text("hour10Div");
    let Hour11Div = $("<div>")
        .addClass("timeBlocks col-12  border border-dark")
        .text("hour11Div");
    let Hour12Div = $("<div>")
        .addClass("timeBlocks col-12  border border-dark")
        .text("hour12Div");
    let Hour1Div = $("<div>")
        .addClass("timeBlocks col-12  border border-dark")
        .text("hour1Div");
    let Hour2Div = $("<div>")
        .addClass("timeBlocks col-12  border border-dark")
        .text("hour2Div");
    let Hour3Div = $("<div>")
        .addClass("timeBlocks col-12  border border-dark")
        .text("hour3Div");
    let Hour4Div = $("<div>")
        .addClass("timeBlocks col-12  border border-dark")
        .text("hour4Div");
    let Hour5Div = $("<div>")
        .addClass("timeBlocks col-12  border border-dark")
        .text("hour5Div");

   

     $(".container").append(Hour9Div);
     $(".container").append(Hour10Div);
     $(".container").append(Hour11Div);
     $(".container").append(Hour12Div);
     $(".container").append(Hour1Div);
     $(".container").append(Hour2Div);
     $(".container").append(Hour3Div);
     $(".container").append(Hour4Div);
     $(".container").append(Hour5Div);

  //debugger;
    for (let i = 0; i < 4; i++) {
        //const element = 4[i];
        let tmpStr = "hour" + i + "Div";
        let objName = tmpStr;
        objName = $("<div>")
        .addClass("timeBlocks col-12  border border-dark ")
        .text(tmpStr);

        $(".container").append(objName);
        console.log(objName);


        
    }
    




};//end initial step



























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
