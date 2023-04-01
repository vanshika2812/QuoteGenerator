let btn = document.getElementById('new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')
const quotes =[ {
        quote:`"You cannot find peace by avoiding life."`,
        person:  `Virginia Woolf`
    },{
        quote: `"The strongest principle of growth lies in the human choice."`,
        person:`George Eliot`

    },{
        quote:`" Focus more on your desire than on your doubt, and the dream will take care of itself."`,
        person:`Mark Twain`
    }, {
        quote:`"We have to continually be jumping off cliffs and developing our wings on the way down. "`,
        person:`Kurt Vonnegut`
    }, {
        quote:`" I hope that in this year to come, you make mistakes. Because if you are making mistakes, then you are making new things, trying new things, learning, living, pushing yourself, changing yourself, changing your world. You're doing things you've never done before, and more importantly, you're doing something.' – Neil Gaiman
        'Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.' – Franz Kafka
        'Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.' – Mark Twain
        'Maybe it's not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them.' – Anna White
        'Trust our heart if the seas catch fire, live by love though the stars walk backwards."`,
        person:`E. E. Cummings`
    },  {
        quote:`"One day I will find the right words, and they will be simple."`,
        person:` Jack Kerouac`
    }, {
        quote:`"I can be changed by what happens to me. But I refuse to be reduced by it. "`,
        person:`Maya Angelou`
    }, {
        quote:`" The most common way people give up their power is by thinking they don't have any."`,
        person:`Alice Walker`
    }, {
        quote:`" I want to taste and glory in each day, and never be afraid to experience pain."`,
        person:`Sylvia Plath`
    }, {
        quote:`"How wonderful it is that nobody need wait a single moment before starting to improve the world."`,
        person:`Anne Frank`
    },
]
btn.addEventListener('click', function(){
    let randomquote = Math.floor(Math.random() * quotes.length)
   
    quote.textContent = quotes[randomquote].quote
    person.innerText = quotes[randomquote].person
})
