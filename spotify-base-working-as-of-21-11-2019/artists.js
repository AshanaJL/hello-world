let codesy= ["one", "two", "three", "four", "five", "six"];
const artists=
[{
    "name": "This is Ed Sheeran", 
    "code":"one", 
    "abt": "Listen to new album =, alongside all his biggest hits.", 
    "img" : "https://i.scdn.co/image/ab67706f000000030373b03502fba84b91dac8e8", 
    "colour": "rgb(182, 221, 197)",
    "songs": [
        ["Shivers","https://upload.wikimedia.org/wikipedia/en/b/b0/Ed_Sheeran_-_Shivers.png",  "Ed Sheeran", "Shivers", "18 days ago", "3:28", "assets/songs/edSheeran/Shivers.mp3"], 
        ["Tides","https://upload.wikimedia.org/wikipedia/en/c/cd/Ed_Sheeran_-_Equals.png", "Ed Sheeran", "=","18 days ago", "3:16", "assets/songs/edSheeran/Tides.mp3"],  
        ["The A Team","https://qph.fs.quoracdn.net/main-qimg-ebe4fa820b90c7d5e92841099dbf9fd0-c", "Ed Sheeran", "+", "22 days ago", "4:18","assets/songs/edSheeran/theATeam.mp3"], 
        ["Sing","https://upload.wikimedia.org/wikipedia/en/a/ad/X_cover.png", "Ed Sheeran", "x(Deluxe Edition)", " 22 days ago", "3:55","assets/songs/edSheeran/Sing.mp3"], 
        ["Perfect","https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",  "Ed Sheeran", "Divide(Deluxe Edition)", "22 days ago", "4:23","assets/songs/edSheeran/Perfect.mp3"], 
        ["Photograph","https://upload.wikimedia.org/wikipedia/en/a/ad/X_cover.png", "Ed Sheeran", "x(Deluxe Edition)", "22 days ago", "4:19","assets/songs/edSheeran/Photograph.mp3"]
    ]
},
 {
    "name": "This is Shawn Mendes", 
    "code": "two", 
    "abt": "There's nothing holding the Mendes Army back", 
    "img": "https://i.scdn.co/image/ab67706f000000037988283d13d5654287988494", 
    "colour": "rgb(143, 175, 156)",
    "songs":[
        ["Stitches","https://upload.wikimedia.org/wikipedia/en/0/02/Shawn_Mendes_-_Handwritten.png", "Shawn Mendes", "Handwritten(deluxe)", "Aug 20,2021", "3:27","assets/songs/shawnMendes/Stitches.mp3"], 
        ["There's Nothing Holding Me Back", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KxMLkNGRGyWr9uSHjpPDw2HW5wEwyg0RYUb44OSlR110fY8hcVWcdIGGo96rM1UPRiM&usqp=CAU", "Shawn Mendes", "Illuminate(deluxe)", "Aug 20, 2021", "3:19","assets/songs/shawnMendes/theresNothingHoldingMeBack.mp3"], 
        ["Treat You Better", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KxMLkNGRGyWr9uSHjpPDw2HW5wEwyg0RYUb44OSlR110fY8hcVWcdIGGo96rM1UPRiM&usqp=CAU", "Shawn Mendes", "Illuminate(deluxe)", "Aug 20, 2021", "3:08"],"assets/songs/shawnMendes/treatYouBetter.mp3",
        ["Mercy","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KxMLkNGRGyWr9uSHjpPDw2HW5wEwyg0RYUb44OSlR110fY8hcVWcdIGGo96rM1UPRiM&usqp=CAU", "Shawn Mendes", "Illuminate(Deluxe)", "Aug 20, 2021", "3:28","assets/songs/shawnMendes/Mercy.mp3"], 
        ["In My Blood", "https://i.scdn.co/image/ab67616d0000b273269423eb6467e308c0fbce24", "Shawn Mendes", "Shawn Mendes", "Aug 20, 2021", "3:31","assets/songs/shawnMendes/inMyBlood.mp3"]
    ]
},
{
    "name": "This is James Arthur", 
    "code":"three",
    "abt":"All his biggest hits, all in one place", 
    "img": "https://i.scdn.co/image/ab67706f000000033075bbeef7ff4b37ada806ff", 
    "colour": "rgb(163, 114, 176)", 
    "songs":[
        ["Emily","https://cdn.smehost.net/sonymusicca-caprod/wp-content/uploads/2021/09/thumbnail_image001-1.jpeg", "James Arthur", "Emily", "Sep 24, 2021", "3:22"],  
        ["Naked", "https://upload.wikimedia.org/wikipedia/en/0/04/JamesArthurNaked.jpg", "James Arthur", "Naked", "Sep 24, 2021", "3:54"],
        ["Rewrite the Stars", "https://i1.sndcdn.com/artworks-000441048480-ytrohu-t500x500.jpg", "James Arthur", "THe Greatest Showman", "Sep 24, 2021", "3:38"],
        ["Can I Be Him", "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Can_I_Be_Him.jpg/220px-Can_I_Be_Him.jpg", "James Arthur", "Back From The Edge", "Sep 24, 2021", "4:07"], 
        ["Train Wreck", "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Can_I_Be_Him.jpg/220px-Can_I_Be_Him.jpg", "James  Arthur", "Back From The Edge", "Sep 24, 2021", "3:29"], 
        ["Empty Space", "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/EmptySpaceJamesArthur.png/220px-EmptySpaceJamesArthur.png", "James Arthur", "Empty Space", "Sep 24, 2021", "3:34"] 
    ]
}, 
{
    "name": "This is Niall Horan", 
    "code":"four",
    "abt": "This is Niall Horan. Best tracks all in one place", 
    "img": "https://i.scdn.co/image/ab67706f000000033ae5ae7b727b324d48fb7bfd", 
    "colour":"rgb(178, 220, 200)", 
    "songs":[
        ["Black And White","https://upload.wikimedia.org/wikipedia/en/2/2e/Niall_Horan_-_Heartbreak_Weather.png", "Niall Horan", "Heartbreak Weather", "July 5 2021", "3:13" ], 
        ["This Town", "https://upload.wikimedia.org/wikipedia/en/b/b2/Niall_Horan_Flicker.png", "Niall Horan", "Flicker", "July 5 2021","3:52"],
        ["Put A Little Love On Me", "https://upload.wikimedia.org/wikipedia/en/2/2e/Niall_Horan_-_Heartbreak_Weather.png", "Niall Horan", "Heartbreak Weather", "July 5 2021", "3:44"],
        ["No Judgement", "https://upload.wikimedia.org/wikipedia/en/2/2e/Niall_Horan_-_Heartbreak_Weather.png", "Niall Horan", "Heartbreak Weather", "July 5 2021", "2:56"], 
        ["What A Time",  "https://i.scdn.co/image/ab67616d0000b2737e706949994bcef39b09da4e", "Julia Michaels, Niall Horan", "Inner Monologue part 1", "July 5 2021", "2:53"], 
        ["On The Loose",  "https://upload.wikimedia.org/wikipedia/en/b/b2/Niall_Horan_Flicker.png", "Niall Horan", "Flicker", "July 5 2021", "3:43"]
    ]
},
{
    "name": "This is Harry Styles", 
    "code": "five",
    "abt": " Tastes like strawberries on a summer evening.... ",
    "img": "https://thisis-images.scdn.co/37i9dQZF1DZ06evO3ZsXzq-large.jpg", 
    "colour":"rgb(128, 206, 200)",
    "songs":[
        ["Watermelon Sugar", "https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png", "Harry Styles", "Fine Line", "August 23, 2019", "2:54"],
        ["Sign of the Times", "https://upload.wikimedia.org/wikipedia/en/e/e2/Harry_Styles_-_Sign_of_the_Times_%28Official_Single_Cover%29.png", "Harry Styles", "Harry Styles", "August 23, 2019", "5:40"], 
        ["Falling", "https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png", "Harry Styles", "Fine Line", "August 23, 2019", "4:00"],
        ["Adore You", "https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png", "Harry Styles", "Fine Line", "August 23, 2019", "3:27"], 
        ["Lights Up", "https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png", "Harry Styles", "Fine Line", "August 23, 2019", "2:52"],
        ["She",  "https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png", "Harry Styles", "Fine Line", "August 23, 2019", "6:03"]
    ]
}, 
{
    "name": "This is Adele", 
    "code":"six",
    "abt": " New music as it arrives, alongside all her biggest hits ",
    "img": "https://i.scdn.co/image/ab67706f0000000357246dfa8cbe38a322eca769", 
    "colour":"rgb(208, 62, 147)",
    "songs":[
        ["When We Were Young","https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png", "Adele", "25", "Oct 14, 2021", "4:51"], 
        ["Someone Like You", "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Adele_-_21.png/220px-Adele_-_21.png", "Adele", "21", "Oct 14, 2021", "4:45"], 
        ["Hello","https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png", "Adele", "25", "Oct 14, 2021", "4:56"],  
        ["All I Ask", "https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png", "Adele", "25", "Oct 14, 2021", "4:32"],
        ["Skyfall", "https://upload.wikimedia.org/wikipedia/en/4/45/Skyfall_cover.png", "Adele", "Skyfall", "Oct 14, 2021", "4:56"],
        ["Million Years Ago", "https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png", "Adele", "25", "Oct 14, 2021", "3:47"]
    ]
},
];

let clickedey=0;

initialise(); 

function initialise(){
    const container = document.getElementById("artistsCont");
    for(i=0;i<(playlist.length - 1); i++){
        let codey=artists[i].code;

        let Artistey = document.createElement("div"); 
        Artistey.id = "Artistey"+i;
        Artistey.className += "Artist "+ codey;
        container.appendChild(Artistey);  

        let imagey= document.createElement("img"); 
        imagey.className += "Face"; 
        imagey.setAttribute("src", artists[i].img ); 
        Artistey.appendChild(imagey);

        let descDiv = document.createElement("div"); 
        descDiv.className = "descDiv"; 
        Artistey.appendChild(descDiv);

        let namey=document.createElement("div"); 
        namey.className +="Name"; 
        namey.innerHTML = artists[i].name; 
        descDiv.appendChild(namey); 

        let abty=document.createElement("div"); 
        abty.className +="About"; 
        abty.innerHTML = artists[i].abt; 
        descDiv.appendChild(abty); 

        //onclick function 1197
        Artistey.addEventListener('click', ()=>{
            let nam = Artistey.className.substring(7); 
            for(let loop=0; loop<codesy.length; loop++){
                if(nam == codesy[loop])
                    clickedey=loop;    
            }
            afterClicky(); 
        })

        Artistey.addEventListener("mouseover", ()=>{
            let artistNo = parseInt(Artistey.id.substring(8)); 
            let bgColor= document.getElementById("backgroundCol"); 
            bgColor.style.backgroundImage = "linear-gradient( to bottom, "+ artists[artistNo].colour +", rgb(20,20,20) 33%)";
        })

    }
}

function afterClicky(){
    sessionStorage.setItem("clicked", clickedey); 
    sessionStorage.setItem("codeName", 3);  
    let stringyy = JSON.stringify(artists); 
    sessionStorage.setItem('Jason', stringyy); 
    window.open("songPage.html", "_self");  

}