import { shuffleArray } from "./util";

export const Korean = ({ todos, setTodos }) => {

    const generateMeaningQuiz = () => {
        if (todos.length > 0) {
            for (const todo of shuffleArray(todos)) {
                const { task } = todo;
                const { word, meaning } = task;

                const answer = prompt(`${meaning}이라는 뜻을 가진 영단어는? (퀴즈를 중단하려면 취소 버튼을 누르세요)`);
                if (answer === null) {
                    // 사용자가 취소 버튼을 눌렀을 때
                    alert('퀴즈 출제가 중단되었습니다.');
                    break; // 루프 탈출
                }
                if (answer.toLowerCase() === word.toLowerCase()) {
                    alert('정답입니다!');
                } else {
                    alert(`틀렸습니다! 정답은 "${word}" 입니다.`);
                }
            }
        } else {
            alert('퀴즈를 출제할 단어가 없습니다.');
        }
    };

    generateMeaningQuiz();

    return;
}