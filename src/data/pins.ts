export interface Pin {
    fromName: string;
    subject: string;
    content: string;
    tags: any;
    date: Date;
    id: number;
}

import { personCircleOutline, airplaneOutline } from 'ionicons/icons';

const pins: Pin[] = [
    {
        fromName: 'Matt Chorsey',
        subject: 'New event: Trip to Vegas',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: [{name: 'Personal', logo: personCircleOutline}, {name: 'Travel', logo: airplaneOutline}],
        date: new Date("2023-06-01"),
        id: 0
    },
    {
        fromName: 'Lauren Ruthford',
        subject: 'Long time no chat',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: [{name: 'Personal', logo: personCircleOutline}, {name: 'Travel', logo: airplaneOutline}],
        date: new Date("2023-10-05"),
        id: 1
    },
    {
        fromName: 'Jordan Firth',
        subject: 'Report Results',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: [{name: 'Personal', logo: personCircleOutline}, {name: 'Travel', logo: airplaneOutline}],
        date: new Date("2020-11-01"),
        id: 2
    },
    {
        fromName: 'Bill Thomas',
        subject: 'The situation',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: [{name: 'Personal', logo: personCircleOutline}, {name: 'Travel', logo: airplaneOutline}],
        date: new Date("2023-08-01"),
        id: 3
    },
    {
        fromName: 'Joanne Pollan',
        subject: 'Updated invitation: Swim lessons',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: [{name: 'Personal', logo: personCircleOutline}, {name: 'Travel', logo: airplaneOutline}],
        date: new Date("2023-05-01"),
        id: 4
    },
    {
        fromName: 'Andrea Cornerston',
        subject: 'Last minute ask',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: [{name: 'Personal', logo: personCircleOutline}, {name: 'Travel', logo: airplaneOutline}],
        date: new Date("2021-01-01"),
        id: 5
    },
    {
        fromName: 'Moe Chamont',
        subject: 'Family Calendar - Version 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: [{name: 'Personal', logo: personCircleOutline}, {name: 'Travel', logo: airplaneOutline}],
        date: new Date("2023-01-01"),
        id: 6
    },
    {
        fromName: 'Kelly Richardson',
        subject: 'Placeholder Headhots',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: [{name: 'Personal', logo: personCircleOutline}, {name: 'Travel', logo: airplaneOutline}],
        date: new Date("2022-01-01"),
        id: 7
    }
];

export const getPins = () => pins;

export const getPin = (id: number) => pins.find(p => p.id === id);

export const addPin = (pin: Pin) => {
    pin.id = pins.length;
    pins.push(pin);
}
