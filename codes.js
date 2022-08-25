function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
document.getElementById("overlay").style.display = "none";
}

off()

var qrs = {
    'bday1' : { 
        'source' : './img/codes/bday1/qr.png',
        'link' : 'http://gimme.sg/activations/InformalBirthday/index.html',
    },
    'bday2' : {
        'source' : './img/codes/bday2/qr.png',
        'link' : 'http://gimme.sg/activations/FormalBday/index.html',
    },
    'bday3' : {
        'source' : './img/codes/bday3/qr.png',
        'link': 'http://gimme.sg/activations/FormalBirthdayCard/index.html'
    },
    'tipRand' : {
        'source' : './img/codes/tip/qr.png',
        'link' : 'http://gimme.sg/activations/AnimatedTip/index.html'
    },
    'memory' : {
        'source' : './img/codes/memory/qr.png',
        'link' : 'http://gimme.sg/activations/FlipCard/index.html'
    },
    'balloon' : {
        'source' : './img/codes/balloon/qr.png',
        'link' : 'http://gimme.sg/activations/StressBall/index.html'
    },
    'interview' : {
        'source' : './img/codes/interview/qr.png',
        'link' : 'http://gimme.sg/activations/InteractiveInterview/index.html'
    },
    'posttest' : {
        'source' : './img/codes/postTest/qr.png',
        'link' : 'http://gimme.sg/activations/PostTest/index.html'
    },
    'slidingpoll' : {
        'source' : './img/codes/slidingpoll/qr.png',
        'link' : 'http://gimme.sg/activations/SlidingPoll/index.html'
    },
    'trivia' : {
        'source' : './img/codes/trivia/qr.png',
        'link' : 'http://gimme.sg/activations/TriviaFlipCard/index.html'
    },
    'vibecheck' : {
        'source' : './img/codes/vibe/qr.png',
        'link' : 'http://gimme.sg/activations/VibeCheck/index.html'
    },
    'feedback1' : {
        'source' : './img/codes/feedback1/qr.png',
        'link' : 'http://gimme.sg/activations/MultipleChoice/index.html'
    },
    'feedback2' : {
        'source' : './img/codes/feedback2/qr.png',
        'link' : 'http://gimme.sg/activations/FeedbackForm/index.html'
    },
    'vip' : {
        'source' : './img/codes/vip/qr.png',
        'link' : 'http://gimme.sg/activations/VIP/index.html'
    }, 
    'time' : {
        'source' : './img/codes/time/qr.png',
        'link' : 'http://gimme.sg/activations/Time/index.html'
    },
    'cktl' : {
        'source' : './img/codes/cktl/qr.png',
        'link' : 'http://gimme.sg/activations/cktlGiveaway/index.html'
    }
}

var wind = window.screen.width;

function showQR(eleID){
    ele = qrs[eleID];
    if (wind >= 768){
        qrsrc = ele['source'];
        var imgqr = document.getElementById('qrimg');
        imgqr.src =qrsrc;
        on();
    }
    else{
        var link = ele['link'];
        var linked = document.getElementById('linker');
        linked.setAttribute('target', '_blank');
        linked.href = link;
    }
}