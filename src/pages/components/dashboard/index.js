import Link from "next/link";
import Intro from "../introduction";
import Image from "next/image";
import lottieBee from "../../../../public/images/ajflix.png";
import eco from "../../../../public/images/lottiebee.png";

export default function Dashboard() {
  return (
    <div style={{ height: "92vh", overflowX: "hidden", overflowY: "scroll" }}>
      <Intro />
      <div className="row">
        <div className="col-12 col-md-4 d-flex flex-column gap-3">
          <div className="card bg-dark  shadow px-4 py-4">
            <h2>My Expertise</h2>
            <p>More Specialized</p>
            <span>ABOUT US</span>
            {/* <Image src="/images/team.png" alt="File Icon" className="rounded" width={130} height={130} /> */}
          </div>
          <div className="card bg-dark ">
            <Link href="/offers" className="d-flex justify-content-evenly py-3">
              <Image
                src="/images/figma.png"
                alt="File Icon"
                className="rounded"
                width={50}
                height={50}
              />
              <Image
                src="/images/vue.png"
                alt="File Icon"
                className="rounded"
                width={50}
                height={50}
              />
              <Image
                src="/images/next.png"
                alt="File Icon"
                className="rounded"
                width={50}
                height={50}
              />
            </Link>
            <div className="ps-lg-4 mt-2">
              <small>Specialization</small>
              <h3 className="text-capitalize">Services offers</h3>
            </div>
          </div>
          <div className="bg-dark card">
            <div className="row p-4">
              <div className="col-6">
                <div>11+</div>
                <small>Years of Experience</small>
              </div>
              <div className="col-6">
                <div>444+</div>
                <small>Projects Completed</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="row m-0 g-4">
            <div className="col-12 card bg-dark  d-flex flex-column py-4 m-0">
              <div className="d-flex justify-content-evenly align-items-center">
                <Image
                  src={eco}
                  alt="Picture of the author"
                  className="rounded-2"
                  width={250}
                  height={160}
                  style={{
                    objectFit: "cover", // Maintains aspect ratio
                    objectPosition: "left",
                  }}
                />
                <Image
                  src={lottieBee}
                  className="rounded-2"
                  alt="Picture of the author"
                  width={250}
                  height={160}
                  style={{
                    objectFit: "cover", // Maintains aspect ratio
                    objectPosition: "left",
                  }}
                />
              </div>
              <div className="ps-lg-4 mt-3">
                <small>Showcase View</small>
                <h3 className="text-uppercase">Projects</h3>
              </div>
            </div>
            <div className="col-12 py-4 m-0">
              <div className="row g-3">
                <div className="col-6 card bg-dark">
                  <div className="bg-secondary-dark rounded px-3 py-5">
                    visit our blog
                    <small className="d-block">BLOG</small>
                  </div>
                </div>
                <div className="col-6 card bg-dark">
                  <div className=" rounded pe-3 py-5">
                    lets work
                    <small className="d-block">Contact</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
