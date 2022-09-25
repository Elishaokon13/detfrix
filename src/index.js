import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { client } from './base/api/hygraph';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';
export const clients = new ApolloClient({
  uri: process.env.HYGRAPHENDPOINT,
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={clients}>
          <App />
      </ApolloProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);
