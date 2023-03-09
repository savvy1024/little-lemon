const OccasionSelect = ({
  id,
  labelled = true,
  labelText,
  selectRef,
  fullSpan = false,
  formikVal,
  validated = false,
  formError,
}) => {
  const occasions = ["Engagement", "Birthday", "Anniversary", "Others"];
  return (
    <div className={`form-group${fullSpan ? " full-span" : ""}`}>
      <label htmlFor={id} className={`${!labelled ? "sr-only" : ""}highlight`}>
        {labelText}
        {console.log(labelText)}
      </label>
      <select id={id} data-testid={id} name={selectRef} {...formikVal}>
        <option value=''>None</option>
        {occasions.map((occ, index) => (
          <option
            key={index}
            value={occ.toLowerCase()}
            data-testid={`${id}-option`}
          >
            {occ}
          </option>
        ))}
      </select>
      {validated && (
        <div className='form-error' data-testid={`${id}-error`}>
          {formError}
        </div>
      )}
    </div>
  );
};

export default OccasionSelect;
