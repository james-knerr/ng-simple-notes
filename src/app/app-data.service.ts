import { InMemoryDbService } from 'angular-in-memory-web-api';

import { NoteVM } from './shared.module/models/note-vm';

export class AppDataService implements InMemoryDbService {
    createDb() {
        const NOTES = [{
            'id': 0,
            'text': 'eweghwehe'
        },
        {
            'id': 1,
            'text': 'wehwehwehewh'
        },
        {
            'id': 2,
            'text': 'wherhwrehwhherh'
        },
    ];


        return { NOTES };
    }
}
