const playlists=["all out 2010s", "Life Sucks", "Best of the Decade For You", "Warm Fuzzy Feeling", "ALone Again","Sad Songs", "Sad Covers", "Soft 10s"]; 
const coders = ["one", "two", "three", "four", "five", "six", "seven", "eight"]; 
const playlist=
[{
    "name": "All out 2010s", 
    "code": "one",
    "img" : "https://i.scdn.co/image/ab67706c0000bebb4ad046fedafcba6e73f2f9c7", 
    "colour": "white",
    "songs": [
        ["Hello", "https://pics.filmaffinity.com/Adele_Hello_Music_Video-938814499-mmed.jpg", "Adele", "Hello", "20 days ago", "4:56"],
        ["Sorry", "https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_-_Sorry_%28Official_Single_Cover%29.png", "Justin Beiber", "Sorry", "20 days ago", "3:21"], 
        ["Thinking out Loud", "https://i.scdn.co/image/ab67616d0000b273d08209944468440145f01524", "Ed Sheeran", "x(Wembley Edition)", "20 days ago", "4:42"],
        ["One Last Time","https://www.youredm.com/wp-content/uploads/2015/08/artworks-000126882907-f9rwaq-t500x500.jpg", "Ariane Grande", "My Everything(Deluxe)", "20 days ago", "3:17"], 
        ["Stay With Me", "https://i.scdn.co/image/ab67616d0000b273b11bdc91cb9ac6b14f5c1dae", "Sam Smith", "In the Lonely Hour", "20 days ago", "2:53"]
    ]
},
 {
    "name": "Life Sucks", 
    "code":"two",
    "img": "https://i.scdn.co/image/ab67616d0000b273c9a43c60eea6a5ceca3f26c3", 
    "colour":"rgb(125, 56, 26)",
    "songs":[
        ["Say You Wont Let Go","https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg", "James Arthur", "Back From the Edge", "17 Sept, 2020", "3:31"], 
        ["Happier", "https://images.genius.com/9bcaf1be8df528ba0585e13fecf9b890.1000x1000x1.png", "Ed Sheeran", "÷(Deluxe)", "17 Sept, 2020", "3:28"],
        ["You Are the Reason","https://images.genius.com/18d085937f2d2f9c7031745954984ef6.1000x1000x1.jpg", "Calum Scott", "Only Human(Deluxe)", "17 Sept 2020", "3:24"], 
        ["Little Things","https://images.genius.com/0732e49c11b4054c36a2ba9a8b186c65.1000x1000x1.jpg", "One Direction", "Take Me Home", "17 Sept 2020", "3:40"], 
        ["When We Were Young", "https://i.scdn.co/image/ab67616d0000b273e4c2f81f26b3357015d65b82", "Adele", "25", "17 Sept, 2020", "4:51"]
    ]
},
{
    "name": "Best of the Decade for You", 
    "code":"three",
    "img": "https://th.bing.com/th/id/OIP.ZvuzgvpAgg1AQHRcdET2fwAAAA?w=176&h=180&c=7&r=0&o=5&pid=1.7", 
    "colour":"rgb(241, 55, 165)", 
    "songs":[
        ["Say You Wont Let Go","https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg", "James Arthur", "Back From the Edge", "17 Sept, 2020", "3:31"],  
        ["A Thousand Years","https://upload.wikimedia.org/wikipedia/en/8/8f/AThousand_Years.jpg", "Christina Perri", "The Twilight Saga", "Dec 3, 2019", "4:45"], 
        ["Dancing on My Own", "https://cdns-images.dzcdn.net/images/cover/afba3ab4a93cfdcd4357a51868904da3/350x350.jpg", "Calum Scott", "Only Human", "Dec 3, 2019", "4:20"],
        ["All of Me","https://i1.sndcdn.com/artworks-000079002780-ojrjc0-t500x500.jpg", "John Legend", "Love In the Future", "Dec 3, 2019", "4:30"], 
        ["Say Something","https://i.scdn.co/image/ab67616d0000b273554488d0c51967b1654d8ce5", "A Great Big World, Christina Aguilera", "Is there Anybody Out There", "Dec 3, 2019", "3:49"], 
        ["Story of My Life", "https://i1.sndcdn.com/artworks-000190242652-g1z8sl-t500x500.jpg", "One Direction", "Midnight Memories", "Dec 3, 2019", "4:06"]
    ]
}, 
{
    "name": "Warm Fuzzy Feelings", 
    "code":"four",
    "img": "https://th.bing.com/th/id/OIP.U659niYikC3-wel-M6a86AAAAA?w=187&h=187&c=7&r=0&o=5&dpr=2&pid=1.7", 
    "colour":"rgb(43, 71, 85)", 
    "songs":[
        ["This Town", "https://images.genius.com/0af9d876b098a7c70f18290ad93b2ccb.1000x1000x1.jpg", "Niall Horan", "Flicker", "Aug 5, 2020", "3:52"],
        ["A Thousand Years","https://upload.wikimedia.org/wikipedia/en/8/8f/AThousand_Years.jpg", "Christina Perri", "The Twilight Saga", "Dec 3, 2019", "4:45"], 
        ["Photograph","https://i.scdn.co/image/ab67616d0000b273d08209944468440145f01524", "Ed Sheeran", "x(Deluxe)", "Aug 5, 2020", "4:18"], 
        ["Little Things","https://images.genius.com/0732e49c11b4054c36a2ba9a8b186c65.1000x1000x1.jpg", "One Direction", "Take Me Home", "17 Sept 2020", "3:40"], 
        ["Falling Like the Stars","https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Fallinglikethestars.jpg/220px-Fallinglikethestars.jpg", "James Arthur", "You", "17 Sept,2020", "3:32"], 
        ["Kiss Me", "https://m.media-amazon.com/images/I/91Fu9FD9fYL._SL1425_.jpg", "Ed Sheeran", "+(Deluxe)", "Sept 17, 2020", "4:40"], 
        
    ]
}, 
{
    "name": "Alone Again", 
    "code":"five",
    "img": "https://th.bing.com/th/id/OIP.cpLcuSk9wNpqZZ8y0N3rwQHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7", 
    "colour":"rgb(134, 154, 179)",
    "songs":[
        ["Happier", "https://images.genius.com/9bcaf1be8df528ba0585e13fecf9b890.1000x1000x1.png", "Ed Sheeran", "÷(Deluxe)", "17 Sept, 2020", "3:28"], 
        ["Can i Be Him", "https://cdns-images.dzcdn.net/images/cover/6ea183258031dd17afb3706a903d5900/500x500.jpg", "James Arthur", "Back From thre Edge", "April 23, 2021", "4:07"],
        ["Never Be alone", "https://static.wikia.nocookie.net/shawnmendes/images/0/00/Handwritten_Deluxe.jpg/revision/latest?cb=20150905171258", "Shawn Mendes", "Handwritten", "April 23, 2021", "3:36"],
        ["Too Good At Goodbyes", "https://m.media-amazon.com/images/I/81jJx8ZFm9L._SS500_.jpg", "Sam Smith", "The Thrill Of It All", "April 23, 2021", "3:21"],
        ["Say Something","https://i.scdn.co/image/ab67616d0000b273554488d0c51967b1654d8ce5", "A Great Big World, Christina Aguilera", "Is there Anybody Out There", "April 23, 2021", "3:49"],  
        ["Jealous", "https://i.pinimg.com/originals/76/34/e1/7634e14884b41fc1da71c26c44958ee4.jpg", "Labrinth", "Jealous", "April 23, 2021", "4:48"]
    ]
}, 
{
    "name": "Soft 10s", 
    "code":"six",
    "img": "https://i.scdn.co/image/ab67706f000000031995e4315e3eab467eb734d2", 
    "colour":"rgb(175, 169, 203)",
    "songs":[
        ["When We Were Young", "https://i.scdn.co/image/ab67616d0000b273e4c2f81f26b3357015d65b82", "Adele", "25", "17 Sept, 2020", "4:51"], 
        ["All of Me","https://i1.sndcdn.com/artworks-000079002780-ojrjc0-t500x500.jpg", "John Legend", "Love In the Future", "Dec 3, 2019", "4:30"],  
        ["When You Love Someone", "https://m.media-amazon.com/images/I/71Nywdi57pL._SS500_.jpg", "James TW", "First Impressions", "Dec 3, 2019", "3:36"],
        ["Say You Wont Let Go","https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg", "James Arthur", "Back From the Edge", "17 Sept, 2020", "3:31"],   
        ["Happier", "https://images.genius.com/9bcaf1be8df528ba0585e13fecf9b890.1000x1000x1.png", "Ed Sheeran", "÷(Deluxe)", "17 Sept, 2020", "3:28"],
        ["This Town", "https://images.genius.com/0af9d876b098a7c70f18290ad93b2ccb.1000x1000x1.jpg", "Niall Horan", "Flicker", "Aug 5, 2020", "3:52"]
    ]
}, 
{
    "name": "Sad Covers", 
    "code":"seven",
    "img": "https://i.scdn.co/image/ab67706f00000003df7e498bfc071eafd143995e", 
    "colour":"rgb(108, 80, 70)",
    "songs":[
        ["Call Out My Name", "https://www.whosampled.com/static/track_images_200/lr129799_2018104_17152267642.jpg", "Nef Medina", "All Acoustic", "12 Nov, 2021", "4:53"],
        ["The Scientists", "https://i.scdn.co/image/ab67616d0000b273f279e8ac41d77cd17826f9f9", "Beth", "The Scientist", "12 Nov, 2021", "3:27"], 
        ["Back For Good", "https://s.mxmcdn.net/images-storage/albums5/3/5/8/7/9/6/54697853_500_500.jpg", "The Mayries", "Back For Good", "12 Nov, 2021", "3:15"],
        ["Drivers License", "https://i.scdn.co/image/ab67616d0000b27351da9e1d5a4960e98c22515a", "Thomas Daniel", "drivers license", "12 Nov, 2021", "4:06"],
        ["Wake me up", "https://cdns-images.dzcdn.net/images/cover/42186a7155afd681312db7563246a94a/264x264.jpg", "Roses and Frey", "Wake me Up", "12 Nov, 2021", "3:17"],
        ["Bad Liar", "https://cdns-images.dzcdn.net/images/cover/42186a7155afd681312db7563246a94a/264x264.jpg", "Roses and Frey", "Bad Liar", "12 Nov, 2021", "3:47"]
    ]
}, 
{
    "name": "Country Kind Of Love", 
    "code":"eight",
    "img": "https://i.scdn.co/image/ab67706f000000031416f67f937b9ee33b3753e2", 
    "colour":"rgb(113, 168, 222)",
    "songs":[
        ["Closer To You", "https://i.scdn.co/image/ab67616d0000b2736d66467f90a58d06c5bf70e1", "Carly Pearce", "Carly Pearce", "Jul 20, 2021", "3:07"],
        ["10,000 Hours", "https://upload.wikimedia.org/wikipedia/commons/b/bf/Dan_%2B_Shay_and_Justin_Bieber_-_10%2C000_Hours.png", "Dan + Shay, Justin Beiber", "10,000 Hours(with Justin Beiber)", "Jul 20, 2021", "2:48"],
        ["You Got Me", "https://i1.sndcdn.com/artworks-000378817080-qhi9d1-t500x500.jpg", "Olivia Lane", "You Got Me", "Jul 20, 2021", "3:21"],
        ["Ocean", "https://upload.wikimedia.org/wikipedia/en/a/a6/LadyAntebellumOcean.jpg", "Lady A", "Ocean", "Jul 20, 2021", "3:30"],
        ["You Did", "https://images.genius.com/ece87659cda44b34c3c4aaa3087f3018.1000x1000x1.jpg", "Renee Blair", "You Did", "Sep 24, 2021", "3:25"], 
        ["Speechless", "https://upload.wikimedia.org/wikipedia/en/c/c2/Dan_shay_self_titled.jpg", "Dan + Shay", "Dan + Shay", "Jul 20, 2021", "3:33"]
    ]
}
]; 

let clickered = 0;

initialise(); 

function initialise(){
    const container = document.getElementById("containers");
    for(i=0;i<playlist.length; i++){

        let codesey = playlist[i].code;

        let Playlist = document.createElement("div"); 
        Playlist.className += "Playlist "+codesey;
        Playlist.id="Playlist"+i; 
        //Playlist.innerHTML += "<h1 class='songName>"+ playlist[i].name + " <img src = "+ playlist[i].img +"></h1> "; 
        container.appendChild(Playlist);  

        let image= document.createElement("img"); 
        image.className += "IImage"; 
        image.setAttribute("src", playlist[i].img ); 
        Playlist.appendChild(image);

        let name=document.createElement("div"); 
        name.className +="Name"; 
        name.innerHTML = playlist[i].name; 
        Playlist.appendChild(name); 


        Playlist.addEventListener('click', ()=>{
            let clickedName = Playlist.className.substring(9);
            for(let loop=0; loop<coders.length; loop++){
                if(clickedName == coders[loop])
                    clickered=loop;    
            }
            afterClicked(); 
        })

        Playlist.addEventListener('mouseover', ()=>{
            let playlistNo = parseInt(Playlist.id.substring(8));
            let bgColor = document.getElementById("backgroundCol"); 
           bgColor.style.backgroundImage = "linear-gradient( to bottom, "+ playlist[playlistNo].colour +", rgb(20,20,20) 33%)";
        
            //bgColor.style.transition = '"background-image", "linear-gradient( to bottom, "+ playlist[playlistNo].colour +", rgb(20,20,20) 55%)"';
        })


    }




}

function afterClicked(){
    sessionStorage.setItem("clicked", clickered); 
    sessionStorage.setItem("codeName", 3);  
    let stringys = JSON.stringify(playlist); 
    sessionStorage.setItem('Jason', stringys); 
    window.open("songPage.html", "_self");  
    

}