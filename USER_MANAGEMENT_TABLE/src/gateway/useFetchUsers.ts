interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const useFetchUsers = (baseurl: string) => {
  function getUsers(url: string): Promise<User[]> {
    return fetch(baseurl + url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

  return { getUsers };
}

export default useFetchUsers;
