export const Parent = ({children}) => {
  return (
    <section style={{width:"600px",height:"200px",background:"blue",
    display:"flex", flex:"row"}}>
      {children}
    </section>
  );
};
