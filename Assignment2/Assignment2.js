// musicPlayer.js

var audio = document.getElementById('audioPlayer');
var lyricsContainer = document.getElementById('lyricsContainer');

var lyrics = [
    { time: 0, text:""},
    { time: 2, text: '<span class="bigger">Dearly beloved!</span>\nFor your <span class="red bold bigger">entertainment</span>\nIt\'s my <span class="green bold">pleasure</span> to introduce to you hell\'s latest arrival\nThe qual-opportunity <span class="bold blue">killer</span>, <span class="red bold bigger">Alastor！</span>' },
    { time: 11, text: "Hello, <b>it's nice to meet you</b>\nOh, can you tell me <span class='bold red bigger'>where I am?</span>\nI don't know <span class='bold blue'>how I got here</span>\nBut I, I think I'm starting to <span class='bold green'>understand</span>" },
    { time: 20, text:"I don't belong among the <span class='blue bold bigger'>angels</span>\nAnd <span class='blue bold bigger'>baby</span>, that's just <span class='bold red'>fine</span> with me\nThe things I did up there were <span class='bold green'>high school</span>\n<I>But now I'm going for<I> my <span class='bold red bigger'>degree</span>"},
    { time: 28, text:"<span class='red bold'>Hey</span>\nSorry, but you <span class='blue bold'>just got in my way</span>\nI promise honey, I can feel your <I><span class='red bold'>pain</span><I>\nAnd maybe I enjoy it <span class='red bold'>just a little bit</span>"},
    { time: 37, text:"Does that make me <span class='red bold'><I>insane?<I></span>\nHaven't been the same since I <span class='red bold'>expired</span>?\nDoesn't mean that I plan to <span class='red bold'>retire</span>"},
    { time: 44, text:"And now I have the <span class='blue bold'>power</span> to bathe all of you in <span class='red bold bigger'>entertaining fire</span>"},
    { time: 66, text:"<span class='red bold'>Wait a minute</span>, do I know you?\nWeren't you an <span class='blue bold'>old pal</span> of mine?\nDeparted from us <span class='green bold'>far to early</span>\nBut now we're <span class='blue bold'>meeting a second time</span>"},
    { time: 75, text:"We used to have <span class='blue bold'>such fun</span> together\nAnd maybe you have <span class='green bold'>what I need</span>\nBut first I have <span class='red bold'>one tiny question</span>"},
    { time: 82, text:"Tell me, do you demons <span class='red bold bigger'>Bleed?</span>"},
    { time: 87, text:"<span class='red bold'>Hey</span>\nSorry, but you just <span class='blue bold'>got in my way</span>\nI promise honey, I can feel your <I><span class='red bold'>pain</span><I>\nAnd maybe I enjoy it <span class='red bold'>just a little bit</span>\nDoes that make me <I><span class='red bold'>insane?</span><I>"},
    { time: 96, text:"Haven't been the same since I <span class='red bold'>expired</span>\nDoesn't mean that I plan to <span class='red bold'>retire</span>"},
    { time: 101, text:"And now I have the <span class='green bold'>power</span> to bathe all of you in <span class='red bold bigger'>entertaining fire</span>"},
    { time: 123, text:"<span class='red bold'>Hey</span>\nSorry, but you <span class='blue bold'>just got in my way</span>\nI promise honey, I can feel your <span class='red bold'>pain</span>\nAnd maybe I enjoy it <span class='red bold'>just a little bit</span>\nDoes that make me <I><span class='red bold'>insane?</span></I>?"},
    { time: 132, text:"Haven't been the same since I <span class='red bold'>expired</span>\nDoesn't mean that I plan to <span class='red bold'>retire</span>"},
    { time: 138, text:"And now I have the <span class='blue bold'>power</span> to bathe all of you in <span class='red bold bigger'>entertaining fire</span>"},
    { time: 142, text:"Sorry, but you just <span class='green bold'>got in my way</span>\nI promise honey, I can feel your <span class='red bold'><I>pain</I></span>"},
    { time: 147, text:"And maybe I enjoy it <span class='red bold'>just a little bit</span>\nDoes that make me <span class='red bold'><I>insane?<I></span>"},
    { time: 156, text:""}
];

audio.addEventListener('timeupdate', function () {
    var currentTime = audio.currentTime;

    for (var i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time && currentTime < (lyrics[i + 1] ? lyrics[i + 1].time : audio.duration)) {            
            var lines = lyrics[i].text.split('\n');

            var interval = (lyrics[i + 1] ? lyrics[i + 1].time : audio.duration) - lyrics[i].time;
            var lineIndex = Math.floor((currentTime - lyrics[i].time) / interval * lines.length);

            lyricsContainer.innerHTML = lines.slice(0, lineIndex + 1).join('<br>');

            break;
        }
    }
});


