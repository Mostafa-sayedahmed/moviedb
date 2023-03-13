const initialState = {
  lang: "EN",
  translate: {
    Home: "Home",
    Aboutus: "About us",
    Movies: "Movies",
    Favorites: "Favorites",
    Login: "Login",
    Signup: "Signup",
    Popularmovies: "Popular Movies",
  },
  loader: true,
};
export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        lang: action.payload.lang,
        translate: action.payload.translate,
      };
    case "SET_LOADER":
      return {
        ...state,
        loader: action.payload.lang,
      };
    default:
      return state;
  }
}
