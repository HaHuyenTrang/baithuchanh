"use strict";
class User {
    constructor(id, posts, folowers) {
        this.id = id;
        this.posts = posts;
        this.folowers = folowers;
    }
}
class Post {
    constructor(id, likes, comments, userId, content) {
        this.id = id;
        this.likes = likes;
        this.comments = comments;
        this.userId = userId;
        this.content = content;
    }
}
class Comments {
    constructor(id, userId, content, replies) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
}
