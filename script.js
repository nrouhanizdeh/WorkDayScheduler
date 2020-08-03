
$("#currentDay").text(moment().format('dddd, MMMM Do'));

var currentHour = moment().format('HH');
var hours = ["8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"]

function buildHtml(){
    var textBlock = $("<div>");
    $(".container").append(textBlock);
    textBlock.attr("class", "time-block");
    var hourId = 8;

    $.each(hours, function(index,value){

        // creates a new row
        var newRow = $("<div>")
        newRow.attr("class", "row");
        newRow.attr("id",`row${index}`);
        $(".time-block").append(newRow);
        
        // creates a the hour block and append to the row
        var hourBlock = $("<div>")
        hourBlock.attr("class", "hour col-md-2");
        hourBlock.text(value);
        $(`#row${index}`).append(hourBlock);

        // creates a textarea tag and append to the row
        var textBlock= $("<textarea>")
        textBlock.attr("class", "textBlock col-md-8");
        textBlock.attr("id",`textblock${index}`);
        $(`#row${index}`).append(textBlock);
        
        // creates a save botton tag and append to the row
        var saveBotton = $("<button>")
        saveBotton.attr("class", "saveBtn col-md-2");
        saveBotton.attr("id",`${index}`);
        $(`#row${index}`).append(saveBotton);
        $(".saveBtn").text("save");

        // Each timeblock is color coded to indicate whether it is in the past, present, or future
        if (parseInt(currentHour) > hourId){
            textBlock.addClass("past");
        } else if (parseInt(currentHour) == hourId){
            textBlock.addClass("present");               
        } else{ 
            textBlock.addClass("future"); 
        }
        hourId++;

    });

}

buildHtml();


$(".saveBtn").on("click", function() {
    var buttonId = $(this)[0].id;
    localStorage.setItem(`text${buttonId}`, document.getElementById(`textblock${buttonId}`).value);
});

for (i=0 ; i < hours.length ; i++){
    if (window.localStorage.getItem(`text${i}`) && !(document.getElementById(`textblock${i}`).value) ){
        document.getElementById(`textblock${i}`).textContent = window.localStorage.getItem(`text${i}`);
    }
}
