const hamBtn = document.querySelector('.hamBtn');
const navigasi = document.querySelector('.navigasi');
hamBtn.addEventListener('click', ()=> {
   navigasi.classList.toggle('show')
})


// Detail Product
const cardBtn = document.querySelectorAll('.card button');

// OOP Modals
class Modal {
   constructor(bg,content) {
      this.background = bg;
      this.content = content;
   }

   popUp() {
      this.background.classList.add('popUp');
      setTimeout(() => {
         this.content.classList.add('popUp')
      }, 500);
   }
}


// Extrabed
const bgDetail = document.querySelector('.detail-card')
const extrabed = document.querySelector('.detail-card figure:first-child')
const popExtraBed = new Modal(bgDetail,extrabed);
popExtraBed.background = bgDetail;
popExtraBed.content = extrabed;
cardBtn[0].addEventListener('click', ()=> {
   popExtraBed.popUp()
})
bgDetail.addEventListener('click', ()=> {
   extrabed.classList.remove('popUp');
   setTimeout(() => {
      bgDetail.classList.remove('popUp');
   }, 500);
})

// Cuttleries
const cuttleries = document.querySelector('.detail-card figure:nth-child(2)')
const popCuttleries = new Modal(bgDetail,cuttleries);
popCuttleries.background = bgDetail;
popCuttleries.content = cuttleries
cardBtn[1].addEventListener('click', ()=> {
   popCuttleries.popUp()
})
bgDetail.addEventListener('click', ()=> {
   cuttleries.classList.remove('popUp');
   setTimeout(() => {
      bgDetail.classList.remove('popUp');
   }, 500);
})

// Towel
const towel = document.querySelector('.detail-card figure:last-child')
const popTowel = new Modal(bgDetail,towel);
popTowel.background = bgDetail;
popTowel.content = towel
cardBtn[2].addEventListener('click', ()=> {
   popTowel.popUp()
})
bgDetail.addEventListener('click', ()=> {
   towel.classList.remove('popUp');
   setTimeout(() => {
      bgDetail.classList.remove('popUp');
   }, 500);
})


// FAQ Button
const headRules = document.querySelectorAll('.head-rules');
const faqSummary = document.querySelectorAll('#faq figcaption summary');
const [ask1, ask2, ask3,ask4, ask5, ask6,ask7] = headRules;
const [ans1, ans2, ans3,ans4, ans5, ans6, ans7] = faqSummary;

ask1.addEventListener('click', ()=> {
   ans1.classList.toggle('popUp')
})

ask2.addEventListener('click', ()=> {
   ans2.classList.toggle('popUp')
})

ask3.addEventListener('click', ()=> {
   ans3.classList.toggle('popUp')
})

ask4.addEventListener('click', ()=> {
   ans4.classList.toggle('popUp')
})

ask5.addEventListener('click', ()=> {
   ans5.classList.toggle('popUp')
})

ask6.addEventListener('click', ()=> {
   ans6.classList.toggle('popUp')
})

ask7.addEventListener('click', ()=> {
   ans7.classList.toggle('popUp')
})


