class UserCrud {
  static url = "https://restcountries.eu/rest/v2/all";
  static async get() {
    let res = await fetch(UserCrud.url);
    return await res.json();
  }
}

export default UserCrud;
