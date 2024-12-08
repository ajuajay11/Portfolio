import Image from "next/image";
export default function Header() {
  return (
    <>
    <div className="rounded-4 px-4 bg-danger card h-100">
      <div className="card-header">
        <div className="d-flex justify-content-center">
          <Image src="/images/portfolio.jpg" alt="File Icon" className="rounded-circle" width={130} height={130} />
        </div>
        <div className="d-flex flex-column align-items-center ">
          <h1 className="fs-6 text-white text-center">Ajay K</h1>
        </div>
      </div>
      <div className="card-body">
      <div className="d-flex flex-column align-items-center ">
          <p>Front End Developer</p>
        </div>
        <div className="social_media ">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>       
        </div>
      </div>
      <div className="card-footer">

      </div>
    </div>
    </>
  )
}