var tod = {};
var svebtn = $(".saveBtn");

function tsk1() { 
    var schedule = $('textarea[name="evnt"]').val();
    console.log(schedule);
}

svebtn.on("click", tsk1);


