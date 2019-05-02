let shower = 0;
let shower2=0;
function displayNav(){
return `
<div id='container'>
<menu id='burger_content'class='hidden2'>
<div id='burger_top_boxes'>
    <span><img src="http://www.logospng.com/images/2/list-of-synonyms-and-antonyms-the-word-instagram-logo-2131.png" id="instagrammIcon"></span>
    <span><img id="mailIcon" src="https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/youtube-dark-squircle.png?zoom=2&resize=740%2C458"></span>
    <span><img src="pinterestlogo.png" id="pinterestIcon"></span>
</div>
<span class='box_burger' >Quizzes<i class="fas fa-caret-right" id='quizzes_carrot'></i>
    <div id ="quizzes_landing" class='hidden'>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</span>
<span class='box_burger'>Live Trivia<i class="fas fa-caret-right" id='trivia_carrot'></i>
    <div id='live_trivia_landing' class='hidden'>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</span>
<span class='box_burger'>Chat</i></span>
</menu>
<div id='closing_container'></div>
</div>
`
}

function handleBurger(){
    $('#lightsaber_icon').on('click',function(){
        console.log('Opening Burger');
        const navholder = displayNav();
        
        $('#landing').slideDown().html(navholder);
        $('#landing').toggleClass('hidden');


    });
    $('#landing').on('click','#closing_container',function(){
        console.log('Closing Burger');
        $('#landing').slideUp(300);
        // $('#landing').toggleClass('hidden');
    });
    
    $('#landing').on('click','#quizzes_carrot',function(){
        console.log('toggle quizzes carrot');
       
        if (shower === 0){
            $('#quizzes_carrot').toggleClass('down')
            $('#quizzes_landing').slideDown();
            $('#quizzes_landing').toggleClass('hidden');
        
        // $('#quizzes_landing').toggleClass('hidden');
        shower=1;
        console.log(shower);
    }
    else{
        $('#quizzes_landing').slideUp();
        $('#quizzes_carrot').toggleClass('down');
        shower=0;
        // $('#quizzes_landing').toggleClass('hidden');
    }
    });

    $('#landing').on('click','#trivia_carrot',function(){
        console.log('toggle quizzes carrot');
       
        if (shower2 === 0){
            $('#trivia_carrot').toggleClass('down')
            $('#live_trivia_landing').slideDown();
            $('#live_trivia_landing').toggleClass('hidden');
        
        // $('#quizzes_landing').toggleClass('hidden');
        shower2=1;
        console.log(shower2);
    }
    else{
        $('#live_trivia_landing').slideUp();
        $('#trivia_carrot').toggleClass('down');
        shower2=0;
        // $('#quizzes_landing').toggleClass('hidden');
    }
    });
}



function loadscript(){
    handleBurger();
}



$(loadscript);