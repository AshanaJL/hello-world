window.addEventListener("load", ()=>{
    if(sessionStorage.getItem("back")!=null)
    {
        let player = document.createElement("div"); 
        player.className = "playing";
        document.body.appendChild(player);  

        let playList = sessionStorage.getItem("songPlaylist"); 
        let currentPos = sessionStorage.getItem("songCurrentPosition");
        let song = playList[currentPos]; 


        let description = document.createElement("div"); 
        description.className += "dividends"; 
        player.appendChild(description); 

        let songCover = document.createElement("img"); 
        songCover.className += "songCover"; 
        songCover.setAttribute("src", song[1] ); 
        description.appendChild(songCover); 



        console.log(sessionStorage);
    }
})