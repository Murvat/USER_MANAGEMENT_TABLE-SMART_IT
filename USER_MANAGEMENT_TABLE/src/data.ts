
const useFetchUsers = (baseurl) => {
  function getUsers(url) {
    return fetch(baseurl+url)
      .then(response => response.json())
  }
  return { getUsers };
}

export default useFetchUsers;