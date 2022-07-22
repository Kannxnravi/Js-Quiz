var quizdata = [

    {
       question : 'Which framework is related JS',
       a:'.net',
       b:'flask',
       c:'react',
       d:'django',
       correct: 'c'
    },
    {
        question : 'Which is not a programming language',
        a:'html',
        b:'python',
        c:'java',
        d:'Js',
        correct: 'a'
    },
    {
        question : 'Which is not a framework?',
        a:'react',
        b:'Js',
        c:'angular',
        d:'django',
        correct: 'b'
    },
    {
        question : 'CSS stands for',
        a:'Cascading Style Sheet',
        b:'Cascading Style State',
        c:'Cascading Sheet',
        d:'None',
        correct: 'a'
    }
    

]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value') 
var option_b = document.getElementById('b_value') 
var option_c = document.getElementById('c_value') 
var option_d = document.getElementById('d_value') 

var submitbtn = document.getElementById('submit')

var currentQuestion = 0
var quizscore = 0

loadQuiz()

function loadQuiz()
{

   deselect()

   question.innerHTML = quizdata[currentQuestion].question
   option_a.innertext = quizdata[currentQuestion].a
   option_b.innertext = quizdata[currentQuestion].b
   option_c.innertext = quizdata[currentQuestion].c
   option_d.innertext = quizdata[currentQuestion].d 

}
function deselect()
{
    answer.forEach(answer => answer.checked = false)
}

submitbtn.addEventListener('click' , ()=>{
    
    var selectedoption;

    answer.forEach(answer=>{

        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })

    if(selectedoption==quizdata[currentQuestion].correct)
    {
      quizscore=quizscore+1  
    }
    currentQuestion=currentQuestion+1
    
    if(currentQuestion==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = '<h1>You have answered ${quizscore} correctly out of ${quizdata.length} </h1>'
    }else{
        loadQuiz()
    }
})