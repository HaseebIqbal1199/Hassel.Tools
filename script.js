const Allcards = document.querySelectorAll('.card')
const banners = {
    '1': './Time.png',
    '2': './Time (1).png'
}
const links = {
    '1': 'https://www.timetamer.wuaze.com'
}
Allcards.forEach((card,index) => {
    card.style.background = `url(${banners[index+1]})`
    card.querySelector('a').href = `${links[index+1]}`
    console.log(card.style.background = `url(${banners[index+1]}) center center/cover`);
});