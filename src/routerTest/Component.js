import React from 'react';
export const Home = () => (<h2>Home</h2>);
export const About = ({children}) =>(
  <div>
    <h2>About</h2>
    <div>{children}</div>
  </div>
);

export const Name = () =>(<h3>지혜</h3>);

const allList=[
  {id: 1, text: 'Portfolio #1'},
  {id: 2, text: 'Portfolio #2'},
  {id: 3, text: 'Portfolio #3'}
]

export const Portfolio = ({routerParams : {id}}) =>{
  const filteredList = id ? allList.filter(v => v.id == id ) : allList;
  const renderList = filteredList.map(v=>(
    <li key={v.id}>{v.test}</li>
  ));
  return(
    <div>
      <h2>portfolio</h2>
      <ul>{renderList}</ul>
    </div>
  );
}
