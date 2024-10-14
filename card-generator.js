let content = [
    {'date':'16.12.2023','content':'those first butterflies &#129419;','src':'assets/images/1.jpg'},
    {'date':'12.03.2024','content':'tha matter ha <br> ada gomala moments','src':'assets/images/2.jpg'},
    {'date':'13.03.2024','content':'&#128077; continues','src':'assets/images/3.jpg'},
    {'date':'16.03.2024','content':'after 3 months <br> atha number kudutha moment irruka &#128293;','src':'assets/images/4.jpg'},
    {'date':'26.03.2024','content':'atha 9 chocolates irrukaaa...<br> evalo planning daily','src':''},
    {'date':'29.03.2024','content':'first &#129392; unga pet ku potathu <br> ana i took it for myself','src':'assets/images/5.jpg'},
    {'date':'9.04.2024','content':'neegala first msg paninga','src':'assets/images/6.jpg'},
    {'date':'12.04.2024','content':'again a funny emojii ','src':'assets/images/8.jpg'},
    {'date':'17.04.2024','content':'unexpected morning ','src':'assets/images/7.jpg'},
    {'date':'20.04.2024','content':'unforgettable sorry nga','src':'assets/images/9.jpg'},
    {'date':'26.04.2024','content':'again &#129392; <br> na tha miss panita performance ha','src':'assets/images/10.jpg'},
    {'date':'8.05.2024','content':'first time ungaluku call panna','src':'assets/images/11.jpg'},
    {'date':'12.05.2024','content':'lit ha pasurom ipa','src':'assets/images/12.jpg'},
    {'date':'13.05.2024','content':'theriyama like panita laa....','src':'assets/images/13.jpg'},
    {'date':'3.07.2024','content':'elama theriyum ana <br>theriyatha mari irukanum','src':'assets/images/14.jpg'},
    {'date':'21.07.2024','content':'yeemaa yeema moments &#129315;','src':'assets/images/15.jpg'},
    {'date':'07.2024 -> 09.2024','content':'nariya notes <br>nariya story<br>surprisingly you noticed them all..','src':''},
    {'date':'26.09.2024 <br>-><br> 27.09.2024','content':'i rushed up ig wait panni irukanum','src':''},
    {'date':'27.09.2024','content':'oru unforgattable night <br> again &#129419;','src':'assets/images/16.jpg'},
    {'date':'30.09.2024','content':'short and sweet love story &#129505;<br><span>ithu love story ha kuda theriyala enaku etho neega oru mistake la [mood swing] vathu solitinga pola irruku<span>','src':'assets/images/17.jpg'},
    {'date':'Manifestation','content':'oru PIC neega <span style="color:gold; font-size:1.7rem">saree</span> la na <span style="color:gold; font-size:1.7rem">suit</span> la','src':''}
];

content.forEach((Element) => {
    document.getElementById('card-container').innerHTML += `
        <div class="card-container scroll-animate">
            <div class="card">
                <div class="card-front">
                    <p>${Element.date}</p>
                </div>
                <div class="card-back">
                    ${Element.src ? `<img src="${Element.src}" alt="Image">` : ''}
                    <p>${Element.content}</p>
                </div>
            </div>
        </div>`;
});

const cards = document.querySelectorAll('.card'); // Select all cards

// Function to scale each card up and down with a delay
cards.forEach((card, index) => {
    setInterval(() => {
        card.classList.add('scale-up');
        setTimeout(() => {
            card.classList.remove('scale-up');
        }, 750); // Scale-down delay (500ms)
    }, 1500 + index * 500); // Initial delay of 1s, then stagger each card by 500ms
});
