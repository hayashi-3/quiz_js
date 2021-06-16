const quiz = [
	{
		question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
		answers: [
			'スーパーファミコン',
			'プレイステーション２',
			'ニンテンドースイッチ',
			'ニンテンドーDS'
		],
		correct: 'ニンテンドーDS'
	},
	{
		question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
		answers: [
			'MOTHER2',
			'スーパーマリオブラザーズ3',
			'スーパードンキーコング',
			'星のカービィ'
		],
		correct: 'MOTHER2'
	},
	{
		question: '任天堂のどうぶつの森最新作は？',
		answers: [
		'どうぶつの森',
		'どうぶつの森２',
		'あつまれどうぶつの森',
		'みんなでどうぶつの森'
		],
		correct: 'あつまれどうぶつの森'
	}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

const setupQuiz = () => {
	document.getElementById('js-question').textContent = quiz[quizIndex].question;
	let buttonIndex = 0;
	while(buttonIndex < buttonLength){
		$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
		buttonIndex++;
	}
}

setupQuiz();

const clickHandler = (e) => {
	if(quiz[quizIndex].correct === e.target.textContent){
		  window.alert('正解');
		  score++;
		} else {
		  window.alert('不正解');
	}

	quizIndex++;

	if(quizIndex < quizLength){
		setupQuiz();
	} else {
		window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
	}
}

let handleIndex = 0;
while (handleIndex < buttonLength) {
	$button[handleIndex].addEventListener('click', (e) => {
		clickHandler(e);
	});
	handleIndex++;
}