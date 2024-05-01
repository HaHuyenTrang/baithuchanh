class User{
    id:number
    posts: Post[]
    folowers: User[]
    constructor( id:number, posts: Post[], folowers: User[]){
      this.id =id
      this.posts = posts
      this.folowers = folowers

    }
}
class Post {
    id: number
    likes: User[]
    comments: Comment[]
    userId: number
    content: string
  
    constructor(id: number, likes: User[], comments: Comment[], userId: number, content: string) {
      this.id = id
      this.likes = likes
      this.comments = comments
      this.userId = userId
      this.content = content
    }
}
class Comments {
    id: number
    userId: number
    content: string
    replies: Comment[]
  
    constructor(id: number, userId: number, content: string, replies: Comment[]) {
      this.id = id
      this.userId = userId
      this.content = content
      this.replies = replies
    }
}
  
