import {
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_START,
  wsConnectionClosed,
  wsConnectionError,
  wsConnectionOpened,
  wsGetMessage,
} from '../slices/feed/feed';

export const socketMiddleware = () => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START.toString()) socket = new WebSocket(payload);
      if (type === WS_CONNECTION_CLOSE.toString()) socket.close();

      if (socket) {
        socket.onopen = () => dispatch(wsConnectionOpened());
        socket.onclose = () => dispatch(wsConnectionClosed());
        socket.onerror = (event) => dispatch(wsConnectionError(event));
        socket.onmessage = (event) => dispatch(wsGetMessage(JSON.parse(event.data)));
      }

      next(action);
    };
  };
};
