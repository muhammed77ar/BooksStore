import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      return action.payload;
    },
  },
  markAsRead(state, action) {
    const notificationId = action.payload;
    const notificationIndex = state.findIndex(
      (notification) => notification.id === notificationId
    );

    if (notificationIndex !== -1) {
      // Mark the notification as read (you can modify this to fit your data structure)
      state[notificationIndex].read = true;
    }
  },
});

export const { setNotifications, markAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
