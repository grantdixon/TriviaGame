var panel = $('#quiz-area');


///////////////////////////////////////////////////////////////////////////////

//CLICK EVENTS

///////////////////////////////////////////////////////////////////////////////


$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});
///////////////////////////////////////////////////////////////////////////////


//Question set


///////////////////////////////////////////////////////////////////////////////

var questions = [{
  question: "1 . What is the first month of the year with 31 days?",
  answers: ["January", "February", "March", "April"],
  correctAnswer: "January"
}, {
  question: "2 . Which element has the atomic symbol 'N'?",
  answers: ["Hydrogen", "Nitrogen", "Oxygen", "Carbon Dioxide"],
  correctAnswer: "Nitrogen"
}, {
  question: "3 . Which Ocean lies off the east coast of Florida?",
  answers: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean", "Pacific Ocean"],
  correctAnswer: "Arctic Ocean"
}, {
  question: "4 . What continent is Steve Irwin from?",
  answers: ["Asia", "Africa", "Australia", "Europe"],
  correctAnswer: "Australia"
}, {
  question: "5 . What is the name given to outermost layer of earth?",
  answers: ["Rocks", "Crust", "Core", "Land"],
  correctAnswer: "Crust"
}, {
  question:  "6 . Which gas forms approximately 1% of atmosphere?",
  answers: ["Hydrogen", "Carbon monoxide", "Argon", "Methyl"],
  correctAnswer: "Argon"
}, {
  question: "7 . What is the earth's core made of?",
  answers: ["Dirt", "Rocks", "Gases", "Molten Iron and nickel"],
  correctAnswer: "Molten iron and nickel"
}, {
  question: "8 . The city Juneau is located where?",
  answers: ["Alaska", "Norway", "Iceland", "Canada"],
  correctAnswer: "Alaska"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:45,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};