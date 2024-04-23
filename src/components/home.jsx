import pict from "../assets/python.png";
import cc from "../assets/copyright.png";
import ig from "../assets/instagram.png";
import li from "../assets/linkedin.png";
import { useRef, useEffect, useState } from "react";
import emailjs, { send } from "@emailjs/browser";

const Home = () => {
  useEffect(() => {
    const handleBurgerClick = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      for (let i = 0; i < menus.length; i++) {
        menus[i].classList.toggle("hidden");
      }
    };

    const burgerButtons = document.querySelectorAll(".navbar-burger");
    if (burgerButtons.length) {
      for (let i = 0; i < burgerButtons.length; i++) {
        burgerButtons[i].addEventListener("click", handleBurgerClick);
      }
    }

    const handleCloseClick = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      for (let i = 0; i < menus.length; i++) {
        menus[i].classList.toggle("hidden");
      }
    };

    const closeButtons = document.querySelectorAll(".navbar-close");
    if (closeButtons.length) {
      for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", handleCloseClick);
      }
    }

    const handleBackdropClick = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      for (let i = 0; i < menus.length; i++) {
        menus[i].classList.toggle("hidden");
      }
    };

    const backdrops = document.querySelectorAll(".navbar-backdrop");
    if (backdrops.length) {
      for (let i = 0; i < backdrops.length; i++) {
        backdrops[i].addEventListener("click", handleBackdropClick);
      }
    }

    return () => {
      if (burgerButtons.length) {
        for (let i = 0; i < burgerButtons.length; i++) {
          burgerButtons[i].removeEventListener("click", handleBurgerClick);
        }
      }
      if (closeButtons.length) {
        for (let i = 0; i < closeButtons.length; i++) {
          closeButtons[i].removeEventListener("click", handleCloseClick);
        }
      }
      if (backdrops.length) {
        for (let i = 0; i < backdrops.length; i++) {
          backdrops[i].removeEventListener("click", handleBackdropClick);
        }
      }
    };
  }, []);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = (email) => {
    // Regex pattern untuk validasi alamat email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      alert("Please Fill The Form");
      return;
    }

    // Memeriksa apakah alamat email valid
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    const serviceId = "service_tqjis0s";
    const templeteID = "template_s0y3xbj";
    const publicKey = "LQJNZt-7kvqNsbu46";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: "Gilang Pambua",
      message: message,
    };

    emailjs
      .send(serviceId, templeteID, templateParams, publicKey)
      .then((response) => {
        console.log("email sent succesfully!", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        alert("Your Message has been Sent!");
      })
      .catch((error) => {
        console.log("error sending email:", error);
      });
  };

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === ref1.current) {
            setIsVisible1(entry.isIntersecting);
          } else if (entry.target === ref2.current) {
            setIsVisible2(entry.isIntersecting);
          } else if (entry.target === ref3.current) {
            setIsVisible3(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    observer.observe(ref3.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const [showMore, setShowMore] = useState(false);

  const handleToggleContent = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div className="main relative xl:px-[168px] lg:px-[143px] md:px-[90px] sm:px-[50px] xs:px-[50px] s:px-[25px]">
        <div className="navigation">
          <div className="header flex justify-between s:py-3 xs:py-3 sm:py-3 md:py-5 lg:py-9 xl:py-12 fixed top-0 left-0 right-0 z-50 xl:px-[168px] lg:px-[143px] md:px-[90px] sm:px-[50px] xs:px-[50px] s:px-[25px] bg-black">
            <div className="flex place-items-center">
              <a
                className="font-bold leading-none text-[#66C2A9] xl:text-[32px] lg:text-[25px] md:text-[21px] sm:text-[17px] xs:text-[15px] s:text-[14px]"
                href="#"
              >
                GILANG PAMBUA
              </a>
            </div>
            <div className="bagiankanan flex items-center">
              <ul className="flex justify-between hidden font-bold lg:flex xl:gap-[41px] lg:gap-[35px] md:gap-[40px]">
                <li>
                  <a
                    className="text-white hover:text-[#66C2A9] xl:text-[30px] lg:text-[22px]"
                    href="#home"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-[#66C2A9] xl:text-[30px] lg:text-[22px]"
                    href="#about"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-[#66C2A9] xl:text-[30px] lg:text-[22px]"
                    href="#portofolio"
                  >
                    PORTFOLIO
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-[#66C2A9] xl:text-[30px] lg:text-[22px]"
                    href="#contact"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
              <div className="burger lg:hidden ml-auto">
                <button className="navbar-burger flex items-center text-[#66C2A9] ">
                  <svg
                    className="block h-6 w-6 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="navbar-menu relative z-50 hidden">
            <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-16 px-8 bg-black border-r overflow-y-auto">
              <div class="flex items-center mb-8">
                <a
                  class="mr-auto text-[26px] font-bold leading-none text-[#66C2A9]"
                  href="#"
                >
                  GILANG PAMBUA
                </a>
                <button class="navbar-close">
                  <svg
                    class="h-6 w-6 text-white cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li class="mb-1">
                    <a
                      class="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-gray-800 rounded"
                      href="#home"
                    >
                      HOME
                    </a>
                  </li>
                  <li class="mb-1">
                    <a
                      class="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-gray-800 rounded"
                      href="#about"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li class="mb-1">
                    <a
                      class="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-gray-800 rounded"
                      href="#portofolio"
                    >
                      PORTOFOLIO
                    </a>
                  </li>
                  <li class="mb-1">
                    <a
                      class="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-gray-800 rounded"
                      href="#contact"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div
            id="home"
            className="home xl:pl-[101px] xl:pt-[280px] lg:pl-[67px] lg:pt-[180px] md:pl-[59px] md:pt-[145px] sm:pl-[19px] sm:pt-[85px] xs:pl-[14px] xs:pt-[80px] s:pl-[21px] s:pt-[75px]"
          >
            <div className="home_text font-bold grid">
              <div className="text text-white xl:text-[60px] lg:text-[42px] md:text-[34px] sm:text-[22px] xs:text-[18px] s:text-[16px]">
                Hello, I'm Gilang
              </div>
              <div className="text_second text-[#66C2A9] xl:text-[60px] lg:text-[42px] md:text-[34px] sm:text-[22px] xs:text-[18px] s:text-[16px]">
                Pambua
              </div>
              <div className="text-white font-light xl:text-[20px] xl:pr-[320px] lg:text-[15px] lg:pr-[125px] md:text-[12px] md:pr-[110px] sm:text-[10px] sm:pr-[32px] xs:text-[8px] xs:py-[6px] s:text-[7px] xs:pr-[13px] s:pr-[20px] s:py-[5px]">
                Welcome to my creative digital page. Here, we gladly open the
                door to the world of code for you. Let's explore the world of
                technology together, share inspiration, and create amazing
                things. Enjoy every step of our digital hallway!
              </div>
              <div className="button-me xl:py-[30px] lg:py-[20px] md:py-[15px] sm:py-[5px] xs:py-[0px] s:py-[0px]">
                <button className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-black bg-[#66C2A9] text-white rounded xl:text-[20px] xl:w-[130px] xl:h-[55px] lg:text-[17px] lg:w-[110px] lg:h-[45px] md:text-[14px] md:w-[102px] md:h-[38px] sm:text-[11px] sm:w-[70px] sm:h-[26px] xs:text-[9px] xs:w-[55px] xs:h-[22px] s:text-[8px] s:w-[49px] s:h-[20px]">
                  <a className="bg-[#66C2A9]" href="#about">
                    About Me
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            id="about"
            className="about xl:pl-[101px] xl:pt-[236px] lg:pl-[67px] lg:pt-[187px] md:pl-[59px] md:pt-[165px] sm:pl-[19px] sm:pt-[88px] xs:pl-[14px] xs:pt-[78px] s:pl-[21px] s:pt-[60px]"
          >
            <div
              ref={ref1}
              className={`flex justify-center xl:gap-[94px] lg:gap-[42px] md:gap-[33px] sm:gap-[24px] xs:gap-[20px] s:gap-[15px] transition-opacity ease-in duration-700 ${
                isVisible1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid place-content-center">
                <img className="xl:w-[1000px]" src={pict} alt="" />
              </div>
              <div>
                <div className="flex font-bold gap-[10px] sm:gap-[5px] xl:text-[60px] lg:text-[42px] md:text-[34px] sm:text-[22px] xs:text-[18px] s:text-[16px] s:gap-[5px]">
                  <div className="text-white">ABOUT</div>
                  <div className="text-[#66C2A9]">ME</div>
                </div>
                <div>
                  <div className="text text-white font-light xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[10px] xs:text-[8px] s:text-[7px]">
                    <p className="pt-[15px] sm:pt-[5px] xs:pt-[5px] s:pt-[3px] pb-[5px]">
                      Hello, I am Gilang Pambua. It's a pleasure to meet you
                      here. I am an enthusiast in the world of programming and
                      technology. Starting my journey in the the world of coding
                      a few years ago, I have been felt the magic and power
                      contained within.
                    </p>
                  </div>
                  <div className="text text-white font-light xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[10px] xs:text-[8px] s:text-[7px]">
                    <p className="pt-[15px] sm:pt-[5px] xs:pt-[5px] xs:pt-[3px] xl:pt-[5px] xl:pb-[15px] lg:pt-[5px] lg:pb-[15px] md:pt-[3px] md:pb-[9px] sm:pt-[3px] sm:pb-[7px] xs:pb-[10px] s:pt-[3px] s:pb-[5px]">
                      Through this website, I hope to share knowledge,
                      experience, and inspiration about coding. Let's explore
                      the world of coding together, experiment with the latest
                      technologies, and create innovative solutions to the
                      challenges around us.
                    </p>
                  </div>
                  <div
                    className="content text-white"
                    style={{
                      maxHeight: showMore ? "1000px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.5s ease-in-out",
                    }}
                  >
                    <div className="text text-white font-light xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[10px] xs:text-[8px] s:text-[7px]">
                      <div>
                        <p className="pt-[15px] sm:pt-[5px] xs:pt-[5px] s:pt-[3px] pb-[10px]">
                          My area of interest is software development software
                          and web application development. I enjoy the challenge
                          of solving problems, designing robust architectures,
                          and creating engaging user experiences through code.
                          Every coding project I take on is an opportunity to
                          continue learning and grow, and make a positive
                          contribution to the the tech community.
                        </p>
                      </div>
                      <div>
                        <p className="pt-[15px] sm:pt-[5px] xs:pt-[5px] s:pt-[3px] pb-[10px]">
                          Thank you for your visit, and let's start our our
                          coding adventure together!
                        </p>
                      </div>
                      <div>
                        <p className="pt-[15px] sm:pt-[5px] xs:pt-[5px] s:pt-[3px] pb-[10px]">
                          Regards, Gilang Pambua
                        </p>
                      </div>
                    </div>
                  </div>

                  {!showMore && (
                    <div className="after:h-px flex items-center before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-white after:content-['']">
                      <button
                        onClick={handleToggleContent}
                        type="button"
                        className="xl:w-[150px] xl:h-[50px] xl:rounded-[25px] lg:w-[100px] lg:h-[40px] lg:rounded-[20px] md:w-[80px] md:h-[30px] md:rounded-[15px] sm:w-[65px] sm:h-[25px] sm:rounded-[10px] xs:w-[55px] xs:h-[20px] xs:rounded-[8px] s:w-[50px] s:h-[18px] s:rounded-[8px] justify-center xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[10px] xs:text-[8px] s:text-[7px] transition duration-300 ease-in-out transform hover:scale-110 flex items-center border border-gray-300 bg-secondary-50 text-center text-sm text-white hover:bg-[#66C2A9] hover:text-black hover:border-[#66C2A9]"
                      >
                        View More
                      </button>
                    </div>
                  )}

                  {showMore && (
                    <div className="after:h-px flex items-center before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-white after:content-['']">
                      <button
                        onClick={handleToggleContent}
                        type="button"
                        className="xl:w-[150px] xl:h-[50px] xl:rounded-[25px] lg:w-[100px] lg:h-[40px] lg:rounded-[20px] md:w-[80px] md:h-[30px] md:rounded-[15px] sm:w-[65px] sm:h-[25px] sm:rounded-[10px] xs:w-[55px] xs:h-[20px] xs:rounded-[8px] s:w-[50px] s:h-[18px] s:rounded-[8px] justify-center xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[10px] xs:text-[8px] s:text-[7px] transition duration-300 ease-in-out transform hover:scale-110 flex items-center border border-gray-300 bg-secondary-50 text-center text-sm font-medium text-white hover:bg-[#66C2A9] hover:text-black hover:border-[#66C2A9]"
                      >
                        View Less
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex xl:pt-[25px] lg:pt-[20px] md:pt-[15px] sm:pt-[8px] xs:pt-[5px] s:pt-[3px] s:gap-[8px] xs:gap-[10px] sm:gap-[10px] md:gap-[15px] lg:gap-[20px] xl:gap-[20px]">
                  <div className="button-me ">
                    <button className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-black bg-[#66C2A9] text-white rounded xl:text-[20px] xl:w-[90px] xl:h-[50px] lg:text-[17px] lg:w-[76px] lg:h-[40px] md:text-[14px] md:w-[70px] md:h-[31px] sm:text-[11px] sm:w-[45px] sm:h-[25px] xs:text-[9px] xs:w-[40px] xs:h-[20px] s:text-[8px] s:w-[35px] s:h-[20px]">
                      <a className="bg-[#66C2A9]" href="" target="_blank">
                        My CV
                      </a>
                    </button>
                  </div>
                  <div className="button-me">
                    <button className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-black bg-[#66C2A9] text-white rounded xl:text-[20px] xl:w-[135px] xl:h-[50px] lg:text-[17px] lg:w-[113px] lg:h-[40px] md:text-[14px] md:w-[100px] md:h-[31px] sm:text-[11px] sm:w-[75px] sm:h-[25px] xs:text-[9px] xs:w-[65px] xs:h-[20px] s:text-[8px] s:w-[55px] s:h-[20px]">
                      <a className="bg-[#66C2A9]" href="#contact">
                        Contact Me
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={ref2}
            id="portofolio"
            className={`portofolio xl:pl-[101px] xl:py-[280px] lg:pl-[67px] lg:py-[230px] md:pl-[59px] md:py-[180px] sm:pl-[19px] sm:py-[90px] xs:pl-[14px] xs:py-[80px] s:pl-[21px] s:py-[70px] transition-opacity ease-in duration-700 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="font-bold flex gap-[15px] sm:gap-[5px] s:gap-[5px] xl:text-[48px] lg:text-[40px] md:text-[32px] sm:text-[20px] xs:text-[16px] s:text-[14px]">
              <div className="text-white">PORTO</div>
              <div className="text-[#66C2A9]">FOLIO</div>
            </div>
            <div className="">
              <div className="pt-[15px] sm:pt-[5px] xs:pt-[2px] s:pt-[2px]">
                <div className="w-[100%] h-[5px] bg-[#66C2A9] sm:h-[3px] xs:h-[2px] s:h-[1.5px]"></div>
              </div>
              <div className="pt-[10px] sm:pt-[5px] xs:pt-[5px] s:pt-[4px]">
                <div className="w-[50%] h-[3px] bg-[#66C2A9] sm:h-[1px] xs:h-[1px] s:h-[1px]"></div>
              </div>
            </div>
            <div>
              <div className="font-bold text-white pt-[10px] text-[15px] xl:text-[25px] lg:text-[20px] md:text-[10px] sm:text-[8px] sm:pt-[5px] xs:text-[8px] xs:pt-[5px] s:text-[8px] s:pt-[5px]">
                Project In Progress
              </div>
            </div>
          </div>
          <div
            id="contact"
            className="contact_me xl:py-[76px] lg:py-[100px] md:py-[84px] sm:py-[60px] xs:py-[60px] s:py-[50px]"
          >
            <div
              ref={ref3}
              className={`xl:flex xl:justify-center xl:gap-[63px] lg:gap-[61px] lg:flex lg:justify-center md:flex md:justify-center md:gap-[34px] sm:grid sm:justify-center xs:grid xs:justify-center s:grid s:justify-center transition-opacity ease-out duration-700 ${
                isVisible3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="left-contact">
                <div className="text-[#66C2A9] font-bold pb-[15px] xl:text-[48px] lg:text-[40px] md:text-[32px] sm:text-[20px] xs:text-[16px] s:text-[14px]">
                  CONTACT
                </div>
                <div className="bg-[#172321] xl:pt-[33px] xl:pl-[35px] xl:pb-[29px] xl:pr-[80px] xl:w-[508px] xl:h-[440px] lg:pt-[20px] lg:pl-[20px] lg:pb-[17px] lg:pr-[37px] lg:w-[308px] lg:h-[335px] md:pt-[18px] md:pl-[25px] md:pb-[14px] md:pr-[33px] md:w-[260px] md:h-[320px] sm:w-[324px] sm:h-[225px] sm:pt-[12px] sm:pl-[23px] sm:pb-[21px] sm:pr-[82px] xs:w-[275px] xs:h-[186px] xs:pt-[12px] xs:pl-[19px] xs:pb-[11px] xs:pr-[53px] s:w-[275px] s:h-[180px] s:pt-[12px] s:pl-[19px] s:pb-[11px] s:pr-[19px]">
                  <div className="font-bold text-[#ADC9C1] bg-[#172321] xl:text-[24px] xl:pb-[40px] xl:pr-[50px] lg:text-[16px] lg:pb-[35px] md:text-[14px] md:pb-[30px] sm:text-[12px] sm:pb-[15px] xs:text-[10px] xs:pb-[25px] s:text-[10px] s:pb-[20px]">
                    Let’s make something more visual and creative
                  </div>
                  <div className="grid gap-[8px] bg-[#172321]">
                    <div className="font-bold">
                      <div className="text-[#66C2A9] bg-[#172321] xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px] s:text-[8px]">
                        Phone
                      </div>
                      <div className="text-[#9CA3AF] bg-[#172321] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[8px] s:text-[6px]">
                        +62-8534-1890-386
                      </div>
                    </div>
                    <div className="bg-[#172321] lg:text-[12px] font-bold">
                      <div className="font-bold text-[#66C2A9] bg-[#172321] xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px] s:text-[8px]">
                        Email
                      </div>
                      <div className="text-[#9CA3AF] bg-[#172321] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[8px] s:text-[6px]">
                        gilang.pambua@gmail.com
                      </div>
                    </div>
                    <div className="bg-[#172321] flex xl:gap-[21px] xl:pt-[100px] lg:gap-[20px] lg:pt-[80px] md:gap-[15px] md:pt-[90px] sm:gap-[11px] sm:pt-[41px] xs:gap-[8px] xs:pt-[25px] s:gap-[8px] s:pt-[25px]">
                      <div className="transition duration-300 ease-in-out transform hover:scale-110 bg-[#172321] grid place-content-center xl:w-[35px] lg:w-[30px] md:w-[25px] sm:w-[20px] xs:w-[15px] s:w-[15px]">
                        <a
                          href="https://www.instagram.com/gilangpambua._/"
                          target="_blank"
                        >
                          <img className="bg-[#172321] " src={ig} alt="" />
                        </a>
                      </div>
                      <div className="transition duration-300 ease-in-out transform hover:scale-110 bg-[#172321] grid place-content-center xl:w-[35px] lg:w-[30px] md:w-[25px] sm:w-[20px] xs:w-[15px] s:w-[15px]">
                        <a
                          href="https://www.linkedin.com/in/gilangpambua/"
                          target="_blank"
                        >
                          <img className="bg-[#172321]" src={li} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-contact sm:pt-[22px] xs:pt-[22px] s:pt-[18px]">
                <div className="bg-[#172321] xl:px-[28px] xl:w-[532px] xl:h-[505px] lg:px-[25px] lg:w-[371px] lg:h-[390px] md:px-[20px] md:w-[294px] md:h-[360px] sm:px-[22px] sm:w-[324px] sm:h-[300px] xs:px-[19px] xs:w-[275px] xs:h-[260px] s:px-[18px] s:w-[275px] s:h-[210px]">
                  <div className="font-bold text-[#ADC9C1] bg-[#172321] xl:text-[20px] xl:py-[30px] xl:pr-[70px] lg:text-[16px] lg:py-[21px] lg:pr-[20px] md:text-[14px] md:py-[21px] md:pr-[20px] sm:text-[12px] sm:py-[21px] xs:text-[10px] xs:py-[21px] s:text-[8px] s:py-[18px]">
                    feel free to contact with me and i will get back to you as
                    soon as possible
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="font-bold grid bg-[#172321] xl:text-[20px] xl:gap-[45px] lg:text-[16px] lg:gap-[35px] md:text-[14px] md:gap-[30px] sm:text-[12px] sm:gap-[25px] xs:text-[10px] xs:gap-[20px] s:text-[8px] s:gap-[15px]">
                      <div className="bg-[#172321]">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                          className="w-[100%] text-[#66C2A9] bg-transparent border-b border-[#9CA3AF] focus:border-[#66C2A9] outline-none placeholder-[#9CA3AF]::placeholder"
                        />
                      </div>
                      <div className="bg-[#172321]">
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="w-[100%] text-[#66C2A9] bg-transparent border-b border-[#9CA3AF] focus:border-[#66C2A9] outline-none placeholder-[#9CA3AF]::placeholder"
                        />
                      </div>
                      <div className="bg-[#172321]">
                        <input
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="Subject"
                          className="w-[100%] text-[#66C2A9] bg-transparent border-b border-[#9CA3AF] focus:border-[#66C2A9] outline-none placeholder-[#9CA3AF]::placeholder"
                        />
                      </div>
                      <div className="bg-[#172321]">
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Message"
                          className="w-[100%] text-[#66C2A9] bg-transparent border-b border-[#9CA3AF] focus:border-[#66C2A9] outline-none placeholder-[#9CA3AF]::placeholder"
                        />
                      </div>
                      <div className="font-bold bg-[#172321] button-me flex justify-end xl:text-[20px] lg:text-[16px] md:text-[14px] xs:text-[12px] s:text-[12px]">
                        <button
                          type="submit"
                          className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-white bg-[#66C2A9] text-[#172321] rounded-lg xl:w-[120px] xl:h-[48px] lg:w-[104px] lg:h-[33px] md:w-[74px] md:h-[28px] sm:w-[69px] sm:h-[24px] xs:w-[53px] xs:h-[24px] s:w-[53px] s:h-[24px]"
                        >
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer s:pt-[30px]">
        <div className="bg-[#172321] xl:py-[50px] lg:py-[45px] md:py-[40px] sm:py-[25px] xs:py-[20px] s:py-[15px]">
          <div className="w-[100%] bg-[#172321]">
            <div className="font-bold text-[#9CA3AF] xl:flex xl:justify-center lg:flex lg:justify-center md:flex md:justify-center bg-[#172321] xl:gap-[472px] lg:gap-[151px] md:gap-[44px] sm:grid sm:justify-left sm:pl-[27px] xs:grid xs:justify-left xs:pl-[24px] s:grid s:justifu-left s:pl-[20px]">
              <div className="bg-[#172321] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[8px] sm:col-span-2 xs:text-[8px] xs:col-span-2 s:text-[6px] s:col-span-2">
                Upss! You Scroll It Too Far, Scroll Up To See My Project
              </div>
              <div className="bg-[#172321] flex gap-[10px] sm:gap-[5px] sm:pt-[5px] xs:gap-[4px] xs:pt-[5px] s:pt-[5px]">
                <div className="bg-[#172321] grid place-content-center w-[8px] xl:w-[20px] lg:w-[20px] md:w-[15px] sm:w-[10px] xs:w-[8px] s:w-[7px]">
                  <img src={cc} alt="" />
                </div>
                <div className="bg-[#172321] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[8px] xs:text-[8px] s:text-[6px]">
                  Created By Gilang Pappa’ Tanto Pambua
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
