import axios from 'axios'

export function useAbstractService (path: string, apiUrl?: string) {
  
  const baseURL = 'https://mysite-dev-o4yvxsmgka-rj.a.run.app'
  // const baseURL = 'http://localhost'

  function request (contentType = 'application/json', cacheControl = 'no-cache') {
    
    const config = {
      baseURL,
      headers: {
        // Authorization: `Bearer ${mainStore?.user?.idToken}`,
        // 'x-endpoint-api-userinfo': mainStore?.user?.idToken,
        // 'Cache-Control': cacheControl,
        'Content-Type': contentType,
      },
    //   params,
    }

    return axios.create(config)
  }

  return { baseURL, request }
}
