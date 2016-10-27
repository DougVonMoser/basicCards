import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  ngOnInit() {
    let deck = Deck()
    deck.mount(document.getElementById('container'))
    deck.cards.forEach(function (card, i) {
      card.setSide('back')
      // card.animateTo({
      //     delay: 1000 + i * 200, // wait 1 second + i * 2 ms
      //     duration: 500,
      // ease: 'quartOut',
      //     x: Math.random() * window.innerWidth - window.innerWidth / 2,
      //     y: Math.random() * window.innerHeight - window.innerHeight / 2
      // })
    })
  }

}
