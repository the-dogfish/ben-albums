// Source - https://stackoverflow.com/a
// Posted by Sumon Sarker
// Retrieved 2025-12-26, License - CC BY-SA 3.0

var albumCollections = {
  
"00001":{"CollectionName": "Fruits and Veggies","AlbumNumbers": "289"},
"00002":{"CollectionName": "Take That & Co.","AlbumNumbers": "208,292,157"},
"00003":{"CollectionName": "The Beatles & Co.","AlbumNumbers": "293,294,295,296,297,298,299,300,301"},
"00004":{"CollectionName": "Lesser Known Recommendations","AlbumNumbers": "58,191,314,322,334,335"},
}

var albumsById = {
"00001":{"Name": "Eddie, Old Bob, Dick and Gary","Artist": "Tenpole Tudor","Date": "11/12/2025","Year": "1981","Genres": "Punk, New Wave","Score":"5.5","Stone":"0","Length": "35","bestSong": "Swords Of A Thousand Men","revisited":"N","imageName":"eddie, old bob, dick and gary.jpg","suggester": "","country": "England, Europe","description": "Swords of A Thousand Men' demonstrates that Tenpole Tudor can produce a great song, but the album doesn't have anything else close to that standard. The other singles just don't do it for me."},
"00002":{"Name": "Unreal Unearth: Unaired","Artist": "Hozier","Date": "11/12/2025","Year": "2023","Genres": "Indie, Folk, Soul, Rock","Score":"8.5","Stone":"0","Length": "88","bestSong": "Eat Your Young","revisited":"N","imageName":"unreal unearth.jpg","suggester": "Lucinda","country": "Ireland, Europe","description": "I like this a lot. Feel like I'd like it a bit more, though, if I were a lesbian. "},
"00003":{"Name": "London Calling","Artist": "The Clash(Mick Jones)","Date": "11/12/2025","Year": "1979","Genres": "Punk, Post Punk, New Wave","Score":"8","Stone":"16","Length": "65","bestSong": "London Calling","revisited":"N","imageName":"london calling.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "What a start! So many great songs to choose from, but enough forgettable ones, too. Cut the 19 down to 10 or so, and you've got a perfect album. "},
"00004":{"Name": "Short n' Sweet","Artist": "Sabrina Carpenter(Jack Antonoff)","Date": "12/12/2025","Year": "2024","Genres": "Pop","Score":"8.5","Stone":"0","Length": "36","bestSong": "Espresso","revisited":"Y","imageName":"short n sweet.png","suggester": "","country": "USA, North America","description": "So many excellent tracks - she definitely knows how to write a hook. I'm excited to look through her back catalogue."},
"00005":{"Name": "Various Positions","Artist": "Leonard Cohen","Date": "12/12/2025","Year": "1984","Genres": "Rock, Folk","Score":"8.5","Stone":"0","Length": "35","bestSong": "The Law","revisited":"N","imageName":"various positions.jpg","suggester": "","country": "Canada, North America","description": "I love the tone of this whole album. Cohen's original Hallelujah is almost as good as the version in Shrek 4. 'The Law' and 'Dance Me To The End of Love' are both brilliant."},
"00006":{"Name": "Combat Rock","Artist": "The Clash(Mick Jones)","Date": "12/12/2025","Year": "1982","Genres": "New Wave, Post Punk, Dub, Rock","Score":"7.5","Stone":"0","Length": "46","bestSong": "Rock the Casbah","revisited":"N","imageName":"combat rock.jpg","suggester": "","country": "England, Europe","description": "I feel the same way about Combat Rock as I did about London Calling. So many great tracks, but cutting a few out could make for a perfect album."},
"00007":{"Name": "Soviet Kitsch","Artist": "Regina Spektor","Date": "12/12/2025","Year": "2003","Genres": "Indie, Art Pop","Score":"2.5","Stone":"0","Length": "38","bestSong": "Us","revisited":"N","imageName":"soviet kitsch.jpg","suggester": "","country": "Russia, USA, North America","description": "I have a soft spot for 'Us' so thought I'd give the album a go. I couldn't see the appeal of the mindless repetition and drony singing. Hoping to like some of her other stuff more."},
"00008":{"Name": "Ramones","Artist": "Ramones","Date": "12/12/2025","Year": "1976","Genres": "Punk","Score":"6.5","Stone":"47","Length": "29","bestSong": "Blitzkrieg Bop","revisited":"N","imageName":"ramones.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The album carries the same energy as 'Blitzkrieg Bop', but doesn't match the hook. A fun listen, but nothing blew me away."},
"00009":{"Name": "The Good Witch","Artist": "Maisie Peters","Date": "13/12/2025","Year": "2023","Genres": "Pop, Rock","Score":"9.5","Stone":"0","Length": "47","bestSong": "Body Better","revisited":"Y","imageName":"the good witch.jpg","suggester": "","country": "England, Europe","description": "Catchy, referential, and sentimental. Jumps between fast and pop-y to slow and soft seamlessly. Near perfect for me."},
"00010":{"Name": "The Clearing","Artist": "Wolf Alice","Date": "13/12/2025","Year": "2025","Genres": "Indie, Rock","Score":"8","Stone":"0","Length": "40","bestSong": "Bloom Baby Bloom","revisited":"N","imageName":"the clearing.png","suggester": "Lucinda","country": "England, Europe","description": "I like it! Bloom Baby Bloom is such a good song, and the rest of the album does not disappoint!"},
"00011":{"Name": "You Don't Mess Around With Jim","Artist": "Jim Croce","Date": "13/12/2025","Year": "1972","Genres": "Folk, Rock, Blues","Score":"9","Stone":"0","Length": "33","bestSong": "New York's Not My Home","revisited":"N","imageName":"you don't mess around with jim.jpg","suggester": "","country": "USA, North America","description": "Expected to find my favourite to be one of the hits of the album, but 'New York's Not My Home' carries such emotion. Brilliant album which I will revisit often."},
"00012":{"Name": "Emails I Can't Send","Artist": "Sabrina Carpenter","Date": "13/12/2025","Year": "2022","Genres": "Pop","Score":"8","Stone":"0","Length": "39","bestSong": "Read Your Mind","revisited":"N","imageName":"emails I can't send.png","suggester": "","country": "USA, North America","description": "Not quite as hit-heavy as Short 'n Sweet, but feels much more honest. I love the intimate feel."},
"00013":{"Name": "Goodbye Yellow Brick Road","Artist": "Elton John","Date": "15/12/2025","Year": "1973","Genres": "Glam Rock, Pop, Rock","Score":"7.5","Stone":"112","Length": "76","bestSong": "Goodbye Yellow Brick Road","revisited":"N","imageName":"goodbye yellow brick road.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Incredible start - mediocre middle - gets going again briefly at the end - and then we just kind of trail off... still really good though!"},
"00014":{"Name": "Superorganism","Artist": "Superorganism","Date": "15/12/2025","Year": "2018","Genres": "Indie, Electronic, Art Pop","Score":"6.5","Stone":"0","Length": "33","bestSong": "Something for your M.I.N.D.","revisited":"N","imageName":"superorganism.jpg","suggester": "","country": "England, Europe","description": "Eclectic and fresh. You can tell what feeling they want you to feel, and they achieve that perfectly. Just a shame I don't enjoy feeling that discombobulated. "},
"00015":{"Name": "Soul Mining","Artist": "The The","Date": "15/12/2025","Year": "1983","Genres": "Post Punk, Synth Pop, New Wave","Score":"6","Stone":"0","Length": "41","bestSong": "This Is The Day","revisited":"N","imageName":"soul mining.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "This Is The Day' is as good as 'Giant' is too long. A song has to be better than that to earn 9 minutes and 30 seconds of my time. Otherwise, I like this."},
"00016":{"Name": "Electronic Earth","Artist": "Labrinth","Date": "16/12/2025","Year": "2012","Genres": "Dance Pop, Electronic, Dubstep, Hip-Hop, Pop","Score":"1.5","Stone":"0","Length": "43","bestSong": "Beneath Your Beautiful","revisited":"N","imageName":"electronic earth.jpg","suggester": "","country": "England, Europe","description": "We know he can sing, (and we know his ghostwriters are capable) due to 'Beneath Your Beautiful' but the rest of the album is just terrible. It does not help that there's a non-zero amount of dubstep."},
"00017":{"Name": "Cowboy Carter","Artist": "Beyonce","Date": "16/12/2025","Year": "2024","Genres": "Country, Pop, R&B, Blues","Score":"6.5","Stone":"0","Length": "78","bestSong": "TEXAS HOLD 'EM","revisited":"N","imageName":"cowboy carter.png","suggester": "","country": "USA, North America","description": "Some great tracks, and the features are well placed, Texas Hold 'Em has a great hook but I think the album is just a bit bloated. There could definitely have been a few cuts."},
"00018":{"Name": "Aretha Now","Artist": "Aretha Franklin","Date": "17/12/2025","Year": "1968","Genres": "Soul, R&B, Funk, Pop","Score":"7","Stone":"0","Length": "29","bestSong": "Think","revisited":"N","imageName":"aretha now.jpg","suggester": "","country": "USA, North America","description": "Possibly my favourite first track of any of the albums so far, and the quality doesn't dip much. Surprised to see this was her 13th album, more surprised to see she made it to 38."},
"00019":{"Name": "Melodrama","Artist": "Lorde(Jack Antonoff)","Date": "17/12/2025","Year": "2017","Genres": "Pop, Art Pop, Indie","Score":"9","Stone":"460","Length": "41","bestSong": "Liability","revisited":"Y","imageName":"melodrama.png","suggester": "Lucinda(1001 Albums You Must Hear Before You Die)","country": "New Zealand, Oceania","description": "I love this album for just how good 'Supercut' and 'Liability' are. Both excellently written songs, and the rest of the album accompany them perfectly."},
"00020":{"Name": "Crazymad, For Me","Artist": "CMAT","Date": "18/12/2025","Year": "2023","Genres": "Indie, Rock","Score":"7","Stone":"0","Length": "49","bestSong": "Where Are Your Kids Tonight","revisited":"N","imageName":"crazymad, for me.png","suggester": "","country": "Ireland, Europe","description": "It is good, but I expected to like this more given how much I like 'Stay For Something', and 'Where Are Your Kids Tonight?'. It had the same potential as Melodrama and didn't quite deliver."},
"00021":{"Name": "Parsley Sage Rosemary and Thyme","Artist": "Simon and Garfunkel(Paul Simon, Art Garfunkel)","Date": "18/12/2025","Year": "1966","Genres": "Folk, Pop, Rock","Score":"6","Stone":"0","Length": "28","bestSong": "Homeward Bound","revisited":"N","imageName":"parsley sage rosemary and thyme.jpg","suggester": "Lucinda(1001 Albums You Must Hear Before You Die)","country": "USA, North America","description": "I can appreciate the brilliance, but this didn't reach me personally. The whole album makes me feel a bit lonely?"},
"00022":{"Name": "Like a Prayer","Artist": "Madonna","Date": "19/12/2025","Year": "1989","Genres": "Pop, Rock, Dance Pop, Art Pop","Score":"6.5","Stone":"331","Length": "51","bestSong": "Like A Prayer","revisited":"N","imageName":"like a prayer.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Madonna has an infectious sound, made obvious by the title track. For me though, where this album really shines is at the end with two tracks about family which carry such emotion."},
"00023":{"Name": "The Who By Numbers","Artist": "The Who","Date": "19/12/2025","Year": "1975","Genres": "Rock","Score":"6","Stone":"0","Length": "37","bestSong": "Blue Red and Grey","revisited":"N","imageName":"the who by numbers.jpg","suggester": "","country": "England, Europe","description": "Blue Red and Grey' has long since been one of my favourite songs. I love the lyricism in some of this album, but I didn't feel moved in any significant capacity by the rest of the album"},
"00024":{"Name": "The Black Saint and The Sinner Lady","Artist": "Charles Mingus","Date": "19/12/2025","Year": "1963","Genres": "Jazz","Score":"6","Stone":"0","Length": "39","bestSong": "Track C - Group Dancers","revisited":"N","imageName":"the black saint and the sinner lady.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The busyness of this is so exciting, but I think I'd have to be in a very particular mood to really enjoy it. It's quite a challenging album, but maybe that's a good thing?"},
"00025":{"Name": "Big Band Bossa Nova","Artist": "Quincy Jones","Date": "19/12/2025","Year": "1962","Genres": "Jazz, Bossa Nova","Score":"8","Stone":"0","Length": "35","bestSong": "Soul Bossa Nova","revisited":"N","imageName":"big band bossa nova.png","suggester": "","country": "USA, North America","description": "Just a collection of excellent pieces. I really like bossa novas. Can't unsee naked austin powers in the hotel avoiding showing us his penis."},
"00026":{"Name": "Sports","Artist": "Huey Lewis and the News","Date": "20/12/2025","Year": "1983","Genres": "Pop, Rock, New Wave","Score":"6.5","Stone":"0","Length": "38","bestSong": "You Crack Me Up","revisited":"N","imageName":"sports.jpg","suggester": "","country": "USA, North America","description": "The whole album has a clear, crisp sound, and a new sheen of consummate professionalism that really gives the songs a big boost. He's been compared to Elvis Costello, but I think Huey has a far more bitter, cynical sense of humor.'"},
"00027":{"Name": "You Signed Up For This","Artist": "Maisie Peters","Date": "20/12/2025","Year": "2021","Genres": "Pop","Score":"10","Stone":"0","Length": "46","bestSong": "John Hughes Movie","revisited":"Y","imageName":"you signed up for this.jpg","suggester": "","country": "England, Europe","description": "Brilliant as always - every song is fantastic and could easily be one of my favourites by her depending on the day. In my opinion one of the best debut studio albums of all time!"},
"00028":{"Name": "Trying Season 2","Artist": "Maisie Peters","Date": "20/12/2025","Year": "2021","Genres": "Pop, Soundtrack","Score":"10","Stone":"0","Length": "26","bestSong": "Glowing Review","revisited":"Y","imageName":"trying.jpg","suggester": "","country": "England, Europe","description": "Not sure if it's because it's attached to a TV show, but this album tells a very clear story while still retaining the referential style of writing that Maisie Peters does so well. Probably my favourite work by her."},
"00029":{"Name": "Back To Black","Artist": "Amy Winehouse","Date": "21/12/2025","Year": "2006","Genres": "Soul, R&B, Jazz, Pop","Score":"9","Stone":"33","Length": "35","bestSong": "Rehab","revisited":"N","imageName":"back to black.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Just fantastic start to finish. One of the most emotional albums on this list, and one which works so much better the more you understand the context surrounding it."},
"00030":{"Name": "This is Big Audio Dynamite","Artist": "Big Audio Dynamite(Mick Jones)","Date": "21/12/2025","Year": "1985","Genres": "New Wave, Post Punk, Electronic, Dub, Hip-Hop","Score":"6.5","Stone":"0","Length": "43","bestSong": "E=MC2","revisited":"N","imageName":"this is b.a.d.jpg","suggester": "","country": "England, Europe","description": "A couple of really great songs, but feels a bit dated overall. Not sure it can justify most songs being about 5 minutes, and with one nearly 7 minutes long. The lyrics to 'Medicine Show' are really funny. "},
"00031":{"Name": "Long Live Love","Artist": "Kirk Franklin","Date": "21/12/2025","Year": "2019","Genres": "Gospel, Funk, Soul","Score":"7","Stone":"0","Length": "50","bestSong": "OK","revisited":"N","imageName":"long live love.jpg","suggester": "","country": "USA, North America","description": "Churchy, but still cool. Makes gospel sound flashy, with some really beautiful songs - especially 'OK' which elevates the album."},
"00032":{"Name": "Let Em Eat Bingo","Artist": "Beats International(Fatboy Slim)","Date": "21/12/2025","Year": "1990","Genres": "Electronic, House, Reggae, Dub, Hip-Hop","Score":"6","Stone":"0","Length": "49","bestSong": "For Spacious Lies","revisited":"N","imageName":"let 'em eat bingo.jpg","suggester": "","country": "England, Europe","description": "Forgettable, if not for 'For Spacious Lies'. There's a good sound, and Norman Cook clearly knows how to mix good music, but this album didn't make much of an impression."},
"00033":{"Name": "Pale Green Ghosts","Artist": "John Grant","Date": "22/12/2025","Year": "2013","Genres": "Indie, Folk","Score":"5","Stone":"0","Length": "61","bestSong": "GMF","revisited":"N","imageName":"pale green ghosts.jpg","suggester": "","country": "USA, North America","description": "GMF is one of my favourite songs, but the rest of the album just really didn't do it for me. I found a couple of the songs quite unpleasant."},
"00034":{"Name": "Thriller","Artist": "Michael Jackson","Date": "22/12/2025","Year": "1982","Genres": "Disco, Rock, Dance, Pop, R&B, Funk","Score":"7.5","Stone":"12","Length": "42","bestSong": "Thriller","revisited":"N","imageName":"thriller.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "While chock full of hits, I don't feel that Thriller massively flows as an album. Still, it's an excellent listen. Doesn't sit right with me that there's a song called 'Pretty Young Thing' all things considered."},
"00035":{"Name": "The Album","Artist": "Black Pink","Date": "22/12/2025","Year": "2020","Genres": "K-Pop, Pop, EDM, Electronic, Dance","Score":"4","Stone":"0","Length": "25","bestSong": "Crazy Over You","revisited":"N","imageName":"the album.png","suggester": "","country": "South Korea, Asia","description": "I'm not sure if any of these songs are really about anything. I can see the appeal of the heavy production style, but to me it's just too intense to be pleasant most of the time. Also, do they need to announce the name of the band in every song? I'm not that forgetful."},
"00036":{"Name": "The Fame Monster","Artist": "Lady Gaga","Date": "22/12/2025","Year": "2009","Genres": "Electropop, Pop, Dance Pop, Synth Pop","Score":"7","Stone":"0","Length": "34","bestSong": "Bad Romance","revisited":"N","imageName":"the fame monster.png","suggester": "","country": "USA, North America","description": "Doesn't overstay its welcome at all - I could see myself liking this a lot more if I listened to it again. "},
"00037":{"Name": "Californication","Artist": "The Red Hot Chilli Peppers","Date": "23/12/2025","Year": "1999","Genres": "Rock, Pop, Rock, Funk","Score":"7","Stone":"286","Length": "56","bestSong": "Californication","revisited":"N","imageName":"californication.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Californication (song) is obviously brilliant, but I was surprised by how nice some of the other melodies were - especially on Road Trippin'"},
"00038":{"Name": "A New World Record","Artist": "Electric Light Orchestra(ELO)","Date": "23/12/2025","Year": "1976","Genres": "Orchestral Pop, Pop, Rock","Score":"8","Stone":"0","Length": "36","bestSong": "Do Ya","revisited":"N","imageName":"a new world record.jpg","suggester": "Jacob","country": "England, Europe","description": "Classic! I've heard the two big hits so many times that I really enjoyed hearing some of the less popular tracks. Do Ya is a new favourite of mine."},
"00039":{"Name": "Face Value","Artist": "Phil Collins","Date": "23/12/2025","Year": "1981","Genres": "Pop, Rock, R&B, Art Rock, Soft Rock","Score":"6.5","Stone":"0","Length": "48","bestSong": "In The Air Tonight","revisited":"N","imageName":"face value.png","suggester": "Jacob","country": "England, Europe","description": "Starts extremely strong but never reaches the same heights again. I'd definitely like to listen to this one again, as I think I'd come away liking it a lot more."},
"00040":{"Name": "Random Access Memories","Artist": "Daft Punk","Date": "23/12/2025","Year": "2013","Genres": "Disco, Funk, Electronic, Pop, Dance, EDM","Score":"6.5","Stone":"295","Length": "75","bestSong": "Giorgio by Moroder","revisited":"N","imageName":"random access memories.png","suggester": "Jacob","country": "France, Europe","description": "I liked the album, a few hits, good features etc. Reading the story behind Giorgio by Moroder was really interesting - I love the idea behind that song, I'll be listening to one of his albums tomorrow."},
"00041":{"Name": "From Here to Eternity","Artist": "Giorgio Moroder","Date": "24/12/2025","Year": "1977","Genres": "Dance, Electronic","Score":"6.5","Stone":"0","Length": "31","bestSong": "From Here To Eternity","revisited":"N","imageName":"from here to eternity.jpg","suggester": "","country": "Italy, Europe","description": "Some poorly aged lyrics in 'First Hand Experience in Second Hand Love' but the sound is really cool. You can see how big of an influence this is on Daft Punk."},
"00042":{"Name": "Brat","Artist": "Charli XCX","Date": "24/12/2025","Year": "2024","Genres": "Indie, Dance, Electronic, Pop","Score":"8","Stone":"0","Length": "41","bestSong": "I Think About It All The Time","revisited":"Y","imageName":"brat.png","suggester": "Lucinda","country": "England, Europe","description": "I really wasn't connecting with the start of the album but as soon as we get to 'So, I' it shreds the tuneless repetitive thumping and we get some honest lyrics and excellent songwriting. I really like 'I Think About It All The Time'. "},
"00043":{"Name": "A Charlie Brown Christmas","Artist": "Vince Guaraldi Trio","Date": "24/12/2025","Year": "1965","Genres": "Jazz, Christmas, Soundtrack","Score":"6.5","Stone":"0","Length": "45","bestSong": "Linus and Lucy","revisited":"N","imageName":"a charlie brown christmas.jpg","suggester": "","country": "USA, North America","description": "Turns out Henry VIII didn't write Greensleeves. Nice Christmas music! The songs with lyrics are not very good - probably work better in the film."},
"00044":{"Name": "Man's Best Friend","Artist": "Sabrina Carpenter(Jack Antonoff)","Date": "26/12/2025","Year": "2025","Genres": "Soft Rock, Pop","Score":"9","Stone":"0","Length": "38","bestSong": "Nobody's Son","revisited":"N","imageName":"man's best friend.png","suggester": "","country": "USA, North America","description": "Every song has such a good hook that I can just listen to this album over and over again without getting bored. I think the lyrics being so sexual will lose potency if she does yet another album like this, but for now, it works."},
"00045":{"Name": "Live Through This","Artist": "Hole","Date": "27/12/2025","Year": "1994","Genres": "Punk, Rock, Grunge","Score":"7","Stone":"106","Length": "38","bestSong": "Rock Star (Olympia)","revisited":"N","imageName":"live through this.png","suggester": "Amelie","country": "USA, North America","description": "This is the closest I've come so far to enjoying grunge. Courtney Love's personality definitely comes through. I'm going to listen to more Hole soon, and then some Nirvana."},
"00046":{"Name": "In The Wee Small Hours","Artist": "Frank Sinatra","Date": "27/12/2025","Year": "1955","Genres": "Jazz, Ballad, Vocal Jazz, Traditional Pop","Score":"6.5","Stone":"282","Length": "50","bestSong": "Last Night When We Were Young","revisited":"N","imageName":"in the wee small hours.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Though the book would disagree, to me this is an easy listening album underpinned by lyrics both deeply sad, and casually cool. I like it, but I prefer Sinatra's finger-snapping stuff."},
"00047":{"Name": "Elvis Presley","Artist": "Elvis Presley","Date": "27/12/2025","Year": "1956","Genres": "Rock and Roll, Rockabilly","Score":"7.5","Stone":"332","Length": "28","bestSong": "Blue Suede Shoes","revisited":"N","imageName":"elvis presley.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Such an iconic album cover, and an iconic set of songs too. All good stuff!"},
"00048":{"Name": "Tragic Songs of Life","Artist": "The Louvin Brothers","Date": "27/12/2025","Year": "1956","Genres": "Country, Folk, Murder Ballads","Score":"7","Stone":"0","Length": "36","bestSong": "Knoxville Girl","revisited":"N","imageName":"tragic songs of life.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I've been really enjoying this kind of country sound recently, but mostly in newer stuff. It's nice to hear one of the old essential releases and to read a bit about their story. One brother was straight laced, but the other was not. He once survived being shot by his third wife. Not sure how I feel about murder ballads, but for now 'Knoxville Girl' is my favourite on the album."},
"00049":{"Name": "Nancy & Lee","Artist": "Nancy Sinatra and Lee Hazlewood","Date": "27/12/2025","Year": "1968","Genres": "Psychedelic, Country, Pop","Score":"8.5","Stone":"0","Length": "35","bestSong": "Summer Wine","revisited":"N","imageName":"nancy and lee.png","suggester": "","country": "USA, North America","description": "Every song is effective in its own right, so many good ideas here! This is a perfect pairing. Makes me laugh how every song ends with an uncomfortably long fade-out. I like the two bonus tracks not included in the original release."},
"00050":{"Name": "Volume One","Artist": "She & Him","Date": "28/12/2025","Year": "2008","Genres": "Indie, Country, Folk","Score":"7.5","Stone":"0","Length": "36","bestSong": "Sentimental Heart","revisited":"N","imageName":"she and him volume one.jpg","suggester": "","country": "USA, North America","description": "Pleasantly surprised! Zooey Deschanel clearly isn't just another actor dabbling in music as a hobby. Her personality comes through in her style of singing. This is really good easy listening for me. Good job team!"},
"00050":{"Name": "Volume One","Artist": "She & Him","Date": "28/12/2025","Year": "2008","Genres": "Indie, Country, Folk","Score":"7.5","Stone":"0","Length": "36","bestSong": "Sentimental Heart","revisited":"N","imageName":"she and him volume one.jpg","suggester": "","country": "USA, North America","description": "Pleasantly surprised! Zooey Deschanel clearly isn't just another actor dabbling in music as a hobby. Her personality comes through in her style of singing. This is really good easy listening for me. Good job team!"},
"00051":{"Name": "The Wildest","Artist": "Louis Prima","Date": "28/12/2025","Year": "1956","Genres": "Jazz, Vocal Jazz, Swing","Score":"8.5","Stone":"0","Length": "32","bestSong": "(I'll Be Glad When You're Dead) You Rascal You","revisited":"N","imageName":"the wildest.jpeg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "If (dubious casting practices put aside) your favourite jungle book song is 'I Wanna Be like You' then this is the album for you! There's a song about how much Loius hates some guy and wants him to die because he's greedy when they share pasta, a song about tricking your partner into paying for their own expensive banana split, and one about a potion made from goldfish legs that let's him play the trumpet. All acompanied by great instrumentation."},
"00052":{"Name": "Charm","Artist": "Clairo","Date": "28/12/2025","Year": "2024","Genres": "Soft Rock, Folk, Vocal Jazz, Soul, Pop","Score":"5.5","Stone":"0","Length": "38","bestSong": "Slow Dance","revisited":"N","imageName":"charm.png","suggester": "Maisie","country": "USA, North America","description": "Nothing particularly wrong with this album for me, but it just lacked any pizzazz. There wasn't anything that got my excited, or made me want to explore more by Clairo. I wouldn't be upset to hear it play in a lift or a supermarket though."},
"00053":{"Name": "This is Fats Domino!","Artist": "Fats Domino","Date": "28/12/2025","Year": "1956","Genres": "Rock and Roll, Rockabilly, R&B, Blues","Score":"7","Stone":"0","Length": "27","bestSong": "Blueberry Hill","revisited":"N","imageName":"this is fats domino.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "A hard one to find! The album is split up on music streaming services in strange ways. Consistent, sounds great, but doesn't reach the highs of the other rock and roll albums of this area. "},
"00054":{"Name": "I Against I","Artist": "Bad Brains","Date": "28/12/2025","Year": "1986","Genres": "Metal, Punk, Reggae, Funk Rock","Score":"5.5","Stone":"0","Length": "32","bestSong": "Let Me Help","revisited":"N","imageName":"I against I.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I liked it! but I think metal is a genre that will take some time to grow on me. The blend of genres in this album is excellent."},
"00055":{"Name": "The Sounds Of India","Artist": "Ravi Shankar","Date": "28/12/2025","Year": "1957","Genres": "Hindustani Classical, Indian Classical","Score":"7.5","Stone":"0","Length": "54","bestSong": "Bhimpalási","revisited":"N","imageName":"the sounds of india.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "India, Asia","description": "There's no better album to be my introduction to indian music, than one which begins with 'An Introduction to Indian Music'. As a western listener, the insight into the techniques in each song was massively appreciated. Excited to explore more of this."},
"00056":{"Name": "Stick Season","Artist": "Noah Kahan","Date": "29/12/2025","Year": "2022","Genres": "Folk, Indie","Score":"9","Stone":"0","Length": "55","bestSong": "Homesick","revisited":"N","imageName":"stick season.jpg","suggester": "Lucinda","country": "USA, North America","description": "Noah Kahan's witty lyrics, and electrifying banjo playing make this a fantastically energetic folk album, while carrying such emotion. His lyrics are charming."},
"00057":{"Name": "(What's the Story) Morning Glory?","Artist": "Oasis (Noel Gallagher, Liam Gallagher)","Date": "29/12/2025","Year": "1995","Genres": "Britpop, Rock","Score":"10","Stone":"0","Length": "50","bestSong": "Champagne Supernova","revisited":"N","imageName":"morning glory.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Every song has such granduer - the album feels like such an event, building to an epic conclusion in 'Champagne Supernova'. The whole thing is just exceptional."},
"00058":{"Name": "Aqualung","Artist": "Jethro Tull","Date": "29/12/2025","Year": "1971","Genres": "Folk, Rock","Score":"8.5","Stone":"0","Length": "43","bestSong": "Up To Me","revisited":"N","imageName":"aqualung.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "I love the way Jethro Tull structure songs in this album, Ian Anderson described the title track as episodic, which I think perfectly captures the way the tone, speed and style jumps around within one track. Other people hate the flute - I love it!"},
"00059":{"Name": "Paul Simon","Artist": "Paul Simon","Date": "31/12/2025","Year": "1972","Genres": "Folk, Rock, Pop","Score":"6.5","Stone":"0","Length": "34","bestSong": "Mother and Child Reunion","revisited":"N","imageName":"paul simon.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I liked it more than 'Parsely Sage Rosemary and Thyme' - maybe because the more upbeat, pop focus of this album sits a lot better with me. There's some beautiful songwriting here, and I especially like the first song."},
"00060":{"Name": "Tom Petty and The Heartbreakers","Artist": "Tom Petty and The Heartbreakers(Tom Petty)","Date": "31/12/2025","Year": "1976","Genres": "Rock and Roll","Score":"5.5","Stone":"0","Length": "31","bestSong": "American Girl","revisited":"N","imageName":"Tom Petty and The Heartbreakers.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Tom Petty described this album as 'eccentric' but I think this is actually one of the most agreeable, but unremarkable albums I've heard so far. It's a safe, pleasant 30 minutes but not much more."},
"00061":{"Name": "Crazy Rhythms","Artist": "The Feelies","Date": "31/12/2025","Year": "1980","Genres": "Art Pop, Post Punk, New Wave","Score":"7.5","Stone":"0","Length": "43","bestSong": "The Boy With Perpetual Nervousness","revisited":"N","imageName":"crazy rythms.jpg","suggester": "Dad","country": "USA, North America","description": "I think it's a great choice for this album to be mostly instrumental. There are some really good hooks, and some *crazy rhythms*."},
"00062":{"Name": "If You Can Believe Your Eyes and Ears","Artist": "The Mamas & The Papas (John Phillips, Cass Elliot, Michelle Phillips, Denny Doherty)","Date": "01/01/2026","Year": "1966","Genres": "Pop, Rock, Folk","Score":"7","Stone":"0","Length": "34","bestSong": "California Dreaming","revisited":"N","imageName":"if you can believe your eyes and ears.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Really good! Though I think I like Cass Elliot's solo stuff more! I'm really looking forward to exploring more from the Mamas and Papas together and individually."},
"00063":{"Name": "Kamergeheimen (Bedroom Secrets)","Artist": "Naks Kawina Loko","Date": "01/01/2026","Year": "2006","Genres": "Afrobeats, Kaseko, African Folk","Score":"7.5","Stone":"0","Length": "75","bestSong": "Mooi Uma","revisited":"N","imageName":"Kamergeheimen.jpg","suggester": "","country": "Suriname, Africa","description": "(Title is Afrikaans for 'bedroom secrets') I love the sound! Every song is different and they individually don't really drag. I think this style lends itself to a longer song. I think the album itself is a little longer than neccessary - the first 50 minutes are great, but the last 25 are too much for me."},
"00064":{"Name": "Group Sex","Artist": "Circle Jerks","Date": "01/01/2026","Year": "1980","Genres": "Hardcore Punk","Score":"6.5","Stone":"0","Length": "16","bestSong": "Paid Vacation","revisited":"N","imageName":"group sex.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Short, but not sweet (in a good way). One of my favourite things about this era of music is how many well written political / historical songs crop up (see Spanish Bombs). This album is no different, just packaged tighter and with more intensity."},
"00065":{"Name": "Protassha (Hope)","Artist": "Miles","Date": "02/01/2026","Year": "1993","Genres": "Bangla Rock, Pop, Rock, Folk","Score":"9","Stone":"0","Length": "40","bestSong": "Rimjhim Brishti Tey","revisited":"N","imageName":"prottasha.jpg","suggester": "","country": "Bangladesh, Asia","description": "Such a cool sound! I love every song here, but the thing really holding this album back is that every song is close to 5 minutes. I think they'd all work better at the 3 minute mark. Otherwise, fantastic."},
"00066":{"Name": "Tidal","Artist": "Fiona Apple","Date": "02/01/2026","Year": "1996","Genres": "Chamber Pop, Art Pop","Score":"5","Stone":"0","Length": "52","bestSong": "Sleep To Dream","revisited":"N","imageName":"tidal.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I don't think that this album has the gusto that it needs to be really good. The songs all feel a little underwritten and too subtle for their length and style. I like bits of it, but I just needed more."},
"00067":{"Name": "Clandestino","Artist": "Manu Chau","Date": "02/01/2026","Year": "1998","Genres": "Reggae, Latin Pop, Worldbeat, Pop","Score":"8.5","Stone":"0","Length": "46","bestSong": "Bongo Bong","revisited":"Y","imageName":"clandestino.jpg","suggester": "Jacob(1001 Albums You Must Hear Before You Die)","country": "France, Spain, Europe","description": "I love it! I like how much this album flows - really does feel like one cohesive work. So impressive how many languages this album has stuffed in. It all works!"},
"00068":{"Name": "Flight of the Conchords","Artist": "Flight of the Conchords","Date": "02/01/2026","Year": "2008","Genres": "Comedy, Rock, Soundtrack","Score":"9","Stone":"0","Length": "42","bestSong": "Boom","revisited":"N","imageName":"flight of the conchords.jpg","suggester": "","country": "New Zealand, Oceania","description": "So many really funny songs. The number of different musical styles explored is astounding. No skips! "},
"00069":{"Name": "My Beautiful Dark Twisted Fantasy","Artist": "Kanye West","Date": "03/01/2026","Year": "2010","Genres": "Rap, Hip-Hop","Score":"8","Stone":"17","Length": "68","bestSong": "Dark Fantasy","revisited":"N","imageName":"my beautiful dark twisted fantasy.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Such a complicated album to rate! Kanye West is just so awful for so many reasons. All that aside, this album has an incredible sound. The first three tracks are brilliant, and the whole album works. "},
"00070":{"Name": "Black Holes and Revelations","Artist": "Muse","Date": "03/01/2026","Year": "2006","Genres": "Rock","Score":"6","Stone":"0","Length": "50","bestSong": "Supermassive Black Hole","revisited":"N","imageName":"black holes and revelations.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Difficult to explain why, but I think a lot of these songs would be excellent on a soundtrack. They all feel like they deserve visual accompaniment. I like the album, especially the first three songs."},
"00071":{"Name": "Currents","Artist": "Tame Impala","Date": "03/01/2026","Year": "2015","Genres": "Psychedelic, Pop, Disco","Score":"7.5","Stone":"0","Length": "51","bestSong": "The Less I Know The Better","revisited":"N","imageName":"currents.png","suggester": "Lucinda(Jacob)","country": "Australia, Oceania","description": "Really cool, I love 'The Less I Know The Better'. The rest of the album is good - but in this genre I prefer something really energetic like Foster The People. This is an album I'm really close to loving, but just not quite."},
"00072":{"Name": "Impossible Princess","Artist": "Kylie Minogue","Date": "03/01/2026","Year": "1997","Genres": "Dance, Electronic, Pop","Score":"6","Stone":"0","Length": "49","bestSong": "Dreams","revisited":"N","imageName":"impossible princess.png","suggester": "","country": "Australia, Oceania","description": "To me this album is good, but never great. The whole thing feels like it's just missing a great single - without it, the album is fun but unremarkable."},
"00073":{"Name": "Fever","Artist": "Kylie Minogue","Date": "03/01/2026","Year": "2001","Genres": "Dance, Pop","Score":"7","Stone":"0","Length": "45","bestSong": "Can't Get You Out Of My Gead","revisited":"N","imageName":"fever.png","suggester": "","country": "Australia, Oceania","description": "This is what 'Impossible Princess' needed to be! It's more exciting, and has such a good lead single."},
"00074":{"Name": "Taylor Swift","Artist": "Taylor Swift","Date": "03/01/2026","Year": "2006","Genres": "Country","Score":"7","Stone":"0","Length": "53","bestSong": "Our Song","revisited":"N","imageName":"taylor swift.png","suggester": "","country": "USA, North America","description": "Taking the pickup truck to the christian hotdog eating x banjo playing competition' style country which I quite like! Good hooks, and consistent style."},
"00075":{"Name": "Fearless","Artist": "Taylor Swift","Date": "04/01/2026","Year": "2008","Genres": "Country, Pop","Score":"6.5","Stone":"0","Length": "54","bestSong": "You Belong With Me","revisited":"N","imageName":"fearless.png","suggester": "","country": "USA, North America","description": "I think leaning out of the country and into pop (but without committing) leads for a slightly blander album than her debut. Saying that, there are sufficient hits to make this a strong entry in her catalogue."},
"00076":{"Name": "Speak Now","Artist": "Taylor Swift","Date": "04/01/2026","Year": "2010","Genres": "Country, Pop, Rock","Score":"6.5","Stone":"0","Length": "67","bestSong": "Long Live","revisited":"N","imageName":"speak now.png","suggester": "","country": "USA, North America","description": "Generally, a better sound than her previous album. Committing properly to pop lets the hits hit. Slightly too long though I think! Cut a few songs and this album could be great."},
"00077":{"Name": "Red","Artist": "Taylor Swift(Max Martin)","Date": "04/01/2026","Year": "2012","Genres": "Country, Pop, Rock","Score":"7","Stone":"0","Length": "65","bestSong": "All Too Well","revisited":"N","imageName":"red.png","suggester": "","country": "USA, North America","description": "This is an improvement over her first three albums. Max Martin's influence is felt, and I think the hits of this album work better. There's a shift in the middle of the album that feels a little disjointed to me - but that's only a minor criticism."},
"00078":{"Name": "1989","Artist": "Taylor Swift(Max Martin,Jack Antonoff)","Date": "04/01/2026","Year": "2014","Genres": "Pop","Score":"8.5","Stone":"0","Length": "49","bestSong": "Style","revisited":"N","imageName":"1989.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Start to finish this works - just a flurry of hits. Ends at the right time too, which is an improvement over Speak Now and Red."},
"00079":{"Name": "Reputation","Artist": "Taylor Swift(Max Martin,Jack Antonoff)","Date": "04/01/2026","Year": "2017","Genres": "Pop, Electronic","Score":"8","Stone":"0","Length": "56","bestSong": "Getaway Car","revisited":"N","imageName":"reputation.png","suggester": "","country": "USA, North America","description": "Some cheesy lyrics on this one, that feel a bit mismatched with the planned tone but nevertheless it all sounds great and there are more than enough great tracks."},
"00080":{"Name": "Rattlesnakes","Artist": "Lloyd Cole and the Commotions","Date": "04/01/2026","Year": "1984","Genres": "Folk, Rock, Pop","Score":"5.5","Stone":"0","Length": "35","bestSong": "2cv","revisited":"N","imageName":"rattlesnakes.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "I like the variety in tone. There's enough shift between songs to keep things interesting, but this album never feels particularly special."},
"00081":{"Name": "First Two Pages of Frankenstein","Artist": "The National(Aaron Desner)","Date": "04/01/2026","Year": "2023","Genres": "Rock","Score":"6.5","Stone":"0","Length": "48","bestSong": "The Alcott","revisited":"Y","imageName":"first two pages of frankenstein.png","suggester": "Lucinda","country": "USA, North America","description": "The first time I listened to this album, it really didn't make much of an impression so I listened to it a second time. It has a very subtle presence which I like. It's definitely a late night album."},
"00082":{"Name": "The Art of Loving","Artist": "Oliva Dean","Date": "04/01/2026","Year": "2025","Genres": "R&B, Pop","Score":"8.5","Stone":"0","Length": "34","bestSong": "Let Alone The One You Love","revisited":"N","imageName":"the art of loving.png","suggester": "Lucinda(Jacob)","country": "England, Europe","description": "This album is the epitome of tender and intimate. A joy."},
"00083":{"Name": "It's Blitz!","Artist": "Yeah Yeah Yeahs","Date": "05/01/2026","Year": "2008","Genres": "Pop, Rock, Synth Pop","Score":"5","Stone":"0","Length": "42","bestSong": "Zero","revisited":"N","imageName":"it's blitz.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I read a comment that this 'feels like it’s cut from the same cloth as Florence + the Machine, but they used that cloth to make tight jumpsuits instead of flowy dresses'. I think that's a valid summary, I'd just add that it's flat, and undeserving of its exclamation mark in the title."},
"00084":{"Name": "Blood On The Tracks","Artist": "Bob Dylan","Date": "05/01/2026","Year": "1975","Genres": "Folk, Rock","Score":"8","Stone":"9","Length": "52","bestSong": "Lily, Rosemary and the Jack of Hearts","revisited":"N","imageName":"blood on the tracks.jpg","suggester": "Jacob(1001 Albums You Must Hear Before You Die)","country": "USA, North America","description": "Whole album is excellent - particularly lyrically. The storytelling in 'Lily, Rosemary and the Jack of Hearts' is masterful. "},
"00085":{"Name": "Torches","Artist": "Foster the People","Date": "05/01/2026","Year": "2011","Genres": "Indie, Pop, Synth Pop","Score":"9.5","Stone":"0","Length": "38","bestSong": "Waste","revisited":"N","imageName":"torches.jpg","suggester": "","country": "USA, North America","description": "So much energy in this album! Constantly exciting but never too busy or overproduced."},
"00086":{"Name": "Rumours","Artist": "Fleetwood Mac(Stevie Nicks)","Date": "05/01/2026","Year": "1977","Genres": "Pop, Rock, Blues, Art Pop","Score":"8.5","Stone":"7","Length": "39","bestSong": "The Chain","revisited":"N","imageName":"rumours.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe, USA, North America","description": "So good. Every track is good, but some just sit leagues above. It's interesting to read about each member of the band in this era. "},
"00087":{"Name": "Bella Donna","Artist": "Stevie Nicks(Tom Petty)","Date": "05/01/2026","Year": "1981","Genres": "Rock","Score":"8","Stone":"0","Length": "42","bestSong": "Edge of Seventeen","revisited":"N","imageName":"bella donna.png","suggester": "","country": "USA, North America","description": "There's a similar feel to Rumours here, but with a more youthful kick. I much prefer Tom Petty's work with Stevie over his first album with the Heartbreakers. "},
"00088":{"Name": "New Boots and Panties!!","Artist": "Ian Dury","Date": "05/01/2026","Year": "1977","Genres": "Punk, Cheeky Chappy Rock","Score":"8.5","Stone":"0","Length": "37","bestSong": "My Old Man","revisited":"N","imageName":"new boots and panties.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "So much to like here! The cheeky chappy vibe is great, but the more sentimental parts of the album (specifically the song to his deceased dad) really shine. "},
"00089":{"Name": "The Weatherman","Artist": "Gregory Alan Isakov","Date": "06/01/2026","Year": "2013","Genres": "Folk","Score":"5.5","Stone":"0","Length": "42","bestSong": "","revisited":"N","imageName":"the weatherman.jpg","suggester": "Lucinda","country": "USA, North America","description": "Some great lyrical excerpts but I think a lot of this album is unremarkable. When compared to something like Stick Season, this really doesn't hold up."},
"00090":{"Name": "Lust for Life","Artist": "Iggy Pop(David Bowie)","Date": "06/01/2026","Year": "1977","Genres": "New Wave","Score":"8","Stone":"0","Length": "42","bestSong": "The Passenger","revisited":"N","imageName":"lust for life iggy.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Two great songs, and a lot of good songs. The Bowie influence is felt. 'The Passenger' feels like a (slightly) happier companion to Space Oddity."},
"00091":{"Name": "Heroes","Artist": "David Bowie","Date": "06/01/2026","Year": "1977","Genres": "Art Rock","Score":"7","Stone":"0","Length": "40","bestSong": "Heroes","revisited":"N","imageName":"heroes.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "This album is a great deal more challenging than I expected. Obviously the title track is amazing and accessible. The whole second half of the album is made up of chilling instrumental pieces. 'Sense of Doubt' is particularly gutting. I like it!"},
"00092":{"Name": "Low","Artist": "David Bowie","Date": "06/01/2026","Year": "1977","Genres": "Art Rock","Score":"7","Stone":"0","Length": "38","bestSong": "Sound and Vision","revisited":"N","imageName":"low.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "A little more accessible than Heroes, which is a merit. The experimentation is really cool, but does make for a difficult listen."},
"00093":{"Name": "Lover","Artist": "Taylor Swift(Jack Antonoff)","Date": "06/01/2026","Year": "2019","Genres": "Pop, Dream Pop","Score":"6","Stone":"0","Length": "62","bestSong": "Cruel Summer","revisited":"N","imageName":"lover.png","suggester": "","country": "USA, North America","description": "This came out in 2019? The lyrics feel so behind the times, 'you can't spell awesome without me'. Nevertheless there are plenty of hits which I like, and I was pleasantly surprised by 'Soon You'll Get Better' - nice to hear a song with more meaning than 'I love you', 'I hate you' or 'I love AND hate you'."},
"00094":{"Name": "Bat Out Of Hell","Artist": "Meatloaf","Date": "06/01/2026","Year": "1977","Genres": "Rock","Score":"8","Stone":"0","Length": "46","bestSong": "Paradise By The Dashboard Light","revisited":"N","imageName":"bat out of hell.jpg","suggester": "Lucinda(1001 Albums You Must Hear Before You Die)","country": "USA, North America","description": "The only album I've listened to so far to use a motorbike themed metaphor for sexual frustration. The operatic style works really well on tracks this long. I like it."},
"00095":{"Name": "Fresh Fruit For Rotting Vegetables","Artist": "Dead Kennedys","Date": "06/01/2026","Year": "1980","Genres": "Hardcore Punk","Score":"5","Stone":"0","Length": "33","bestSong": "California Uber Alles","revisited":"N","imageName":"fresh fruit for rotting vegetables.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The political anger comes across in the least subtle way possible (see 'kill the poor', 'let's lynch the landlord') but it feels a bit concieted - like they wanted to write an angry political record without actually being that angry. I'm sure that's not really the case, but it does sound that way."},
"00096":{"Name": "The Album","Artist": "ABBA","Date": "06/01/2026","Year": "1977","Genres": "Pop, Dance","Score":"6.5","Stone":"0","Length": "40","bestSong": "Take A Chance On Me","revisited":"N","imageName":"the album abba.jpg","suggester": "","country": "Sweden, Europe","description": "ABBA for me is a band best experienced through their singles, rather than albums. Their hits are fantastic, but their deeper cuts fall flat mostly. With three great songs, this album is fine but nothing amazing overall."},
"00097":{"Name": "Out Of The Blue","Artist": "Electric Light Orchestra(ELO)","Date": "07/01/2026","Year": "1977","Genres": "Orchestral Pop, Pop, Rock, Pop","Score":"7.5","Stone":"0","Length": "70","bestSong": "Mr Blue Sky","revisited":"N","imageName":"out of the blue.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "The operatic style lends itself to a longer album, and for the most part I think it works. I think you could trim at least one song and have a better album though."},
"00098":{"Name": "Z-Sides","Artist": "Tom Rosenthal","Date": "07/01/2026","Year": "2018","Genres": "Folk, Indie","Score":"6.5","Stone":"0","Length": "37","bestSong": "Hugging You","revisited":"N","imageName":"z sides.jpg","suggester": "Lucinda","country": "England, Europe","description": "Tighter, and more lyrically consistent than some other slow melancholy folk, which is a positive. 'Watermelon' is a fun idea, but I think would work better as a single or on an EP rather than on this album."},
"00099":{"Name": "¿Dónde Están los Ladrones?","Artist": "Shakira","Date": "07/01/2026","Year": "1998","Genres": "Latin Pop, Dance","Score":"7","Stone":"0","Length": "41","bestSong": "Ojos Asi","revisited":"N","imageName":"done estan los ladrones.jpg","suggester": "","country": "Colombia, South America","description": "It's fun, the right length, and never boring. There's nothing here that I absolutely love, but a lot that I really like. "},
"00100":{"Name": "Queen II","Artist": "Queen","Date": "07/01/2026","Year": "1974","Genres": "Art Rock","Score":"5","Stone":"0","Length": "41","bestSong": "Seven Seas of Rye","revisited":"N","imageName":"queen ii.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "I was a bit underwhelmed! I expected something remarkable from an album with such a famous and iconic cover but I don't think any of these songs sit alongside Queen's best."},
"00100":{"Name": "Queen II","Artist": "Queen","Date": "07/01/2026","Year": "1974","Genres": "Art Rock","Score":"5","Stone":"0","Length": "41","bestSong": "Seven Seas of Rye","revisited":"N","imageName":"queen ii.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "I was a bit underwhelmed! I expected something remarkable from an album with such a famous and iconic cover but I don't think any of these songs sit alongside Queen's best."},
"00101":{"Name": "Flood","Artist": "They Might Be Giants","Date": "07/01/2026","Year": "1990","Genres": "Rock","Score":"9","Stone":"0","Length": "43","bestSong": "Birdhouse In Your Soul","revisited":"Y","imageName":"flood.jpg","suggester": "","country": "USA, North America","description": "Nothing else quite sounds like this! The first four tracks are just great, it drops off a little after that but not by much. Verges on Filmcow-esque (huge positive for me)."},
"00102":{"Name": "English Settlement","Artist": "XTC","Date": "07/01/2026","Year": "1982","Genres": "Pop, New Wave","Score":"5.5","Stone":"0","Length": "72","bestSong": "Senses Working Overtime","revisited":"N","imageName":"english settlement.png","suggester": "","country": "England, Europe","description": "The album drags a bit, but there's enough here to like - for one, 'Senses Working Overtime' is one of my favourite songs ever. The political songs here are good, though it's pretty sad to hear issues of today be talked about in exactly the same way over 40 years ago."},
"00103":{"Name": "Coat Of Many Colours","Artist": "Dolly Parton","Date": "07/01/2026","Year": "1971","Genres": "Country","Score":"7","Stone":"0","Length": "27","bestSong": "Coat Of Many Colours","revisited":"N","imageName":"coat of many colours.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I love the theme of this album - it really does feel like a slice of life with the themes of poverty, family and religion. So cohesive."},
"00104":{"Name": "Sheer Heart Attack","Artist": "Queen","Date": "08/01/2026","Year": "1974","Genres": "Hard Rock","Score":"8.5","Stone":"0","Length": "39","bestSong": "Killer Queen","revisited":"N","imageName":"sheer heart attack.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Feels like being attacked by very organised bandits with electric guitars. The start feels like an epic blast, and then the energy drops off slightly, but then builds back into a great finale. "},
"00105":{"Name": "Untitled (Black Is)","Artist": "Sault","Date": "08/01/2026","Year": "2020","Genres": "Soul, R&B, Funk","Score":"7.5","Stone":"0","Length": "57","bestSong": "Don't Shoot Guns Down","revisited":"N","imageName":"black is.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Sounds great. Clever lyrics and well written songs. Brings you back to that time in 2020. "},
"00106":{"Name": "Chemtrails Over the Country Club","Artist": "Lana Del Ray(Jack Antonoff)","Date": "08/01/2026","Year": "2021","Genres": "Folk","Score":"7","Stone":"0","Length": "45","bestSong": "Dance Till We Die","revisited":"N","imageName":"chemtrails over the country club.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Lana has such a distincitive style, her work is carried by just how beautiful her voice is. Unfortunately, I don't think that beauty gets a chance to shine in this album the way it does in tracks like 'Video Games'. Still good, just not perfect."},
"00107":{"Name": "Blackstar","Artist": "David Bowie","Date": "08/01/2026","Year": "2016","Genres": "Art Rock","Score":"9","Stone":"0","Length": "41","bestSong": "Blackstar","revisited":"N","imageName":"blackstar.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "So chilling hearing someone sing about their own impending death. All the songs are great, and the album is so cohesive."},
"00108":{"Name": "Crime of the Century","Artist": "Supertramp","Date": "08/01/2026","Year": "1974","Genres": "Art Rock, Pop","Score":"7","Stone":"0","Length": "44","bestSong": "School","revisited":"N","imageName":"crime of the century.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "A lot of the albums in '1001 Albums You Must Hear Before You Die' have been good, but unremarkable. This one does just enough for me to sit above the other 70s Rock albums. It's experimental, cohesive, and fun."},
"00109":{"Name": "Folklore","Artist": "Taylor Swift(Jack Antonoff, Aaron Desner)","Date": "08/01/2026","Year": "2020","Genres": "Folk, Chamber Pop","Score":"6","Stone":"0","Length": "63","bestSong": "betty","revisited":"N","imageName":"folklore.png","suggester": "","country": "USA, North America","description": "The instrumentation feels like it's begging to have some time to breathe, she barely ever stops singing and the lyrics jump between overly wordy and then really basic. It does work for the most part, but I think it's so close to being really good."},
"00110":{"Name": "Evermore","Artist": "Taylor Swift(Jack Antonoff, Aaron Desner)","Date": "08/01/2026","Year": "2020","Genres": "Folk, Chamber Pop","Score":"6.5","Stone":"0","Length": "61","bestSong": "Willow","revisited":"N","imageName":"evermore.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Slightly less cohesive than 'Folklore' but I prefer that diversity in style. I love the song 'Willow', but I found 'closure' to be quite unpleasant. "},
"00111":{"Name": "Heaux Tales","Artist": "Jazmine Sullivan(Anderson .Paak)","Date": "08/01/2026","Year": "2021","Genres": "R&B, Hip-Hop","Score":"9","Stone":"0","Length": "32","bestSong": "Pick Up Your Feelings","revisited":"N","imageName":"heaux tales.jpg","suggester": "","country": "USA, North America","description": "Expertly crafted. The 'story' tracks add so much. This album is a fantastic deep dive into her mind, her sex, and her anxieties. Love it!"},
"00112":{"Name": "Oracular Spectacular","Artist": "MGMT","Date": "09/01/2026","Year": "2008","Genres": "Psychodelic Pop, Synth Pop","Score":"8.5","Stone":"0","Length": "41","bestSong": "Time to Pretend","revisited":"N","imageName":"oracular spectacular.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The first track is a great mission statement for the rest of the album. An album about living in the now, ignoring consequences, and having a good time."},
"00113":{"Name": "Tomorrow","Artist": "William Onyeabor","Date": "09/01/2026","Year": "1979","Genres": "Funk","Score":"7","Stone":"0","Length": "32","bestSong": "Fantastic Man","revisited":"N","imageName":"tomorrow.jpg","suggester": "","country": "Nigeria, Africa","description": "Thoughtful, but mostly just really good fun! I like the anti-war track but 'Fantastic Man' takes the cake."},
"00114":{"Name": "Low-Life","Artist": "New Order","Date": "09/01/2026","Year": "1985","Genres": "Post Punk, Synth Pop, Dance Pop","Score":"7","Stone":"0","Length": "40","bestSong": "The Perfect Kiss","revisited":"N","imageName":"low life.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "This is experimental in a fun way, as apposed to some experimental albums which can be quite challenging or innacessable. Frog sounds!"},
"00115":{"Name": "The Chirping Crickets","Artist": "The Crickets(Buddy Holly)","Date": "09/01/2026","Year": "1957","Genres": "Rock and Roll, Rockabilly","Score":"6.5","Stone":"0","Length": "26","bestSong": "That'll Be The Day","revisited":"N","imageName":"the chirping crickets.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Oh boy! You can see how much this hand-hold-y lovey music influenced The Beatles. It's simultaneously endearing and really funny how often the lyrics are all just like 'Well, rock-a-lock-a, hickory-dickery-dock'. It's just nice!"},
"00116":{"Name": "Buddy Holly","Artist": "Buddy Holly","Date": "09/01/2026","Year": "1958","Genres": "Rock and Roll, Rockabilly, Pop","Score":"7.5","Stone":"0","Length": "25","bestSong": "Ready Teddy","revisited":"N","imageName":"buddy holly.jpg","suggester": "","country": "USA, North America","description": "A slight improvement over his work with The Crickets, just because this album contains more hits. 'Everyday' is such an earworm, and I love his take on Ready Teddy (even if Little Richard's is better)."},
"00117":{"Name": "Weezer (Blue Album)","Artist": "Weezer","Date": "09/01/2026","Year": "1994","Genres": "Pop, Rock, Indie","Score":"5.5","Stone":"0","Length": "42","bestSong": "Buddy Holly","revisited":"N","imageName":"weezer blue.png","suggester": "","country": "USA, North America","description": "Saved by one good song for me. The rest of the album fails to do anything exciting for me. Hard to put into words exactly but it feels like 'pick your nose rock'."},
"00118":{"Name": "The Atomic Mr Basie","Artist": "Count Basie","Date": "09/01/2026","Year": "1957","Genres": "Swing, Jazz","Score":"8","Stone":"0","Length": "40","bestSong": "Splanky","revisited":"N","imageName":"atomic basie.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Woo! It's accessible, fun and moves around enough to not get old. I like it!"},
"00119":{"Name": "American Pie","Artist": "Don McLean","Date": "09/01/2026","Year": "1971","Genres": "Folk, Rock","Score":"7.5","Stone":"0","Length": "36","bestSong": "American Pie","revisited":"N","imageName":"american pie.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "This album gets a lot done in 36 minutes. 'American Pie' is such an epic song and we follow it up with a set of great short emotional tracks. I really like how this album is structured."},
"00120":{"Name": "Here's Little Richard","Artist": "Little Richard","Date": "09/01/2026","Year": "1957","Genres": "Rock and Roll","Score":"7.5","Stone":"0","Length": "29","bestSong": "Ready Teddy","revisited":"N","imageName":"here little richard.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "He has such a cool voice. It's harsh and soft at the same time. The cover perfectly conveys the vibe of the whole album."},
"00121":{"Name": "Norman Fucking Rockwell!","Artist": "Lana Del Ray(Jack Antonoff)","Date": "10/01/2026","Year": "2019","Genres": "Soft Rock, Folk, Pop","Score":"8.5","Stone":"0","Length": "68","bestSong": "Fuck it I Love You","revisited":"N","imageName":"norman fucking rockwell.png","suggester": "Lucinda","country": "USA, North America","description": "I much prefered this to 'Chemtrails Over the Country Club'. Her voice gets a lot more time to shine here, and the tracks have more engaging hooks. Justifies its longer runtime by creating such a cohesive sound."},
"00122":{"Name": "The Downward Spiral","Artist": "Nine Inch Nails","Date": "10/01/2026","Year": "1994","Genres": "Metal, Rock","Score":"7.5","Stone":"0","Length": "65","bestSong": "A Warm Place","revisited":"N","imageName":"downward spiral.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "It took me a moment to settle into the metal elements of this album, and initally I was just enjoying the funk influence and tolerating the metal. By the end, I loved it. The construction sounds mixed in work so well. It does feel like this is the music of a gritty, grimey construction site. All for it!"},
"00123":{"Name": "Palo Congo","Artist": "Sabu","Date": "10/01/2026","Year": "1957","Genres": "Rumba, Jazz","Score":"6.5","Stone":"0","Length": "41","bestSong": "El Cumbanchero","revisited":"N","imageName":"palo congo.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Puerto Rico, USA, North America","description": "There's a great sound - I love the bongos here. I don't think there's enough here for 40 minutes, the songs maybe run just a little too long."},
"00124":{"Name": "The Velvet Underground & Nico","Artist": "The Velvet Underground(Lou Reed, Nico)","Date": "10/01/2026","Year": "1967","Genres": "Rock, Pop, Rock","Score":"7.5","Stone":"0","Length": "48","bestSong": "Venus in Fairs","revisited":"N","imageName":"the velvet and nico.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I like the experimental sound. There are some beautiful segments - I especially love ''Venus in Furs'. 'I could sleep for a thousand years' is sang so perfectly."},
"00125":{"Name": "Midnights","Artist": "Taylor Swift(Jack Antonoff)","Date": "10/01/2026","Year": "2022","Genres": "Dream Pop","Score":"6.5","Stone":"0","Length": "48","bestSong": "Labyrinth","revisited":"N","imageName":"midnights.png","suggester": "","country": "USA, North America","description": "For me, as a concept album this works well. It fits together well, and does feel like sleep deprived ruminations. I like a lot of the songs, but there's nothing that I properly love. Wish for more Lana Del Ray on the original album!"},
"00126":{"Name": "Sail Away","Artist": "Randy Newman","Date": "11/01/2026","Year": "1972","Genres": "Orchestral Pop","Score":"9","Stone":"0","Length": "30","bestSong": "Sail Away","revisited":"N","imageName":"sail away.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "There's a real magic to the songwriting here. He's tackling such dark topics, and writing from ambitious pespectives, yet he makes the whole album feels like such a warm hug. "},
"00127":{"Name": "Brilliant Corners","Artist": "Thelonious Monk","Date": "11/01/2026","Year": "1957","Genres": "Bebop, Jazz","Score":"6","Stone":"0","Length": "43","bestSong": "Brilliant Corners","revisited":"N","imageName":"brilliant corners.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I liked it, but it didn't hit me with anything that I hadn't already found elsewhere. An easy listen, but I want more."},
"00128":{"Name": "Surfin' Bird","Artist": "The Trashmen","Date": "11/01/2026","Year": "1964","Genres": "Surf Rock","Score":"5","Stone":"0","Length": "40","bestSong": "Surfin' Bird","revisited":"N","imageName":"surfin bird.jpg","suggester": "","country": "USA, North America","description": "I was hoping for something as novel as the title track, but the album is made of mostly unimaginative songs, and bland covers. The title track is fantastic though - the album is just too safe otherwise."},
"00129":{"Name": "Gunfighter Ballads and Trail Songs","Artist": "Marty Robbins","Date": "11/01/2026","Year": "1959","Genres": "Country, Western","Score":"7.5","Stone":"0","Length": "35","bestSong": "Big Iron","revisited":"N","imageName":"gunfighter ballads.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Excellent vibe - each track is a fun little story. The 1999 reissue has a 'full length version' of a track that only adds 20 seconds, to an already 4 minute long song - odd. "},
"00130":{"Name": "The Tortured Poets Department","Artist": "Taylor Swift(Jack Antonoff, Aaron Desner)","Date": "11/01/2026","Year": "2024","Genres": "Chamber Pop","Score":"7","Stone":"0","Length": "65","bestSong": "Florida!!!","revisited":"N","imageName":"tortured poets department.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "A little bit too long, a few terribly awkward lines, and some writing that feels a bit insincere, but otherwise I really like this! Some great hooks, well placed features and enough variation make this one of her more exciting albums."},
"00131":{"Name": "At Folsom Prison","Artist": "Johnny Cash","Date": "11/01/2026","Year": "1968","Genres": "Live, Country","Score":"9.5","Stone":"0","Length": "45","bestSong": "Folsom Prison Blues","revisited":"N","imageName":"at folsom prison.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Such a sense of community and excitement. He's so charismatic, and really funny. This is the way to make a good live album. Also helps that these are all excellent songs."},
"00132":{"Name": "At San Quentin","Artist": "Johnny Cash","Date": "11/01/2026","Year": "1969","Genres": "Live, Country","Score":"9.5","Stone":"0","Length": "34","bestSong": "San Quentin","revisited":"N","imageName":"at san quentin.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "More daring than his Folsom Prison set, with the whole 'San Quentin' song part. Funnier, and bolder, but I think the songs on the first album are better. "},
"00133":{"Name": "The Kinks Are the Village Green Preservation Society","Artist": "The Kinks","Date": "11/01/2026","Year": "1968","Genres": "Pop, Folk, Rock","Score":"6.5","Stone":"0","Length": "39","bestSong": "The Village Green Preservation Society","revisited":"N","imageName":"the kinks are the village green.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "At first, I thought the themes of preservation were supposed to be ironic, but reading about it more I think they're actually genuine. Either way, this album is cute and a bit goofy. I liked it!"},
"00134":{"Name": "The Dark Side Of The Moon","Artist": "Pink Floyd","Date": "12/01/2026","Year": "1973","Genres": "Psychedeli, Rock, Art Rock","Score":"7.5","Stone":"0","Length": "43","bestSong": "The Great Gig In The Sky","revisited":"N","imageName":"dark side of the moon.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Such a grand album even at only 40 minutes! Plenty of great songs, and I love the variety in style. I'm sure I'll like it more the next time I listen."},
"00135":{"Name": "Dub Side Of The Moon","Artist": "Easyy Star All-Stars","Date": "12/01/2026","Year": "2003","Genres": "Tribute, Reggae, Dub","Score":"5","Stone":"0","Length": "58","bestSong": "Any Colour You Like","revisited":"N","imageName":"dub side of the moon.jpg","suggester": "","country": "Jamaica, USA, North America","description": "Thoroughly underwhelming compared to the original. Still sounds good, but this version adds very little."},
"00136":{"Name": "Yoshimi Battles the Pink Robots","Artist": "The Flaming Lips","Date": "12/01/2026","Year": "2002","Genres": "Dream Pop, Psychedelic, Pop","Score":"7.5","Stone":"0","Length": "47","bestSong": "Do You Realize??","revisited":"N","imageName":"yoshimi battles.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Great fun! I love the story. 'Do You Realize??' is brilliant and so emotional. "},
"00137":{"Name": "The Wall","Artist": "Pink Floyd","Date": "12/01/2026","Year": "1979","Genres": "Art Rock","Score":"7.5","Stone":"0","Length": "81","bestSong": "The Trial","revisited":"N","imageName":"the wall.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Can't claim to understand any of this on the first listen (but I did really like it)! Will definitely be listening again soon."},
"00138":{"Name": "Better Living Through Chemistry","Artist": "Fatboy Slim","Date": "12/01/2026","Year": "1996","Genres": "Big Beat","Score":"5.5","Stone":"0","Length": "58","bestSong": "Everybody Needs a 303","revisited":"N","imageName":"better living through chemistry.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Meh! I don't mind it, but it doesn't come close to matching the quality of his hits. "},
"00139":{"Name": "You've Come A Long Way Baby","Artist": "Fatboy Slim","Date": "12/01/2026","Year": "1998","Genres": "Big Beat, Techno","Score":"8","Stone":"0","Length": "62","bestSong": "The Rockafeller Skank","revisited":"N","imageName":"you've come a long way.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Chock full of some of his best work - I really like this album. It's exciting, and feels new even 25 years later."},
"00140":{"Name": "Nilsson Schmilsson","Artist": "Harry Nilsson","Date": "13/01/2026","Year": "1971","Genres": "Rock, Pop","Score":"7.5","Stone":"0","Length": "35","bestSong": "Gotta Get Up","revisited":"N","imageName":"nilsson schmilsson.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Perfectly captures the early morning groggy but happy feeling. I especially love the first track. "},
"00141":{"Name": "Birth of the Cool","Artist": "Miles Davis","Date": "13/01/2026","Year": "1957","Genres": "Jazz","Score":"6.5","Stone":"0","Length": "35","bestSong": "Move","revisited":"N","imageName":"birth of the cool.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Classic fun jazz! It's exciting and bouncy. "},
"00142":{"Name": "Pet Sounds","Artist": "The Beach Boys","Date": "13/01/2026","Year": "1966","Genres": "Art Rock, Pop","Score":"8.5","Stone":"2","Length": "36","bestSong": "Wouldn't It Be Nice","revisited":"N","imageName":"pet sounds.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Fantastic! A joy start to finish. One of my favourite classic pop albums."},
"00143":{"Name": "Call of the Valley","Artist": "Hariprasad Chaurasia,Brij Bhushan Kabra,Shivkumar Sharma","Date": "13/01/2026","Year": "1968","Genres": "Hindustani Classical, Indian Classical","Score":"7","Stone":"0","Length": "40","bestSong": "...","revisited":"N","imageName":"call of the valley.jpeg","suggester": "1001 Albums You Must Hear Before You Die","country": "India, Asia","description": "Beautiful! The instruments are all doing their own thing, but in a way that lets them all coexist nicely. The flute is especially great."},
"00144":{"Name": "Getting Killed","Artist": "Geese","Date": "13/01/2026","Year": "2025","Genres": "Art Rock","Score":"5.5","Stone":"0","Length": "46","bestSong": "Taxes","revisited":"N","imageName":"getting killed.jpg","suggester": "Jacob","country": "USA, North America","description": "A messy album, but in a really fun way. I can see why someone might really like this, it just didn't connect with me personally. I'll give it another go someday."},
"00145":{"Name": "Shalimar","Artist": "Rahul Dev Burman","Date": "13/01/2026","Year": "1978","Genres": "Soundtrack, Bollywood","Score":"7.5","Stone":"0","Length": "40","bestSong": "One Two Cha Cha Cha","revisited":"N","imageName":"shalimar.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "India, Asia","description": "I love the variety in this album. It's more accessible than the hindustani albums I've listened to already, due to the Western/Indian blend. I really enjoyed this."},
"00146":{"Name": "Arrival","Artist": "ABBA","Date": "13/01/2026","Year": "1976","Genres": "Pop, Disco","Score":"7.5","Stone":"0","Length": "33","bestSong": "Dancing Queen","revisited":"N","imageName":"arrival.png","suggester": "1001 Albums You Must Hear Before You Die","country": "Sweden, Europe","description": "This is what you want from an ABBA album! Lots of hits, and the other tracks maintain the energy. Great listen!"},
"00147":{"Name": "Push The Button","Artist": "The Chemical Brothers","Date": "13/01/2026","Year": "2005","Genres": "Electronic, Techno","Score":"6.5","Stone":"0","Length": "60","bestSong": "Galvanize","revisited":"N","imageName":"push the button.png","suggester": "","country": "England, Europe","description": "Fun, but never nears the heights of the first track. I'd just listen to 'Galvanize' and move on."},
"00148":{"Name": "The Miseducation of Lauryn Hill","Artist": "Lauryn Hill","Date": "14/01/2026","Year": "1998","Genres": "R&B, Soul, Hip-Hop","Score":"8.5","Stone":"10","Length": "78","bestSong": "Doo Wop (That Thing)","revisited":"Y","imageName":"the miseducation of lauryn hill.png","suggester": "Jacob(1001 Albums You Must Hear Before You Die)","country": "USA, North America","description": "Impossible not to be drawn in by this album. The 'classroom' tracks fit together so neatly. It sounds great, the lyrics are great. Such a shame she never did another solo album."},
"00149":{"Name": "Metallica ","Artist": "Metallica ","Date": "15/01/2026","Year": "1991","Genres": "Metal","Score":"7","Stone":"0","Length": "63","bestSong": "Enter Sandman","revisited":"N","imageName":"metallica.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I enjoyed it, but I found it to be a surprisingly forgettable album. I'll definitely give it another go."},
"00150":{"Name": "Euro-Country","Artist": "CMAT","Date": "15/01/2026","Year": "2025","Genres": "Indie, Pop","Score":"8.5","Stone":"0","Length": "49","bestSong": "Jamie Oliver Petrol Station","revisited":"N","imageName":"euro-country.jpg","suggester": "Amelie","country": "Ireland, Europe","description": "So many well written songs, all with great hooks. This album is such a good time. "},
"00150":{"Name": "Euro-Country","Artist": "CMAT","Date": "15/01/2026","Year": "2025","Genres": "Indie, Pop","Score":"8.5","Stone":"0","Length": "49","bestSong": "Jamie Oliver Petrol Station","revisited":"N","imageName":"euro-country.jpg","suggester": "Amelie","country": "Ireland, Europe","description": "So many well written songs, all with great hooks. This album is such a good time. "},
"00151":{"Name": "What's Going On","Artist": "Marvin Gaye","Date": "15/01/2026","Year": "1971","Genres": "R&B, Soul","Score":"8.5","Stone":"1","Length": "36","bestSong": "Mercy Mercy Me (The Ecology)","revisited":"N","imageName":"what's going on.jpg","suggester": "Jacob(1001 Albums You Must Hear Before You Die)","country": "USA, North America","description": "The more I listen to it, the more I like it. So smooth."},
"00152":{"Name": "United","Artist": "Marvin Gaye, Tammi Terrell","Date": "15/01/2026","Year": "1967","Genres": "R&B, Soul","Score":"7.5","Stone":"0","Length": "34","bestSong": "Ain't No Mountain High Enough","revisited":"N","imageName":"united.jpg","suggester": "","country": "USA, North America","description": "Sickly sweet in a really nice way. Doesn't at all overstay its welcome."},
"00153":{"Name": "Wish You Were Here","Artist": "Pink Floyd","Date": "15/01/2026","Year": "1975","Genres": "Art Rock, Prog Rock","Score":"7.5","Stone":"0","Length": "44","bestSong": "Wish You Were Here","revisited":"N","imageName":"wish you were here.png","suggester": "Jacob(1001 Albums You Must Hear Before You Die)","country": "England, Europe","description": "Feels like a journey. Only five tracks and all of them are great. You could listen to this one much more casually than 'Dark Side of the Moon' or 'The Wall' as it's a little more accessible. Better with headphones for the jump between tracks 3 and 4."},
"00154":{"Name": "Bridge Over Troubled Water","Artist": "Simon and Garfunkel(Paul Simon, Art Garfunkel)","Date": "15/01/2026","Year": "1970","Genres": "Folk, Pop, Soft Rock","Score":"8.5","Stone":"0","Length": "37","bestSong": "Cecelia","revisited":"N","imageName":"bridge over troubled water.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "I much prefer this to 'Parsely, Sage, Rosemary and Thyme' - I prefer the more upbeat vibe. This album makes me feel happy."},
"00155":{"Name": "Heartattack and Vine","Artist": "Tom Waits","Date": "16/01/2026","Year": "1980","Genres": "Rock","Score":"6.5","Stone":"0","Length": "45","bestSong": "Jersey Girl","revisited":"N","imageName":"heartattack and vine.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "A pint of green chartreuse is so much green chartreuse. Don't drink that Tom Waits - you will die!"},
"00156":{"Name": "Brothers","Artist": "The Black Keys","Date": "16/01/2026","Year": "2010","Genres": "Rock, Indie","Score":"6","Stone":"0","Length": "55","bestSong": "Tighten Up","revisited":"N","imageName":"brothers.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Funny album cover, but a thoroughly unremarkable album. "},
"00157":{"Name": "Britpop","Artist": "Robbie Williams","Date": "17/01/2026","Year": "2025","Genres": "Pop, Rock","Score":"7","Stone":"0","Length": "38","bestSong": "Rocket","revisited":"N","imageName":"britpop.png","suggester": "","country": "England, Europe","description": "Love the energy, and the honesty of a lot of the tracks. I can see what he means when he says he wishes he released this as soon as he left Take That."},
"00158":{"Name": "Le Tigre","Artist": "Le Tigre","Date": "17/01/2026","Year": "1999","Genres": "Electronic, Dance, Rock, Punk","Score":"8.5","Stone":"0","Length": "32","bestSong": "Hot Topic","revisited":"N","imageName":"le tigre.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "What if Black Pink sounded good? You may think it impossible, but Le Tigre would prove you wrong."},
"00159":{"Name": "Fantastic","Artist": "Wham!(George Michael,Andrew Ridgeley)","Date": "17/01/2026","Year": "1983","Genres": "Pop, Dance","Score":"6.5","Stone":"0","Length": "37","bestSong": "Club Tropicana","revisited":"N","imageName":"fantastic.jpg","suggester": "","country": "England, Europe","description": "Pretty fun! 'Wham Rap' is kinda ridiculous. Also, the wild west piano riff at the end of the album catches you off guard."},
"00160":{"Name": "Make It Big","Artist": "Wham!(George Michael,Andrew Ridgeley)","Date": "17/01/2026","Year": "1984","Genres": "Pop","Score":"8.5","Stone":"0","Length": "38","bestSong": "Wake Me Up Before You Go-Go","revisited":"N","imageName":"make it big.jpeg","suggester": "","country": "England, Europe","description": "As Deadpool says, this is the album where they really earned the exclamation mark. Full of hits, so much fun. Significant improvement over their first album."},
"00161":{"Name": "Music from the Edge of Heaven","Artist": "Wham!(George Michael,Andrew Ridgeley)","Date": "17/01/2026","Year": "1986","Genres": "Pop, Electronic","Score":"4.5","Stone":"0","Length": "45","bestSong": "Last Christmas - Pudding Mix","revisited":"N","imageName":"Music from the Edge of Heaven.png","suggester": "","country": "England, Europe","description": "This album is a bit of a mess. There's a random live song in the middle, the album ends with almost 7 minutes of 'Last Christmas' and THERE'S ANOTHER WHAM RAP :( "},
"00162":{"Name": "Faith","Artist": "George Michael","Date": "17/01/2026","Year": "1987","Genres": "Pop","Score":"8","Stone":"0","Length": "50","bestSong": "Faith","revisited":"N","imageName":"faith.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Album cover is George Michael checking if he remembered to wear deodorant this morning (he didn't). This is his best album for me. Whole thing comes together really well. "},
"00163":{"Name": "Listen Without Prejudice Vol. 1","Artist": "George Michael","Date": "18/01/2026","Year": "1990","Genres": "Rock, Pop","Score":"7","Stone":"0","Length": "48","bestSong": "Freedom! '90","revisited":"N","imageName":"listen without prejudice.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Tuneful, and playful. Freedom is a great track that summarises his search for artistic independence. "},
"00164":{"Name": "Older","Artist": "George Michael","Date": "18/01/2026","Year": "1996","Genres": "Pop, Soul","Score":"6","Stone":"0","Length": "59","bestSong": "Jesus To A Child","revisited":"N","imageName":"older.png","suggester": "Jacob","country": "England, Europe","description": "Thoughtful, but lacks the excitement and tunefulness of his first two solo albums. I'm sure I'll come to love it with time."},
"00165":{"Name": "Songs from the Last Century","Artist": "George Michael","Date": "18/01/2026","Year": "1999","Genres": "Pop","Score":"5","Stone":"0","Length": "43","bestSong": "Brother Can You Spare A Dime?","revisited":"N","imageName":"songs from the last century.jpg","suggester": "","country": "England, Europe","description": "Though some of the covers are good, the album feels a bit uninspired. There's very little here that's exciting."},
"00166":{"Name": "Patience","Artist": "George Michael","Date": "18/01/2026","Year": "2004","Genres": "Pop, Electronic","Score":"5.5","Stone":"0","Length": "70","bestSong": "Shoot the Dog","revisited":"N","imageName":"patience.jpg","suggester": "","country": "England, Europe","description": "At face value this album is about George Michael killing dogs, his mother inventing a fake dead uncle for him, and two tiny hitlers. It's a bit of a slog, but there are some really nice tracks."},
"00167":{"Name": "Neon Bible","Artist": "Arcade Fire","Date": "19/01/2026","Year": "2007","Genres": "Indie, Rock","Score":"8","Stone":"0","Length": "47","bestSong": "Keep The Car Running","revisited":"N","imageName":"neon bible.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Canada, North America","description": "Starts with what sounds like a fan suggestion for a Black Mirror theme song. Can't believe I'd never heard of Arcade Fire - they've got such a cool sound."},
"00168":{"Name": "Pornography","Artist": "The Cure","Date": "19/01/2026","Year": "1982","Genres": "Rock, Post Punk","Score":"5.5","Stone":"0","Length": "44","bestSong": "One Hundred Years","revisited":"N","imageName":"pornograhpy.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "To me, this is just fine. There's a good sound, it's certainly consistent, but it doesn't have enough good ideas to let it stand out. It gets lost in the noise."},
"00169":{"Name": "Ella Fitzgerald Sings The George And Ira Gershwin Song Book","Artist": "Ella Fitzgerald","Date": "19/01/2026","Year": "1959","Genres": "Vocal Jazz, Traditional Pop","Score":"7.5","Stone":"0","Length": "195","bestSong": "Let's Call The Whole Thing Off","revisited":"N","imageName":"ella gershwin.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "You've got to be in the right mood to embark on this, but if you are, then I think you can get a lot out of it. There are plenty of great tracks. The singing is fantastic. Disk 1 is my favourite - solid jazzy fun."},
"00170":{"Name": "Screamadelica","Artist": "Primal Scream","Date": "20/01/2026","Year": "1991","Genres": "Rock","Score":"6.5","Stone":"0","Length": "63","bestSong": "Loaded","revisited":"N","imageName":"screamadelica.png","suggester": "1001 Albums You Must Hear Before You Die","country": "Scotland, Europe","description": "Fun, and very charming. I'd like to like it more, but it doesn't give quite enough to be a properly great album."},
"00171":{"Name": "Lost Souls","Artist": "Doves","Date": "20/01/2026","Year": "2000","Genres": "Indie, Rock, Dream Pop","Score":"5","Stone":"0","Length": "59","bestSong": "The Cedar Room","revisited":"N","imageName":"lost souls.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Just completely unremarkable. I feel like I forgot this album the moment I finished it."},
"00172":{"Name": "Jack Takes The Floor","Artist": "Ramblin Jack","Date": "20/01/2026","Year": "1958","Genres": "Folk","Score":"3.5","Stone":"0","Length": "44","bestSong": "Cocaine","revisited":"N","imageName":"jack takes the floor.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "He really is just rambling."},
"00173":{"Name": "The Psychedelic Sounds of the 13th Floor Elevators","Artist": "The 13th Floor Elevators","Date": "20/01/2026","Year": "1966","Genres": "Psychedelic, Rock","Score":"6","Stone":"0","Length": "35","bestSong": "...","revisited":"N","imageName":"the 13th floor.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Made less of an impact than I was expecting. These definitely are psychedelic sounds, just not particularly exciting ones."},
"00174":{"Name": "London 0 Hull 4","Artist": "The Housemartins(Paul Heaton, Fatboy Slim)","Date": "20/01/2026","Year": "1986","Genres": "Indie, Rock, Pop","Score":"9","Stone":"0","Length": "47","bestSong": "Happy Hour","revisited":"Y","imageName":"london 0 hull 4.jpg","suggester": "","country": "England, Europe","description": "I'm a bit biased on this one. I think this boyish pop sound works better on a slightly shorter album. Maybe one or two cuts could be made. Otherwise perfect."},
"00175":{"Name": "Thank God! It's The Dream Machine","Artist": "The Dream Machine","Date": "22/01/2026","Year": "2023","Genres": "Indie, Rock","Score":"7.5","Stone":"0","Length": "34","bestSong": "Children, My England","revisited":"N","imageName":"thank god it's the dream machine.png","suggester": "","country": "England, Europe","description": "Feels nostalgic and new at the same time. I like it a lot. I think they could soon get very big."},
"00176":{"Name": "Os Mutantes","Artist": "Os Mutantes","Date": "22/01/2026","Year": "1968","Genres": "Tropicalia, Pop","Score":"8","Stone":"0","Length": "36","bestSong": "Panis Et Circenses","revisited":"N","imageName":"os mutantes.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Brazil, South America","description": "Experimental and so so fun. It's dynamic but accessible. "},
"00177":{"Name": "Aerial Ballet","Artist": "Harry Nilsson","Date": "22/01/2026","Year": "1968","Genres": "Pop, Rock","Score":"7","Stone":"0","Length": "29","bestSong": "One","revisited":"N","imageName":"aerial ballet.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Charming and reassuring! Feels like a cold hug? Hard to put into exact words but I like it a lot."},
"00178":{"Name": "White Light / White Heat","Artist": "The Velvet Underground(Lou Reed)","Date": "22/01/2026","Year": "1968","Genres": "Psychedelic, Rock","Score":"3.5","Stone":"0","Length": "40","bestSong": "The Gift","revisited":"N","imageName":"white light white heat.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The first song is good, but the rest of the album is quite difficult. An 8 minute long spoken piece just to build towards an obvious punchline is kinda wild, and the third song on the album is just unpleasant. 17 Minute final track is just too long!"},
"00179":{"Name": "Electric Ladyland","Artist": "The Jimi Hendrix Experience","Date": "22/01/2026","Year": "1968","Genres": "Psychedelic, Rock","Score":"6","Stone":"0","Length": "74","bestSong": "All Along The Watchtower","revisited":"N","imageName":"electric ladyland.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "This is just too long for me. There's certainly good stuff here, but it's not dynamic enough. It just feels like I'm waiting for 'All Along The Watchtower'"},
"00180":{"Name": "Bookends","Artist": "Simon and Garfunkel(Paul Simon, Art Garfunkel)","Date": "22/01/2026","Year": "1968","Genres": "Folk, Rock, Pop","Score":"7.5","Stone":"0","Length": "30","bestSong": "Mrs Robinson","revisited":"N","imageName":"bookends.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Short, and sweet. 'Hazy Shade of Winter' has such an epic quality about it. Delivering this much in only 29 minutes is very impressive."},
"00181":{"Name": "Astral Weeks","Artist": "Van Morrison","Date": "22/01/2026","Year": "1968","Genres": "Folk, Rock","Score":"6","Stone":"0","Length": "47","bestSong": "Sweet Thing","revisited":"N","imageName":"astral weeks.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Ireland, Europe","description": "From the title you might expect this to sound more like the velvet underground, than tje mediocre folk it actually is. "},
"00182":{"Name": "What Have We Become","Artist": "Paul Heaton, Jacqui Abbott","Date": "22/01/2026","Year": "2014","Genres": "Indie, Pop, Soul","Score":"7.5","Stone":"0","Length": "45","bestSong": "D.I.Y.","revisited":"N","imageName":"what have we become.jpg","suggester": "","country": "England, Europe","description": "This album has a bit of a sickly sweet vibe, and less edge than his other writing. Regardless I think there are a lot of solid tracks, especially on the start of the album. The last minute of the album is fantastic."},
"00183":{"Name": "Hotel California","Artist": "Eagles","Date": "23/01/2026","Year": "1976","Genres": "Rock","Score":"6.5","Stone":"0","Length": "43","bestSong": "Hotel California","revisited":"N","imageName":"hotel california.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The title track is great, but the rest of the album feels a bit like filler to me. I'll give it another go."},
"00184":{"Name": "Fetch The Bolt Cutters","Artist": "Fiona Apple","Date": "23/01/2026","Year": "2020","Genres": "Art Pop, Indie","Score":"9","Stone":"0","Length": "52","bestSong": "Shameika","revisited":"N","imageName":"fetch the bolt cutters.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Chaotic and discordant in a way that still sounds great. I much prefer this to 'Tidal' "},
"00185":{"Name": "That's Showbiz Baby","Artist": "Jade","Date": "23/01/2026","Year": "2025","Genres": "Pop","Score":"7.5","Stone":"0","Length": "46","bestSong": "Midnight Cowboy","revisited":"N","imageName":"that's showbiz baby.png","suggester": "Jacob","country": "England, Europe","description": "Such an exciting album. So much going on - love the Ncuti Gatwa feature."},
"00186":{"Name": "Misty In Roots Live At The Counter Eurovision","Artist": "Misty In Roots","Date": "23/01/2026","Year": "1978","Genres": "Live, Reggae","Score":"7","Stone":"0","Length": "38","bestSong": "...","revisited":"N","imageName":"misty live eurovision.jpg","suggester": "Dad","country": "England, Europe, Saint Kitts and Nevis, North America","description": "Fun, but nothing groundbreaking. This being a live album is its biggest asset. I love the joyous sound against the 'we're all going to rot in hell' lyrics."},
"00187":{"Name": "O.G. Original Gangster","Artist": "ICE-T","Date": "24/01/2026","Year": "1991","Genres": "Gangsta Rap","Score":"7","Stone":"0","Length": "72","bestSong": "Mind Over Matter","revisited":"N","imageName":"o.g. original gangster.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "LA Home of the Bodybag' yeah we get it. 'First Impression' is good. A lot to like - maybe a tiny bit too long."},
"00188":{"Name": "Bandwagonesque","Artist": "Teenage Fanclub","Date": "24/01/2026","Year": "1991","Genres": "Rock, Pop","Score":"6","Stone":"0","Length": "43","bestSong": "What You Do To Me","revisited":"N","imageName":"bandwagonesque.png","suggester": "1001 Albums You Must Hear Before You Die","country": "Scotland, Europe","description": "Nice easy listening but throughly boring. Total background music stuff. Fun album title at least."},
"00189":{"Name": "Blue Lines","Artist": "Massive Attack","Date": "24/01/2026","Year": "1991","Genres": "Hip-Hop, Electronic","Score":"8","Stone":"0","Length": "45","bestSong": "Unfinished Sympathy","revisited":"N","imageName":"blue lines.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Expertly crafted yet sounds apathetic. The Fiddler on the Roof reference made me laugh. I thoroughly enjoyed it!"},
"00190":{"Name": "Woodface","Artist": "Crowded House","Date": "24/01/2026","Year": "1991","Genres": "Pop, Rock","Score":"7","Stone":"0","Length": "48","bestSong": "Weather With You","revisited":"N","imageName":"woodface.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Australia, New Zealand, Oceania","description": "I like 'Weather With You' and 'Four Seasons In One Day' a lot, but the rest of the album is a bit plain. Album feels crowded."},
"00191":{"Name": "The White Room","Artist": "The KLF","Date": "24/01/2026","Year": "1991","Genres": "Electronic, Pop","Score":"8.5","Stone":"0","Length": "44","bestSong": "Justified and Ancient","revisited":"N","imageName":"the white room.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Hard to find the original version of this, but if you can then it's really good! It sounds ancient and mysterious, but also futuristic."},
"00192":{"Name": "Heaven or Las Vegas","Artist": "Cocteau Twins","Date": "25/01/2026","Year": "1990","Genres": "Dream Pop","Score":"7","Stone":"0","Length": "38","bestSong": "Cherry-Coloured Funk","revisited":"N","imageName":"heaven or las vegas.jpg","suggester": "Callum(1001 Albums You Must Hear Before You Die, Amelie)","country": "Scotland, Europe","description": "Ethereal, but lacks the punch that I'm looking for out of this kind of music. I like it, but I don't love it yet. I'm sure it'll grow on me."},
"00193":{"Name": "Born To Run","Artist": "Bruce Springsteen","Date": "25/01/2026","Year": "1975","Genres": "Pop, Rock, Folk","Score":"6.5","Stone":"0","Length": "39","bestSong": "Born To Run","revisited":"N","imageName":"born to run.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Fun, and solid, but nothing spectacular. You get what you expect going in."},
"00194":{"Name": "Darkness on the Edge of Town","Artist": "Bruce Springsteen","Date": "25/01/2026","Year": "1978","Genres": "Pop, Rock","Score":"7","Stone":"0","Length": "42","bestSong": "Badlands","revisited":"N","imageName":"darkness on the edge of town.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "More exciting,and a little bit edgier than 'Born to Run'. I prefer the big hit too."},
"00195":{"Name": "Nebraska","Artist": "Bruce Springsteen","Date": "25/01/2026","Year": "1982","Genres": "Folk","Score":"6.5","Stone":"0","Length": "41","bestSong": "","revisited":"N","imageName":"nebraska.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "A lot more solemn than 'Born To Run' or even 'Darkness on the Edge of Town'. So much effective storytelling in these songs. Such a fun listen."},
"00196":{"Name": "Born in the U.S.A.","Artist": "Bruce Springsteen","Date": "25/01/2026","Year": "1984","Genres": "Rock, Pop","Score":"8.5","Stone":"0","Length": "47","bestSong": "Dancing In The Dark","revisited":"Y","imageName":"born in the usa.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The definitive Bruce Springsteen sound. Just fantastic."},
"00197":{"Name": "The Rising","Artist": "Bruce Springsteen","Date": "25/01/2026","Year": "2002","Genres": "Pop, Rock","Score":"6.5","Stone":"0","Length": "73","bestSong": "Into the Fire","revisited":"N","imageName":"the rising.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Bruce Springsteen's reflections on 9/11 - the most emotional of his albums that I've listened to. Comes together perfectly, but lacks a standout song to reach the heights of 'Born in the U.S.A' or 'Darkness on the Edge of Town'."},
"00198":{"Name": "In The Court of The Crimson King","Artist": "King Crimson(Ian McDonald)","Date": "26/01/2026","Year": "1999","Genres": "Art Rock, Prog Rock","Score":"8.5","Stone":"0","Length": "45","bestSong": "21st Century Schizoid Man","revisited":"N","imageName":"in the court of the crimson king.jpeg","suggester": "Jacob(1001 Albums You Must Hear Before You Die)","country": "England, Europe","description": "This album takes you on a journey! Every song sounds great, especially the first three. Love it!"},
"00199":{"Name": "69 Love Songs","Artist": "The Magnetic Fields","Date": "27/01/2026","Year": "1999","Genres": "Indie, Pop","Score":"3.5","Stone":"0","Length": "165","bestSong": "Busby Berkley Dreams","revisited":"N","imageName":"69 love songs.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "After a while I did settle into it and start to enjoy bits - but for the most part this album is boring. Boring for 40 minutes isn't terrible, but boring for close to 3 hours is a slog."},
"00200":{"Name": "John Prine","Artist": "John Prine","Date": "27/01/2026","Year": "1971","Genres": "Folk, Country","Score":"5.5","Stone":"0","Length": "45","bestSong": "Paradise","revisited":"N","imageName":"john prine.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Pleasant but nothing spectacular. Easy listening country that doesn't push any boundaries."},
"00200":{"Name": "John Prine","Artist": "John Prine","Date": "27/01/2026","Year": "1971","Genres": "Folk, Country","Score":"5.5","Stone":"0","Length": "45","bestSong": "Paradise","revisited":"N","imageName":"john prine.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Pleasant but nothing spectacular. Easy listening country that doesn't push any boundaries."},
"00201":{"Name": "Meddle","Artist": "Pink Floyd","Date": "27/01/2026","Year": "1971","Genres": "Art Rock, Prog Rock","Score":"7","Stone":"0","Length": "47","bestSong": "","revisited":"N","imageName":"meddle.jpeg","suggester": "Jacob","country": "England, Europe","description": ""},
"00202":{"Name": "I Am A Bird Now","Artist": "Antony and the Johnsons(ANOHNI)","Date": "28/01/2026","Year": "2010","Genres": "Indie, Art Pop","Score":"7","Stone":"0","Length": "35","bestSong": "Bird Guhl","revisited":"N","imageName":"I am a bird now.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America, England, Europe","description": "Honest and deeply emotional. Such a well constructed album. Angushiy-sad-lullaby sound."},
"00203":{"Name": "An Evening With Silksonic","Artist": "Silk Sonic(Bruno Mars, Anderson .Paak)","Date": "28/01/2026","Year": "2021","Genres": "R&B, Soul, Hip-Hop, Pop","Score":"7","Stone":"0","Length": "36","bestSong": "Fly As Me","revisited":"N","imageName":"an evening with silksonic.png","suggester": "","country": "USA, North America","description": "Sounds excellent - I get a very sanitized feel which I think does work very well in this case."},
"00204":{"Name": "Wet Leg","Artist": "Wet Leg","Date": "28/01/2026","Year": "2022","Genres": "Indie, Rock, Pop","Score":"7.5","Stone":"0","Length": "37","bestSong": "Wet Dream","revisited":"N","imageName":"wet leg.jpeg","suggester": "","country": "England, Europe","description": "Music to make you feel icky - but it still sounds great."},
"00205":{"Name": "Witchhazel","Artist": "Matt Berry","Date": "28/01/2026","Year": "2009","Genres": "Folk, Pop, Rock","Score":"8.5","Stone":"0","Length": "50","bestSong": "Take My Hand","revisited":"N","imageName":"witchazel.jpg","suggester": "","country": "England, Europe","description": "Take My Hand' is brilliant. The rest of the album (specifically 'The Pheasant') feels like the background music in a jazzy heist film, or the backing music to a criminal scheme (see Better Call Saul). Peter Serafinowicz as Paul McCartney is fun."},
"00206":{"Name": "Television Themes","Artist": "Matt Berry","Date": "28/01/2026","Year": "2018","Genres": "Folk, Psychedelic, Pop, Jazz","Score":"7.5","Stone":"0","Length": "30","bestSong": "Rainbow","revisited":"N","imageName":"television themes.jpeg","suggester": "","country": "England, Europe","description": "Just good fun for a background listen. Good selection made, the best being Doctor Who, Rainbow and Blankety Blank. "},
"00207":{"Name": "1999","Artist": "Prince","Date": "29/01/2026","Year": "1982","Genres": "Rock, Funk, Synth-Pop","Score":"6","Stone":"0","Length": "70","bestSong": "1999","revisited":"N","imageName":"1999.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Not seeing the appeal - it's too long and much of this is unremarkable. I still like it, but I expect more from something this huge."},
"00208":{"Name": "Wonderland","Artist": "Take That(Gary Barlow, Mark Owen, Howard Donald)","Date": "29/01/2026","Year": "2017","Genres": "Pop","Score":"7","Stone":"0","Length": "42","bestSong": "Giants","revisited":"N","imageName":"wonderland.png","suggester": "","country": "England, Europe","description": "music makes me feel good MuSIC MakES Me FeEL GOOD!! MUSIC MAKES ME FEEL GOOD!! Fun and energetic! Good post exam celebration album."},
"00209":{"Name": "Blue Is The Colour","Artist": "The Beautiful South(Paul Heaton,Jacqui Abbott)","Date": "29/01/2026","Year": "1996","Genres": "Indie, Pop, Rock","Score":"8.5","Stone":"0","Length": "49","bestSong": "Rotterdam (Or Anywhere)","revisited":"N","imageName":"blue is the colour.jpg","suggester": "","country": "England, Europe","description": "Enough variation on this album to be constantly exciting. Beautiful instrumentation coupled with witty lyricism. Fantastic!"},
"00210":{"Name": "The Authority","Artist": "Charlie Burke","Date": "29/01/2026","Year": "2022","Genres": "Indie","Score":"7","Stone":"0","Length": "20","bestSong": "The Authority","revisited":"N","imageName":"the authority.jpg","suggester": "","country": "England, Europe","description": "The amateur style of recording on this actually creates a really cool sound. Great lyricism - excited to hear more from her."},
"00211":{"Name": "Cosmic Opera Act I","Artist": "Labrinth","Date": "31/01/2026","Year": "2026","Genres": "R&B, Pop, Rap","Score":"8","Stone":"0","Length": "29","bestSong": "S.W.M.F","revisited":"N","imageName":"cosmic opera act 1.png","suggester": "","country": "England, Europe","description": "I wasn't expecting much after being extremely disappointed by his first album, but this is a HUGE improvement. Much more cohesive and a more mature sound. Not ending with horrible dubstep is a dubstep in the right direction."},
"00212":{"Name": "Ray Of Light","Artist": "Madonna","Date": "31/01/2026","Year": "1998","Genres": "Electronic, Pop","Score":"6.5","Stone":"0","Length": "67","bestSong": "Shanti / Ashtangi","revisited":"N","imageName":"ray of light.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I expected a fairly safe pop album, after listening to 'Like a Prayer'. Instead this is experimental and just a bit weird? There's a song about the imminent endtimes that's uncharacteristically dark and there's a song entirely in Sanskrit. It all works."},
"00213":{"Name": "A Rush of Blood to the Head","Artist": "Coldplay","Date": "31/01/2026","Year": "2002","Genres": "Art Rock","Score":"7","Stone":"0","Length": "54","bestSong": "The Scientist","revisited":"N","imageName":"a rush of blood to the head.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "So much criticism for this album seems to focus on it being boring or repetitive, but I think the withdrawn feeling works so well. I get a lot out of this."},
"00214":{"Name": "Music","Artist": "Madonna","Date": "01/02/2026","Year": "2000","Genres": "Pop, Electronic, Dance","Score":"4.5","Stone":"0","Length": "49","bestSong": "American Pie","revisited":"N","imageName":"music.png","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The electronica and dance elements of this are just a bit much."},
"00215":{"Name": "Everybody Knows This is Nowhere","Artist": "Neil Young, Crazy Horse","Date": "01/02/2026","Year": "1969","Genres": "Folk, Country, Rock","Score":"6","Stone":"0","Length": "41","bestSong": "Cinnamon Girl","revisited":"N","imageName":"everybody knows this is nowhere.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, Canada, North America","description": "Nice, but a bit bland. "},
"00216":{"Name": "After the Gold Rush","Artist": "Neil Young","Date": "01/02/2026","Year": "1970","Genres": "Folk, Country, Rock","Score":"6.5","Stone":"0","Length": "35","bestSong": "","revisited":"N","imageName":"after the gold rush.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, Canada, North America","description": "Similar to 'Everybody Knows This is Nowhere', but I just liked a few of the songs more. "},
"00217":{"Name": "Harvest","Artist": "Neil Young","Date": "01/02/2026","Year": "1972","Genres": "Folk, Country, Rock","Score":"8","Stone":"0","Length": "37","bestSong": "Heart of Gold","revisited":"N","imageName":"harvest.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, Canada, North America","description": "His best. If you're looking to listen to some Neil Young start here, and then stop."},
"00218":{"Name": "Tubular Bells","Artist": "Mike Oldfield","Date": "01/02/2026","Year": "1973","Genres": "Art Rock, Prog Rock","Score":"8","Stone":"0","Length": "49","bestSong": "Tubular Bells - Pt I","revisited":"N","imageName":"tubular bells.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Probably the best thing ever created by human beings - 8/10."},
"00219":{"Name": "On the Beach","Artist": "Neil Young","Date": "01/02/2026","Year": "1974","Genres": "Folk, Country, Rock","Score":"6","Stone":"0","Length": "40","bestSong": "","revisited":"N","imageName":"on the beach.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, Canada, North America","description": "Again a bit bland. Maybe Neil Young just isn't for me. "},
"00220":{"Name": "Out of Step","Artist": "Minor Threat","Date": "01/02/2026","Year": "1984","Genres": "Hardcore Punk, Rock","Score":"6","Stone":"0","Length": "22","bestSong": "","revisited":"N","imageName":"out of step.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Some nice moments, but for me this just feels like unaimed anger without any underlying melody."},
"00221":{"Name": "Natty Dread","Artist": "Bob Marley & The Wailers","Date": "02/02/2026","Year": "1974","Genres": "Reggae","Score":"6","Stone":"0","Length": "42","bestSong": "No Woman No Cry","revisited":"N","imageName":"natty dread.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Jamaica, North America","description": "I had a good time, but wasn't at all blown away. Misty in Roots at Eurovision is better."},
"00222":{"Name": "It Takes a Nation of Millions to Hold Us Back","Artist": "Public Enemy","Date": "02/02/2026","Year": "1988","Genres": "Hip Hop, Rap","Score":"6.5","Stone":"15","Length": "57","bestSong": "Party For Your Right To Fight","revisited":"N","imageName":"it takes a nation of millions.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "A fierce album, with enough good songs. I think it could take a few cuts to be really great. There's some great lyricism and social commentary. "},
"00223":{"Name": "Fear of a Black Planet","Artist": "Public Enemy","Date": "02/02/2026","Year": "1990","Genres": "Hip Hop, Rap","Score":"8.5","Stone":"0","Length": "63","bestSong": "Fight The Power","revisited":"N","imageName":"fear of a black planet.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Bit more pop-y and much more fun. This album has so many great tracks on it, and justifies the longer runtime, unlike their previous album. There are some really good samples."},
"00224":{"Name": "Apocalypse 91...The Enemy Strikes Black","Artist": "Public Enemy","Date": "02/02/2026","Year": "1991","Genres": "Hip Hop, Rap","Score":"8","Stone":"0","Length": "52","bestSong": "A Letter To The New York Post","revisited":"N","imageName":"apocalypse 91.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Almost as good as 'Fear of a Black Planet' for me - maybe just needed one more hit. Great sound, funny, referential. "},
"00225":{"Name": "Straight Outta Compton","Artist": "N.W.A.","Date": "02/02/2026","Year": "1989","Genres": "Hip Hop, Gansta Rap","Score":"6.5","Stone":"0","Length": "60","bestSong": "Express Yourself","revisited":"N","imageName":"straight outta compton.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Public Enemy write thoughtful well structured songs about race; Ice Cube writes about how much sex he's having, how many guns he owns and how much he hates women. It sounds great, just hard to see past the lyrics."},
"00226":{"Name": "The Rise and Fall of a Midwest Princess","Artist": "Chappell Roan","Date": "03/02/2026","Year": "2023","Genres": "Pop","Score":"10","Stone":"0","Length": "49","bestSong": "Femininomenom","revisited":"N","imageName":"rise and fall of a midwest princess.png","suggester": "","country": "USA, North America","description": "How is it that every song could be a lead single and it still works as one cohesive piece. It's just perfect."},
"00227":{"Name": "Never Mind The Bollocks, Here's the Sex Pistols","Artist": "Sex Pistols","Date": "03/02/2026","Year": "1977","Genres": "Punk, Rock","Score":"7.5","Stone":"0","Length": "39","bestSong": "God Save the Queen","revisited":"N","imageName":"never mind the bollocks, here's the sex pistols.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "You can see why this was a seminal punk album. The half-talk singing style is great, especially with the anger of the lyricism. Timeless."},
"00228":{"Name": "GUTS","Artist": "Olivia Rodrigo","Date": "03/02/2026","Year": "2023","Genres": "Pop, Rock","Score":"8.5","Stone":"0","Length": "39","bestSong": "get him back!","revisited":"N","imageName":"guts.png","suggester": "","country": "USA, North America","description": "She's got one trick: making a sudden transition from a calmer sound to a loud rock style. It works every time."},
"00229":{"Name": "Who Killed...... the Zutons?","Artist": "The Zutons","Date": "03/02/2026","Year": "2004","Genres": "Folk, Rock, Indie","Score":"6","Stone":"0","Length": "43","bestSong": "Don't Ever Think (Too Much)","revisited":"N","imageName":"who killed the zutons.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "It's incredibly inoffensive. I did enjoy it, but I was expecting something new and exciting. I do love the cover though."},
"00230":{"Name": "Songs For Swingin' Lovers","Artist": "Frank Sinatra","Date": "03/02/2026","Year": "1956","Genres": "Vocal Jazz, Traditional Pop","Score":"6","Stone":"0","Length": "45","bestSong": "Anything Goes","revisited":"N","imageName":"songs for swinging lovers.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Fun - but nothing special. I wouldn't rush to listen to this. Not as jazzy or exciting as some of his other stuff."},
"00231":{"Name": "Zz-Sides","Artist": "Tom Rosenthal","Date": "03/02/2026","Year": "2023","Genres": "Folk, Indie","Score":"7","Stone":"0","Length": "38","bestSong": "All a Bit Too Loud","revisited":"N","imageName":"zz-sides.jpg","suggester": "Lucinda","country": "England, Europe","description": "I like this a lot, though I think it evokes a very different emotion in me than intended. Where this might be intended to be comforting - it gives me goosebumps, kinda chills me. Regardless it's good!"},
"00232":{"Name": "My Way","Artist": "Frank Sinatra","Date": "03/02/2026","Year": "1969","Genres": "Vocal Jazz, Traditional Pop","Score":"8","Stone":"0","Length": "40","bestSong": "My Way","revisited":"N","imageName":"my way.jpg","suggester": "","country": "USA, North America","description": "This is a great selection of songs for Frank Sinatra, and the jazzier arrangement works well. 'My Way' and 'For Once In My Life' are both excellent. His 'Mrs Robinson' cover is surprisingly good."},
"00233":{"Name": "Anything Goes (2011 Recording)","Artist": "Cole Porter, Sutton Foster, Joel Grey, Broadway Cast","Date": "04/02/2026","Year": "2011","Genres": "Musical Sountrack, Vocal Jazz, Broadway standard","Score":"7","Stone":"0","Length": "60","bestSong": "Anything Goes","revisited":"N","imageName":"anything goes.png","suggester": "","country": "USA, North America","description": "The classic broadway sound is great and the title track is especially fantastic. There are definitely some weaker tracks (and some questionable lyrics) but overall it's a good listen."},
"00234":{"Name": "Dance Mania Vol. 1","Artist": "Tito Puente","Date": "05/02/2026","Year": "1958","Genres": "Mambo, Dance","Score":"8","Stone":"0","Length": "38","bestSong": "Hong Kong Mambo","revisited":"N","imageName":"dance mania.jpeg","suggester": "1001 Albums You Must Hear Before You Die","country": "Puerto Rico, North America","description": "Spotify describes Tito Puente as bouyant, which I think is the perfect word. It's cheerful, optimistic, and floaty. Much to enjoy here!"},
"00235":{"Name": "Rings Around The World","Artist": "Super Fury Animals","Date": "05/02/2026","Year": "2001","Genres": "Rock, Electronic","Score":"7","Stone":"0","Length": "53","bestSong": "Rings Around the World","revisited":"N","imageName":"rings around the world.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Wales, Europe","description": "Almost great - but every song feels a bit jagged and unpleasant. I really want to love it, but I just don't quite. "},
"00236":{"Name": "In The City","Artist": "Tavares","Date": "05/02/2026","Year": "1975","Genres": "R&B, Soul","Score":"9","Stone":"0","Length": "36","bestSong": "I Hope She Chooses Me","revisited":"N","imageName":"in the city tavares.jpg","suggester": "Jacob","country": "USA, North America","description": "Such an infectious sound. It's suave but not too serious. The song about having a bad dream that you are inducted into the Fools Hall of Fame is so funny."},
"00237":{"Name": "Superfuzz Bigmuff","Artist": "Mudhoney","Date": "06/02/2026","Year": "1988","Genres": "Rock, Grunge","Score":"5","Stone":"0","Length": "23","bestSong": "In 'n' Out of Grace","revisited":"Y","imageName":"superfuzz bigmuff.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "As with lots of grunge, I just find it hard to get along with. It always seems to have potential, but is permanantly underwhelming."},
"00238":{"Name": "Kenya","Artist": "Machito","Date": "06/02/2026","Year": "1957","Genres": "Art Rock, Rock","Score":"8","Stone":"0","Length": "36","bestSong": "Congo Mulence","revisited":"N","imageName":"kenya.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Cuba, USA, North America","description": "Hard not to like! Exciting, bombastic jazz ."},
"00239":{"Name": "Ghosteen","Artist": "Nick Cave & The Bad Seeds","Date": "06/02/2026","Year": "2019","Genres": "Rock, Pop","Score":"8","Stone":"0","Length": "78","bestSong": "Spinning Song","revisited":"N","imageName":"ghosteen.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Australia, Oceania","description": "Really unsettling. Feels like the music that you would hear as you die before everything fades away."},
"00240":{"Name": "The Life Of A Showgirl","Artist": "Taylor Swift(Max Martin)","Date": "09/02/2026","Year": "2025","Genres": "Pop","Score":"7","Stone":"0","Length": "42","bestSong": "Opalite","revisited":"N","imageName":"the life of a showgirl.jpg","suggester": "","country": "USA, North America","description": "By far her weakest album lyrically for me, but the pacing and hooks are excellent - especially on the first few tracks. If you're not properly listening this could be great (derogatory)"},
"00241":{"Name": "2112","Artist": "Rush","Date": "09/02/2026","Year": "1976","Genres": "Prog Rock, Art Rock, Metal","Score":"7.5","Stone":"0","Length": "39","bestSong": "A Passage to Bangkok","revisited":"N","imageName":"2112.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Canada, North America","description": "Vaguely has the sound of Pink Floyd, but it's more accessible and a bit space-ier. I liked it a lot!"},
"00242":{"Name": "Blue","Artist": "Joni Mitchell","Date": "09/02/2026","Year": "1971","Genres": "Folk, Rock","Score":"7","Stone":"3","Length": "36","bestSong": "River","revisited":"N","imageName":"blue joni.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Canada, USA, North America","description": "She's got a brillaint voice, which especially works well here with the air of longing and pining and regret etc. It's cold, but also soft and welcoming."},
"00243":{"Name": "Court and Spark","Artist": "Joni Mitchell","Date": "09/02/2026","Year": "1974","Genres": "Rock, Pop","Score":"6","Stone":"0","Length": "37","bestSong": "Raised on Robbery","revisited":"N","imageName":"court and spark.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Canada, USA, North America","description": "The cold but welcoming feel of 'Blue' is gone for me. Felt to me like an inferior retread of her earlier work. The last few tracks are more exciting, and more fun. I prefered those."},
"00244":{"Name": "The Hissing of Summer Lawns","Artist": "Joni Mitchell","Date": "09/02/2026","Year": "1975","Genres": "Rock, Art Rock, Folk","Score":"6.5","Stone":"0","Length": "43","bestSong": "The Jungle Line","revisited":"N","imageName":"the hissing of the summer lawns.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Canada, USA, North America","description": ""},
"00245":{"Name": "Hejira","Artist": "Joni Mitchell","Date": "10/02/2026","Year": "1976","Genres": "Folk, Rock, Vocal Jazz","Score":"7.5","Stone":"0","Length": "52","bestSong": "Coyote","revisited":"N","imageName":"hejira.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Canada, USA, North America","description": "Cohesive, joyous, and warm. I think I've really settled into her style, which makes me want to revisit the previous two albums. "},
"00246":{"Name": "Foreigner ","Artist": "Foreigner(Ian McDonald)","Date": "10/02/2026","Year": "1977","Genres": "Rock, Pop","Score":"8.5","Stone":"0","Length": "39","bestSong": "Cold As Ice","revisited":"N","imageName":"foreigner.jpg","suggester": "Jacob","country": "England, Europe, USA, North America","description": "A really comforting rock sound. The first two tracks are both excellent and so welcoming. "},
"00247":{"Name": "Mingus","Artist": "Joni Mitchell, Charles Mingus","Date": "10/02/2026","Year": "1979","Genres": "Jazz","Score":"6","Stone":"0","Length": "37","bestSong": "","revisited":"N","imageName":"mingus joni.jpg","suggester": "","country": "Canada, USA, North America","description": "Jazzy and exciting - but also confusing. The context around the creation of this album is just bizarre, and it's hard to listen without taking that into consideration."},
"00248":{"Name": "LP1","Artist": "FKA Twigs","Date": "10/02/2026","Year": "2014","Genres": "Electronic, Art Pop","Score":"4.5","Stone":"0","Length": "41","bestSong": "Hours","revisited":"N","imageName":"LP1 FKA.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "About a 50/50 split between 'oh this is cool' and 'oh this falls flat'. I'll give it another chance soon, but for now - it just isn't working for me."},
"00249":{"Name": "Honey to the B","Artist": "Billie Piper","Date": "11/02/2026","Year": "1998","Genres": "Pop","Score":"5.5","Stone":"0","Length": "51","bestSong": "Don't Forget to Remember","revisited":"N","imageName":"honey to the bee.jpg","suggester": "","country": "England, Europe","description": "Certainly flawed (a bit too long, songs are individually repetitive, extremely dated) but also charming. It's astonashing that she was only 16."},
"00250":{"Name": "In Our Heads","Artist": "Hot Chip","Date": "12/02/2026","Year": "2012","Genres": "Synth Pop, Dance, Electronic, Funk","Score":"5","Stone":"0","Length": "57","bestSong": "Don't Deny Your Heart","revisited":"N","imageName":"in our heads.jpg","suggester": "","country": "England, Europe","description": "Parts of this I like, parts of it I don't so much. Overall, I think if I want to listen to electronic music there are others doing exactly this but better. "},
"00250":{"Name": "In Our Heads","Artist": "Hot Chip","Date": "12/02/2026","Year": "2012","Genres": "Synth Pop, Dance, Electronic, Funk","Score":"5","Stone":"0","Length": "57","bestSong": "Don't Deny Your Heart","revisited":"N","imageName":"in our heads.jpg","suggester": "","country": "England, Europe","description": "Parts of this I like, parts of it I don't so much. Overall, I think if I want to listen to electronic music there are others doing exactly this but better. "},
"00251":{"Name": "The Record","Artist": "boygenius(Pheobe Bridgers)","Date": "12/02/2026","Year": "2023","Genres": "Indie, Rock, Folk","Score":"7","Stone":"0","Length": "42","bestSong": "True Blue","revisited":"N","imageName":"the record.jpg","suggester": "","country": "USA, North America","description": "Three voices working together beautifully. There's some fantastic lyricism here and great songwriting. I can appreciate the brilliance, it's just not quite my vibe."},
"00252":{"Name": "Rocketbirds","Artist": "New World Revolution","Date": "12/02/2026","Year": "2011","Genres": "Rock","Score":"8","Stone":"0","Length": "32","bestSong": "The One","revisited":"N","imageName":"rocketbirds.jpg","suggester": "","country": "USA, North America","description": "If you want to listen to a rock album about a chicken overthrowing a dictatorship, with elements of electro - this will deliver. If you don't want to listen to a rock album about a chicken overthrowing a dictatorship, with elements of electro, then this will do nothing for you."},
"00253":{"Name": "Seal","Artist": "Seal","Date": "12/02/2026","Year": "1991","Genres": "Soul, R&B, Funk","Score":"6","Stone":"0","Length": "51","bestSong": "Crazy","revisited":"N","imageName":"seal 1991.jpg","suggester": "Jacob","country": "England, Europe","description": "Crazy' is excellent, but the rest of this somewhat falls flat for me. We don't really get to experience how beautiful his voice is. "},
"00254":{"Name": "Olympia 64","Artist": "Jacques Brel","Date": "12/02/2026","Year": "1964","Genres": "Chanson, Live, Folk","Score":"5.5","Stone":"0","Length": "28","bestSong": "Amsterdam","revisited":"N","imageName":"olympia 64.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Belgium, Europe","description": "Like 20% of this is just people clapping. The remaining 80% sounds beautiful, but I can feel that some of it is lost on me being unable to understand the language. "},
"00255":{"Name": "Rio","Artist": "Duran Duran","Date": "12/02/2026","Year": "1982","Genres": "New Wave, Synth Pop, Dance","Score":"8","Stone":"0","Length": "43","bestSong": "Rio","revisited":"N","imageName":"rio.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Quintesential new wave, synth pop-y exciting music. Enough hits, a good length - what's not to like?"},
"00256":{"Name": "My 21st Century Blues","Artist": "RAYE","Date": "13/02/2026","Year": "2023","Genres": "Pop, Blues, Hip Hop, R&B","Score":"8.5","Stone":"0","Length": "47","bestSong": "Oscar Winning Tears","revisited":"N","imageName":"my 21st century blues.jpg","suggester": "Jacob","country": "England, Europe","description": "Bombastic, and powerful. Moves fast, doesn't look back. A generational talent."},
"00257":{"Name": "At Fillmore East","Artist": "the Allman Brothers","Date": "13/02/2026","Year": "1971","Genres": "Live, Rock","Score":"6","Stone":"0","Length": "78","bestSong": "You Don't Love Me","revisited":"N","imageName":"at filmore east.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Like listening to some friends (or brothers) just improvising, and having a bit of fun with instruments, but a bit more refined. That hangout vibe is nice, but thoroughly unrewarding at 78 minutes. "},
"00258":{"Name": "Let's Talk About Love","Artist": "Modern Talking","Date": "13/02/2026","Year": "1985","Genres": "Disco","Score":"7","Stone":"0","Length": "38","bestSong": "Cheri Cheri Lady","revisited":"N","imageName":"let's talk about love.jpg","suggester": "","country": "Germany, Europe","description": "This is doing what Rio did, but not quite as good. One or two more hits and this would work well. At the minute, listen to the first few tracks and you can move on."},
"00259":{"Name": "Songs in the Key of Life","Artist": "Stevie Wonder","Date": "13/02/2026","Year": "1976","Genres": "Pop, Blues, R&B, Soul","Score":"7.5","Stone":"4","Length": "105","bestSong": "Sir Duke","revisited":"N","imageName":"songs in the key of life.jpg","suggester": "Jacob(1001 Albums You Must Hear Before You Die)","country": "USA, North America","description": "One of the few albums of this length to really earn it. Dynamic enough to remain exciting, but consistent enough to feel cohesive. This album demands relistens."},
"00260":{"Name": "Car Wheels on a Gravel Road","Artist": "Lucinda Williams","Date": "13/02/2026","Year": "1998","Genres": "Folk","Score":"6","Stone":"0","Length": "52","bestSong": "Greenville","revisited":"N","imageName":"car wheels on a gravel road.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I really want to like this, but the instrumentation, singing, and lyricism all feel slightly off to me. Maybe it's just not quite my thing. "},
"00261":{"Name": "Eyes Wide Open","Artist": "Sabrina Carpenter","Date": "13/02/2026","Year": "2015","Genres": "Folk, Pop","Score":"7","Stone":"0","Length": "41","bestSong": "","revisited":"N","imageName":"eyes wide open.jpg","suggester": "","country": "USA, North America","description": "Nice, honest, but nothing remarkable. It's very impressive from someone of her age - it has the sweetness of 'Honey to the Bee' but a little more mature. I like it, but I don't love it."},
"00262":{"Name": "Evolution","Artist": "Sabrina Carpenter","Date": "13/02/2026","Year": "2016","Genres": "Pop, Dance","Score":"4","Stone":"0","Length": "33","bestSong": "","revisited":"N","imageName":"evolution.jpg","suggester": "","country": "USA, North America","description": "Too dance heavy without any proper substance. Lyrically a bit weaker than her other entries. I'm glad that this isn't the sound she stuck with."},
"00263":{"Name": "The Number of the Beast","Artist": "Iron Maiden","Date": "13/02/2026","Year": "1982","Genres": "Metal","Score":"8.5","Stone":"0","Length": "40","bestSong": "The Number of the Beast","revisited":"N","imageName":"the number of the beast.jpg","suggester": "Jacob(1001 Albums You Must Hear Before You Die)","country": "England, Europe","description": "Metal done right. Angry, but thoughtful and melodic. I'm not gasping for an ounce of proper songwriting like with a lot of other metal. "},
"00264":{"Name": "The Genius of Ray Charles","Artist": "Ray Charles","Date": "13/02/2026","Year": "1959","Genres": "Traditional Pop, R&B, Jazz","Score":"","Stone":"0","Length": "38","bestSong": "","revisited":"N","imageName":"the genius of ray charles.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Really funny album name, ..."},
"00265":{"Name": "Djam Leelii","Artist": "Baaba Maal, Mansour Seck","Date": "16/02/2026","Year": "1989","Genres": "African Folk","Score":"6","Stone":"0","Length": "48","bestSong": "Djam Leelii","revisited":"N","imageName":"Djam Leelii.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Senegal, Africa","description": "Lots of this is really beautiful, but it's not as audacious as other albums I've listened to with a similar sound. I think this one would grow on me the more I heard it."},
"00266":{"Name": "Wuthering Heights ","Artist": "Charli XCX","Date": "16/02/2026","Year": "2026","Genres": "Soundtrack, Pop, Electronic","Score":"7","Stone":"0","Length": "35","bestSong": "Always Everywhere","revisited":"N","imageName":"wuthering heights.jpg","suggester": "","country": "England, Europe","description": "Not as good as Brat, but carries the same sound in a tighter package. The features are all well placed, and for a soundtrack album it's very well paced."},
"00267":{"Name": "Strange Cargo III","Artist": "William Orbit","Date": "16/02/2026","Year": "1993","Genres": "Electronic","Score":"8","Stone":"0","Length": "63","bestSong": "...","revisited":"N","imageName":"strange cargo III.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Just the epitomy of peaceful but stimulating. It's so calming, but it's never boring. Absolutely masterful."},
"00268":{"Name": "Hunky Dory","Artist": "David Bowie","Date": "16/02/2026","Year": "1971","Genres": "Art Pop, Rock","Score":"9.5","Stone":"0","Length": "42","bestSong": "Quicksand","revisited":"N","imageName":"hunky dory.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Masterful. Not a single song anything less than excellent. Abstract, funny but never inaccesable. "},
"00269":{"Name": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars","Artist": "David Bowie","Date": "17/02/2026","Year": "1972","Genres": "Art Rock","Score":"8.5","Stone":"0","Length": "39","bestSong": "Five Years","revisited":"N","imageName":"the rise and fall of ziggy stardust.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Much like Hunky Dory, it's just choc full of great tracks. It's very close, but I think I like this one a little less (not to say it isn't still a masterpiece)."},
"00270":{"Name": "Very","Artist": "Pet Shop Boys","Date": "17/02/2026","Year": "1993","Genres": "Synth Pop, Dance, Electronic","Score":"7.5","Stone":"0","Length": "54","bestSong": "I Wouldn't Normally Do This Kind of Thing","revisited":"N","imageName":"very.png","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "A bit dancier than I was expecting, and maybe more melow? It's good, but doesn't hold up to their best stuff."},
"00271":{"Name": "At Mister Kelly's","Artist": "Sarah Vaughan and Her Trio","Date": "17/02/2026","Year": "1957","Genres": "Live, Jazz","Score":"6.5","Stone":"0","Length": "36","bestSong": "","revisited":"N","imageName":"at mister kelly's.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "She's got a great voice, and this is a great choice of tracks for her. The introduction at the start is sweet. Other than that though, there's not much going for this."},
"00272":{"Name": "Crying Laughing Loving Lying","Artist": "Labi Siffre","Date": "17/02/2026","Year": "1972","Genres": "Folk, Rock, Pop","Score":"8","Stone":"0","Length": "41","bestSong": "Crying Laughing Loving Lying","revisited":"N","imageName":"crying loving laughing lying.jpg","suggester": "Jacob","country": "England, Europe","description": "Brilliantly constructed. Doesn't overstay its welcome at all. "},
"00273":{"Name": "A Flock of Seagulls","Artist": "A Flock of Seagulls","Date": "18/02/2026","Year": "1982","Genres": "New Wave, Synth Pop, Dance","Score":"6.5","Stone":"0","Length": "40","bestSong": "I Ran","revisited":"N","imageName":"a flock of seagulls.jpg","suggester": "","country": "England, Europe","description": "I Ran is good, but the rest of the album is unremarkable. This is like if A-Ha was more underwhelming."},
"00274":{"Name": "Vulgar Display of Power","Artist": "Pantera","Date": "19/02/2026","Year": "1992","Genres": "Metal, Rock","Score":"7.5","Stone":"0","Length": "53","bestSong": "Rise","revisited":"N","imageName":"vulgar display of power.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I think unlike a lot of metal that I've heard in the past, this album has a lot of really great melodies. "},
"00275":{"Name": "Golden Hour","Artist": "Kacey Musgraves","Date": "19/02/2026","Year": "2018","Genres": "Country, Pop","Score":"8","Stone":"0","Length": "46","bestSong": "","revisited":"N","imageName":"golden hour.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Lyrically really great. She does a similar thing to Noah Kahan of using short analogies to tell a wider story of her growing up."},
"00276":{"Name": "Lady in Satin","Artist": "Billie Holiday","Date": "19/02/2026","Year": "1959","Genres": "Vocal Jazz","Score":"6","Stone":"0","Length": "45","bestSong": "","revisited":"N","imageName":"lady in satin.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Peaceful, and classy, but maybe a little boring. The songs all have the same essence, but none are as good as 'Crazy He Calls Me'."},
"00277":{"Name": "Time Out","Artist": "Dave Brubeck","Date": "19/02/2026","Year": "1959","Genres": "Jazz","Score":"7","Stone":"0","Length": "39","bestSong": "I'm a Fool to Want You","revisited":"N","imageName":"time out.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "This fades into the background in such a lovely way. This is on the softer, more relaxing side of jazz (sorry La La Land), and I really like it!"},
"00278":{"Name": "A Date With The Everly Brothers","Artist": "The Everly Brothers","Date": "19/02/2026","Year": "1960","Genres": "Traditional Pop, Rock and Roll, Country","Score":"7.5","Stone":"0","Length": "28","bestSong": "Cathy's Clown","revisited":"N","imageName":"a date with the everly brothers.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Lyrically, so behind the times - the first song is mysoginistic, and the rest are fairly plain. Sound-wise though this is fantastic. It's charming, and comforting but still exciting. Difficult to rate this one!"},
"00279":{"Name": "Elvis is Back","Artist": "Elvis Presley","Date": "19/02/2026","Year": "1960","Genres": "Rock and Roll, Pop, Blues","Score":"6.5","Stone":"0","Length": "32","bestSong": "Fever","revisited":"N","imageName":"elvis is back.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Fairly standard early Elvis sound, with the standout exception being Fever, which is really unsettling. Overall, it's just fine."},
"00280":{"Name": "At Newport 1960","Artist": "Muddy Waters","Date": "19/02/2026","Year": "1960","Genres": "Live, Blues","Score":"6","Stone":"0","Length": "35","bestSong": "","revisited":"N","imageName":"at newport 1960.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I like this, but I don't love it. I think this is just a fairly standard live blues album. Maybe I'm unfamiliar with the nuance."},
"00281":{"Name": "Joan Baez","Artist": "Joan Baez","Date": "20/02/2026","Year": "1960","Genres": "Folk","Score":"4","Stone":"0","Length": "46","bestSong": "","revisited":"N","imageName":"Joan Baez.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "When listening to an artists take on classic ballads, my main focus is always going to be on their arrangement and voice. The arrangements here are a tad dull, and I find the singing style offputting. Sorry Joan Baez - you seem really nice."},
"00282":{"Name": "Innervisions","Artist": "Stevie Wonder","Date": "20/02/2026","Year": "1973","Genres": "Soul, Funk, Rock","Score":"7","Stone":"0","Length": "44","bestSong": "","revisited":"N","imageName":"innervisions.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Feels like an inferior precursor to 'Songs in the Key of Life'. There's nothing wrong with it, it's a solid listen, but compared to the genius of his later album, it falls flat."},
"00283":{"Name": "Kind of Blue","Artist": "Miles Davis","Date": "20/02/2026","Year": "1959","Genres": "Jazz","Score":"6","Stone":"0","Length": "46","bestSong": "...","revisited":"N","imageName":"kind of blue.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I know I'm in the minority here, but this kinda disappointed me. I was expecting something dazzling, but instead it's fairly relaxing. I'm not against melancholy but this just didn't work for me."},
"00284":{"Name": "Miriam Makeba","Artist": "Miriam Makeba","Date": "20/02/2026","Year": "1961","Genres": "African Folk, Afrobeats","Score":"8","Stone":"0","Length": "36","bestSong": "Mbube","revisited":"N","imageName":"miriam mabeka.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "South Africa, Africa","description": "Lots going on here! Such a cool sound, and it's nice to hear a version fo Mbube that isn't somewhat dodgy. What is going on in `One Last Dance'?? Overall, excellent!"},
"00285":{"Name": "Sunday at the Village Vanguard","Artist": "Bill Evans Trio","Date": "21/02/2026","Year": "1961","Genres": "Live, Jazz","Score":"6.5","Stone":"0","Length": "42","bestSong": "Solar","revisited":"N","imageName":"sunday at the village.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I think I've heard too many live jazz albums recently. This is just fine. I'll revisit it after a jazz drought. "},
"00286":{"Name": "Modern Sounds in Country and Western Music","Artist": "Ray Charles","Date": "22/02/2026","Year": "1962","Genres": "Country, R&B","Score":"7","Stone":"0","Length": "40","bestSong": "Bye Bye Love","revisited":"N","imageName":"Modern Sounds in Country and Western Music.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": ""},
"00287":{"Name": "Jazz Samba","Artist": "Stan Getz,Charlie Byrd","Date": "22/02/2026","Year": "1962","Genres": "Bossa-Nova, Jazz, Samba","Score":"6.5","Stone":"0","Length": "33","bestSong": "","revisited":"N","imageName":"jazz samba.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Lacks the punch of 'Big Band Bossa Nova' but still delivers some good stuff. "},
"00288":{"Name": "Come Away With Me","Artist": "Norah Jones","Date": "22/02/2026","Year": "2002","Genres": "Blues, Pop, Soft Rock, Country, Soul","Score":"7","Stone":"0","Length": "45","bestSong": "Cold Cold Heart","revisited":"N","imageName":"Come Away With Me.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": ""},
"00289":{"Name": "Green Onions","Artist": "Booker T. & The M.G.'s","Date": "22/02/2026","Year": "1962","Genres": "Rock, Soul","Score":"7","Stone":"0","Length": "35","bestSong": "Green Onions","revisited":"N","imageName":"green onions.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Start with a song called 'Green Onions'. Then half way through an album, do pretty much the same song again, but call it 'Mo Onions' this time. Genius."},
"00290":{"Name": "KIWANUKA","Artist": "Michael Kiwanuka","Date": "22/02/2026","Year": "2019","Genres": "Soul, Psychedelic","Score":"9","Stone":"0","Length": "51","bestSong": "Living in Denial","revisited":"N","imageName":"KIWANUKA.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "heartfelt"},
"00291":{"Name": "Adventure Time: Come Along With Me","Artist": "Various Artists","Date": "22/02/2026","Year": "2018","Genres": "Soundtrack, Pop, Lo-Fi","Score":"7.5","Stone":"0","Length": "24","bestSong": "Island Song","revisited":"N","imageName":"come along with me.jpg","suggester": "","country": "USA, North America","description": ""},
"00292":{"Name": "Life Thru a Lens","Artist": "Robbie Williams","Date": "22/02/2026","Year": "1997","Genres": "Pop, Rock","Score":"7.5","Stone":"0","Length": "53","bestSong": "Angels","revisited":"N","imageName":"life thru a lens.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "This is an excellent debut album by a clearly beaten down, struggling man. I don't think it sounds dated at all, and it's not an album that lets its hits do all the heavy lifting. Overall, it's good fun, and a worthwhile entry to '1001 Albums You Must Hear Before You Die'."},
"00293":{"Name": "Please Please Me","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "22/02/2026","Year": "1963","Genres": "Rock, Pop","Score":"8","Stone":"0","Length": "33","bestSong": "Love Me Do","revisited":"N","imageName":"please please me.jpg","suggester": "","country": "England, Europe","description": "excellent debut"},
"00294":{"Name": "With the Beatles","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "22/02/2026","Year": "1963","Genres": "Rock, Pop, R&B","Score":"7","Stone":"0","Length": "33","bestSong": "All My Loving","revisited":"N","imageName":"with the beatles.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "dip in quality"},
"00295":{"Name": "A Hard Day's Night","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "23/02/2026","Year": "1964","Genres": "Rock, Pop","Score":"8","Stone":"0","Length": "30","bestSong": "Tell Me Why","revisited":"N","imageName":"a hard days night.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "similar to please please me in quality, like the style a bit more"},
"00296":{"Name": "Help!","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "23/02/2026","Year": "1965","Genres": "Rock, Pop, Folk","Score":"9","Stone":"0","Length": "34","bestSong": "Yesterday","revisited":"N","imageName":"help.jpg","suggester": "","country": "England, Europe","description": "Yesterday' is their first properly perfect song. "},
"00297":{"Name": "Rubber Soul","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "23/02/2026","Year": "1965","Genres": "Rock, Pop, Folk","Score":"8","Stone":"0","Length": "36","bestSong": "In My Life","revisited":"N","imageName":"rubber soul.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": ""},
"00298":{"Name": "Revolver","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "23/02/2026","Year": "1966","Genres": "Rock, Pop, R&B","Score":"8","Stone":"0","Length": "35","bestSong": "For No One","revisited":"N","imageName":"revolver.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Contains my favourite Beatles song, 'For No One'. Feels like their loneliest record, it's chilly. I like it a lot!"},
"00299":{"Name": "Sgt. Pepper's Lonely Hearts Club Band","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "23/02/2026","Year": "1967","Genres": "Rock, Pop, Psychedelic, Art Rock, Art Pop","Score":"9","Stone":"0","Length": "39","bestSong": "Sgt. Pepper's Lonely Hearts Club Band","revisited":"N","imageName":"sgt peppers.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Often with seminal art, it's apparently brilliant because it was the first thing to do something. But then everyone else came along and did that something better. Not the case here! This just is brilliant. "},
"00300":{"Name": "Magical Mystery Tour","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "23/02/2026","Year": "1967","Genres": "Rock, Pop, Psychedelic, Art Rock, Art Pop","Score":"8.5","Stone":"0","Length": "36","bestSong": "Hello, Goodbye","revisited":"N","imageName":"magical mystery tour.jpg","suggester": "","country": "England, Europe","description": "Hard to rate as it has probably the best average quality of songs for a Beatles album, but is the least cohesive so far (probably because it wasn't released conventionally). Still a really good time."},
"00300":{"Name": "Magical Mystery Tour","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "23/02/2026","Year": "1967","Genres": "Rock, Pop, Psychedelic, Art Rock, Art Pop","Score":"8.5","Stone":"0","Length": "36","bestSong": "Hello, Goodbye","revisited":"N","imageName":"magical mystery tour.jpg","suggester": "","country": "England, Europe","description": "Hard to rate as it has probably the best average quality of songs for a Beatles album, but is the least cohesive so far (probably because it wasn't released conventionally). Still a really good time."},
"00301":{"Name": "The White Album","Artist": "The Beatles(Paul McCartney, Ringo Starr, John Lennon, George Harrison)","Date": "24/02/2026","Year": "1968","Genres": "Rock, Pop, Folk","Score":"7","Stone":"0","Length": "93","bestSong": "Ob-La-Di, Ob-La-Da","revisited":"N","imageName":"the white album.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "Significantly less snappy than their earlier entries. While much of this is beautiful, clever, and fun, it also has a fair amount of fluff. Revolution 9 is too long, and feels pretentious to me. Maybe it'll grow on me."},
"00302":{"Name": "The Black Album","Artist": "Jay-Z","Date": "24/02/2026","Year": "2003","Genres": "Hip Hop, Rap","Score":"9","Stone":"0","Length": "56","bestSong": "December 4th","revisited":"N","imageName":"the black album.jpg","suggester": "","country": "USA, North America","description": "Some incredible samples here. One of the best things about a great hip-hop record is that it often also feels like a list of recommendations. The rapping is good, the theme is great. Fantastic listen!"},
"00303":{"Name": "The Grey Album","Artist": "Danger Mouse","Date": "25/02/2026","Year": "2004","Genres": "Hip Hop, Rap","Score":"9","Stone":"0","Length": "45","bestSong": "Encore","revisited":"N","imageName":"the grey album.jpg","suggester": "","country": "USA, North America, England, Europe","description": "Fun idea - exceptional execution. The edge of Jay-Z with the genius melody of the Beatles pairs so well. It's just a really rewarding listen."},
"00304":{"Name": "Moss Side Story","Artist": "Barry Adamson","Date": "25/02/2026","Year": "1989","Genres": "Soundtrack, Electronic, Jazz","Score":"5","Stone":"0","Length": "54","bestSong": "The Swinging Detective","revisited":"N","imageName":"moss side story.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "This is a (underwhelming) soundtrack album, to a film that doesn't exist. I saw a review that said 'la musique d’ambiance du purgatoire' - spot on. Feels forbidden to listen to this if not wearing a trenchcoat in a dark alley."},
"00305":{"Name": "five seconds flat","Artist": "Lizzy McAlpine","Date": "25/02/2026","Year": "2022","Genres": "Indie, Pop","Score":"7","Stone":"0","Length": "45","bestSong": "hate to be lame","revisited":"N","imageName":"five seconds flat.jpg","suggester": "Lucinda","country": "USA, North America","description": "I was pleasantly surprised by this, as indie slow folk is often a genre I struggle to appreciate. She's got that boygenius feel - with a more ambitious production I could really love this - see 'ceilings'."},
"00306":{"Name": "Fever To Tell","Artist": "Yeah Yeah Yeahs","Date": "25/02/2026","Year": "2003","Genres": "Indie, Art Rock","Score":"6.5","Stone":"0","Length": "37","bestSong": "Maps","revisited":"N","imageName":"fever to tell.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I prefered this to the other album by them. Each song just individually a bit stronger. Always weird to hear the original song from a tiktok trend - 'Maps'."},
"00307":{"Name": "Go Girl Crazy!","Artist": "The Dictators","Date": "26/02/2026","Year": "1975","Genres": "Punk, Rock","Score":"5","Stone":"0","Length": "35","bestSong": "The Next Big Thing","revisited":"N","imageName":"go girl crazy.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Funny, and gives me what I usually want from this kind of album - lyrics with more thought than 'I'm angry'. Lacks a hook."},
"00308":{"Name": "A Girl Called Dusty","Artist": "Dusty Springfield","Date": "26/02/2026","Year": "1964","Genres": "Pop","Score":"6","Stone":"0","Length": "33","bestSong": "Do Ri Me","revisited":"N","imageName":"a girl called dusty.jpg","suggester": "","country": "England, Europe","description": "A little bit underwhelming. An album of covers needs to justify its existence and this one just doesn't. "},
"00309":{"Name": "The Never Ending Story","Artist": "Giorgio Moroder, Klaus Doldinger","Date": "26/02/2026","Year": "1984","Genres": "Soundtrack, New Age, Rock, Synth Pop","Score":"7","Stone":"0","Length": "36","bestSong": "The Never Ending Story","revisited":"N","imageName":"the never ending story.jpg","suggester": "","country": "Italy, Germany, USA, North America, Europe,","description": "Some fantastic instrumental tracks in here, and the title track is just a bit of fun. "},
"00310":{"Name": "The Kick Inside","Artist": "Kate Bush","Date": "26/02/2026","Year": "1978","Genres": "Art Pop, Art Rock, Prog Rock","Score":"8.5","Stone":"0","Length": "43","bestSong": "Wuthering Heights","revisited":"N","imageName":"the kick inside.jpg","suggester": "","country": "England, Europe","description": "Her voice is absolutely incredible. This scratches an itch that nothing else quite can. Exceptional."},
"00311":{"Name": "The Mountain","Artist": "Gorillaz, Anoushka Shankar","Date": "27/02/2026","Year": "2026","Genres": "Synth Pop, Hindustani Classical, Art Pop","Score":"7","Stone":"0","Length": "66","bestSong": "Damascus","revisited":"N","imageName":"the mountain.jpg","suggester": "","country": "England, Europe","description": "Excited to see Sparks pop up. Cohesive, but varied. Great fun start to finish. "},
"00312":{"Name": "The Dreaming","Artist": "Kate Bush","Date": "27/02/2026","Year": "1982","Genres": "Art Pop, Art Rock, Prog Rock","Score":"9","Stone":"0","Length": "43","bestSong": "The Happy Dictator","revisited":"N","imageName":"the dreaming.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "The experimental epic pantomine vibe gave me exactly what I was looking for. This is absolutely brilliant."},
"00313":{"Name": "Illmatic","Artist": "Naz","Date": "27/02/2026","Year": "1994","Genres": "Hip Hop, Rap","Score":"4","Stone":"0","Length": "40","bestSong": "Life's a Bitch","revisited":"N","imageName":"illmatic.jpg","suggester": "Jacob(1001 Albums You Must Hear Before You Die)","country": "USA, North America","description": "I see the appeal, but this isn't my kind of hip-hop. I want something funkier, and this is a bit withheld for me."},
"00314":{"Name": "Music In Exile","Artist": "Songhoy Blues","Date": "27/02/2026","Year": "2015","Genres": "Worldbeat, Rock, Blues","Score":"8.5","Stone":"0","Length": "40","bestSong": "Soubour","revisited":"N","imageName":"music in exile.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "Mali, Africa","description": "So much fun. It's classy, but not taking itself too seriously. "},
"00315":{"Name": "Fort Perch Rock","Artist": "The Dream Machine","Date": "27/02/2026","Year": "2026","Genres": "Rock, Psychedelic, Pop","Score":"7.5","Stone":"0","Length": "41","bestSong": "Fort Perch Rock","revisited":"N","imageName":"fort perch rock.jpg","suggester": "","country": "England, Europe","description": "More of the same from The Dream Machine - feels like a direct sequel to their first album, with most songs sounding very similar. No complaints though, it's good stuff."},
"00316":{"Name": "The Last Rotation of Earth","Artist": "BC Camplight","Date": "28/02/2026","Year": "2023","Genres": "Indie, Pop, Art Rock, Art Pop","Score":"9","Stone":"0","Length": "36","bestSong": "I'm Ugly","revisited":"N","imageName":"the last rotation of earth.jpg","suggester": "","country": "USA, North America, England, Europe","description": "Lyrics jump between gut-wrenching and very funny Experimental, but accessible. Personal, but never too 'woe-is-me'."},
"00317":{"Name": "Among Us All","Artist": "Laura Palmer's Death Parade","Date": "28/02/2026","Year": "2018","Genres": "Dream Pop, Indie, Rock","Score":"7.5","Stone":"0","Length": "34","bestSong": "I'm The Only One","revisited":"N","imageName":"among us all.jpg","suggester": "Amelie","country": "USA, North America","description": "The dream-pop-y start of the album is great, but as it leans more into grunge it loses me a bit. Really liked the first song."},
"00318":{"Name": "Croce","Artist": "Jim Croce, Ingrid Croce","Date": "28/02/2026","Year": "1969","Genres": "Folk, Country","Score":"7","Stone":"0","Length": "28","bestSong": "","revisited":"N","imageName":"croce.jpg","suggester": "","country": "USA, North America","description": "Not as good as Jim's solo work, but still good fun. The melancholy spark which makes 'Don't Mess Around' so special isn't present here."},
"00319":{"Name": "Is This It","Artist": "The Strokes","Date": "28/02/2026","Year": "2001","Genres": "Indie Rock","Score":"6","Stone":"0","Length": "36","bestSong": "Everest","revisited":"N","imageName":"is this it.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I was surprised how much of this I recognised. I basically knew every song, which usually means I quite like an album. In this case though, I thought the whole album felt a bit withheld. Maybe just not for me."},
"00320":{"Name": "Tres Hombres","Artist": "ZZ Top","Date": "02/03/2026","Year": "1973","Genres": "Rock, Blues","Score":"6","Stone":"0","Length": "33","bestSong": "Le Grange","revisited":"N","imageName":"tres hombres.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Fine, but nothing spectacular. The live tracks at the end of the deluxe release are the best on the album - their energy comes across better on stage."},
"00321":{"Name": "Inform Educate Entertain","Artist": "Public Service Broadcasting","Date": "02/03/2026","Year": "2013","Genres": "Indie Rock, Art Rock, Electronic","Score":"9","Stone":"0","Length": "43","bestSong": "Everest","revisited":"N","imageName":"inform educate entertain.jpg","suggester": "","country": "England, Europe","description": "There's nothing else like this, it's *entirely beyond* other music from this era. Not a single bad track, and they all seem to scratch an itch you didn't know you had. Fantastic!"},
"00322":{"Name": "The Race For Space","Artist": "Public Service Broadcasting","Date": "02/03/2026","Year": "2015","Genres": "Indie Rock, Art Rock, Electronic","Score":"9","Stone":"0","Length": "44","bestSong": "Gagarin","revisited":"N","imageName":"the race for space.jpg","suggester": "","country": "England, Europe","description": "Epic nature of this album justifies the increased track length. Fits together more cohesively than their previous entry, and I think the best songs are better. Where this falters slightly is that there are some less engaging tracks. "},
"00323":{"Name": "Dusty In Memphis","Artist": "Dusty Springfield","Date": "02/03/2026","Year": "1969","Genres": "Pop, R&B, Soul","Score":"8","Stone":"0","Length": "33","bestSong": "Son of a Preacher Man","revisited":"N","imageName":"dustry in memphis.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "I'm extremely pleasantly surprised. I'd thought her debut was fairly mundane but this is an excellent progression. The hit is great, and the deeper cuts are all pleasant. It's good fun!"},
"00324":{"Name": "Night Life","Artist": "Ray Price","Date": "02/03/2026","Year": "1963","Genres": "Country","Score":"6.5","Stone":"0","Length": "38","bestSong": "Night Life","revisited":"N","imageName":"night life ray.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "Love the way live albums are introduced in this era. So gentlemanly. This may be the most polite album I've ever heard, it has a thoroughly inoffensive sound."},
"00325":{"Name": "The Freewheelin' Bob Dylan","Artist": "Bob Dylan","Date": "02/03/2026","Year": "1963","Genres": "Folk, Rock, Blues","Score":"4","Stone":"0","Length": "50","bestSong": "","revisited":"N","imageName":"the freewheelin bob dylan.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I don't mind the harmonica so much, but the singing style on this just really isn't for me. Maybe as I listen to more Bob Dylan it'll grow on me. For now, I'm unimpressed."},
"00326":{"Name": "A Sober Conversation","Artist": "BC Camplight","Date": "02/03/2026","Year": "2025","Genres": "Indie, Rock, Art Pop, Art Rock","Score":"8.5","Stone":"0","Length": "35","bestSong": "Two Legged Dog","revisited":"N","imageName":"a sober conversation.jpg","suggester": "","country": "USA, North America, England, Europe","description": "Almost (but not quite) as good as his first album for me. Everything you'd want from him is still there, I think there's just a couple less songs that I really connect with."},
"00327":{"Name": "Good Old Boys","Artist": "Randy Newman","Date": "03/03/2026","Year": "1974","Genres": "Country, Rock","Score":"7","Stone":"0","Length": "37","bestSong": "Birmingham","revisited":"N","imageName":"good old boys.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The songwriting for me doesn't work as well as Sail Away, and he could definitely get the point of the first song across WITHOUT saying the n-word. I think this is just fine, which is a shame."},
"00328":{"Name": "Master of Puppets","Artist": "Metallica ","Date": "03/03/2026","Year": "1986","Genres": "Metal","Score":"6","Stone":"0","Length": "55","bestSong": "Orion","revisited":"N","imageName":"master of puppets.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I was hoping to like this more than I did. For me, it's just fine - lacking great rythms and without any strong hooks."},
"00329":{"Name": "Back at the Chicken Shack","Artist": "Jimmy Smith","Date": "03/03/2026","Year": "1963","Genres": "Soul, Jazz","Score":"6","Stone":"0","Length": "38","bestSong": "Messy Bessie","revisited":"N","imageName":"back at the chicken shack.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "I didn't mind this, but I also didn't particularly get excited about any of it. Released after a lot of great jazz, but feels from before then..."},
"00330":{"Name": "Let's Stay Together","Artist": "Al Green","Date": "03/03/2026","Year": "1972","Genres": "Soul","Score":"7.5","Stone":"0","Length": "34","bestSong": "Let's Stay Together","revisited":"N","imageName":"let's stay together.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The title track is one of the best songs of all time, and the rest of the album is just fine. For R&B/Soul of this era, I prefer Tavares' 'In The City'."},
"00331":{"Name": "Call Me","Artist": "Al Green","Date": "03/03/2026","Year": "1973","Genres": "Soul, R&B","Score":"7.5","Stone":"0","Length": "35","bestSong": "Call Me (Come Back Home)","revisited":"N","imageName":"call me.jpg","suggester": "Jacob","country": "USA, North America","description": "I think it's a more consistent album than 'Let's Stay Together' but lacks the punch of one incredible song. Overall a great, smooth, listen."},
"00332":{"Name": "Live' at the Apollo","Artist": "James Brown","Date": "03/03/2026","Year": "1963","Genres": "Soul, R&B, Live","Score":"9","Stone":"0","Length": "31","bestSong": "Introduction / Opening Fanfare","revisited":"N","imageName":"live at the apollo.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "So much energy! Starts stronger than it ends, but overall great. Packs a good punch at such a short runtime."},
"00333":{"Name": "Rock 'n Soul","Artist": "Solomon Burke","Date": "04/03/2026","Year": "1964","Genres": "Rock, Soul, Pop","Score":"7","Stone":"0","Length": "34","bestSong": "","revisited":"N","imageName":"rock 'n soul.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": ""},
"00334":{"Name": "Katy J Pearson","Artist": "Katy J Pearson","Date": "04/03/2026","Year": "2020","Genres": "Indie, Pop","Score":"9","Stone":"0","Length": "40","bestSong": "Tonight","revisited":"N","imageName":"katy j pearson.jpg","suggester": "","country": "England, Europe","description": ""},



































};



/*ADD PRODUCERS, BAND MEMBERS, ETC HERE (if you want them to show up as a search option)*/
var extraArtists = ["Jack Antonoff", "Max Martin","Mick Jones","Tom Petty","Ian McDonald"];

var recentSortBy = "";
var recentOnlyShow = "";
var recentOnlyShowBy = "";

var AlbumArray = Object.keys(albumsById).map(function(v) {
  return $.extend({ ID: v }, albumsById[v]);
});

display(AlbumArray);  /*Display All AlbumArray data */

/*THIS CONTROLS SORTING, I.E. SORT BY YEAR, OR SORT BY ARTIST (alphabetical)*/
function sorting(EmpData,SearchString='',SortBy='ID',dirSort){
  switch(SortBy){

    case 'Stone'   : 
      EmpData.sort(function(a,b) {
        aScore = parseInt(a["Stone"]) + 400;
        bScore = parseInt(b["Stone"]) + 400;



        return aScore.toString().localeCompare(bScore.toString());   /*Sort By ROLLING STONE ID*/
      });
    break;

    case 'ID'   : 
      EmpData.sort(function(a,b) {
        return a.ID.localeCompare(b.ID);  /*Sort By ID something is wrong with this?*/
      });
    break;

    case 'Name' :
      EmpData.sort(function(a,b) {
        var c = a.Name;
        var d = b.Name;

        if (a.Name.length > 4){
            if (a.Name[0].toUpperCase() == "T" && a.Name[1].toUpperCase() == "H" && a.Name[2].toUpperCase() == "E" && a.Name[3] == " "){
                c = "";

                for(i = 4; i < a.Name.length;i++){
                    c+= a.Name[i];
                }
            }
        }
        if (b.Name.length > 4){
            if (b.Name[0].toUpperCase() == "T" && b.Name[1].toUpperCase() == "H" && b.Name[2].toUpperCase() == "E" && b.Name[3] == " "){
                d = "";

                for(i = 4; i < b.Name.length;i++){
                    d+= b.Name[i];
                }
            }
        }

        if (a.Name.length > 3){
            if (a.Name[0].toUpperCase() == "A" && a.Name[1] == " "){
                c = "";

                for(i = 2; i < a.Name.length;i++){
                    c+= a.Name[i];
                }
            }
        }
        if (b.Name.length > 3){
            if (b.Name[0].toUpperCase() == "T" && b.Name[1] == " "){
                d = "";

                for(i = 2; i < b.Name.length;i++){
                    d+= b.Name[i];
                }
            }
        }


        return c.localeCompare(d);  /*Sort By Name*/
      });
    break;

    case 'Artist' :
      EmpData.sort(function(a,b) {
        var c = a.Artist;
        var d = b.Artist;

        if (a.Artist.length > 4){
            if (a.Artist[0].toUpperCase() == "T" && a.Artist[1].toUpperCase() == "H" && a.Artist[2].toUpperCase() == "E" && a.Artist[3] == " "){
                c = "";

                for(i = 4; i < a.Artist.length;i++){
                    c+= a.Artist[i];
                }
            }
        }
        if (b.Artist.length > 4){
            if (b.Artist[0].toUpperCase() == "T" && b.Artist[1].toUpperCase() == "H" && b.Artist[2].toUpperCase() == "E" && b.Artist[3] == " "){
                d = "";

                for(i = 4; i < b.Artist.length;i++){
                    d+= b.Artist[i];
                }
            }
        }

        if (a.Artist.length > 3){
            if (a.Artist[0].toUpperCase() == "A" && a.Artist[1] == " "){
                c = "";

                for(i = 2; i < a.Artist.length;i++){
                    c+= a.Artist[i];
                }
            }
        }
        if (b.Artist.length > 3){
            if (b.Artist[0].toUpperCase() == "T" && b.Artist[1] == " "){
                d = "";

                for(i = 2; i < b.Artist.length;i++){
                    d+= b.Artist[i];
                }
            }
        }


        return c.localeCompare(d);  /*Sort By Artist*/
      });
    break;

    case 'Date' :
      EmpData.sort(function(a,b) {
        return a.ID.localeCompare(b.ID);  /*Sort By Date*/
      });
    break;

    case 'Year' :
      EmpData.sort(function(a,b) {
        return a.Year.localeCompare(b.Year);  /*Sort By Year*/
      });
    break;

    case 'Score' :
      EmpData.sort(function(a,b) {
        aScore = a["Score"];
        if (aScore.length == 1 || aScore.length == 3){
            aScore = "0" + aScore;
         }
        bScore = b["Score"];
        if (bScore.length == 1 || bScore.length == 3){
            bScore = "0" + bScore;
         }


        return aScore.localeCompare(bScore);  /*Sort By Rating*/
      });
    break;

    case 'Length' :
      EmpData.sort(function(a,b) {
        aScore = parseInt(a["Length"]) + 400;
        bScore = parseInt(b["Length"]) + 400;



        return aScore.toString().localeCompare(bScore.toString());  /*Sort By Rating*/
      });
    break;

    default     :
      /*Silent is golden*/
    break; 
  }

    if (dirSort){
        return EmpData.reverse();
    }
    else{
        return EmpData;
    }

}


/*THIS CONTROLS SEARCHING, AND EXTRA CRITERIA LIKE 'ARTIST -> THE CLASH'*/
function searching(){
  var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
  var SortBy        = $('#sort').val();
  var dirSort       = $('#order').is(":checked");
  var devMode       = $('#order').is(":checked");
  var onlyShow      = $('#displayType').val();
  var Data          = sorting(AlbumArray,SearchString,SortBy,dirSort);
  var SearchData    = [];
  var CriteriaData    = [];
  var index         = 0;
  var index2        = 0;
  var Name          = '';
  recentSortBy = SortBy;
      recentOnlyShow = onlyShow;

  var onlyShowBy   = $('#onlyShowBy').val();
      recentOnlyShowBy = onlyShowBy;

  //this determines if we've matched the search
  for(i=0; i<Data.length; i++){
    Name      = Data[i].Name.toUpperCase() + Data[i].Artist.toUpperCase();  /*Uppercase for Case Insentive*/
    if (Name.indexOf(SearchString)>=0){  /*Search By Name*/
      SearchData[index++] = Data[i];
    }
  }

  //we want to determine if we've matched the extra criteria
  for(i=0; i<SearchData.length; i++){

    if (SortBy == "Stone" && SearchData[i].Stone == "0"){
      continue;
    }

    if (onlyShow == "All"){
        CriteriaData[index2++] = SearchData[i];
    } 
    else if (onlyShowBy == "All"){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Recommender" && (SearchData[i].suggester.includes(onlyShowBy) || (SearchData[i].Stone != "0" && onlyShowBy == "Rolling Stone Top 500"))){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Artist" && SearchData[i].Artist.includes(onlyShowBy)){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Collections"){

      //we run through all the collections
      for (var j=1; j< 1000;j++){
        var numberString = "0".repeat((5-j.toString().length)).toString() + j.toString();

        if (albumCollections[numberString] != null){

            //if the collection is real and valid, then we check if this collection holds the correct name
            if (albumCollections[numberString].CollectionName == onlyShowBy){
              
              //now we run through that collections album numbers
              for (var k=0; k< albumCollections[numberString].AlbumNumbers.split(",").length;k++){

                //if the album number matches the album ID then we're good

                  if (parseInt(albumCollections[numberString].AlbumNumbers.split(",")[k]) == parseInt(SearchData[i].ID)){
                    CriteriaData[index2++] = SearchData[i];
                  }
              }


            }
        }
      }
    }
    else if (onlyShow == "Month"){
      var yearCorrect = false;
      if (onlyShowBy.includes("2025") && SearchData[i].Date.split("/")[2].includes("2025")){
          yearCorrect = true;
      }
      else if (onlyShowBy.includes("2026") && SearchData[i].Date.split("/")[2].includes("2026")){
          yearCorrect = true;
      }

      var monthCorrect = false;

      if (onlyShowBy.includes("January") && SearchData[i].Date.split("/")[1].includes("01")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("February") && SearchData[i].Date.split("/")[1].includes("02")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("March") && SearchData[i].Date.split("/")[1].includes("03")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("April") && SearchData[i].Date.split("/")[1].includes("04")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("May") && SearchData[i].Date.split("/")[1].includes("05")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("June") && SearchData[i].Date.split("/")[1].includes("06")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("July") && SearchData[i].Date.split("/")[1].includes("07")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("August") && SearchData[i].Date.split("/")[1].includes("08")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("September") && SearchData[i].Date.split("/")[1].includes("09")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("October") && SearchData[i].Date.split("/")[1].includes("10")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("November") && SearchData[i].Date.split("/")[1].includes("11")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("December") && SearchData[i].Date.split("/")[1].includes("12")){
        monthCorrect = true;
      }

      if (yearCorrect && monthCorrect){
        CriteriaData[index2++] = SearchData[i];
      }
    }
    else if (onlyShow == "Decade"){
        var lowerBound = 1950;
        var upperBound = 2025;
        if (onlyShowBy.includes("1950")){
            lowerBound = 1950;
            upperBound = 1960;
        }
        else if (onlyShowBy.includes("1960")){
            lowerBound = 1960;
            upperBound = 1970;
        }
        else if (onlyShowBy.includes("1970")){
            lowerBound = 1970;
            upperBound = 1980;
        }
        else if (onlyShowBy.includes("1980")){
            lowerBound = 1980;
            upperBound = 1990;
        }
        else if (onlyShowBy.includes("1990")){
            lowerBound = 1990;
            upperBound = 2000;
        }   
        else if (onlyShowBy.includes("2000")){
            lowerBound = 2000;
            upperBound = 2010;
        }       
        else if (onlyShowBy.includes("2010")){
            lowerBound = 2010;
            upperBound = 2020;
        }
        else if (onlyShowBy.includes("2020")){
            lowerBound = 2020;
            upperBound = 2030;
        }

        if (Number(SearchData[i].Year) < upperBound && lowerBound <= Number(SearchData[i].Year)){
            CriteriaData[index2++] = SearchData[i];
        }


    }
    else if (onlyShow == "Genre" && SearchData[i].Genres.includes(onlyShowBy)){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Country" && SearchData[i].country.includes(onlyShowBy)){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Revisited" && ((SearchData[i].revisited.includes("Y") && onlyShowBy == "Have Revisited") || (SearchData[i].revisited.includes("N") && onlyShowBy == "Have Not Revisited"))){
        CriteriaData[index2++] = SearchData[i];
    }
  }

  display(CriteriaData);  /*Display Sorting Data*/
}

/*THIS CONTROLS CREATING THE DROPDOWN MENUS, such as the list of artists*/
function displayDropdown(){

    var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
    var SortBy        = $('#sort').val();
    var dirSort       = $('#order').is(":checked");
    var onlyShow      = $('#displayType').val();
    var Data          = sorting(AlbumArray,SearchString,SortBy,dirSort);
    var onlyShow = $('#displayType').val();
    var html2 = '';
    //this part controls the show by artist/suggester/decade choosing section
    html2 = '<div class="control">Sort: <select name="onlyShowBy" id="onlyShowBy" onchange="searching()" class="standardText">';

    //we want to create a list of all artists, or people, or decades, or whatever and create a list of all unique ones
    const listOfOptions = [];
    const listOfOptionsNums = [];
    var checkShow = true;

    if (onlyShow == "Artist"){
      for (var i=0; i<extraArtists.length;i++)
        {
          listOfOptions.push(extraArtists[i]);
        }
    }

    if (onlyShow == "Recommender"){
            listOfOptions.push("Rolling Stone Top 500");
    }

    if (onlyShow == "Collections"){
      for (var i=1; i< 1000;i++){
        var numberString = "0".repeat((5-i.toString().length)).toString() + i.toString();

        if (albumCollections[numberString] != null){
                  listOfOptions.push(albumCollections[numberString].CollectionName);
                }   
        else{
          break;
        }
      }
    }


    for (var i=0; i<Data.length;i++){


        
        if (onlyShow == "Recommender"){
            if (!listOfOptions.includes(Data[i].suggester.split("(")[0]) && Data[i].suggester.length > 0){
                listOfOptions.push(Data[i].suggester.split("(")[0]);
            }
        }

        if (onlyShow == "All"){
            checkShow = false;
            break;
        }

        if (onlyShow == "Artist"){
            if (!listOfOptions.includes($.trim(Data[i].Artist.split("(")[0]))){
                var artistName = $.trim(Data[i].Artist.split("(")[0]);

                if (artistName.includes(",")){
                  for (var j=0; j < artistName.split(",").length; j++){
                    if(!listOfOptions.includes($.trim(artistName.split(",")[j]))){
                      listOfOptions.push($.trim(artistName.split(",")[j]));
                    }
                  }
                }
                else{
                      listOfOptions.push(artistName);
                }
            }
        }

        if (onlyShow == "Month"){
            listOfOptions.push.apply(listOfOptions,buildCleverMonths());
            break;
        }

        if (onlyShow == "Revisited"){
            listOfOptions.push("Have Revisited");
            listOfOptions.push("Have Not Revisited");
            break;
        }

        if (onlyShow == "Decade"){
            listOfOptions.push("1950's");
            listOfOptions.push("1960's");
            listOfOptions.push("1970's");
            listOfOptions.push("1980's");
            listOfOptions.push("1990's");
            listOfOptions.push("2000's");
            listOfOptions.push("2010's");
            listOfOptions.push("2020's");
            break;
        }

        if (onlyShow == "Genre"){
            var myString =  Data[i].Genres.replace(", ",",").replace(" ,",",");
            var myArray = myString.split(",");
            
            
            for (var k=0; k<Data.length;k++){

                let myGenre = myArray[k];
                
                if (!listOfOptions.includes($.trim(myGenre))){
                    listOfOptions.push($.trim(myGenre));
                }
            }
        }

        if (onlyShow == "Country"){
            var myString =  Data[i].country.replace(", ",",").replace(" ,",",");
            var myArray = myString.split(",");
            
            for (var k=0; k<Data.length;k++){

              let myCountry = myArray[k];

                if (!listOfOptions.includes($.trim(myCountry))){
                    listOfOptions.push($.trim(myCountry));
                }
            }
        }
    }

    if (onlyShow != "Month"){
           listOfOptions.sort(function(a,b) {

          var c = a;
          var d = b;

        if (a.length > 4){
            if (a[0].toUpperCase() == "T" && a[1].toUpperCase() == "H" && a[2].toUpperCase() == "E" && a[3] == " "){
                c = "";

                for(i = 4; i < a.length;i++){
                    c+= a[i];
                }
            }
        }
        if (b.length > 4){
            if (b[0].toUpperCase() == "T" && b[1].toUpperCase() == "H" && b[2].toUpperCase() == "E" && b[3] == " "){
                d = "";

                for(i = 4; i < b.length;i++){
                    d+= b[i];
                }
            }
        }

        if (a.length > 3){
            if (a[0].toUpperCase() == "A" && a[1] == " "){
                c = "";

                for(i = 2; i < a.length;i++){
                    c+= a[i];
                }
            }
        }
        if (b.length > 3){
            if (b[0].toUpperCase() == "T" && b[1] == " "){
                d = "";

                for(i = 2; i < b.length;i++){
                    d+= b[i];
                }
            }
        }


        return c.localeCompare(d);/*Sort By Alphabetical*/
      });
    }

    for (var i=0; i<listOfOptions.length;i++){

          var counter = 0;

          if (onlyShow == "Collections"){
                  for (var k=1; k< 1000;k++){
                  var numberString = "0".repeat((5-k.toString().length)).toString() + k.toString();

                  if (albumCollections[numberString] != null){
                    if (albumCollections[numberString].CollectionName == listOfOptions[i]){
                        counter = albumCollections[numberString].AlbumNumbers.split(",").length;
                    }
                    
                    
                  }
            }
            listOfOptionsNums.push(counter);
            continue;
          }

          for (var j=0; j<Data.length;j++){
            if (onlyShow == "Recommender"){
              if (Data[j].suggester.includes(listOfOptions[i]) || (listOfOptions[i] == "Rolling Stone Top 500" && Data[j].Stone != "0")){
                counter++;
              }
            }
            else if (onlyShow == "Artist"){
              if (Data[j].Artist.includes(listOfOptions[i])){
                counter++;
              }
            }
            else if (onlyShow == "Genre"){
              if (Data[j].Genres.includes(listOfOptions[i])){
                counter++;
              }
            }
            else if (onlyShow == "Country"){
              if (Data[j].country.includes(listOfOptions[i])){
                counter++;
              }
            }
            else if (onlyShow == "Month"){
              var yearCorrect = false;
              if (listOfOptions[i].includes("2025") && Data[j].Date.split("/")[2].includes("2025")){
                yearCorrect = true;
              }
              else if (listOfOptions[i].includes("2026") && Data[j].Date.split("/")[2].includes("2026")){
              yearCorrect = true;
              }

              var monthCorrect = false;

      if (listOfOptions[i].includes("January") && Data[j].Date.split("/")[1].includes("01")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("February") && Data[j].Date.split("/")[1].includes("02")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("March") && Data[j].Date.split("/")[1].includes("03")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("April") && Data[j].Date.split("/")[1].includes("04")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("May") && Data[j].Date.split("/")[1].includes("05")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("June") && Data[j].Date.split("/")[1].includes("06")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("July") && Data[j].Date.split("/")[1].includes("07")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("August") && Data[j].Date.split("/")[1].includes("08")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("September") && Data[j].Date.split("/")[1].includes("09")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("October") && Data[j].Date.split("/")[1].includes("10")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("November") && Data[j].Date.split("/")[1].includes("11")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("December") && Data[j].Date.split("/")[1].includes("12")){
        monthCorrect = true;
      }

      if (yearCorrect && monthCorrect){
        counter++;
      }
            }
            else if (onlyShow == "Decade"){
        var lowerBound = 1950;
        var upperBound = 2025;
        if (listOfOptions[i].includes("1950")){
            lowerBound = 1950;
            upperBound = 1960;
        }
        else if (listOfOptions[i].includes("1960")){
            lowerBound = 1960;
            upperBound = 1970;
        }
        else if (listOfOptions[i].includes("1970")){
            lowerBound = 1970;
            upperBound = 1980;
        }
        else if (listOfOptions[i].includes("1980")){
            lowerBound = 1980;
            upperBound = 1990;
        }
        else if (listOfOptions[i].includes("1990")){
            lowerBound = 1990;
            upperBound = 2000;
        }   
        else if (listOfOptions[i].includes("2000")){
            lowerBound = 2000;
            upperBound = 2010;
        }       
        else if (listOfOptions[i].includes("2010")){
            lowerBound = 2010;
            upperBound = 2020;
        }
        else if (listOfOptions[i].includes("2020")){
            lowerBound = 2020;
            upperBound = 2030;
        }

        if (Number(Data[j].Year) < upperBound && lowerBound <= Number(Data[j].Year)){
            counter++;
        }
            }


          }
          listOfOptionsNums.push(counter);
    }


      listOfOptions.unshift("All");
      listOfOptionsNums.unshift(0);

        for(var i=0; i<listOfOptions.length;i++){
        if (listOfOptions[i].length > 0)
        {
          if (i != 0){
            html2 += '<option value="' + listOfOptions[i] + '" class="standardText">' + listOfOptions[i] + ' (' + listOfOptionsNums[i] + ') </option>';
          }
          else{
            html2 += '<option value="' + listOfOptions[i] + '" class="standardText">' + listOfOptions[i] + '</option>';
          }
          
        }
        }


    html2 += '</select> </div>';
    if (checkShow)
    {
        $('#choosers').html(html2);//now we push this
    }
    else
    {
        $('#choosers').html("");
    }
}

/*THIS DISPLAYS THE ALBUMS, AND THE STATS*/
function display(Data){
    var html = '';
     var devMode = $('#devm').is(":checked");
  //this part controls the display of albums
  for(var i=0; i<Data.length;i++){
    html+='<div class="album album_' + (i % 7).toString() + '">';
    html += '<img class="albumCover" src="./images/albums/' + Data[i].imageName + '" alt="' + Data[i].Name + ' Album Cover"></img>';

    if (devMode){
      html+='<p class="name">'+Data[i].Name+ ' (' + Data[i].Year + ') - ID: ' + Data[i].ID + '</p>';
    }
    else{
      html+='<p class="name">'+Data[i].Name+ ' (' + Data[i].Year + ')</p>';
    }

      

      var artistName = Data[i].Artist.split("(")[0];


      html+='<p class="artist">'+artistName+'</p>';
      html+='<p class="standardText"> Date: '+Data[i].Date+'</p>';
      html+='<p class="standardText"> Best Song: '+Data[i].bestSong+'</p>';

      var stoneDisplayed = false;

      if (recentSortBy == "Stone" || (recentOnlyShow == "Recommender" && recentOnlyShowBy == "Rolling Stone Top 500")){
        html+='<p class="standardText"> Rolling Stone Placement: '+ Data[i].Stone +'</p>';
        stoneDisplayed = true;
      }

      var lengthHours = Math.floor(parseFloat(Data[i].Length) / 60);
      var lengthMinutes = parseFloat(Data[i].Length) - (60 * lengthHours);

      var lengthText = lengthMinutes + ' Minutes';

      if (lengthHours == 1){
        lengthText = '1 Hour ' + lengthText;
      }
      else if (lengthHours > 1){
        lengthText = lengthHours + ' Hours ' + lengthText;
      }

      if (lengthMinutes == 0){
        if (lengthHours == 1){
            lengthText = '1 Hour ';
           }
        else if (lengthHours > 1){
          lengthText = lengthHours + ' Hours';
          }
      }

      if ((Data[i].description.length > 290 && Data[i].suggester.length > 0) || stoneDisplayed){
        html+='<p class="standardText"> Score: '+Data[i].Score+ ' and Length: ' + lengthText;
      }
      else{
      html+='<p class="standardText"> Score: '+Data[i].Score+'/10</p>';
      html+='<p class="standardText"> Length: '+ lengthText;
      }
      if (Data[i].suggester.length > 0){
        html+='<p class="standardText"> Recommended By: '+Data[i].suggester.split("(")[0]+'</p>';
      }
    html+='<p class="boldText">'+Data[i].description+'</p>';
    html+='</div>';
  };
  $('#albums').html(html);


  /*Display some info about what is currently being displayed*/
  var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
  var SortBy        = $('#sort').val();
  var dirSort       = $('#order').is(":checked");
  var DataFull          = sorting(AlbumArray,SearchString,SortBy,dirSort);
  var albumCount = '<p>Displaying ' + Data.length + "/" + DataFull.length + " Albums - Mean Score: ";

  var totalScore = 0;
  var sumForVariance = 0;
  var lowestValue = 10;
  var highestValue = 0;
  const allScores = [];
  for(i=0; i<Data.length; i++){
    totalScore += Number(Data[i].Score);
    allScores.push(Data[i].Score);

    if (lowestValue > Number(Data[i].Score)){
      lowestValue = Number(Data[i].Score);
    }
    if (highestValue < Number(Data[i].Score)){
      highestValue = Number(Data[i].Score);
    }
  }

  for(i=0; i<Data.length; i++){
    sumForVariance += (Math.pow(Number(Data[i].Score) - totalScore / Data.length,2)) / Data.length;

  }

  if (Data.length == 0){
    $('#albumCount').html('<p>Displaying ' + Data.length + "/" + DataFull.length + ' Albums <\p>');

    $('#stats').html('<p><\p>');
    return;
  }
  const mode = Array.from(new Set(allScores)).reduce((prev, curr) => allScores.filter(el => el === curr).length > allScores.filter(el => el === prev).length ? curr : prev);

  albumCount +=  (Math.round(totalScore * 100 / Data.length)/100).toString() + "<\p>";
  stats = "<p>Mean Score: " + (Math.round(totalScore * 100 / Data.length)/100).toString() + "<p>";
  stats += "<p>Standard Deviation: " + (Math.round(Math.sqrt(sumForVariance) * 100)/100).toString() + "<p>";
  stats += "<p>Lowest Score: " + (lowestValue).toString() + "<p>";
  stats += "<p>Highest Score: " + (highestValue).toString() + "<p>";
  stats += "<p>Modal Score: " + (mode).toString() + "<p>";
  stats += "<p>PCC (Year:Score): " + (calculatePCC(Data)).toString() + "<p>";

  if (Data.length == 0){
    stats = "";
  }

  $('#albumCount').html(albumCount);

  $('#stats').html(stats);
}

function delayedSearching(){
  setTimeout(function() { searching(); }, 50);
}

function calculatePCC(Data){
  var sumX = 0;
  var sumY = 0;
  var sumXY = 0;
  var sumXSquare = 0;
  var sumYSquare = 0;

  for (var i=0; i<Data.length;i++)
  {
    sumX += Number(Data[i].Year);
    sumY += Number(Data[i].Score);
    sumXY += (Number(Data[i].Year) * Number(Data[i].Score));
    sumXSquare += Number(Data[i].Year) * Number(Data[i].Year);
    sumYSquare += Number(Data[i].Score) * Number(Data[i].Score);
  }

  return (Math.round(100 * (Data.length * sumXY - sumX * sumY)/Math.sqrt((Data.length * sumXSquare - sumX * sumX) * (Data.length * sumYSquare - sumY * sumY)))/100);
}


$('#search').keyup(function(){  /*Live Search, When Pressing any Keys*/
  searching();
});

$('#sort').change(function(){  /*Live Search, When Sort by*/
  searching();
});

$('#order').change(function(){  /*Live Search, When Toggle Button*/
  searching();
});

$('#devm').change(function(){  /*Live Search, When Toggle Button*/
  searching();
});

$('#displayType').change(function(){  /*Live Search, When Toggle Button*/
  displayDropdown();
});

$('#onlyShowBy').change(function(){  /*Live Search, When Toggle Button*/
  displayDropdown();
  recentOnlyShowBy = onlyShowBy;
});


function changeSortDirection(){
    const direction_button = document.getElementById("direction_button");
    if (direction_button.innerHTML == "↑"){
        direction_button.innerHTML = "↓";
    }
    if (direction_button.innerHTML == "↓"){
        direction_button.innerHTML = "↑";
    }
}

/*THIS WORKS OUT WHAT MONTHS I HAVE LISTENED TO ALBUMS IN*/
function buildCleverMonths(){
  const listOfOptions = [];
  for(i=2025; i< 2050; i++){
    for(j=1; j< 13; j++){
      var month = "";
      if (j == 1){
        month = "January";
      }
      else if (j == 2){
        month = "February";
      }
      else if (j == 3){
        month = "March";
      }
      else if (j == 4){
        month = "April";
      }
      else if (j == 5){
        month = "May";
      }
      else if (j == 6){
        month = "June";
      }
      else if (j == 7){
        month = "July";
      }
      else if (j == 8){
        month = "August";
      }
      else if (j == 9){
        month = "September";
      }
      else if (j == 10){
        month = "October";
      }
      else if (j == 11){
        month = "November";
      }
      else if (j == 12){
        month = "December";
      }

      var bothCorrect = false;
      for(k=0; k< AlbumArray.length; k++){
          var yearCorrect = false;
      if (AlbumArray[k].Date.split("/")[2].includes(i)){
          yearCorrect = true;
      }

      var monthCorrect = false;

      if (month.includes("January") && AlbumArray[k].Date.split("/")[1].includes("01")){
        monthCorrect = true;
      }
      else if (month.includes("February") && AlbumArray[k].Date.split("/")[1].includes("02")){
        monthCorrect = true;
      }
      else if (month.includes("March") && AlbumArray[k].Date.split("/")[1].includes("03")){
        monthCorrect = true;
      }
      else if (month.includes("April") && AlbumArray[k].Date.split("/")[1].includes("04")){
        monthCorrect = true;
      }
      else if (month.includes("May") && AlbumArray[k].Date.split("/")[1].includes("05")){
        monthCorrect = true;
      }
      else if (month.includes("June") && AlbumArray[k].Date.split("/")[1].includes("06")){
        monthCorrect = true;
      }
      else if (month.includes("July") && AlbumArray[k].Date.split("/")[1].includes("07")){
        monthCorrect = true;
      }
      else if (month.includes("August") && AlbumArray[k].Date.split("/")[1].includes("08")){
        monthCorrect = true;
      }
      else if (month.includes("September") && AlbumArray[k].Date.split("/")[1].includes("09")){
        monthCorrect = true;
      }
      else if (month.includes("October") && AlbumArray[k].Date.split("/")[1].includes("10")){
        monthCorrect = true;
      }
      else if (month.includes("November") && AlbumArray[k].Date.split("/")[1].includes("11")){
        monthCorrect = true;
      }
      else if (month.includes("December") && AlbumArray[k].Date.split("/")[1].includes("12")){
        monthCorrect = true;
      }

      if (yearCorrect && monthCorrect){
        bothCorrect = true;
        break;
      }
      }

      if (bothCorrect){
        listOfOptions.push(month + " " + i);
      }
  
    }
  
  }

  return listOfOptions;
}