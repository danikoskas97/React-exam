import React from "react";
import UserCrud from "./userCrud";

export default function AppMain() {
  let [state, setState] = React.useState({
    countries: [],
    inputCountryByName: undefined,
  });

  const getCountry = async () => {
    let res = await UserCrud.get();
    setState({ countries: res });
  };

  if (!state.countries.length) {
    getCountry();
  }

  let handelChange = (e) => {
    setState({ ...state, inputCountryByName: e.target.value });
  };

  return (
    <div>
      <label>Search for a Country: </label>
      <input type="text" onChange={handelChange} />
      <table border="1">
        <tr>
          <th>name</th>
          <th>nativeName</th>
          <th>capital</th>
          <th>population</th>
          <th>flag</th>
        </tr>

        {state.countries.map((x) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.nativeName}</td>
            <td>{x.capital}</td>
            <td>{x.population}</td>
            <td>
              <img src={x.flag} height="50px" width="80px" alt="img"></img>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
