export const Input = ({ label, id, type, value, placeholder, src, desc, onChange }) => {
  return(
    <div className="font-dmsans">
      <label htmlFor={id} className="text-ciano font-semibold text-sm hidden lg:block uppercase">{label}</label>
      <div className="flex">
        <input type={type} id={id} onChange={onChange} value={value} placeholder={placeholder} 
        className="border-2 border-ciano caret-ciano outline-0 rounded-r-lg placeholder-ciano/20 px-3 w-full text-ciano font-dmsans" />
        <img src={src} alt={desc} className="bg-ciano order-[-1] size-13 p-3 rounded-l-lg" />
      </div>
    </div>
  );
}