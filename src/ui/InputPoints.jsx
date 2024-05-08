export function InputPoints(props) {
  return (
    <>
      <input
        type={props.type}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        value={props.value}
        className="border border-borderInput h-44p rounded-6p pl-12p bg-black text-14p leading-17p text-primary-300 font-inter focus:outline-none"
        style={{ width: '100%', maxWidth: '330px' }}
        placeholder="Unesi kod sa čepa"
      />
      {props.children}
    </>
  );
}
