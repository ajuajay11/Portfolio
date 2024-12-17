import Image from "next/image";
export default function Header() {
  return (
    <>
    <div className="rounded-4 px-4 bg-dark card h-100">
      <div className="card-header mt-4">
        <div className="d-flex justify-content-center">
          <Image src="/images/portfolio.jpg" alt="File Icon" className="rounded-circle" width={130} height={130} />
        </div>
        <div className="d-flex flex-column align-items-center pt-2">
          <h1 className="fs-6 text-white text-center">Ajay K</h1>
          <marquee className="fw-bold text-center">Front End Web Developer</marquee>
        </div>
      </div>
      <div className="card-body">
       <div className="d-flex flex-column align-items-center">
         <h3 className="fs-6 m-0 text-white text-center">+88 889-859-66</h3>
         <p className="fs-5 text-white">admin@demo.com</p>
       </div>
        <div className="social_media d-flex justify-content-center gap-2 mt-4">
          <button className="btn border  text-white"><i class="bi bi-facebook"></i></button>
          <button className="btn border  text-white"><i class="bi bi-twitter"></i></button>
          <button className="btn border  text-white"><i class="bi bi-github"></i></button>
          <button className="btn border  text-white"><i class="bi bi-linkedin"></i></button> 
        </div>
      </div>
      <div className="card-footer d-flex flex-column gap-3">
        <button className="btn btn-success rounded-4">Hire Me</button>
        <button className="btn btn-primary rounded-4">Download Resume</button>
      </div>
    </div>
    </>
  )
}