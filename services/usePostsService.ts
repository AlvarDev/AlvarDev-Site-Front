import { useAbstractService } from './useAbstractService'

export interface IApiPost {
    description:    string
    link:           string
    category:       string
    postID:         string
    src:            string 
    title:          string 
}

export function usePostsService () {
  const abstractService = useAbstractService('/')

  async function loadPosts () {
    const response = await abstractService.request().get('posts')
    return response.data
  }

  return { loadPosts }
}
