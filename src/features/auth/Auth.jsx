import Button from "../../components/Button/Button";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import axiosInstance, { instance } from "../../services/Api";
import useForm from "../../hooks/useForm/useForm";
import { useNavigate } from "react-router-dom";
const Auth=()=>{
  const { handleChange, values, errors } = useForm();
  const navigate=useNavigate();
  const login=()=>{
    if(Object.keys(errors).length !== 0){
      return;
    }else{
      axiosInstance.post("/auth",values);
    navigate("/CryptoCurrency");


    }
    
  }
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
    <div className="container">
       
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
                  <InputWithLabel  onInputChange={handleChange}  name="mobileNumber"  label="Mobile Number" type="text" id="mobileNumber" />
                  {errors.mobileNumber && <h3 className="text-red-400	">{errors.mobileNumber}</h3>}
                  </div>
                  <div className='my-2'>
                  <InputWithLabel onInputChange={handleChange} name="password" label="Password" type="password" id="pasword" />
                  {errors.password && <h3 className="text-red-400	">{errors.password}</h3>}

                  </div>
                  <div className="my-3 text-center">
                      <Button  primary click={login} >
                          Login
                      </Button>
                  </div>

    </div>
    </div>
   
    </div>
    </section>
  )
}


export default Auth;