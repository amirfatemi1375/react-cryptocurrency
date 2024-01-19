
const Header=({title,logo,children})=>{
    return(
        <>
            <div className="w-full bg-cyan-600 p-3	">
                <section className="flex justify-between">
                <span className="text-white">{title}</span>
                <img src={logo}/>
                </section>
                <div>
                     {children}
                </div>
            </div>
        </>
    )

}
export default Header;