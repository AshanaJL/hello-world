const codes =["one", "two"];
const trending=
[{
    "name": "Top 50 - Global", 
    "code": "one", 
    "abt": "Your daily updates of most trending songs", 
    "img": "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_large.jpg",
    "colour": "rgb(27, 109, 111)",
    "songs":[
     
["All Too Well", "https://images.genius.com/aac8ea3f13ae887a7f1fd9cdd451374e.1000x1000x1.png", "Taylor Swift", "Red(Taylor's Version", "1 hour ago", "10:13"], 
["Easy On Me", "https://images.genius.com/ef62c92b3e328a3a5b3ff2383eca6b6c.1000x1000x1.png", "Adele", "Easy On Me", "1 hour ago", "3:45"], 
["STAY(with Justin Beiber)", "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png/220px-The_Kid_Laroi_and_Justin_Bieber_-_Stay.png", "The Kid LAROI, Justin Beiber", "F*CK LOVE 3: OVER YOU", "1 hour ago", "2:22"], 
["INDUSTRY BABY(ft. Jack Harlow)", "https://i.pinimg.com/originals/93/a4/34/93a434c2dba64de0af215395cf6c0447.jpg", "Lil Nas X, Jack Harlow", "MONTERO", "1 hour ago", "3:32"], 
["Shivers", "https://upload.wikimedia.org/wikipedia/en/c/cd/Ed_Sheeran_-_Equals.png", "Ed Sheeran", "=", "1 hour ago", "3:28"], 
["Bad Habits", "https://upload.wikimedia.org/wikipedia/en/c/cd/Ed_Sheeran_-_Equals.png", "Ed Sheeran", "=", "1 hour ago", "3:51"], 
["MONEY", "https://static.wikia.nocookie.net/blinks/images/2/20/Lisa_Lalisa_digital_album_cover.jpeg/revision/latest/scale-to-width-down/350?cb=20210910040123", "LISA", "LALISA", "1 hour ago", "2:48"], 
["Red", "https://media.pitchfork.com/photos/618c3ab295b32339a9955837/1:1/w_320/Taylor-Swift-Red-Taylors-Version.jpeg", "Taylor Swift", "Red(Taylor's Version)", "1 hour ago", "3:43"], 
["good 4 u", "https://upload.wikimedia.org/wikipedia/en/b/b2/Olivia_Rodrigo_-_SOUR.png", "Olivia Rodrigo", "SOUR", "1 hour ago", "2:58"],
["All Too Well", "https://media.pitchfork.com/photos/618c3ab295b32339a9955837/1:1/w_320/Taylor-Swift-Red-Taylors-Version.jpeg", "Taylor Swift", "Red(Taylor's version)", "1 hour ago", "5:29"], 
["Blinding Lights", "https://images.genius.com/9d35a5dff10090e6c1d5e077932cea99.1000x1000x1.jpg", "The Weeknd", "After Hour", "1 hour ago", "3:20"]
    ]
}, 
{
    "name": "Viral 50 - India",
    "code": "two", 
    "abt": "Songs that India is grooving to ", 
    "img": "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_in_large.jpg", 
    "colour":"rgb(0, 97, 79)"
}, 
{
    "name": "Viral 50 - Global",
    "code": "three", 
    "abt": "Daily updates of the most viral tracks", 
    "img": "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_large.jpg", 
    "colour":"rgb(90, 66, 90)"
}
]; 

let clicked=0; 

initialise(); 

function initialise(){
    const container = document.getElementById("trendCont");
    for(i=0;i<(playlist.length); i++){

         let code = trending[i].code;

        let Artist = document.createElement("div"); 
        Artist.id = "Artist"+i;
        Artist.className += "Artist "+code;
        container.appendChild(Artist);  

        let image= document.createElement("img"); 
        image.className += "Face"; 
        image.setAttribute("src", trending[i].img ); 
        Artist.appendChild(image);

        let newDivs = document.createElement("div"); 
        newDivs.className +="descDiv"; 
        Artist.appendChild(newDivs); 

        let name=document.createElement("div"); 
        name.className +="Name "; 
        name.innerHTML = trending[i].name; 
        newDivs.appendChild(name); 

        let abt=document.createElement("div"); 
        abt.className +="About"; 
        abt.innerHTML = trending[i].abt; 
        newDivs.appendChild(abt); 


        //onclick function 
        Artist.addEventListener('click', ()=>{
            let nam = Artist.className.substring(7); 
            for(let loop=0; loop<codes.length; loop++){
                if(nam == codes[loop])
                    clicked=loop;    
            }
            afterClick(); 
        })

        Artist.addEventListener("mouseover",()=>{
            let artNo = parseInt(Artist.id.substring(6)); 
            let bgColor = document.getElementById("backgroundCol");
            bgColor.style.backgroundImage = "linear-gradient( to bottom, "+ trending[artNo].colour +", rgb(20,20,20) 33%)";
        
        })
    }
}

function afterClick(){
    sessionStorage.setItem("clicked", clicked); 
    sessionStorage.setItem("codeName", 3);  
    let stringy = JSON.stringify(trending); 
    sessionStorage.setItem('Jason', stringy); 
    window.open("songPage.html", "_self");  
    

}
