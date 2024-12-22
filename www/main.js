

$(document).ready(function () {
    $('.text').textillate({
        loop:true,
        sync:true,
        in:{
            effect:"bounceIn",

        },
        out:{
            effect:"bounceOut",
        },
    }
);

  var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 840,
    height: 200,
    style:"ios9",
    amplitude:"1",
    speed:"0.30",
    autostart:true,
  });
  $('.siri-message').textillate({
    loop:true,
    sync:true,
    in:{
        effect:"fadeInUp",
        sync: true,

    },
    out:{
        effect:"fadeOutUp",
        sync: true,
    },
}
);
$("#MictBtn").click(function () { 
    eel.playAssistantSound();
    $("#oval").attr("hidden",true);
    $("#SiriWave").attr("hidden",false);
    eel.allCommands()();
});
function doc_KeyUp(e)
{
    if(e.key==='j'&& e.metaKey)
    {
        eel.playAssistantSound()
        $("#oval").attr("hidden",true)
        $("#SiriWave").attr("hidden",false)
        eel.allCommands()()
    }
}
document.addEventListener('keyup',doc_KeyUp,false);

function PlayAssistant(message){
    if(message !=""){
        $("#oval").attr("hidden",true);
        $("#SiriWave").attr("hidden",false);
        eel.allCommands(message);
        $("#chatbox").val("")
        $("#MictBtn").attr("hidden",false);
        $("#SendBtn").attr("hidden",true);
    }
}
function ShowHideButton(message)
{
    if(message.length==0)
    {
        $('#MictBtn').attr('hidden',false);
        $('#SendBtn').attr('hidden',true);

    }
    else{
        $('#MictBtn').attr('hidden',true);
        $('#SendBtn').attr('hidden',false);
    }
}


 $("#chatbox").keyup(function(){
    let message=$("#chatbox").val();
     ShowHideButton(message)
 });
 $("#SendBtn").click(function()
 {
     let message=$("#chatbox").val()
     PlayAssistant(message) 
});

$("#chatbox").keypress(function(e){
    key=e.which;
    if(key == 13)
    {
        let message=$("#chatbox").val()
        PlayAssistant(message)
    }

})



});
// eel.expose(speak);
// function speak(text) {
//     console.log("Speaking: " + text);
    
// }
