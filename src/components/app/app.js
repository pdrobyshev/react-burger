import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Constructor, Feed, ForgotPassword, Login, NotFound404, Register, ResetPassword } from '../../pages';
import AppHeader from '../app-header/app-header';

const App = () => (
  <>
    <BrowserRouter>
      <AppHeader />

      <Switch>
        <Route path='/' exact>
          <Constructor />
        </Route>
        //TODO сделать защищенный роут для авторизованного пользователя
        {/* если залогинен - при переходе на страницу редиректить на главную */}
        <Route path='/login' exact>
          <Login />
        </Route>
        //TODO сделать защищенный роут для авторизованного пользователя
        {/* если залогинен - при переходе на страницу редиректить на главную */}
        <Route path='/register' exact>
          <Register />
        </Route>
        <Route path='/forgot-password' exact>
          <ForgotPassword />
        </Route>
        //TODO создать protected route component with reset
        {/* нужно проверять что пришли с урла forgot-password, иначе - редирект на главную */}
        <Route path='/reset-password' exact>
          <ResetPassword />
        </Route>
        <Route path='/feed' exact>
          <Feed />
        </Route>
        <Route path='/feed/:id' exact>
          {/*<FeedOrder />*/}
        </Route>
        //TODO создать protected route component
        {/*если залогинен - вернуть children*/}
        {/*иначе - редирект на страницу логина, а в state передать location "откуда" пришли*/}
        {/*чтобы после авторизации вернуться на защищенный роут куда хотели попасть*/}
        <Route path='/profile' exact>
          {/*<Profile />*/}
        </Route>
        <Route path='/profile/orders' exact>
          {/*<History />*/}
        </Route>
        <Route path='/profile/orders/:id' exact>
          {/*<HistoryOrder />*/}
        </Route>
        <Route path='/ingredients/:id' exact>
          {/*<IngredientPage />*/}
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
