import Posting from '../../../step1/entity/board/Posting';
import SocialBoard from "../../../step1/entity/board/SocialBoard";
import CommunityMember from "../../../step1/entity/club/CommunityMember";
import TravelClub from "../../../step1/entity/club/TravelClub";

class MapStorage {

    private static  uniqueInstance:MapStorage
    
    clubMap: Map<string, TravelClub>;
    memberMap: Map<string, CommunityMember>;
    boardMap: Map<string, SocialBoard>;
    postingMap: Map<string, Posting>;
    autoIdMap: Map<string, number>;

    private constructor() {

        this.clubMap = new Map<string, TravelClub>();
        this.memberMap = new Map<string, CommunityMember>();
        this.boardMap = new Map<string, SocialBoard>();
        this.postingMap = new Map<string, Posting>();
        this.autoIdMap = new Map<string, number>();
        //생성자 함수에서는 Map 객체를 초기화함
    }

    static getInstance(): MapStorage {

        //getInstance() 메소드에서는 싱글톤 패턴에 따라 유일한 인스턴스를 생성하고 반환
        if (this.uniqueInstance === undefined) {
            this.uniqueInstance = new MapStorage();
        }

        return this.uniqueInstance;
    }
}


export default MapStorage;