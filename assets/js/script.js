var tod = [];
var svebtn = $(".saveBtn");
var txtbox = $(".textarea");


svebtn.on("click", function() { 
       
    var strttime = $(this).parent().attr("id");
    var entry = $(this).siblings(".time-task").val();
    
    localStorage.setItem(strttime, entry);
    console.log(strttime, entry);
});

console.log(localStorage.getItem("9"));
$("#9 .time-task").val(localStorage.getItem("9"));


