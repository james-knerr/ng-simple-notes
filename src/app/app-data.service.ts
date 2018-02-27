import { InMemoryDbService } from 'angular-in-memory-web-api';

import { NoteVM } from './shared.module/models/note-vm';

export class AppDataService implements InMemoryDbService {
    createDb() {
        const NOTES = [{
            'id': 0,
            'text': 'eweghwehe',
             'isDeleted': false
        },
        {
            'id': 1,
            'text': 'wehwehwehewh',
            'isDeleted': false
        },
        {
            'id': 2,
            'text': 'wherhwrehwh235352235235herh',
            'isDeleted': false
        },
    ];


        return { NOTES };
    }
}
