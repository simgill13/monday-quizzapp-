var state = {
	questions: [{
				question: 1,
				questionText: "Who averaged one patent for every three weeks of his life?",
				questionAnswers:["Thomas Engler", "Thomas Edison", "Thomas BraveHart", "Thomas Bommer"],
				questionAnswerIndex: 1,

				},{
				question: 2,
				questionText: "Name the world's largest ocean?",
				questionAnswers:["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Artic Ocean"],
				questionAnswerIndex: 2,
				},{
				question: 3,
				questionText: "What's the largest and densest of the four rocky planets?",
				questionAnswers:["Earth", "Venus", "Mars", "Pluto"],
				questionAnswerIndex: 0,
				},{
				question: 4,
				questionText: "Who is Superman's mortal enemy?",
				questionAnswers:["Larry from marketing ", "Lex Luther", "Jimmy Olson", "Perry White"],
				questionAnswerIndex: 1,
				},{
				question: 5,
				questionText: "What is Homer Simpsons middle name?",
				questionAnswers:["Johnson", "Jay", "James", "Hayer"],
				questionAnswerIndex: 1,
				}],
	correctToastr: function(){return toastr.success("Nice, Correct Answer");},
	incorrectToastr: function(){return toastr.error("Nope, Wrong Answer");},
	counter: 0,
	score: 0,
	userAnswers: [],
	correctAnswersHtml: function(){
		var html;
		return html = this.userAnswers.map(function(answer, index){
			if (answer === state.questions[index].questionAnswerIndex){
				return `<li>Question ${index + 1} was correct!</li>`;
			} else {
				return `<li>Question ${index + 1} was incorrect!</li>`;
			}

		});

	}
	 
};


	




$('.startgame').click(function(e) {
    event.preventDefault();
    getQuestions(state, state.counter);
    $('#form').removeClass('hidden');
    $('#startButton').addClass('hidden');});



function getQuestions(state, index) {
	
	$(".main" ).html( state.questions[index].questionText );
    $(".counter" ).html( 'Progress '+ ' ' + state.questions[index].question + ' of 5');
    $(".score" ).html(` <h6> <br> Score </h6> <br>  <h1>${state.score}</h1>` );
    $(".first").html(state.questions[index].questionAnswers[0]);
    $(".second").html(state.questions[index].questionAnswers[1]);
    $(".third").html(state.questions[index].questionAnswers[2]);
    $(".fourth").html(state.questions[index].questionAnswers[3]);}

function checkAnswer(state, userAnswer, index) {
    if (!userAnswer) {
        toastr.error('Select an answer before clicking submit');
    }
    else if (userAnswer == state.questions[index].questionAnswerIndex) {
        state.counter++;
        state.score++;
        state.userAnswers.push(parseInt(userAnswer));
        state.correctToastr();
        
       
    } else {
        state.counter++;
        state.userAnswers.push(parseInt(userAnswer));
        state.incorrectToastr();
        
    }
     
}

$('#submit').click(function(e) {
    event.preventDefault();
    var userAnswer = $('input:radio[name=same]:checked').val();
    var index = state.counter;
    var arrayLength = state.questions.length;
    var list = state.correctAnswersHtml();
    checkAnswer(state, userAnswer, index);
    getQuestions(state, index);
    index = state.counter;
    arrayLength = state.questions.length;
    list = state.correctAnswersHtml();
    if (!userAnswer) {
        alert("Please select a value, before selecting submit");
    } else if (state.counter < arrayLength) {
        getQuestions(state, index);
        $('.correct').html(state.correctAnswersHtml());
        $('input:radio[name=same]').prop('checked', false);
    } else {
    	$('.correct').html('');
        $('#form').addClass('hidden');
        $('.main').addClass('hidden');
        $('.counter').addClass('hidden');
        $('#play').removeClass('hidden');
        state.userAnswers =[];
        $('.correct').html('');
        $('#play').click(function(e) {
            event.preventDefault();
            state.counter = 0;
            state.score = 0;
            getQuestions(state, state.counter);
            $('input:radio[name=same]').prop('checked', false);
            $('#form').removeClass('hidden');
            $('.counter').removeClass('hidden');
            $('.main').removeClass('hidden');
            $('#startButton').addClass('hidden');
            $('#play').addClass('hidden');
        });
    }

});









