const Shimmer = () => {
  return (
  <>
    {
    Array(12)
      .fill("0")
      .map((item,idx) =>{
        return <div key = {idx} className="shimmer">
      <div className="shimmer_img"></div>
      <div className="shimmer_txt1"></div>
      <div className="shimmer_txt2"></div>
    </div>}      )}
  </>
)}

export default Shimmer;