/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const PostDetails8 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                {/* <div className="title-head"> */}
                  {/* <h2>Build a Beautiful work With Ease</h2> */}
                  {/* <div className="info"> */}
                    {/* <p>
                      <Link href="#">Alex Smith</Link>/
                      <Link href="#">August 6 , 2022</Link>/
                      <Link href="#">Web Design</Link>
                    </p> */}
                  {/* </div> */}
                {/* </div> */}
                <div className="img main-img">
                  <img
                    src="/assets/img/Architectures/projects/Sheni Farmhouse.jpg"
                    alt=""
                    className="thumparallax"
                  />
                </div>
                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <div className="spacial">
                          <p>
                          The Sheni Farmhouse in Kerala epitomizes the seamless integration of contemporary living with serene surroundings. With a focus on open spaces and expansive windows, the design invites the breathtaking beauty of nature indoors, creating a harmonious blend of modern comfort and tranquil ambiance.
                          </p>
                        </div>
                      
{/* 
                        <h6>-Multi-functional Networking Hub</h6>

                        <p style={{marginLeft:'20px',marginTop:'10px'}}>
                        A vibrant multi-functional networking hub blending business, leisure, dining, and events for a dynamic community experience.
                        </p>
                        <h6>-Magnanimous First of its kind</h6>

                        <p style={{marginLeft:'20px',marginTop:'10px'}}>
                        It is the first of its kind, offering unparalleled innovation, luxury, and community-focused amenities for an extraordinary lifestyle experience.
                        </p>
                        <h6>-Social hot spot Community crossroad</h6>

                        <p style={{marginLeft:'20px',marginTop:'10px'}}>
                        Social hot spot and community crossroad, fostering connections, vibrant interactions, and diverse activities in a lively, inclusive environment.
                        </p> */}

                        {/* <ul>
                          <li>
                            <span>01</span> Iconic  Juxtaposition to it
surroundings as a building
that ‘breathes’.
                          </li>
                          <li>
                            <span>02</span> Vivamus maximus ultricies pulvinar.
                          </li>
                          <li>
                            <span>03</span> priorities that will pop up in any
                            particular month.
                          </li>
                          <li>
                            <span>04</span> We all intend to plan ahead.
                          </li>
                          <li>
                            <span>05</span> The main component of a healthy env
                            for self esteem.
                          </li>
                        </ul> */}

                        {/* <div className="quotes text-center">
                          <p>
                            Never ever think of giving up. Winners never quit
                            and quitters never win. Take all negative words out
                            of your mental dictionary and focus on the solutions
                            with utmost conviction and patience. The battle is
                            never lost until you&apos;ve abandon your vision.
                          </p>
                        </div> */}
                        <br/>
                        <br/>
                         <div className="container" >
        <div className="main-header text-center ">
          <h3 style={{textTransform:'uppercase'}}>Projects</h3>
          <div className="tex-bg">Work</div>
        </div>
      </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img src="/assets/img/Architectures/projects/Farm house.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img src="/assets/img/Architectures/projects/Sheni Farmhouse 2.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                        {/* <p>
                          We all intend to plan ahead, but too often let the
                          day-to-day minutia get in the way of making a calendar
                          for the year. Sure, you can&apos;t know every detail
                          to anticipate. Heck, you can&apos;t know half the
                          priorities that will pop up in any particular month.
                          But you can plan for big picture seasonality,
                          busy-times, and events.
                        </p> */}
                        {/* <div className="share-info">
                          <div className="social">
                            <Link href="#">
                              <a>
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </Link>
                            <Link href="#">
                              <a>
                                <i className="fab fa-twitter"></i>
                              </a>
                            </Link>
                            <Link href="#">
                              <a>
                                <i className="fab fa-behance"></i>
                              </a>
                            </Link>
                          </div>
                          <div className="tags">
                            <Link href="#">Web</Link>,
                            <Link href="#">Themeforest</Link>,
                            <Link href="#">ThemesCamp</Link>
                          </div>
                        </div> */}
                      </div>
                      {/* <div className="author">
                        <div className="author-img">
                          <img src="/assets/img/blog/01.jpg" alt="" />
                        </div>
                        <div className="info">
                          <h6>
                            <span>author :</span> Jorden Griffin
                          </h6>
                          <p>
                            the main component of a healthy environment for self
                            esteem is that it needs be nurturing. The main
                            compont of a healthy environment.
                          </p>
                          <div className="social">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* <div className="pagination">
                  <span>
                    <Link href="#">Prev Post</Link>
                  </span>
                  <span className="icon">
                    <Link href="#">
                      <a>
                        <i className="fas fa-th-large"></i>
                      </a>
                    </Link>
                  </span>
                  <span className="text-right">
                    <Link href="#">Next Post</Link>
                  </span>
                </div> */}

                {/* <div className="comments-area">
                  <h5>Comments :</h5>
                  <div className="item">
                    <div className="comment-img">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                  <div className="item relped">
                    <div className="comment-img">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="comment-img">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                </div> */}

                <div className="comment-form">
                  <h5>Add Comment :</h5>
                  <div className="form">
                    <form action="">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <textarea placeholder="Your Comment"></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button className="btn-curve btn-blc btn-lg">
                              <span>Submit</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails8;
