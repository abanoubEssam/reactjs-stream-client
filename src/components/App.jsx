import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from '../components/streams/StreamCreate/StreamCreate'
import StreamDelete from '../components/streams/StreamDelete/StreamDelete'
import StreamEdit from '../components/streams/StreamEdit/StreamEdit'
import StreamList from '../components/streams/StreamList/StreamList'
import StreamShow from '../components/streams/StreamShow/StreamShow'
import Header from './Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
