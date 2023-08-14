const bgcolor = ['#207844', '#e04948', '#5D540B', '#6a5acd', '#184A4D', '#ff9933', '#001a33', '#220066', '#ffbf80', '#80d4ff', '#cc6699', '#1a000d']

const banners = [
    {
        id: 1,
        topic: '고전 문학 현재화 콘텐츠 기획',
        title: '카페X고전문학 콜라보',
        notion: 'https://lake-ferry-0aa.notion.site/X-dedba7f4f9174e0bb86a92135e1f7cd5?pvs=4'
      },
    {
        id: 2,
        topic: '국가·공공브랜드 활성화 기획안',
        title: 'Colorful KOREA',
        notion: 'https://lake-ferry-0aa.notion.site/Colorful-KOREA-c6c621ece3094cc899b1622da3e7f219?pvs=4'
      },
    {
        id: 3,
        topic: '한국어/한국문화교재 단원 기획',
        title: '떡국과 송편을 먹어본 적이 있나요?',
        notion: 'https://lake-ferry-0aa.notion.site/98c970e17dd34a0a8c9f23e5e11a26c1?pvs=4'
      },
    {
        id: 4,
        topic: '출판편집자_출간기획안',
        title: '마법의 소라고동',
        notion: 'https://lake-ferry-0aa.notion.site/_-e387f13b8aeb459993e4094ddbf1a818?pvs=4'
      },
    {
        id: 5,
        topic: 'VR컨텐츠 기획',
        title: '죽음은 얼마인가요?',
        notion: 'https://lake-ferry-0aa.notion.site/cc38a13783a944bc8173d3c0a070b85c?pvs=4'
      },
    {
        id: 6,
        topic: '게임 기획안',
        title: '“지금, 나들이”/“Bon voyage!”',
        notion: 'https://lake-ferry-0aa.notion.site/Bon-voyage-ac86ae85719f4980aaf148f2d9844b4d?pvs=4'
      },
    {
        id: 7,
        topic: 'Project information design',
        title: 'Design: They began with a Dream',
        notion: 'https://lake-ferry-0aa.notion.site/Design-Project-I-8ac4d6898979411e9774622b591b8e64?pvs=4'
      },
    {
        id: 8,
        topic: 'Movie Poster redesign',
        title: '뮤지컬 엘리자벳',
        notion: 'https://lake-ferry-0aa.notion.site/Design-Project-P-f2820938d12e4f95a0f8eae319a473f8?pvs=4'
      },
    {
        id: 9,
        topic: '미디어 콘텐츠 기획 및 제작',
        title: '소리로 만나는 고양이',
        notion: 'https://lake-ferry-0aa.notion.site/87911cfd327046a8ae6249c8951c9ab0?pvs=4'
      },
    {
        id: 10,
        topic: '게임 기획 및 활용방안',
        title: '머피의 해마',
        notion: 'https://lake-ferry-0aa.notion.site/0014d69e640d4266b42537bb4c853204?pvs=4'
      },
    {
        id: 11,
        topic: '미래의 UI/UX 디자인',
        title: '육아데이터베이스 “나란히”',
        notion: 'https://lake-ferry-0aa.notion.site/UI-Design-Project-F-7cca02bedf4540209f4694169ef0897c?pvs=4'
      },
    {
        id: 12,
        topic: '게임 기획',
        title: '메멘토모리',
        notion: 'https://lake-ferry-0aa.notion.site/8c5c5268866b49e79cd4305df20ffd19?pvs=4'
      },
]

const topic = document.getElementById('topic')
const title = document.getElementById('title')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const notion = document.querySelector('.more')
const bgArea = document.getElementById('text_wrap')

let idx = 0

next.addEventListener('click', () => {
    idx++
    if(idx > banners.length - 1) idx = 0
    showBanner()
})

prev.addEventListener('click', () => {
    idx--
    if(idx < 0) idx = banners.length - 1
    showBanner()
})

function showBanner() {
    topic.textContent = banners[idx].topic
    title.textContent = banners[idx].title
    notion.href = banners[idx].notion
    bgArea.style.backgroundColor = bgcolor[idx]
}




function init() {
    showBanner()
}

init()
