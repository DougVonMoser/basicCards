declare var Deck: any;
import { Injectable } from '@angular/core';

@Injectable()
export class GenHandService {

  constructor() { }
  generateHand(crudeHand: any){
    let deck = Deck(crudeHand)
    deck.mount(document.getElementById('container'))
    deck.cards.forEach(function (card, i) {
      card.setSide('back')
      card.animateTo({
          delay: 0,  // 1000 + i * 200, // wait 1 second + i * 2 ms
          duration: 500,
      ease: 'quartOut',
          x: -270 + (window.innerWidth / 5 ) * i -1,
          y: -100   // Math.random() * window.innerHeight - window.innerHeight / 2
      })
      // card.enableDragging()
      // card.enableFlipping()
    })
    return deck
  }

}
