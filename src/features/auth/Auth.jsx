import InputWithLabel from "../../components/inputWithLabel/InputWithLabel";
const Auth=()=>{
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
    <div className="container">
       <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
             <div
                className="
                max-w-[525px]
                mx-auto
                bg-white
                rounded-lg
                relative
                overflow-hidden
                py-16
                px-10
                sm:px-12
                md:px-[60px]
                "
                >
                  <div className='my-2'>
                  <InputWithLabel  label="Mobile Number" type="text" id="mobileNumber" />
                  </div>
                  <div className='my-2'>
                  <InputWithLabel label="Password" type="password" id="pasword" />

                  </div>

    </div>
    </div>
    </div>
    </div>
    </section>
  )
}
export default Auth;