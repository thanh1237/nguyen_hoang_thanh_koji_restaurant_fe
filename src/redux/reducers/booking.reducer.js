import * as types from "../constants/booking.constants";
const initialState = {
  booking: [],
};

const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_BOOKING_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_BOOKING_SUCCESS:
      return { ...state, booking: payload.booking, loading: false };
    case types.CREATE_BOOKING_FAILURE:
      return { ...state, loading: false };

    case types.GET_BOOKING_REQUEST:
      return { ...state, loading: true };
    case types.GET_BOOKING_SUCCESS:
      return { ...state, booking: payload.booking, loading: false };
    case types.GET_BOOKING_FAILURE:
      return { ...state, loading: false };

    case types.DELETE_BOOKING_REQUEST:
      return { ...state, loading: true };
    case types.DELETE_BOOKING_SUCCESS:
      return { ...state, loading: false };
    case types.DELETE_BOOKING_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default bookingReducer;
