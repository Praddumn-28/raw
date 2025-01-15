 let Generate= document.getElementById("generate");
 let name1= document.getElementById("box1");
 let Title=document.getElementById("title");
 let Content=document.getElementById("content")
 let ticketname= document.getElementById("nametext")
 let gitid=document.getElementById("emailtext")
 console.log(gitid)
 let ticketid=document.getElementById("number")
 
    var data=window.location.search;
    var info= new URLSearchParams(data);
    var name=info.get("name");
    var email1=info.get("email");
    var getdata="Congrats ,"+ name +"!"+ "<br>" +"Your ticket is ready.";
    Title.innerHTML= getdata;
    
    var getinfo="we've emailed your ticket to"+ "<br>"+
        email1 +"and will send updates in the run up"+ "<br>"+
        "to the event.";
     Content.innerHTML=getinfo;  
     ticketname.innerHTML=name;
     gitid.innerHTML=email1;

     const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
     ticketid.innerHTML=randomString
     console.log(randomString);


     


 
 

 
