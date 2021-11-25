const HEADER = document.getElementById("headerHere"); 
const IMAGE = document.getElementById("imageHere"); 
const NAME = document.getElementById("nameHere"); 
const ABOUT = document.getElementById("aboutHere"); 
const MAIN = document.getElementById("mainHere");
const SONGLIST = document.getElementById("Songs");

const CLICKEDNO = sessionStorage.getItem("clicked"); 
const CODENAME = sessionStorage.getItem("codeName"); 
const JASON_STRING = sessionStorage.getItem('Jason'); 
const JASON = JSON.parse(JASON_STRING); 

let actualNo = 0;
let isPlaying = false;
let currentPlaying=372; 
constructor(); 

function constructor(){
    NAME.innerHTML = JASON[CLICKEDNO].name; 
    IMAGE.src = JASON[CLICKEDNO].img; 
    ABOUT.innerHTML = JASON[CLICKEDNO].abt; 
    MAIN.style.backgroundImage = "linear-gradient( to bottom, "+ JASON[CLICKEDNO].colour +", rgb(20,20,20) 55%"; 

    if(window.screen.width<=430){
        MAIN.style.backgroundImage = "linear-gradient( to bottom, "+ JASON[CLICKEDNO].colour +", rgb(20,20,20) 40%"; 
    }

    
    let songsLength = JASON[CLICKEDNO].songs.length; 
    let rownumber = "one";
    for(i=0;i<songsLength; i++){

        let row=document.createElement("div"); 
        row.className += "ROW"; 
        row.id +="ROW"+i;   
        SONGLIST.appendChild(row);

        let number = document.createElement("div"); 
        number.className += "number List"; 
        number.id ="number"+i;
        number.innerHTML = i+1;
        row.appendChild(number);
        
        let newDiv = document.createElement("div"); 
        newDiv.className += "newDiv List"; 
        row.appendChild(newDiv); 

        let smallDiv = document.createElement("div"); 
        smallDiv.className += "smallDiv List"; 
        smallDiv.id = "smallDiv"+i;
        newDiv.appendChild(smallDiv); 

        let songPicture = document.createElement("img"); 
        songPicture.className += "songPicture List"; 
        songPicture.setAttribute("src", JASON[CLICKEDNO].songs[i][1]); 
        smallDiv.appendChild(songPicture); 

        let newTogDiv = document.createElement("div"); 
        newTogDiv.className += "newTogDiv List"; 
        smallDiv.appendChild(newTogDiv); 

        


        let title = document.createElement("div"); 
        title.className += "TITLE List"; 
        title.innerHTML = JASON[CLICKEDNO].songs[i][0]; 
        newTogDiv.appendChild(title);

        
        let  artistName = document.createElement("div"); 
        artistName.className += "artistName List"; 
        artistName.innerHTML = JASON[CLICKEDNO].songs[i][2]; 
        newTogDiv.appendChild(artistName);

        let ALBUM = document.createElement("div"); 
        ALBUM.className += "ALBUM List"; 
        ALBUM.innerHTML = JASON[CLICKEDNO].songs[i][3]; 
        row.appendChild(ALBUM);
        
        let DATE = document.createElement("div"); 
        DATE.className += "DATE List"; 
        DATE.innerHTML = JASON[CLICKEDNO].songs[i][4]; 
        row.appendChild(DATE);

        let DURATION = document.createElement("div"); 
        DURATION.className += "DURATION List"; 
        DURATION.innerHTML = JASON[CLICKEDNO].songs[i][5];
        row.appendChild(DURATION);

        let asd = "ROW"+i; 
        let asf = "number"+i;

        let ROW = document.getElementById(asd); 
        ROW.addEventListener("mouseover", ()=>{
            let number = document.getElementById(asf); 
            actualNo = number.innerHTML ; 
             number.innerHTML = "&#9658";

             let likedButton = document.createElement("img"); 
             likedButton.className += "likedButton"; 
             likedButton.id = "likedButton"+actualNo ;
             likedButton.setAttribute("src", "assets/liked.png"); 
             DURATION.appendChild(likedButton); 


        })

        ROW.addEventListener("click",()=>{

            
            
            let number=document.getElementById(asf); 
            number.innerHTML = actualNo; 
            no =actualNo-1;

            let audioSource = document.createElement("audio"); 
            audioSource.id="ID"; 

        if((((!isPlaying) && (currentPlaying!=no))) || ((isPlaying) && (currentPlaying!=no)))
            {
            currentPlaying = no;
            isPlaying = true;
            let playingDiv = document.getElementById("PLAYINGS"); 
            playingDiv.innerHTML = "";


            let dividends = document.createElement("div"); 
            dividends.className += "dividends";
            playingDiv.appendChild(dividends); 


            let everyDiv = document.getElementById("smallDiv"+no).cloneNode(true); 
            dividends.appendChild(everyDiv); 

            let audioSource = document.createElement("audio"); 
            audioSource.id="ID"; 
            audioSource.autoplay = "true";
            audioSource.controls = "controls";
            audioSource.src=JASON[CLICKEDNO].songs[no][6]; 
            playingDiv.appendChild(audioSource); 

           
            audioSource.addEventListener("ended", ()=>{
            
            no +=1;
            audioSource.pause(); 
            audioSource.src = JASON[CLICKEDNO].songs[no][6];
            audioSource.play();

            
            dividends.innerHTML = ""; 
            let songDescripDiv = document.getElementById("smallDiv"+no).cloneNode(true);
            dividends.appendChild(songDescripDiv); 



               // audioSource.removeChild(sourceDiv); 

            let sourceDiv = document.createElement("source");             
            sourceDiv.setAttribute("src",JASON[CLICKEDNO].songs[no+1][6] );

                //sourceDiv.setAttribute("src", JASON[CLICKEDNO].songs[no+1][6]);
            }, false)
        
            let controlsDiv = document.createElement("img"); 
            controlsDiv.src = "assets/bottomRightControls.png";
            controlsDiv.className += "controlsDiv"; 
            playingDiv.appendChild(controlsDiv);
        }



            else if((isPlaying) && (currentPlaying == no))
            {
                let ID = document.getElementById("ID");
                ID.pause();

                isPlaying=false;
            }

            else if((!isPlaying) && (currentPlaying ==no)){
                let ID = document.getElementById("ID"); 
                ID.play();

                isPlaying=true;

            }



        })



        ROW.addEventListener("mouseout",()=>{
            let number = document.getElementById(asf); 
            number.innerHTML = actualNo;
            
            let address = "likedButton"+actualNo;
            let theButton = document.getElementById(address); 
            theButton.remove();



        } )


        }

        window.addEventListener("unload", ()=>{
            sessionStorage.setItem("back", "1"); 
            sessionStorage.setItem("songPlaylist", JASON[CLICKEDNO].songs)
            sessionStorage.setItem("songCurrentPosition", audioSource.getCurrentPosition); 
            sessionStorage.setItem("songNumber", no); 
        })

        

        
    }





