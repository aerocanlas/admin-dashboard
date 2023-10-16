import TemplatePointers from "./components/TemplatePointers"



function LandingIntro(){

    return(
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
              <div className="max-w-md">

              <h1 className='text-3xl text-center font-bold '><img src="/logo-minerva.png" className="w-12 inline-block mr-2 mask mask-rectangle" alt="minerva sales logo" />Minerva Sales Corporation</h1>

                <div className="text-center mt-12"><img src="https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/311313270_596326978951989_4869084872193463276_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzJwCjWR_ryEE97GqfvYNOsI2FzUiTDIewjYXNSJMMh_n1qQ0DmxBeT1LoLiZhAdmlYQ-_rxD_7ipY3xHek0Mp&_nc_ohc=C5ZFAShYJRsAX9cJQaS&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfCm402vJYrYbAa-J4UCI98XWkPh4htIMySvLZA6f38AMw&oe=6532D8B7" alt="Dashwind Admin Template" className="w-50 inline-block"></img></div>
              
              {/* Importing pointers component */}
              <TemplatePointers />
              
              </div>

            </div>
          </div>
    )
      
  }
  
  export default LandingIntro