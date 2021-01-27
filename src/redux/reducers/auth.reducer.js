import * as types from "../constants/auth.constants";
const initialState = {
  user: {},
  isAuthenticated: null,
  loading: false,
  table: {},
  singleTable: {},
  newTables: [],
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_FACEBOOK_REQUEST:
    case types.LOGIN_GOOGLE_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
    case types.LOGIN_FACEBOOK_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        accessToken: payload.accessToken,
        loading: false,
        isAuthenticated: true,
      };

    case types.LOGIN_FAILURE:
    case types.LOGIN_FACEBOOK_FAILURE:
    case types.LOGIN_GOOGLE_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };

    case types.LOGOUT:
      return {
        ...state,
        user: { role: "public" },
        loading: false,
        isAuthenticated: false,
        accessToken: "",
      };

    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false };

    case types.GET_TABLE_REQUEST:
      return { ...state, loading: true };
    case types.GET_TABLE_SUCCESS:
      return { ...state, table: payload.table, loading: false };
    case types.GET_TABLE_FAILURE:
      return { ...state, loading: false };

    case types.GET_CURRENT_TABLE_REQUEST:
      return { ...state, loading: true };
    case types.GET_CURRENT_TABLE_SUCCESS:
      return { ...state, singleTable: payload, loading: false };
    case types.GET_CURRENT_TABLE_FAILURE:
      return { ...state, loading: false };

    case types.UPDATE_TABLE_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_TABLE_SUCCESS:
      return { ...state, loading: false };
    case types.UPDATE_TABLE_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_TABLE_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_TABLE_SUCCESS:
      return { ...state, newTables: payload, loading: false };
    case types.CREATE_TABLE_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default authReducer;
