const Form = ({
  onChangeEmail,
  onHandleSubmit,
  label,
  btnLabel,
  type,
  loading,
}) => {
  type = type ? type : "email";
  return (
    <form onSubmit={onHandleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={onChangeEmail}
        />
      </div>
      {!loading ? (
        <button type="submit" className="btn btn-success">
          {btnLabel}
        </button>
      ) : (
        <button disabled={true} className="btn btn-success">
          Loading...
        </button>
      )}
    </form>
  );
};

export default Form;
