import { Component, OnInit } from '@angular/core';
import { BallotInterface } from '../../interfaces/ballot-interface';
import { environment } from '../../../environments/environment';
import {BallotService} from '../../services/ballot.service';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {

  ballots: BallotInterface[];

  title: string = environment.title;

  constructor(private ballotService: BallotService) { }

  ngOnInit() {
    document.title = 'Ballot';
    this.ballots = this.ballotService.getAll();
  }

}
