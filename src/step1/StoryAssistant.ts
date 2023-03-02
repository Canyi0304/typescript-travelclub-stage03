import TravelClub from "./entity/club/TravelClub";
import CommunityMember from "./entity/club/CommunityMember";
import ClubMembership from "./entity/club/ClubMembership";
import SocialBoard from "./entity/board/SocialBoard";
import Posting from './entity/board/Posting';


const club = TravelClub.getSample(true);
console.log(club);

const member = CommunityMember.getSample();
console.log(member);

const membership = ClubMembership.getSample(club, member);
console.log(membership);

const board = SocialBoard.getSample(club);
console.log(board);

const posting = Posting.getSample(board);
console.log(posting.map(posting => posting));