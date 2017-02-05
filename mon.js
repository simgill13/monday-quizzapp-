var state = {
	questions: [{
				question: 1,
				questionText: "Who averaged one patent for every three weeks of his life?",
				questionAnswers:["Thomas Engler", "Thomas Edison", "Thomas BraveHart", "Thomas Bommer"],
				questionAnswerIndex: 1,
				CorrentAnswer: "Thomas Edison"
				},{
				question: 2,
				questionText: "Name the world's largest ocean?",
				questionAnswers:["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Artic Ocean"],
				questionAnswerIndex: 2,
				CorrentAnswer: "Pacific Ocean"	
				},{
				question: 3,
				questionText: "What's the largest and densest of the four rocky planets?",
				questionAnswers:["Earth", "Venus", "Mars", "Pluto"],
				questionAnswerIndex: 0,
				CorrentAnswer: "Earth"
				},{
				question: 4,
				questionText: "Who is Superman's mortal enemy?",
				questionAnswers:["Larry from marketing ", "Lex Luther", "Jimmy Olson", "Perry White"],
				questionAnswerIndex: 1,
				CorrentAnswer: "Lex Luther"
				},{
				question: 5,
				questionText: "What is Homer Simpsons middle name?",
				questionAnswers:["Johnson", "Jay", "James", "Hayer"],
				questionAnswerIndex: 1,
				CorrentAnswer: "Jay"	
				}],

	rightResponce: "Thats right, Smarty Pants",
	wrongResonce: "That's wrong",
	counter: 0,
	score: 0};



function getQuestions(state, index) {
	
	$( ".main" ).html( state.questions[index].questionText );
    $( ".counter" ).html( 'Progress '+ ' ' + state.questions[index].question + ' out of 5');
    $( ".score" ).html( ' Score ' + state.score );
    $(".first").html(state.questions[index].questionAnswers[0]);
    $(".second").html(state.questions[index].questionAnswers[1]);
    $(".third").html(state.questions[index].questionAnswers[2]);
    $(".fourth").html(state.questions[index].questionAnswers[3]);}


function checkAnswer(state, index) {
    if (!$('input:radio[name=same]:checked').val()) {
        alert("Please enter a selection before selecting Submit")
    } else if ($('input:radio[name=same]:checked').val() == state.questions[index].questionAnswerIndex && state.counter < 4) {
        alert("Right");
        state.score++;
        state.counter++;
        getQuestions(state, state.counter);
        
    } else if ($('input:radio[name=same]:checked').val() != state.questions[index].questionAnswerIndex && state.counter < 4) {
        alert("Wrong");
         state.counter++;
        getQuestions(state, state.counter);

    } else if ($('input:radio[name=same]:checked').val() == state.questions[index].questionAnswerIndex && state.counter == 4) {
    	state.score++;
        alert("The Game is Done, Your final Score is " + state.score + " of 5");
        $( ".score" ).html( ' Score:  ' + state.score+ " out of 5" );
        $('#form').addClass('hidden');
        $('.main').addClass('hidden');
        $('.counter').addClass('hidden');
        $('#Play').removeClass('hidden');
    	     
    } else if ($('input:radio[name=same]:checked').val() != state.questions[index].questionAnswerIndex && state.counter == 4) {
        alert("The Game is Done, Your final Score is" + state.score + " of 5");
         $('#form').addClass('hidden');
        $('.main').addClass('hidden');
        $('.counter').addClass('hidden');
        $('#Play').removeClass('hidden');
    	
    }}


$('#submit').click(function(e) {
    event.preventDefault();
    checkAnswer(state, state.counter);});

$('.startgame').click(function(e) {
    event.preventDefault();
    getQuestions(state, 0);
    $('#form').removeClass('hidden');
    $('#startButton').addClass('hidden');});


$('#Play').click(function(e) {
    event.preventDefault();
    state.counter = 0;
    state.score = 0;
    getQuestions(state, 0);
    $('#form').removeClass('hidden');
    $('.counter').removeClass('hidden');
    $('.main').removeClass('hidden');
    $('#startButton').addClass('hidden');
    $('#Play').addClass('hidden');});



