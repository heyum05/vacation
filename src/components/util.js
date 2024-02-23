const shuffleArray = (array) => {
    // Fisher-Yates 알고리즘을 사용하여 배열을 섞는 함수
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


export { shuffleArray };