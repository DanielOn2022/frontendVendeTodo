import { FunctionComponent } from "react";
import { useQuery } from '@apollo/client';
import { GetFirstPost } from './queries';

export const TestComponent: FunctionComponent = () => {

  console.log("el query de post por id");
  const { loading, error, data } = useQuery(GetFirstPost, {
    variables: {id: 5}
  });
    
  if (error) console.log(error);
  console.log(data);

  console.log("el query o mutation bla bla");
  //otro query o mutation
  return(
    <div>
      <div>
        <h1>this is a test component</h1>
      </div>
      <div></div>
    </div>
  )
}