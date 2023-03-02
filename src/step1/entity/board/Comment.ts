import Entity from "../Entity";
import DateUtil from "../../../util/DateUtil";

//comment 클래스를 정의하고 Entity의 인터페이스를 구현
class Comment implements Entity {

    //5개의 속성
    usid: string = '';
    postingId: string = '';
    writer: string = '';
    contents: string = '';
    writtenDate: string = '';

    //constructor는 각 속성을 parameter로 받아 초기화
    //writtenDate 속성에는 DateUtil 클래스의 오늘값 할당
    constructor(commentId: string, postingId: string, writer: string, contents: string) {
        
        this.usid = commentId;
        this.postingId = postingId;
        this.writer = writer;
        this.contents = contents;
        this.writtenDate = DateUtil.today();
    }


    //getId() 메서드는 Entity 인터페이스에서 요구하는 getId() 메서드를 구현합니다. 이 메서드는 usid 속성을 반환
    getId(): string {

        return this.usid;

    }
}


export default Comment;