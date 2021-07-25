import {
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_START,
  wsConnectionClosed,
  wsConnectionError,
  wsConnectionOpened,
  wsGetMessage,
} from '../slices/feed';

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

        // if (type === wsSendMessage) {
        //   const message = { ...payload, token: user.token };
        //   socket.send(JSON.stringify(message));
        // }
      }

      next(action);
    };
  };
};
