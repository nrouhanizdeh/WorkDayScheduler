
$("#currentDay").text(moment().format('dddd, MMMM Do'));

var currentHour = moment().format('HH');
var hours = ["8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"]

function buildHtml(){
    var textBlock = $("<div>");
    $(".container").append(textBlock);
    textBlock.attr("class", "time-block");
    var hourId = 8;

    $.each(hours, function(index,value){

        // create a new row
        var newRow = $("<div>")
        newRow.attr("class", "row");
        newRow.attr("id",`row${index}`)
        $(".time-block").append(newRow);
        
        // create a the hour block and append to the row
        var hourBlock = $("<div>")
        hourBlock.attr("class", "hour col-md-2");
        hourBlock.text(value);
        $(`#row${index}`).append(hourBlock);

        // create a textarea tag and append to the row
        var textBlock= $("<textarea>")
        textBlock.attr("class", "textBlock col-md-8");
        $(`#row${index}`).append(textBlock);
        
        // create a save botton tag and append to the row
        var saveBotton = $("<button>")
        saveBotton.attr("class", "saveBtn col-md-2");
        $(`#row${index}`).append(saveBotton);
        $(".saveBtn").text("save");

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