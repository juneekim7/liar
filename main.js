const people = 4
const levels = {
    '포지션': '보컬 기타 베이스 드럼 키보드'.split(' '),
    '술집': '훌랄라 투다리 럭스 구노 꼬꾸마시 두발네발 생생맥주 인건맥 작교 크라운호프 을지로가맥 사막의하얀꽃'.split(' ')
}

function start(levIndex) {
    const subject = Object.keys(levels)[levIndex]
    const word = levels[subject][Math.floor(Math.random() * levels[subject].length)]
    const allPeople = new Array(people).fill().map((_, i) => i)
    allPeople.sort(() => Math.random() - 0.5)
    const liar = allPeople[0]
    const box = document.getElementById('box')
    const sub = document.getElementById('sub')
    const main = document.getElementById('main')
    const disc = document.getElementById('disc')
    box.onclick = () => prepare(0)
    function prepare(i) {
        if (i < people) {
            sub.textContent = `${i+1}번째 사람`
            main.textContent = '제시어 확인하기'
            disc.textContent = ''
            box.onclick = () => next(i)
        } else {
            sub.textContent = '제시어 확인 종료'
            main.textContent = '라이어 게임 진행!'
            disc.textContent = '눌러서 끝내기'
            box.onclick = () => end()
        }

    }
    function next(i) {
        if (liar == i) {
            main.textContent = '당신은 라이어입니다!'
        } else {
            main.textContent = word
        }
        disc.textContent = '눌러서 넘어가기'
        box.onclick = () => prepare(i+1)
    }
    function end() {
        sub.textContent = '라이어 게임'
        main.textContent = `주제: ${Object.keys(levels)[levIndex + 1]}`
        disc.textContent = '눌러서 시작하기'
        box.onclick = () => start(levIndex + 1)
    }
}