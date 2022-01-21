const psot = {
    title: '',
    body:'',
    author: '',
    views:10,
    comments:[{
        author: '',
        body: ''
    },{
        author: '',
        body: ''
    }],
    isLive: true
}

// Constructor function:
function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    comments = [];
    isLive = false;
}

const post1 = new Post('a','b','c')