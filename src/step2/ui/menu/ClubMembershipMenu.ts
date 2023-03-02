import { question } from 'readline-sync';
import ClubMembershipConsole from '../console/ClubMembershipConsole';


class ClubMembershipMenu {

    clubMembershipConsole:ClubMembershipConsole;

    constructor() {
        
        this.clubMembershipConsole = new ClubMembershipConsole();
    }

    showMenu(): void {

        let intputNumber = 0;

        while(true){

            this.displayMenu();
            intputNumber = this.selectMenu();

            switch (intputNumber) {
                case 1:
                    this.clubMembershipConsole.findClub();
                    break;
                case 2:
                    this.clubMembershipConsole.add();
                    break;
                case 3:
                    this.clubMembershipConsole.find();
                    break;
                case 4:
                    this.clubMembershipConsole.modify();
                    break;
                case 5:
                    this.clubMembershipConsole.remove();
                    break;
                case 0:
                    return;
                default:
                    console.log('Choose Again!');
            }
        }
    }

    displayMenu(): void {

        console.log('......................');
        console.log('[Membership Menu]');
        console.log('......................');
        console.log(' 1. Find a club');
        console.log(' 2. Add a membership');
        console.log(' 3. Find a membership');
        console.log(' 4. Modify a membership');
        console.log(' 5. Remove a membership');
        console.log('......................');
        console.log(' 0. Previous');
        console.log('......................');

    }

    selectMenu(): number {

        const answer = question('Select number : ');
        const menuNumber = parseInt(answer);

        if (menuNumber >=0 && menuNumber <= 5) {
            return menuNumber;
        }
        else{
            console.log('it\'s a invalid number -> ' + menuNumber);
            return -1;
        }
    }

}

// const clubMembershipMenu = new ClubMembershipMenu();
// clubMembershipMenu.showMenu();

export default ClubMembershipMenu;