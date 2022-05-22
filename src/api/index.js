import { request } from '@/utils/request'


export function getPosts(categoryId) {
  return request({
    url: `/posts/${categoryId}`
  })
}

export function getCandidatePosts(categoryId) {
  return request({
    url: `/candidateposts/${categoryId}`
  })
}

export function addCandidatePosts(userId, title, content, value) {
  return request({
    url: `/candidatePosts/${value}`,
    method: 'post',
    data: {
      userId,
      title,
      content
    }
  })
}

export function addPosts(userId, title, content, value) {
  return request({
    url: `/posts/${value}`,
    method: 'post',
    data: {
      userId,
      title,
      content
    }
  })
}


export function getComments(postId) {
  return request({
    url: `/comments/${postId}`
  })
}


export function addComment(postId, content) {
  return request({
    url: `/comments/${postId}`,
    method: 'post',
    data: {
      content
    }
  })
}


export function getProfile(userId) {
  return request({
    url: '/profile',
    method: 'post',
    data: {
      userId: userId
    }
  })
}


export function getPostComment(id) {
  return request({
    url: '/post',
    method: 'post',
    data: {
      id: id
    }
  })
}


export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}


export function login(name, password) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      name,
      password
    }
  })
}


export function postDetail(postId) {
  return request({
    url: '/postDetail',
    method: 'get',
    params: {
      postId
    }
  })
}

export function userIsLogined() {
  return request({
    url: '/isLogined',
    method: 'get'
  })
}


export function signOut() {
  return request({
    url: '/signout'
  })
}

export function candidatePostDelete(postId) {
  return request({
    url: '/candidateDelete',
    method: 'post',
    params: {
      postId
    }
  })
}

export function PostDelete(postId) {
  return request({
    url: '/Delete',
    method: 'post',
    params: {
      postId
    }
  })
}