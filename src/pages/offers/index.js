
import Image from "next/image";

export default function offers() {

  const images = [
    {name:'vue',img:'/images/figma.png'},
    {name:'ai',img:'/images/ai.png'},
    {name:'firebase',img:'/images/firebase.png'},
    {name:'vite',img:'/images/vite.png'},
    {name:'next',img:'/images/next.png'},
    {name:'react',img:'/images/react.png'},
    {name:'Ps',img:'/images/ps.png'},
    {name:'Wordpress',img:'/images/wordpress.png'},
    {name:'js',img:'/images/js.png'},
    {name:'fed',img:'/images/fed.png'},
    {name:'bootstrap',img:'/images/bootstrap.png'},
    {name:'vue',img:'/images/vue.png'},
    {name:'yoast',img:'/images/yoast.png'},
    {name:'mongo',img:'/images/mongo.png'},
    {name:'js',img:'/images/js.png'},
   ]
  return (
    <div className="container card bg-dark ">
      <div className="h-100">
          <h1>Our Offers</h1>
          <p>Some of our services and features.</p>
          <div className="row g-3 pb-3">
              {images.map((image, index)=>(
                <div key={index} className="col-4 d-flex align-items-center justify-content-center">
                  <Image src={image.img} alt="File Icon" layout="responsive" className="rounded" width={2} height={1}/>
                </div>
              ))}
              </div>
        </div>
    </div>
  )
}
