const Index = ({children,fn,compA,title}) => {
  
  return (
    <>
      {title}
      {children}
      <hr />
      {compA}
      <hr />
      <button onClick={fn}>按钮</button>
    </>
  );
};
export default Index;