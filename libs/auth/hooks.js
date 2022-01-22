import useSWR from 'swr'


const fetcher = (url) =>
  fetch(url)
  .then((r) => r.json())
  .then((data) => {
    return {
      user: data ? data.user : null
    }
  })

export function useUser() {
  const {
    data,
    error
  } = useSWR('/api/user/session', fetcher)

  const user = data ? data.user : null

  return error ? null : user
}