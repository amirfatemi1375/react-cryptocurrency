const InputWithLabel=({label,id,value,type="text",onInputChange})=>{
    const handleChange=(event)=>{
        onInputChange(event)

    }
  return(
     <>
     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>{label}</label>
      <input className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary" type={type} id={id} onChange={handleChange} value={value}/>
     </>
  )
}
export default InputWithLabel;