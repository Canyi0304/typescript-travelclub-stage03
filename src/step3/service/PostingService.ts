import PostingDto from "./dto/PostingDto";

interface PostingService {

    register(boardId: string, postingDto: PostingDto): string;
    find(postingId: string): PostingDto;
    findByBoardId(boardId: string): PostingDto[];
    modify(postingDto: PostingDto): void;
    remove(PostingId: string): void;

}

export default PostingService;
