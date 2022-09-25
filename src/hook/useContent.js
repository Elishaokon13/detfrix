import React from 'react'
import { gql } from '@apollo/client';
import { clients } from '../index';
const GET_FEATURES = gql`
  {
    homePage(where: {id: "cl8f1ht0q913s0amk2mz2jqg0"}) {
      sectionFeature {
        heading
        sectionFeacture {
          title
          image {
            image {
              url
            }
          }
          desc {
            text
            html
            markdown
          }
        }
      }
    }
  }

`;

export const useContent = () =>{
    const {data,loading,error} = clients.query({query:GET_FEATURES});
    return {
        data, loading, error
    }
}

