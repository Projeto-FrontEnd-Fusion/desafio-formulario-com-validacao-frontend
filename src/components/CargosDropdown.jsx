export const CargosDropdown = ({ listaCargos, value, onChange }) => {
  return(
    <select
    value={value}
    onChange={onChange}
    id="cargo"
    className="outline-0 w-full border-2 border-ciano py-3.5 px-3 text-ciano font-dmsans rounded-xl text-lg">
      <option value="" className="">Cargo Pretendido</option>

      {listaCargos.map((cargo) => (
        <option value={cargo} key={cargo} className="">{cargo}</option>
      ))}
    </select>
  );
}