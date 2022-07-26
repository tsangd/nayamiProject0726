var counter = 0;
function nayamiTextBox(){
    const inputText1 = document.getElementById('inputText');
    const nayamiImage = document.getElementById('user-picture');
    const dialogbox = document.getElementById("dialog-box");
    const bubble2 = document.getElementById("bubble-box");
    const userPicture2 = document.getElementById("userpicture2");
    const advisorBubble = document.getElementById("dialog-box2");
    const subtitles = document.getElementById("sub");
    const you = document.getElementById("you");
    
    if(counter==0){
        if(inputText1.value==""){
            alert("あなたの悩みを入力してください");
        }else{
            document.getElementById('inputText').readOnly = true;
            dialogbox.style.opacity =0;
            nayamiImage.style.transitionDelay = 1+'s';
            subtitles.style.transitionDelay = 1+'s';
            you.style.transitionDelay = 1+'s';
            nayamiImage.style.opacity=1;
            subtitles.style.opacity=1;
            you.style.opacity=1;
            document.getElementById("button-1").addEventListener("click", delayButton);
            counter++;
        }
    }
    else if(counter==1){

        subtitles.style.opacity = 0;
        subtitles.style.transitionDelay=1+'s';
        subtitles.textContent="あなたの悩みを少し見ましょう。";
        subtitles.style.opacity = 1;
        document.getElementById("button-1").addEventListener("click", delayButton);
        counter++;
    }
    else if(counter == 2){
        subtitles.style.opacity=0;
        inputText1.style.transitionDelay = 1+'s';
        dialogbox.style.transitionDelay = 1+'s';
        dialogbox.style.opacity=1;
        dialogbox.style.top = -17+'rem';
        document.getElementById("button-1").addEventListener("click", delayButton);
        counter++;

    }
    else if(counter == 3){   
        dialogbox.style.left = 10+'rem';
        dialogbox.style.top = 12+'rem';
        dialogbox.style.transform = 'scale(0.6)';
        nayamiImage.style.transform='scale(0.5)';
        nayamiImage.style.left= -53.5+'rem';
        nayamiImage.style.top= 2+'rem';
        you.style.left = -57.5+'rem';
        you.style.top = 0.8+'rem';
        document.getElementById("button-1").addEventListener("click", delayButton);
        bubble2.classList.add('fade-in');
        counter++;

    }else if(counter==4){
        bubble2.classList.add('fade-out');
        userPicture2.style.transitionDelay = 1+'s';
        userPicture2.style.opacity = 1;
        advisorBubble.classList.add('fadein');
        document.getElementById("button-1").addEventListener("click", delayButton);
        counter++;
    }else{
        window.location.href = "./advice.html";
    }
}

function delayButton() {
    document.getElementById("button-1").disabled = true;
    setTimeout(function() {
        document.getElementById("button-1").disabled = false;
    }, 2000);
}
function anshinChoice(){
    const choice = document.getElementById('anshin-msg-btn');
    if(emojiCount>1 && emojiCount<5){
        window.location.href ="./advice.html";
    }else{
        alert("感情絵文字を選択しておりませんでした。");
    }
}
const progress = document.getElementById("progress");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;

update(2);

function update(currentActive){
    stepCircles.forEach((circle,i)=>{
        if(i<currentActive){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    });
    const activeCircles = document.querySelectorAll(".active");
    progress.style.width =((activeCircles.length-1)/(stepCircles.length-1))*100+"%";
}
var emoji;
var emojiMsg = document.getElementById("checkMessage");
var canvas = document.getElementsByClassName("canvas");
var smileEmoji =  document.getElementById("smile");
var sadEmoji = document.getElementById("sad");
var cryEmoji = document.getElementById("cry");
var normalEmoji = document.getElementById("normal");
var shockedEmoji = document.getElementById("shocked");
var sickEmoji = document.getElementById("sick");
var suprisedEmoji = document.getElementById("suprised");
var verySadEmoji = document.getElementById("verySad");
var worriedEmoji = document.getElementById("worried");
var emojiCount = 1;

var allBtn = document.getElementById("allBtn");
var sadBtn = document.getElementById("sadBtn");
var happyBtn = document.getElementById("happyBtn");
var suprisedBtn = document.getElementById("suprisedBtn");
var scaredBtn = document.getElementById("scaredBtn");
var badBtn = document.getElementById("badBtn");
function allButton(){
    smileEmoji.style.display = 'initial';
    sadEmoji.style.display = 'initial';
    cryEmoji.style.display = 'initial';
    normalEmoji.style.display = 'initial';
    shockedEmoji.style.display = 'initial';
    sickEmoji.style.display = 'initial';
    suprisedEmoji.style.display = 'initial';
    verySadEmoji.style.display = 'initial';
    worriedEmoji.style.display = 'initial';
}
function sadButton(){
    smileEmoji.style.display = 'none';
    sadEmoji.style.display = 'initial';
    cryEmoji.style.display = 'initial';
    normalEmoji.style.display = 'none';
    shockedEmoji.style.display = 'none';
    sickEmoji.style.display = 'none';
    suprisedEmoji.style.display = 'none';
    verySadEmoji.style.display = 'initial';
    worriedEmoji.style.display = 'none';
}
function happyButton(){
    smileEmoji.style.display = 'initial';
    sadEmoji.style.display = 'none';
    cryEmoji.style.display = 'none';
    normalEmoji.style.display = 'none';
    shockedEmoji.style.display = 'none';
    sickEmoji.style.display = 'none';
    suprisedEmoji.style.display = 'none';
    verySadEmoji.style.display = 'none';
    worriedEmoji.style.display = 'none';
}
function suprisedButton(){
    smileEmoji.style.display = 'none';
    sadEmoji.style.display = 'none';
    cryEmoji.style.display = 'none';
    normalEmoji.style.display = 'initial';
    shockedEmoji.style.display = 'none';
    sickEmoji.style.display = 'none';
    suprisedEmoji.style.display = 'none';
    verySadEmoji.style.display = 'none';
    worriedEmoji.style.display = 'none';
}
function scaredButton(){
    smileEmoji.style.display = 'none';
    sadEmoji.style.display = 'none';
    cryEmoji.style.display = 'none';
    normalEmoji.style.display = 'none';
    shockedEmoji.style.display = 'initial';
    sickEmoji.style.display = 'none';
    suprisedEmoji.style.display = 'none';
    verySadEmoji.style.display = 'none';
    worriedEmoji.style.display = 'initial';
}
function badButton(){
    smileEmoji.style.display = 'none';
    sadEmoji.style.display = 'none';
    cryEmoji.style.display = 'none';
    normalEmoji.style.display = 'none';
    shockedEmoji.style.display = 'none';
    sickEmoji.style.display = 'initial';
    suprisedEmoji.style.display = 'none';
    verySadEmoji.style.display = 'none';
    worriedEmoji.style.display = 'none';
}
var emojiChoice = document.getElementById("emoji-choice");
const move = function(dragEmoji){
    const emojis = document.querySelectorAll(".emoji");
    emojis.forEach(dragEmoji => {
        dragEmoji.addEventListener("mousedown", () => {
            dragEmoji.style.position = "absolute";
            emoji = dragEmoji;
            document.onmousemove = (e) =>{
                var emojiPos = emoji.getBoundingClientRect();
                if(e.x >2000 || e.x < 450){

                }
                if(emojiPos.x>2000 || emojiPos.x < 445){
                }
                if(emojiPos.y>1020||emojiPos.y < 585){
                }
                if(emoji == sadEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：悲しい・痛み";
                }
                if(emoji == smileEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：楽しみ・喜び";
                }
                if(emoji == cryEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：悲しみ・痛み";
                }
                if(emoji == normalEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：驚き・ドキドキ";
                }
                if(emoji == shockedEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：恐怖・不安";
                }
                if(emoji == sickEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：嫌悪・イライラ";
                }
                if(emoji == suprisedEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：驚き・ドキドキ";
                }
                if(emoji == verySadEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：悲しい・痛み";
                }
                if(emoji == worriedEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：恐怖・不安";
                }
                if(emojiCount<4){
                    if(emoji.style.height==200+"px"){
                        var x = e.pageX;
                        var y = e.pageY;
                        emoji.style.left = x -635 + "px";
                        emoji.style.top = y -730+ "px";
                        preventDefault();
                    }else{
                        e.pageX;
                        e.pageY;
                        emoji.style.left = x -635 + "px";
                        emoji.style.top = y -690+ "px";
                        emoji.style.filter="grayscale(100%)";
                        preventDefault();
                    }
                }else{
                    e.pageX;
                    e.pageY;
                    emoji.style.left = x -635 + "px";
                    emoji.style.top = y -690+ "px";
                    preventDefault();
                }
            };
            document.onmouseup = function(e){
                document.getElementById("emoji-choice").innerHTML = "選択：";
                if(emoji == sadEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：悲しみ・痛み";
                }
                if(emoji == smileEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：楽しみ・喜び";
                }
                if(emoji == cryEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：悲しみ・痛み";
                }
                if(emoji == normalEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：驚き・ドキドキ";
                }
                if(emoji == shockedEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：恐怖・不安";
                }
                if(emoji == sickEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：嫌悪・イライラ";
                }
                if(emoji == suprisedEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：驚き・ドキドキ";
                }
                if(emoji == verySadEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：悲しみ・痛み";
                }
                if(emoji == worriedEmoji){
                    document.getElementById("emoji-choice").innerHTML = "選択：恐怖・不安";
                }
                if(emojiCount<4){
                    if(emoji.style.height == 200+"px"){
                        if(emoji = smileEmoji){
                            if(document.getElementById("emoji1").innerHTML = ("./emotions/happyEmoji.png")){
                                document.getElementById("emoji1").innerHTML = ("");
                                document.getElementById("adviceResultImg1").src="";
                            }else if(document.getElementById("emoji2").innerHTML = ("./emotions/happyEmoji.png")){
                                document.getElementById("emoji2").innerHTML = ("");
                                document.getElementById("adviceResultImg2").src="";
                            }else if(document.getElementById("emoji3").innerHTML = ("./emotions/happyEmoji.png")){
                                document.getElementById("emoji3").innerHTML = ("");
                                document.getElementById("adviceResultImg3").src="";
                            }
                        }else if(emoji == sadEmoji){
                            if(document.getElementById("emoji1").innerHTML = ("./emotions/sadEmoji.png")){
                                document.getElementById("emoji1").innerHTML = ("");
                                document.getElementById("adviceResultImg1").src="";
                            }else if(document.getElementById("emoji2").innerHTML = ("./emotions/sadEmoji.png")){
                                document.getElementById("emoji2").innerHTML = ("");
                                document.getElementById("adviceResultImg2").src="";
                            }else if(document.getElementById("emoji3").innerHTML = ("./emotions/sadEmoji.png")){
                                document.getElementById("emoji3").innerHTML = ("");
                                document.getElementById("adviceResultImg3").src="";
                            }
                        }else if(emoji == cryEmoji){
                            if(document.getElementById("emoji1").innerHTML = ("./emotions/cryEmoji.png")){
                                document.getElementById("emoji1").innerHTML = ("");
                                document.getElementById("adviceResultImg1").src="";
                            }else if(document.getElementById("emoji2").innerHTML = ("./emotions/cryEmoji.png")){
                                document.getElementById("emoji2").innerHTML = ("");
                                document.getElementById("adviceResultImg2").src="";
                            }else if(document.getElementById("emoji3").innerHTML = ("./emotions/cryEmoji.png")){
                                document.getElementById("emoji3").innerHTML = ("");
                                document.getElementById("adviceResultImg3").src="";
                            }
                        }else if(emoji == sickEmoji){
                            if(document.getElementById("emoji1").innerHTML = ("./emotions/sickEmoji.png")){
                                document.getElementById("emoji1").innerHTML = ("");
                                document.getElementById("adviceResultImg1").src="";
                            }else if(document.getElementById("emoji2").innerHTML = ("./emotions/sickEmoji.png")){
                                document.getElementById("emoji2").innerHTML = ("");
                                document.getElementById("adviceResultImg2").src="";
                            }else if(document.getElementById("emoji3").innerHTML = ("./emotions/sickEmoji.png")){
                                document.getElementById("emoji3").innerHTML = ("");
                                document.getElementById("adviceResultImg3").src="";
                            }
                        }else if(emoji == normalEmoji){
                            if(document.getElementById("emoji1").innerHTML = ("./emotions/normalEmoji.png")){
                                document.getElementById("emoji1").innerHTML = ("");
                                document.getElementById("adviceResultImg1").src="";
                            }else if(document.getElementById("emoji2").innerHTML = ("./emotions/normalEmoji.png")){
                                document.getElementById("emoji2").innerHTML = ("");
                                document.getElementById("adviceResultImg2").src="";
                            }else if(document.getElementById("emoji3").innerHTML = ("./emotions/normalEmoji.png")){
                                document.getElementById("emoji3").innerHTML = ("");
                                document.getElementById("adviceResultImg3").src="";
                            }
                        }else if(emoji == shockedEmoji){
                            if(document.getElementById("emoji1").innerHTML = ("./emotions/shockedEmoji.png")){
                                document.getElementById("emoji1").innerHTML = ("");
                                document.getElementById("adviceResultImg1").src="";
                            }else if(document.getElementById("emoji2").innerHTML = ("./emotions/shockedEmoji.png")){
                                document.getElementById("emoji2").innerHTML = ("");
                                document.getElementById("adviceResultImg2").src="";
                            }else if(document.getElementById("emoji3").innerHTML = ("./emotions/shockedEmoji.png")){
                                document.getElementById("emoji3").innerHTML = ("");
                                document.getElementById("adviceResultImg3").src="";
                            }
                        }else if(emoji == verySadEmoji){
                            if(document.getElementById("emoji1").innerHTML = ("./emotions/verySad.png")){
                                document.getElementById("emoji1").innerHTML = ("");
                                document.getElementById("adviceResultImg1").src="";
                            }else if(document.getElementById("emoji2").innerHTML = ("./emotions/verySad.png")){
                                document.getElementById("emoji2").innerHTML = ("");
                                document.getElementById("adviceResultImg2").src="";
                            }else if(document.getElementById("emoji3").innerHTML = ("./emotions/verySad.png")){
                                document.getElementById("emoji3").innerHTML = ("");
                                document.getElementById("adviceResultImg3").src="";
                            }
                        }else if(emoji == worriedEmoji){
                            if(document.getElementById("emoji1").innerHTML = ("./emotions/worriedEmoji.png")){
                                document.getElementById("emoji1").innerHTML = ("");
                                document.getElementById("adviceResultImg1").src="";
                            }else if(document.getElementById("emoji2").innerHTML = ("./emotions/worriedEmoji.png")){
                                document.getElementById("emoji2").innerHTML = ("");
                                document.getElementById("adviceResultImg2").src="";
                            }else if(document.getElementById("emoji3").innerHTML = ("./emotions/worriedEmoji.png")){
                                document.getElementById("emoji3").innerHTML = ("");
                                document.getElementById("adviceResultImg3").src="";
                            }
                        }else if(emoji == suprisedEmoji){
                            if(document.getElementById("emoji1").innerHTML = ("./emotions/shockedEmoji.png")){
                                document.getElementById("emoji1").innerHTML = ("");
                                document.getElementById("adviceResultImg1").src="";
                            }else if(document.getElementById("emoji2").innerHTML = ("./emotions/suprisedEmoji.png")){
                                document.getElementById("emoji2").innerHTML = ("");
                                document.getElementById("adviceResultImg2").src="";
                            }else if(document.getElementById("emoji3").innerHTML = ("./emotions/shockedEmoji.png")){
                                document.getElementById("emoji3").innerHTML = ("");
                                document.getElementById("adviceResultImg3").src="";
                            }
                        }
                        emoji.style.width = 125+"px";
                        emoji.style.height = 125+"px";
                        emoji.style.filter="grayscale(100%)";
                        emoji = null;
                        emojiCount--;
                    }else{
                        if(emojiCount==1){
                            if(emoji == smileEmoji){
                                document.getElementById("emoji1").innerHTML = ("楽しみ・喜び");
                                document.getElementById("adviceResultImg1").src="./emotions/happyEmoji.png";
                            }else if(emoji == sadEmoji){
                                document.getElementById("emoji1").innerHTML = ("悲しみ・痛み");
                                document.getElementById("adviceResultImg1").src ="./emotions/sadEmoji.png";
                            }else if(emoji == cryEmoji){
                                document.getElementById("emoji1").innerHTML = ("悲しみ・痛み");
                                document.getElementById("adviceResultImg1").src = "./emotions/cryEmoji.png";
                            }else if(emoji == sickEmoji){
                                document.getElementById("emoji1").innerHTML = ("嫌悪・イライラ");
                                document.getElementById("adviceResultImg1").src ="./emotions/sickEmoji.png";
                            }else if(emoji == normalEmoji){
                                document.getElementById("emoji1").innerHTML = ("驚き・ドキドキ");
                                document.getElementById("adviceResultImg1").src="./emotions/normalEmoji.png";
                            }else if(emoji == shockedEmoji){
                                document.getElementById("emoji1").innerHTML = ("恐怖・不安");
                                document.getElementById("adviceResultImg1").src="./emotions/shockedEmoji.png";
                            }else if(emoji == verySadEmoji){
                                document.getElementById("emoji1").innerHTML = ("悲しみ・痛み");
                                document.getElementById("adviceResultImg1").src ="./emotions/verySad.png";
                            }else if(emoji == worriedEmoji){
                                document.getElementById("emoji1").innerHTML = ("恐怖・不安");
                                document.getElementById("adviceResultImg1").src="./emotions/worriedEmoji.png";
                            }else if(emoji == suprisedEmoji){
                                document.getElementById("emoji1").innerHTML = ("驚き・ドキドキ");
                                document.getElementById("adviceResultImg1").src="./emotions/suprisedEmoji.png";
                            }
                            emoji.style.width = 200+"px";
                            emoji.style.height = 200+"px";
                            emoji.style.filter="grayscale(0%)"
                            emoji = null;
                            emojiCount++;
                        }else if(emojiCount==2){
                            if(emoji == smileEmoji){
                                document.getElementById("emoji2").innerHTML = ("楽しみ・喜び");
                                document.getElementById("adviceResultImg2").src="./emotions/happyEmoji.png";
                            }else if(emoji == sadEmoji){
                                document.getElementById("emoji2").innerHTML = ("悲しみ・痛み");
                                document.getElementById("adviceResultImg2").src="./emotions/sadEmoji.png";
                            }else if(emoji == cryEmoji){
                                document.getElementById("emoji2").innerHTML = ("悲しみ・痛み");
                                document.getElementById("adviceResultImg2").src="./emotions/cryEmoji.png";
                            }else if(emoji == sickEmoji){
                                document.getElementById("emoji2").innerHTML = ("嫌悪・イライラ");
                                document.getElementById("adviceResultImg2").src="./emotions/sickEmoji.png";
                            }else if(emoji == normalEmoji){
                                document.getElementById("emoji2").innerHTML = ("驚き・ドキドキ");
                                document.getElementById("adviceResultImg2").src="./emotions/normalEmoji.png";
                            }else if(emoji == shockedEmoji){
                                document.getElementById("emoji2").innerHTML = ("恐怖・不安");
                                document.getElementById("adviceResultImg2").src="./emotions/shockedEmoji.png";
                            }else if(emoji == verySadEmoji){
                                document.getElementById("emoji2").innerHTML = ("悲しみ・痛み");
                                document.getElementById("adviceResultImg2").src="./emotions/verySad.png";
                            }else if(emoji == worriedEmoji){
                                document.getElementById("emoji2").innerHTML = ("恐怖・不安");
                                document.getElementById("adviceResultImg2").src="./emotions/worriedEmoji.png";;
                            }else if(emoji == suprisedEmoji){
                                document.getElementById("emoji2").innerHTML = ("驚き・ドキドキ");
                                document.getElementById("adviceResultImg2").src = "./emotions/suprisedEmoji.png";;
                            }
                            emoji.style.width = 200+"px";
                            emoji.style.height = 200+"px";
                            emoji.style.filter="grayscale(0%)"
                            emoji = null;
                            emojiCount++;
                        }else if(emojiCount==3){
                            if(emoji == smileEmoji){
                                document.getElementById("emoji3").innerHTML = ("楽しみ・喜び");
                                document.getElementById("adviceResultImg3").src="./emotions/happyEmoji.png";
                            }else if(emoji == sadEmoji){
                                document.getElementById("emoji3").innerHTML = ("悲しみ・痛み");
                                document.getElementById("adviceResultImg3").src="./emotions/sadEmoji.png";
                            }else if(emoji == cryEmoji){
                                document.getElementById("emoji3").innerHTML = ("悲しみ・痛み");
                                document.getElementById("adviceResultImg3").src="./emotions/cryEmoji.png";;
                            }else if(emoji == sickEmoji){
                                document.getElementById("emoji3").innerHTML = ("嫌悪・イライラ");
                                document.getElementById("adviceResultImg3").src="./emotions/sickEmoji.png";
                            }else if(emoji == normalEmoji){
                                document.getElementById("emoji3").innerHTML = ("驚き・ドキドキ");
                                document.getElementById("adviceResultImg3").src="./emotions/normalEmoji.png";
                            }else if(emoji == shockedEmoji){
                                document.getElementById("emoji3").innerHTML = ("恐怖・不安");
                                document.getElementById("adviceResultImg3").src="./emotions/shockedEmoji.png";
                            }else if(emoji == verySadEmoji){
                                document.getElementById("emoji3").innerHTML = ("悲しみ・痛み");
                                document.getElementById("adviceResultImg3").src="./emotions/verySad.png";;
                            }else if(emoji == worriedEmoji){
                                document.getElementById("emoji3").innerHTML = ("恐怖・不安");
                                document.getElementById("adviceResultImg3").src="./emotions/worriedEmoji.png";;
                            }else if(emoji == suprisedEmoji){
                                document.getElementById("emoji3").innerHTML = ("驚き・ドキドキ");
                                document.getElementById("adviceResultImg3").src="./emotions/suprisedEmoji.png";;
                            }
                            emoji.style.width = 200+"px";
                            emoji.style.height = 200+"px";
                            emoji.style.filter="grayscale(0%)"
                            emoji = null;
                            emojiCount++;
                        }
                    }
                }
                else if(emojiCount>3){
                    if(emoji.style.height == 200+"px")
                    {
                        if(emojiCount==4){
                            if (emoji == document.getElementById("emoji1")){
                                if(emoji == smileEmoji){
                                    document.getElementById("emoji1").innerHTML = ("");
                                    document.getElementById("adviceResultImg1").src="";
                                }else if(emoji == sadEmoji){
                                    document.getElementById("emoji1").innerHTML = ("");
                                    document.getElementById("adviceResultImg1").src="";
                                }else if(emoji == cryEmoji){
                                    document.getElementById("emoji1").innerHTML = ("");
                                    document.getElementById("adviceResultImg1").src="";
                                }else if(emoji == sickEmoji){
                                    document.getElementById("emoji1").innerHTML = ("");
                                    document.getElementById("adviceResultImg1").src="";
                                }else if(emoji == normalEmoji){
                                    document.getElementById("emoji1").innerHTML = ("");
                                    document.getElementById("adviceResultImg1").src="";
                                }else if(emoji == shockedEmoji){
                                    document.getElementById("emoji1").innerHTML = ("");
                                    document.getElementById("adviceResultImg1").src="";
                                }else if(emoji == verySadEmoji){
                                    document.getElementById("emoji1").innerHTML = ("");
                                    document.getElementById("adviceResultImg1").src="";
                                }else if(emoji == worriedEmoji){
                                    document.getElementById("emoji1").innerHTML = ("");
                                    document.getElementById("adviceResultImg1").src="";
                                }else if(emoji == suprisedEmoji){
                                    document.getElementById("emoji1").innerHTML = ("");
                                    document.getElementById("adviceResultImg1").src="";
                                }
                            }else if (emoji == document.getElementById("emoji2")){
                                if(emoji == smileEmoji){
                                    document.getElementById("emoji2").innerHTML = ("");
                                    document.getElementById("adviceResultImg2").src="";
                                }else if(emoji == sadEmoji){
                                    document.getElementById("emoji2").innerHTML = ("");
                                    document.getElementById("adviceResultImg2").src="";
                                }else if(emoji == cryEmoji){
                                    document.getElementById("emoji2").innerHTML = ("");
                                    document.getElementById("adviceResultImg2").src="";
                                }else if(emoji == sickEmoji){
                                    document.getElementById("emoji2").innerHTML = ("");
                                    document.getElementById("adviceResultImg2").src="";
                                }else if(emoji == normalEmoji){
                                    document.getElementById("emoji2").innerHTML = ("");
                                    document.getElementById("adviceResultImg2").src="";
                                }else if(emoji == shockedEmoji){
                                    document.getElementById("emoji2").innerHTML = ("");
                                    document.getElementById("adviceResultImg2").src="";
                                }else if(emoji == verySadEmoji){
                                    document.getElementById("emoji2").innerHTML = ("");
                                    document.getElementById("adviceResultImg2").src="";
                                }else if(emoji == worriedEmoji){
                                    document.getElementById("emoji2").innerHTML = ("");
                                    document.getElementById("adviceResultImg2").src="";
                                }else if(emoji == suprisedEmoji){
                                    document.getElementById("emoji2").innerHTML = ("");
                                    document.getElementById("adviceResultImg2").src="";
                                }
                            }else if (emoji == document.getElementById("emoji3")){
                                if(emoji == smileEmoji){
                                    document.getElementById("emoji3").innerHTML = ("");
                                    document.getElementById("adviceResultImg3").src="";
                                }else if(emoji == sadEmoji){
                                    document.getElementById("emoji3").innerHTML = ("");
                                    document.getElementById("adviceResultImg3").src="";
                                }else if(emoji == cryEmoji){
                                    document.getElementById("emoji3").innerHTML = ("");
                                    document.getElementById("adviceResultImg3").src="";
                                }else if(emoji == sickEmoji){
                                    document.getElementById("emoji3").innerHTML = ("");
                                    document.getElementById("adviceResultImg3").src="";
                                }else if(emoji == normalEmoji){
                                    document.getElementById("emoji3").innerHTML = ("");
                                    document.getElementById("adviceResultImg3").src="";
                                }else if(emoji == shockedEmoji){
                                    document.getElementById("emoji3").innerHTML = ("");
                                    document.getElementById("adviceResultImg3").src="";
                                }else if(emoji == verySadEmoji){
                                    document.getElementById("emoji3").innerHTML = ("");
                                    document.getElementById("adviceResultImg3").src="";
                                }else if(emoji == worriedEmoji){
                                    document.getElementById("emoji3").innerHTML = ("");
                                    document.getElementById("adviceResultImg3").src="";
                                }else if(emoji == suprisedEmoji){
                                    document.getElementById("emoji3").innerHTML = ("");
                                    document.getElementById("adviceResultImg3").src="";
                                }
                        }
                        emoji.style.width = 125+"px";
                        emoji.style.height = 125+"px";
                        emoji.style.filter="grayscale(100%)";
                        emoji = null;
                        emojiCount--;
                    }else{
                        emoji = null;
                    }
                    if(emojiCount==1){
                        document.getElementById("checkMessage").innerHTML = "さて気になることを考えたとき、あなたのこころの中にどの様な感情が芽生えましたか？いちばん近い思ったものを選択してください。（最大３つまで）";
                        document.getElementById("checkMessage").classList.add("fade-out");
                    }else if(emojiCount==2){
                        document.getElementById("checkMessage").classList.add("fade-in");
                        document.getElementById("checkMessage").innerHTML = "2つの感情絵文字を選んでください（最大３つまで）";
                        document.getElementById("checkMessage").classList.add("fade-out");
                    }else if(emojiCount==3){
                        document.getElementById("checkMessage").classList.add("fade-in");
                        document.getElementById("checkMessage").innerHTML = "1つの感情絵文字を選んでください（最大３つまで）";
                        document.getElementById("checkMessage").classList.add("fade-out");
                    }else{
                        document.getElementById("checkMessage").classList.add("fade-in");
                        document.getElementById("checkMessage").innerHTML = "OKボタンを押して次のページに進めてください。（最大３つまで）";
                        document.getElementById("checkMessage").classList.add("fade-out");
                        }
                    }
                }
            }
        })
    })
}
