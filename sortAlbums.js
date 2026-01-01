// Source - https://stackoverflow.com/a
// Posted by Sumon Sarker
// Retrieved 2025-12-26, License - CC BY-SA 3.0

var albumsById = {
"00001":{"Name": "Eddie, Old Bob, Dick and Gary","Artist": "Tenpole Tudor","Date": "11/12/2025","Year": "1981","Genres": "Punk Rock, New Wave","Score":"5","Consistency": "7","bestSong": "Swords Of A Thousand Men","imageName":"eddie, old bob, dick and gary.jpg","suggester": "","country": "England","description": "Swords of A Thousand Men' demonstrates that Tenpole Tudor can produce a great song, but the album doesn't have anything else close to that standard. The other singles don't just do it for me."},
"00002":{"Name": "Unreal Unearth: Unearth","Artist": "Hozier","Date": "11/12/2025","Year": "2023","Genres": "Indie, Folk, Soul, Rock","Score":"8","Consistency": "8","bestSong": "Eat Your Young","imageName":"unreal unearth.jpg","suggester": "Lucinda","country": "Ireland","description": "I like this a lot. Feel like I'd like it a bit more, though, if I were a lesbian. "},
"00003":{"Name": "London Calling","Artist": "The Clash","Date": "11/12/2025","Year": "1979","Genres": "Punk Rock, Post Punk, New Wave","Score":"8","Consistency": "7","bestSong": "London Calling","imageName":"london calling.jpg","suggester": "","country": "England","description": "What a start! So many great songs to choose from, but enough forgettable ones, too. Cut the 19 down to 10 or so, and you've got a perfect album. "},
"00004":{"Name": "Short n' Sweet","Artist": "Sabrina Carpenter","Date": "12/12/2025","Year": "2024","Genres": "Pop","Score":"8.5","Consistency": "8","bestSong": "Espresso","imageName":"short n sweet.png","suggester": "","country": "USA","description": "So many excellent tracks - she definitely knows how to write a hook. I'm excited to look through her back catalogue."},
"00005":{"Name": "Various Positions","Artist": "Leonard Cohen","Date": "12/12/2025","Year": "1984","Genres": "Rock, Folk","Score":"8.5","Consistency": "9","bestSong": "The Law","imageName":"various positions.jpg","suggester": "","country": "Canada","description": "I love the tone of this whole album. Cohen's original Hallelujah is almost as good as the version in Shrek 4. 'The Law' and 'Dance Me To The End of Love' are both brilliant."},
"00006":{"Name": "Combat Rock","Artist": "The Clash","Date": "12/12/2025","Year": "1982","Genres": "New Wave, Post Punk, Dub, Hip-Hop, Rock","Score":"7.5","Consistency": "8","bestSong": "Rock the Casbah","imageName":"combat rock.jpg","suggester": "","country": "England","description": "I feel the same way about Combat Rock as I did about London Calling. So many great tracks, but cutting a few out could make for a perfect album."},
"00007":{"Name": "Soviet Kitsch","Artist": "Regina Spektor","Date": "12/12/2025","Year": "2003","Genres": "Indie, Art Pop","Score":"3","Consistency": "2","bestSong": "Us","imageName":"soviet kitsch.jpg","suggester": "","country": "Russia, USA","description": "I have a soft spot for 'Us' so thought I'd give the album a go. I couldn't see the appeal of the mindless repetition and drony singing. Hoping to like some of her other stuff more."},
"00008":{"Name": "Ramones","Artist": "Ramones","Date": "12/12/2025","Year": "1976","Genres": "Punk Rock","Score":"6","Consistency": "7","bestSong": "Blitzkrieg Bop","imageName":"ramones.jpg","suggester": "","country": "USA","description": "The album carries the same energy as 'Blitzkrieg Bop', but doesn't match the hook. A fun listen, but nothing blew me away."},
"00009":{"Name": "The Good Witch","Artist": "Maisie Peters","Date": "13/12/2025","Year": "2023","Genres": "Pop, Pop Rock","Score":"9.5","Consistency": "9","bestSong": "Body Better","imageName":"the good witch.jpg","suggester": "","country": "England","description": "Catchy, referential, and sentimental. Jumps between fast and pop-y to slow and soft seamlessly. Near perfect for me."},
"00010":{"Name": "The Clearing","Artist": "Wolf Alice","Date": "13/12/2025","Year": "2025","Genres": "Indie, Soft Rock","Score":"8","Consistency": "7","bestSong": "Bloom Baby Bloom","imageName":"the clearing.png","suggester": "Lucinda","country": "England","description": "I like it! Bloom Baby Bloom is such a good song, and the rest of the album does not disappoint!"},
"00011":{"Name": "You Don't Mess Around With Jim","Artist": "Jim Croce","Date": "13/12/2025","Year": "1972","Genres": "Folk, Rock, Blues","Score":"9","Consistency": "9","bestSong": "New York's Not My Home","imageName":"you don't mess around with jim.jpg","suggester": "","country": "USA","description": "Expected to find my favourite to be one of the hits of the album, but 'New York's Not My Home' carries such emotion. Brilliant album which I will revisit often."},
"00012":{"Name": "Emails I Can't Send","Artist": "Sabrina Carpenter","Date": "13/12/2025","Year": "2022","Genres": "Pop","Score":"8","Consistency": "5","bestSong": "Read Your Mind","imageName":"emails I can't send.png","suggester": "","country": "USA","description": "Not quite as hit-heavy as Short 'n Sweet, but feels much more honest. I love the intimate feel."},
"00013":{"Name": "Goodbye Yellow Brick Road","Artist": "Elton John","Date": "15/12/2025","Year": "1973","Genres": "Glam Rock, Pop Rock","Score":"7.5","Consistency": "5","bestSong": "Goodbye Yellow Brick Road","imageName":"goodbye yellow brick road.jpg","suggester": "","country": "England","description": "Incredible start - mediocre middle - gets going again briefly at the end - and then we just kind of trail off... still really good though!"},
"00014":{"Name": "Superorganism","Artist": "Superorganism","Date": "15/12/2025","Year": "2018","Genres": "Indie, Electropop, Art Pop","Score":"6.5","Consistency": "7","bestSong": "Something for your M.I.N.D.","imageName":"superorganism.jpg","suggester": "","country": "England","description": "Eclectic and fresh. You can tell what feeling they want you to feel, and they achieve that perfectly. Just a shame I don't enjoy feeling that discombobulated. "},
"00015":{"Name": "Soul Mining","Artist": "The The","Date": "15/12/2025","Year": "1983","Genres": "Post Punk, Synth Pop, New Wave","Score":"6","Consistency": "7","bestSong": "This Is The Day","imageName":"soul mining.jpg","suggester": "","country": "England","description": "This Is The Day' is as good as 'Giant' is too long. A song has to be better than that to earn 9 minutes and 30 seconds of my time. Otherwise, I like this."},
"00016":{"Name": "Electronic Earth","Artist": "Labrinth","Date": "16/12/2025","Year": "2012","Genres": "Dance Pop, Electronic, Dubstep, Hip-Hop, Pop","Score":"2","Consistency": "2","bestSong": "Beneath Your Beautiful","imageName":"electronic earth.jpg","suggester": "","country": "England","description": "We know he can sing, (and we know his ghostwriters are capable) due to 'Beneath Your Beautiful' but the rest of the album is just terrible. It does not help that there's a non-zero amount of dubstep."},
"00017":{"Name": "Cowboy Carter","Artist": "Beyonce","Date": "16/12/2025","Year": "2024","Genres": "Country, Pop, R&B, Blues","Score":"6.5","Consistency": "7","bestSong": "TEXAS HOLD 'EM","imageName":"cowboy carter.png","suggester": "","country": "USA","description": "Some great tracks, and the features are well placed, Texas Hold 'Em has a great hook but I think the album is just a bit bloated. There could definitely have been a few cuts."},
"00018":{"Name": "Aretha Now","Artist": "Aretha Franklin","Date": "17/12/2025","Year": "1968","Genres": "Soul, R&B, Funk, Pop","Score":"7","Consistency": "7","bestSong": "Think","imageName":"aretha now.jpg","suggester": "","country": "USA","description": "Possibly my favourite first track of any of the albums so far, and the quality doesn't dip much. Surprised to see this was her 13th album, more surprised to see she made it to 38."},
"00019":{"Name": "Melodrama","Artist": "Lorde","Date": "17/12/2025","Year": "2017","Genres": "Pop, Art Pop, Indie","Score":"9","Consistency": "7","bestSong": "Liability","imageName":"melodrama.png","suggester": "Lucinda","country": "New Zealand","description": "I love this album for just how good 'Supercut' and 'Liability' are. Both excellently written songs, and the rest of the album accompany them perfectly."},
"00020":{"Name": "Crazymad, For Me","Artist": "CMAT","Date": "18/12/2025","Year": "2023","Genres": "Indie, Rock","Score":"7","Consistency": "5","bestSong": "Where Are Your Kids Tonight","imageName":"crazymad, for me.png","suggester": "","country": "Ireland","description": "It is good, but I expected to like this more given how much I like 'Stay For Something', and 'Where Are Your Kids Tonight?'. It had the same potential as Melodrama and didn't quite deliver."},
"00021":{"Name": "Parsley Sage Rosemary and Thyme","Artist": "Simon and Garfunkel (Paul Simon, Art Garfunkel)","Date": "18/12/2025","Year": "1966","Genres": "Folk, Pop Rock","Score":"6.5","Consistency": "8","bestSong": "Homeward Bound","imageName":"parsley sage rosemary and thyme.jpg","suggester": "Lucinda","country": "USA","description": "I can appreciate the brilliance, but this didn't reach me personally. The whole album makes me feel a bit lonely?"},
"00022":{"Name": "Like a Prayer","Artist": "Madonna","Date": "19/12/2025","Year": "1989","Genres": "Pop Rock, Dance Pop, Art Pop","Score":"6.5","Consistency": "5","bestSong": "Like A Prayer","imageName":"like a prayer.png","suggester": "","country": "USA","description": "Madonna has an infectious sound, made obvious by the title track. For me though, where this album really shines is at the end with two tracks about family which carry such emotion."},
"00023":{"Name": "The Who By Numbers","Artist": "The Who","Date": "19/12/2025","Year": "1975","Genres": "Rock, Classic Rock","Score":"6","Consistency": "7","bestSong": "Blue Red and Grey","imageName":"the who by numbers.jpg","suggester": "","country": "England","description": "Blue Red and Grey' has long since been one of my favourite songs. I love the lyricism in some of this album, but I didn't feel moved in any significant capacity by the rest of the album"},
"00024":{"Name": "The Black Saint and The Sinner Lady","Artist": "Charles Mingus","Date": "19/12/2025","Year": "1963","Genres": "Jazz","Score":"6","Consistency": "10","bestSong": "Track C - Group Dancers","imageName":"the black saint and the sinner lady.jpg","suggester": "","country": "USA","description": ""},
"00025":{"Name": "Big Band Bossa Nova","Artist": "Quincy Jones","Date": "19/12/2025","Year": "1962","Genres": "Jazz, Bossa Nova","Score":"8","Consistency": "9","bestSong": "Soul Bossa Nova","imageName":"big band bossa nova.png","suggester": "","country": "USA","description": ""},
"00026":{"Name": "Sports","Artist": "Huey Lewis and the News","Date": "20/12/2025","Year": "1983","Genres": "Pop Rock, Pop, New Wave","Score":"6.5","Consistency": "10","bestSong": "You Crack Me Up","imageName":"sports.jpg","suggester": "","country": "USA","description": ""},
"00027":{"Name": "You Signed Up For This","Artist": "Maisie Peters","Date": "20/12/2025","Year": "2021","Genres": "Pop","Score":"10","Consistency": "9","bestSong": "John Hughes Movie","imageName":"you signed up for this.jpg","suggester": "","country": "England","description": "Brilliant as always - every song is fantastic and could easily be one of my favourites by her depending on the day. In my opinion one of the best debut studio albums of all time!"},
"00028":{"Name": "Trying Season 2","Artist": "Maisie Peters","Date": "20/12/2025","Year": "2021","Genres": "Pop","Score":"10","Consistency": "9","bestSong": "Glowing Review","imageName":"trying.jpg","suggester": "","country": "England","description": "Not sure if it's because it's attached to a TV show, but this album tells a very clear story while still retaining the referential style of writing that Maisie Peters does so well. Probably my favourite work by her."},
"00029":{"Name": "Back To Black","Artist": "Amy Winehouse","Date": "21/12/2025","Year": "2006","Genres": "Soul, R&B, Jazz, Pop","Score":"8.5","Consistency": "8","bestSong": "Rehab","imageName":"back to black.jpg","suggester": "","country": "England","description": ""},
"00030":{"Name": "This is Big Audio Dynamite","Artist": "Big Audio Dynamite","Date": "21/12/2025","Year": "1985","Genres": "New Wave, Post Punk, Electro, Dub, Hip-Hop","Score":"6.5","Consistency": "5","bestSong": "E=MC2","imageName":"this is b.a.d.jpg","suggester": "","country": "England","description": "A couple of really great songs, but feels a bit dated overall. Not sure it can justify most songs being about 5 minutes, and with one nearly 7 minutes long. The lyrics to 'Medicine Show' are really funny. "},
"00031":{"Name": "Long Live Love","Artist": "Kirk Franklin","Date": "21/12/2025","Year": "2019","Genres": "Gospel, Funk, Soul","Score":"7","Consistency": "8","bestSong": "OK","imageName":"long live love.jpg","suggester": "","country": "USA","description": "Churchy, but still cool. Makes gospel sound flashy, with some really beautiful songs - especially 'OK' which elevates the album."},
"00032":{"Name": "Let Em Eat Bingo","Artist": "Beats International","Date": "21/12/2025","Year": "1990","Genres": "Electronic, House, Reggae, Dub, Hip-Hop","Score":"5.5","Consistency": "8","bestSong": "For Spacious Lies","imageName":"let 'em eat bingo.jpg","suggester": "","country": "England","description": "Forgettable, if not for 'For Spacious Lies'. There's a good sound, and Norman Cook clearly knows how to mix good music, but this album didn't make much of an impression."},
"00033":{"Name": "Pale Green Ghosts","Artist": "John Grant","Date": "22/12/2025","Year": "2013","Genres": "Indie, Folk","Score":"5.5","Consistency": "3","bestSong": "GMF","imageName":"pale green ghosts.jpg","suggester": "","country": "USA","description": "GMF is one of my favourite songs, but the rest of the album just really didn't do it for me. I found a couple of the songs quite unpleasant."},
"00034":{"Name": "Thriller","Artist": "Michael Jackson","Date": "22/12/2025","Year": "1982","Genres": "Disco, Rock, Dance, Pop, R&B, Funk","Score":"7.5","Consistency": "8","bestSong": "Thriller","imageName":"thriller.png","suggester": "","country": "USA","description": "While chock full of hits, I don't feel that Thriller massively flows as an album. Still, it's an excellent listen. Doesn't sit right with me that there's a song called 'Pretty Young Thing' all things considered."},
"00035":{"Name": "The Album","Artist": "Black Pink","Date": "22/12/2025","Year": "2020","Genres": "K-Pop, Pop, EDM, Electronic, Dance","Score":"5.5","Consistency": "10","bestSong": "Crazy Over You","imageName":"the album.png","suggester": "","country": "South Korea","description": "I'm not sure if any of these songs are really about anything. I can see the appeal of the heavy production style, but to me it's just too intense to be pleasant most of the time. Also, do they need to announce the name of the band in every song? I'm not that forgetful."},
"00036":{"Name": "The Fame Monster","Artist": "Lady Gaga","Date": "22/12/2025","Year": "2009","Genres": "Electropop, Pop, Dance Pop, Synth Pop","Score":"6.5","Consistency": "7","bestSong": "Bad Romance","imageName":"the fame monster.png","suggester": "","country": "USA","description": "Doesn't overstay its welcome at all - I could see myself liking this a lot more if I listened to it again. "},
"00037":{"Name": "Californication","Artist": "The Red Hot Chilli Peppers","Date": "23/12/2025","Year": "1999","Genres": "Rock, Pop Rock, Funk","Score":"7","Consistency": "8","bestSong": "Californication","imageName":"californication.jpg","suggester": "","country": "USA","description": "Californication (song) is obviously brilliant, but I was surprised by how nice some of the other melodies were - especially on Road Trippin'"},
"00038":{"Name": "A New World Record","Artist": "ELO","Date": "23/12/2025","Year": "1976","Genres": "Orchestral Pop, Pop Rock, Pop","Score":"8","Consistency": "9","bestSong": "Do Ya","imageName":"a new world record.jpg","suggester": "Jacob","country": "England","description": "Classic! I've heard the two big hits so many times that I really enjoyed hearing some of the less popular tracks. Do Ya is a new favourite of mine."},
"00039":{"Name": "Face Value","Artist": "Phil Collins","Date": "23/12/2025","Year": "1981","Genres": "Pop Rock, R&B, Art Rock, Soft Rock","Score":"6.5","Consistency": "4","bestSong": "In The Air Tonight","imageName":"face value.png","suggester": "Jacob","country": "England","description": "Starts extremely strong but never reaches the same heights again. I'd definitely like to listen to this one again, as I think I'd come away liking it a lot more."},
"00040":{"Name": "Random Access Memories","Artist": "Daft Punk","Date": "23/12/2025","Year": "2013","Genres": "Disco, Funk, Electronic, Pop, Dance, EDM","Score":"6.5","Consistency": "8","bestSong": "Giorgio by Moroder","imageName":"random access memories.png","suggester": "Jacob","country": "France","description": "I liked the album, a few hits, good features etc. Reading the story behind Giorgio by Moroder was really interesting - I love the idea behind that song, I'll be listening to one of his albums tomorrow."},
"00041":{"Name": "From Here to Eternity","Artist": "Giorgio Moroder","Date": "24/12/2025","Year": "1977","Genres": "Dance, Electronic","Score":"6.5","Consistency": "9","bestSong": "From Here To Eternity","imageName":"from here to eternity.jpg","suggester": "","country": "Italy","description": "Some poorly aged lyrics in 'First Hand Experience in Second Hand Love' but the sound is really cool. You can see how big of an influence this is on Daft Punk."},
"00042":{"Name": "Brat","Artist": "Charlie XCX","Date": "24/12/2025","Year": "2024","Genres": "Indie, Dance, Electronic, Pop","Score":"7","Consistency": "5","bestSong": "So, I","imageName":"brat.png","suggester": "Lucinda","country": "England","description": "I really wasn't connecting with the start of the album but as soon as we get to 'So, I' it shreds the tuneless repetitive thumping and we get some honest lyrics and nice melodies. I really like 'I Think About It All The Time'."},
"00043":{"Name": "A Charlie Brown Christmas","Artist": "Vince Guaraldi Trio","Date": "24/12/2025","Year": "1965","Genres": "Jazz, Christmas, Soundtrack","Score":"6.5","Consistency": "7","bestSong": "Linus and Lucy","imageName":"a charlie brown christmas.jpg","suggester": "","country": "USA","description": "Turns out Henry VIII didn't write Greensleeves. Nice Christmas music! The songs with lyrics are not very good - probably work better in the film."},
"00044":{"Name": "Man's Best Friend","Artist": "Sabrina Carpenter","Date": "26/12/2025","Year": "2025","Genres": "Soft Rock, Pop","Score":"9","Consistency": "8","bestSong": "Nobody's Son","imageName":"man's best friend.png","suggester": "","country": "USA","description": "Every song has such a good hook that I can just listen to this album over and over again without getting bored. I think the lyrics being so sexual will lose potency if she does yet another album like this, but for now, it works."},
"00045":{"Name": "Live Through This","Artist": "Hole","Date": "27/12/2025","Year": "1994","Genres": "Punk Rock, Grunge","Score":"7","Consistency": "9","bestSong": "Rock Star (Olympia)","imageName":"live through this.png","suggester": "Amelie","country": "USA","description": "This is the closest I've come so far to enjoying grunge. Courtney Love's personality definitely comes through. I'm going to listen to more Hole soon, and then some Nirvana."},
"00046":{"Name": "In The Wee Small Hours","Artist": "Frank Sinatra","Date": "27/12/2025","Year": "1955","Genres": "Jazz, Ballad, Vocal Jazz, Traditional Pop","Score":"7","Consistency": "10","bestSong": "Last Night When We Were Young","imageName":"in the wee small hours.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA","description": "Though the book would disagree, to me this is an easy listening album underpinned by lyrics both deeply sad, and casually cool. I like it, but I prefer Sinatra's finger-snapping stuff."},
"00047":{"Name": "Elvis Presley","Artist": "Elvis Presley","Date": "27/12/2025","Year": "1956","Genres": "Rock and Roll, Rockabilly","Score":"7.5","Consistency": "7.5","bestSong": "Blue Suede Shoes","imageName":"elvis presley.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA","description": "Such an iconic album cover, and an iconic set of songs too. All good stuff!"},
"00048":{"Name": "Tragic Songs of Life","Artist": "The Louvin Brothers","Date": "27/12/2025","Year": "1956","Genres": "Country, Folk, Murder Ballads","Score":"7","Consistency": "9","bestSong": "Knoxville Girl","imageName":"tragic songs of life.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA","description": "I've been really enjoying this kind of country sound recently, but mostly in newer stuff. It's nice to hear one of the old essential releases and to read a bit about their story. One brother was straight laced, but the other was not. He once survived being shot by his third wife. Not sure how I feel about murder ballads, but for now 'Knoxville Girl' is my favourite on the album."},
"00049":{"Name": "Nancy & Lee","Artist": "Nancy Sinatra and Lee Hazlewood","Date": "27/12/2025","Year": "1968","Genres": "Psychedelic Pop, Country,","Score":"8.5","Consistency": "7","bestSong": "Summer Wine","imageName":"nancy and lee.png","suggester": "","country": "USA","description": "Every song is effective in its own right, so many good ideas here! This is a perfect pairing. Makes me laugh how every song ends with an uncomfortably long fade-out. I like the two bonus tracks not included in the original release."},
"00050":{"Name": "Volume One","Artist": "She & Him","Date": "28/12/2025","Year": "2008","Genres": "Indie, Alternative Country, Folk, Easy Listening","Score":"7.5","Consistency": "8","bestSong": "Sentimental Heart","imageName":"she and him volume one.jpg","suggester": "","country": "USA","description": "Pleasantly surprised! Zooey Deschanel clearly isn't just another actor dabbling in music as a hobby. Her personality comes through in her style of singing. This is really good easy listening for me. Good job team!"},
"00050":{"Name": "Volume One","Artist": "She & Him","Date": "28/12/2025","Year": "2008","Genres": "Indie, Alternative Country, Folk, Easy Listening","Score":"7.5","Consistency": "8","bestSong": "Sentimental Heart","imageName":"she and him volume one.jpg","suggester": "","country": "USA","description": "Pleasantly surprised! Zooey Deschanel clearly isn't just another actor dabbling in music as a hobby. Her personality comes through in her style of singing. This is really good easy listening for me. Good job team!"},
"00051":{"Name": "The Wildest","Artist": "Louis Prima","Date": "28/12/2025","Year": "1956","Genres": "Jazz, Vocal Jazz, Swing","Score":"8.5","Consistency": "7","bestSong": "(I'll Be Glad When You're Dead) You Rascal You","imageName":"the wildest.jpeg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA","description": "If (dubious casting practices put aside) your favourite jungle book song is 'I Wan'na Be like You' then this is the album for you! There's a song about how much Loius hates some guy and wants him to die because he's greedy when they share pasta, a song about tricking your partner into paying for their own expensive banana split, and one about a potion made from goldfish legs that let's him play the trumpet. All acompanied by excellent instrument"},
"00052":{"Name": "Charm","Artist": "Clairo","Date": "28/12/2025","Year": "2024","Genres": "Soft rock, Folk, Vocal Jazz, Soul, Pop","Score":"5.5","Consistency": "9","bestSong": "Slow Dance","imageName":"charm.png","suggester": "Maisie","country": "USA","description": "Nothing particularly wrong with this album for me, but it just lacked any pizzazz. There wasn't anything that got my excited, or made me want to explore more by Clairo. I wouldn't be upset to hear it play in a lift or a supermarket though."},
"00053":{"Name": "This is Fats Domino!","Artist": "Fats Domino","Date": "28/12/2025","Year": "1956","Genres": "Rock and Roll, Rockabilly, R&B, Blues","Score":"7","Consistency": "10","bestSong": "Blueberry Hill","imageName":"this is fats domino.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA","description": "A hard one to find! The album is split up on music streaming services in strange ways. Consistent, sounds great, but doesn't reach the highs of the other rock and roll albums of this area. "},
"00054":{"Name": "I Against I","Artist": "Bad Brains","Date": "28/12/2025","Year": "1986","Genres": "Metal, Punk, Reggae, Funk Rock","Score":"6","Consistency": "7","bestSong": "Let Me Help","imageName":"I against I.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA","description": "I liked it! but I think metal is a genre that will take some time to grow on me. The blend of genres in this album is excellent."},
"00055":{"Name": "The Sounds Of India","Artist": "Ravi Shankar","Date": "28/12/2025","Year": "1957","Genres": "Hindustani Classical, Indian Classical","Score":"7.5","Consistency": "10","bestSong": "Bhimpalási","imageName":"the sounds of india.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "India","description": "There's no better album to be my introduction to indian music, than one which begins with 'An Introduction to Indian Music'. As a western listener, the insight into the techniques in each song was massively appreciated. Excited to explore more of this."},
"00056":{"Name": "Stick Season","Artist": "Noah Kahan","Date": "29/12/2025","Year": "2022","Genres": "Folk, Indie","Score":"8.5","Consistency": "6","bestSong": "Homesick","imageName":"stick season.jpg","suggester": "Lucinda","country": "USA","description": "Noah Kahan's witty lyrics, and electrifying banjo playing make this a fantastically energetic folk album, while carrying such emotion. His lyrics are charming."},
"00057":{"Name": "(What's the Story) Morning Glory?","Artist": "Oasis","Date": "29/12/2025","Year": "1995","Genres": "Britpop, Rock","Score":"10","Consistency": "9","bestSong": "Champagne Supernova","imageName":"morning glory.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England","description": ""},
"00059":{"Name": "Paul Simon","Artist": "Paul Simon","Date": "31/12/2025","Year": "1972","Genres": "Folk Rock, Pop","Score":"7","Consistency": "9","bestSong": "Mother and Child Reunion","imageName":"paul simon.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA","description": ""},
"00060":{"Name": "Tom Petty and The Heartbreakers","Artist": "Tom Petty and The Heartbreakers","Date": "31/12/2025","Year": "1976","Genres": "Rock and Roll","Score":"6.5","Consistency": "9","bestSong": "American Girl","imageName":"Tom Petty and The Heartbreakers.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA","description": "Tom Petty described this album as "eccentric" but I think this is actually one of the most agreeable, but unremarkable albums I've heard so far. It's a safe, pleasant 30 minutes but not much more."},




};

var AlbumArray = Object.keys(albumsById).map(function(v) {
  return $.extend({ ID: v }, albumsById[v]);
});

display(AlbumArray);  /*Display All AlbumArray data */

function sorting(EmpData,SearchString='',SortBy='ID',dirSort){
  switch(SortBy){

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

    case 'Consistency' :
      EmpData.sort(function(a,b) {
        aScore = a["Consistency"];
        if (aScore.length == 1 || aScore.length == 3){
            aScore = "0" + aScore;
         }
        bScore = b["Consistency"];
        if (bScore.length == 1 || bScore.length == 3){
            bScore = "0" + bScore;
         }


        return aScore.localeCompare(bScore);  /*Sort By Rating*/
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

function searching(){
  var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
  var SortBy        = $('#sort').val();
  var dirSort       = $('#order').is(":checked");
  var onlyShow      = $('#displayType').val();
  var Data          = sorting(AlbumArray,SearchString,SortBy,dirSort);
  var SearchData    = [];
  var CriteriaData    = [];
  var index         = 0;
  var index2        = 0;
  var Name          = '';

  var onlyShowBy   = $('#onlyShowBy').val();

  //this determines if we've matched the search
  for(i=0; i<Data.length; i++){
    Name      = Data[i].Name.toUpperCase() + Data[i].Artist.toUpperCase();  /*Uppercase for Case Insentive*/
    if (Name.indexOf(SearchString)>=0){  /*Search By Name*/
      SearchData[index++] = Data[i];
    }
  }

  //we want to determine if we've matched the extra criteria
  for(i=0; i<SearchData.length; i++){

    if (onlyShow == "All"){
        CriteriaData[index2++] = SearchData[i];
    } 
    else if (onlyShowBy == "All"){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Recommender" && SearchData[i].suggester == onlyShowBy){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Artist" && SearchData[i].Artist.includes(onlyShowBy)){
        CriteriaData[index2++] = SearchData[i];
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
  }


  display(CriteriaData);  /*Display Sorting Data*/
}

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
    var checkShow = true;

    for (var i=0; i<Data.length;i++){
        
        if (onlyShow == "Recommender"){
            if (!listOfOptions.includes(Data[i].suggester) && Data[i].suggester.length > 0){
                listOfOptions.push(Data[i].suggester);
            }
        }

        if (onlyShow == "All"){
            checkShow = false;
            break;
        }

        if (onlyShow == "Artist"){
            if (!listOfOptions.includes(Data[i].Artist)){
                var artistName = Data[i].Artist.split("(")[0];
                listOfOptions.push(artistName);
            }
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
            var myString =  Data[i].Genres.replace(", ",",").replace(" ,",",")
            var myArray = myString.split(",");
            
            
            for (var k=0; k<Data.length;k++){

                let myGenre = myArray[k];
                
                if (!listOfOptions.includes($.trim(myGenre))){
                    listOfOptions.push($.trim(myGenre));
                }
            }
        }

        if (onlyShow == "Country"){
            var myArray = Data[i].country.replace(", ",",").replace(" ,",",").split(",");
            
            for (var k=0; k<Data.length;k++){

                if (!listOfOptions.includes(myArray[k])){
                    listOfOptions.push(myArray[k]);
                }
            }
        }
    }

     listOfOptions.sort(function(a,b) {
        return a.localeCompare(b);  /*Sort By Date*/
      });

      listOfOptions.unshift("All");

      if (onlyShow != "Country"){
        for(var i=0; i<listOfOptions.length;i++){
        if (listOfOptions[i].length > 0)
        {
          html2 += '<option value="' + listOfOptions[i] + '" class="standardText">' + listOfOptions[i] + '</option>';
        }
        }
      }
      else
      {
        for(var i=0; i<listOfOptions.length - 1;i++){
          html2 += '<option value="' + listOfOptions[i] + '" class="standardText">' + listOfOptions[i] + '</option>';
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

function display(Data){

    var html = '';
  //this part controls the display of albums
  for(var i=0; i<Data.length;i++){
    html+='<div class="album album_' + (i % 7).toString() + '">';
    html += '<img class="albumCover" src="./images/albums/' + Data[i].imageName + '" alt="' + Data[i].Name + ' Album Cover"></img>'
      html+='<p class="name">'+Data[i].Name+ ' (' + Data[i].Year + ')</p>';

      var artistName = Data[i].Artist.split("(")[0];


      html+='<p class="artist">'+artistName+'</p>';
      html+='<p class="standardText"> Date: '+Data[i].Date+'</p>';
      html+='<p class="standardText"> Best Song: '+Data[i].bestSong+'</p>';

      if (Data[i].description.length > 290 && Data[i].suggester.length > 0){
        html+='<p class="standardText"> Score: '+Data[i].Score+ ' and Consistency: '+ Data[i].Consistency+ '/10</p>';
      }
      else{
      html+='<p class="standardText"> Score: '+Data[i].Score+'/10</p>';
      html+='<p class="standardText"> Consistency: '+ Data[i].Consistency+'/10</p>';
      }
      if (Data[i].suggester.length > 0){
        html+='<p class="standardText"> Recommended By: '+Data[i].suggester+'</p>';
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

  const mode = Array.from(new Set(allScores)).reduce((prev, curr) => allScores.filter(el => el === curr).length > allScores.filter(el => el === prev).length ? curr : prev);

  albumCount +=  (Math.round(totalScore * 100 / Data.length)/100).toString() + "<\p>";
  stats = "<p>Mean Score: " + (Math.round(totalScore * 100 / Data.length)/100).toString() + "<p>";
  stats += "<p>Standard Deviation: " + (Math.round(Math.sqrt(sumForVariance) * 100)/100).toString() + "<p>";
  stats += "<p>Lowest Score: " + (lowestValue).toString() + "<p>";
  stats += "<p>Highest Score: " + (highestValue).toString() + "<p>";
  stats += "<p>Modal Score: " + (mode).toString() + "<p>";
  stats += "<p>PCC (Year:Score): " + (calculatePCC(Data)).toString() + "<p>";

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

$('#displayType').change(function(){  /*Live Search, When Toggle Button*/
  displayDropdown();
});

$('#onlyShowBy').change(function(){  /*Live Search, When Toggle Button*/
  displayDropdown();
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