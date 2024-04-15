import { Component, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../models/fair';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
  @Input() getfairDetails !: Ifair
  constructor() { }

  ngOnInit(): void {
  }

}
