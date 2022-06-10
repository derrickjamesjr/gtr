var svebtn = $(".saveBtn");
var txtbox = $(".textarea");

var now =  function() {
   var date = moment().format("MMMM Do, YYYY hh:mm:ss a");
   var datetime = $("#currentDay");

   console.log(date);   
   datetime.append(date);
};
now();

var whenitsdue = function() {
    var time = moment(date, "L").set(hour, "17");
    var now = moment().format("hh:mm:ss a");
      
}

svebtn.on("click", function() { 
       
    var strttime = $(this).parent().attr("id");
    var entry = $(this).siblings(".time-task").val();
    
    localStorage.setItem(strttime, entry);
});





$("#9 .time-task").val(localStorage.getItem("9"));
$("#10 .time-task").val(localStorage.getItem("10"));
$("#11 .time-task").val(localStorage.getItem("11"));
$("#12 .time-task").val(localStorage.getItem("12"));
$("#1 .time-task").val(localStorage.getItem("1"));
$("#2 .time-task").val(localStorage.getItem("2"));
$("#3 .time-task").val(localStorage.getItem("3"));
$("#4 .time-task").val(localStorage.getItem("4"));
$("#5 .time-task").val(localStorage.getItem("5"));