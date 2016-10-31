import { Component, OnInit } from '@angular/core';

import {CommunicateService} from '../communicate.service'

import './rxjs-operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CommunicateService]
})
export class TableComponent implements OnInit {
deck: Deck;
  constructor(private communicateService: CommunicateService){}
  ngOnInit() {
    this.getCrudeHand()
  }
  getCrudeHand(){
    this.communicateService.getHand().subscribe(hand => {this.generateHand(hand)})
  }
  generateHand(crudeHand: any){
    console.log(crudeHand)
    let deck = Deck(crudeHand)
    deck.mount(document.getElementById('container'))
    deck.cards.forEach(function (card, i) {
      card.setSide('back')
      console.dir(window.innerWidth)
      card.animateTo({
          delay: 0,  // 1000 + i * 200, // wait 1 second + i * 2 ms
          duration: 500,
      ease: 'quartOut',
          x: -270 + (window.innerWidth / 5 ) * i -1,
          y: -100   // Math.random() * window.innerHeight - window.innerHeight / 2
      })
      card.enableDragging()
      card.enableFlipping()
    })
  }
  flip(){
    this.deck.flip()
  }

}
