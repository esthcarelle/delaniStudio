$(document).ready(function(){
$("#show").click(function(){
$("#show").hide();
$("#hide").show();
});
$("#hide").click(function(){
    $("#show").show();
    $("#hide").hide();
    });
    $("#show1").click(function(){
        $("#show1").hide();
        $("#hide1").show();
        });
        $("#hide1").click(function(){
            $("#show1").show();
            $("#hide1").hide();
            });
            
            $("#show2").click(function(){
                $("#show2").hide();
                $("#hide2").show();
                });
                $("#hide2").click(function(){
                    $("#show2").show();
                    $("#hide2").hide();
                    });
                    $("#blanks").submit(function(event){
                        var email=$("input#email").val();
                        var name=$("input#name").val();
                        var message= $.trim($("#message").val());
                        if((name!="")&&(email!="")&&(message!="")){
                            alert(name + " we have received your message. Thank you fro reaching out to us.")
                        }
                        else{
                            alert("Fill nicely the form please!");
                        }
                        event.preventDefault();
;
                    });
                    var element=["img11","img12","img13","img14","img15","img16","img17","img18"];
                    element.forEach(function(blank){
                        $("#"+blank).mouseout(function(){
                            $("#"+blank+" >h1").hide();
                            $("#"+blank+" p").hide();

                          

                        });
                        $("#"+blank).mouseover(function(){
                            $("#"+blank+" >h1").show();
                            $("#"+blank+" >p").show();
                           

                        });
                    });
            

                      

                    
                    
});