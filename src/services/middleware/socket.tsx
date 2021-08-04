import {
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_START,
  wsConnectionClosed,
  wsConnectionError,
  wsConnectionOpened,
  wsGetMessage,
} from '../slices/feed/feed';
import { AnyAction, MiddlewareAPI } from 'redux';

export const socketMiddleware = () => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return (next: (a: AnyAction) => void) => (action: AnyAction) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START.toString()) socket = new WebSocket(payload);
      if (type === WS_CONNECTION_CLOSE.toString()) socket && socket.close();

      if (socket) {
        socket.onopen = () => dispatch(wsConnectionOpened());
        socket.onclose = () => dispatch(wsConnectionClosed());
        socket.onerror = () => dispatch(wsConnectionError());
        socket.onmessage = (event) => dispatch(wsGetMessage(JSON.parse(event.data)));
      }

      next(action);
    };
  };
};
