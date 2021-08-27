import { DropdownItems } from './types';

export const profileDropdownItems: DropdownItems[] = [
    {
        name: 'Vijay',
        action: (): void => {
            console.log('Vijay');
        },
    },
    {
        name: 'Benitta',
        action: (): void => {
            console.log('Benitta');
        },
    },
    {
        name: 'Benitta',
        action: (): void => {
            console.log('Benitta');
        },
    },
    {
        name: 'Benitta',
        action: (): void => {
            console.log('Benitta');
        },
    },
    {
        name: 'Benitta',
        action: (): void => {
            console.log('Benitta');
        },
    },
    {
        name: 'Benitta',
        action: (): void => {
            console.log('Benitta');
        },
    },
    {
        name: 'Agaran',
        action: (): void => {
            console.log('Agaran');
        },
        isFinalItem: true,
    },
];
export const notificationDropdownItems: DropdownItems[] = [
    {
        name: 'You have a new mail.',
        action: (): void => {
            console.log('You have a new mail.');
        },
    },
    {
        name: 'You have a meeting in 10 minutes',
        action: (): void => {
            console.log('You have a meeting in 10 minutes');
        },
    },
    {
        name: 'You have 5 more tasks',
        action: (): void => {
            console.log('You have 5 more tasks');
        },
    },
];
