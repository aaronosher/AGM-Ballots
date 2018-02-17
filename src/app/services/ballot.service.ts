import { Injectable } from '@angular/core';
import { BallotType } from '../enums/ballot-type.enum';
import { BallotInterface } from '../interfaces/ballot-interface';

@Injectable()
export class BallotService {

  constructor() { }

  getAll(): BallotInterface[] {
    const basicBallot: BallotInterface = {
      name: 'Basic Example',
      description: 'Example of a basic ballot',
      type: BallotType.BasicBallot,
      options: null
    };

    const noAbstainBallot: BallotInterface = {
      name: 'No Abstain Example',
      description: 'Example of a No Abstain ballot',
      type: BallotType.NoAbstain,
      options: null
    };

    const singeSeatBallot: BallotInterface = {
      name: 'Single Seat Example',
      description: 'Example of a single seat ballot',
      type: BallotType.SingleSeat,
      options: [
        { id: 1, name: 'Candidate 1', description: 'Candidate 1\'s manifesto.' },
        { id: 2, name: 'Candidate 2', description: 'Candidate 2\'s manifesto.' },
        { id: 3, name: 'Candidate 3', description: 'Candidate 3\'s manifesto.' },
        { id: 4, name: 'RON', description: 'Re-open Nominations' }
      ]
    };

    const mutliSeatBallot: BallotInterface = {
      name: 'Multi Seat Example',
      description: 'Example of a multi seat ballot',
      type: BallotType.MultiSeat,
      options: [
        { id: 5, name: 'Candidate 1', description: 'Candidate 1\'s manifesto.' },
        { id: 6, name: 'Candidate 2', description: 'Candidate 2\'s manifesto.' },
        { id: 7, name: 'Candidate 3', description: 'Candidate 3\'s manifesto.' },
        { id: 8, name: 'Candidate 4', description: 'Candidate 4\'s manifesto.' },
        { id: 9, name: 'RON', description: 'Re-open Nominations' }
      ]
    };

    return [basicBallot, noAbstainBallot, singeSeatBallot, mutliSeatBallot];
  }

}
