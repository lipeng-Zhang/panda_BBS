let sqlMap = {
  user: {
    add:
      'insert into users (name, password, registerTime, avator, email) values (?,?,?,?,?)',
    check: 'select name from users where name = (?)',
    login: 'select * from users where name = (?) and password = (?)',
    data: 'select userId,name,registerTime,avator,email from users where name = (?)'
  },
  posts: {
    data: 'select * from posts where category = (?) order by postId desc',
    add:
      'insert into posts (userId, title, time,content,category) values (?,?,?,?,?)',
    search: 'select * from posts where postId = (?)',
    delete: 'delete from Posts where postId = (?)'
  },
  comments: {
    data: 'select * from comments where postId = (?) order by commentId desc',
    add: 'insert into comments (postId,content,time,userId) values (?,?,?,?)'
  },
  candidatePosts: {
    data: 'select * from candidatePosts where category = (?) order by postId desc',
    add:
      'insert into candidatePosts (userId, title, time,content,category) values (?,?,?,?,?)',
    search: 'select * from candidatePosts where postId = (?)',
    delete: 'delete from candidatePosts where postId = (?)'
  }
}

module.exports = sqlMap
