declare var Deck: any;
import { Component, OnInit } from '@angular/core';

import {CommunicateService} from '../communicate.service'
import {GenHandService} from '../gen-hand.service'

import './rxjs-operators';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CommunicateService, GenHandService]
})
export class TableComponent implements OnInit {
deck;
hand = [];
player;
  constructor(private genHandService: GenHandService,private communicateService: CommunicateService){}
  ngOnInit() {
    this.getCrudeHand()
  }
  getCrudeHand(){
    this.communicateService.getHand()
    .subscribe(hand => {
      this.player = hand.player;
      this.deck = this.genHandService.generateHand(hand.hand)
      this.hand = this.deck.cards
    })
  }
  flip(){
    this.deck.flip();
    this.communicateService.say('hello from player ' + this.player)
    .subscribe(response => {console.log(response.message)})
  }
}
