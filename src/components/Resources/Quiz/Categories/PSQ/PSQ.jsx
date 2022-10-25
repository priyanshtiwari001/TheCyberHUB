import { PSQQuestions } from "./PSQData";

export default function PSQ({
  AnswerSection,
  QuestionButton,
  QuestionCount,
  QuestionSection,
  QuestionText,
  QuizBody,
  QuizSection,
  ResetButton,
  ScoreInfo,
  ScoreSection,
  currentQuestion,
  showScore,
  score,
  // scoreList,
  handleAnswerButtonClick,
  handleResetButton,
}) {
  return (
    <QuizSection>
      {showScore ? (
        <ScoreSection>
          <ScoreInfo>
            You scored {score} out of {PSQQuestions.length}
          </ScoreInfo>
          <ResetButton onClick={() => handleResetButton(score)}>Start again</ResetButton>
        </ScoreSection>
      ) : (
        <QuizBody>
          <QuestionSection>
            <QuestionCount>
              <span>Question {currentQuestion + 1}</span>/{PSQQuestions.length}
            </QuestionCount>
            <QuestionText>{PSQQuestions[currentQuestion].questionText}</QuestionText>
          </QuestionSection>
          <AnswerSection>
            {PSQQuestions[currentQuestion].answerOptions.map((answerOption, i) => (
              <QuestionButton
                key={i}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect, PSQQuestions.length)}
              >
                {answerOption.answerText}
              </QuestionButton>
            ))}
          </AnswerSection>
        </QuizBody>
      )}
    </QuizSection>
  );
}
