import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import routeReducer from "./route.reducer";
import bookingReducer from "./booking.reducer";
import menuReducer from "./menu.reducer";
import scrollReducer from "./scroll.reducer";
import reviewReducer from "./review.reducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  route: routeReducer,
  booking: bookingReducer,
  menu: menuReducer,
  scroll: scrollReducer,
  review: reviewReducer,
});
