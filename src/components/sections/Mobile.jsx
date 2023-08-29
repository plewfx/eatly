import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';

const Mobile = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    
    function getCurrentDimension(){
      return {
            width: window.innerWidth,
            height: window.innerHeight
      }
    }
    
    useEffect(() => {
          const updateDimension = () => {
                setScreenSize(getCurrentDimension())
          }
          window.addEventListener('resize', updateDimension);
    
      
          return(() => {
              window.removeEventListener('resize', updateDimension);
          })
    }, [screenSize])

    return (
        <section className="mobile">
            <div className="container">
                <div className="mobile__image">
                    <div className="mobile__image-frame" data-aos='fade-right' data-aos-delay='100'>
                        <div data-aos='fade-right' data-aos-delay='100' className="mobile__image-screen"></div>
                    </div>
                    <svg data-aos='fade-up-left' data-aos-delay='200' xmlns="http:/www.w3.org/2000/svg" width="56" height="62" viewBox="0 0 56 62" fill="none">
                        <path d="M29.4019 8.28731C19.9957 12.6113 11.1774 17.9211 2.00004 22.6496" stroke="#6C5FBC" strokeWidth="2.65" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M54.464 22.7004C37.6407 24.3888 20.7416 27.9376 4.39179 32.1357" stroke="#6C5FBC" strokeWidth="2.65" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M42.9382 49.8177C32.2122 45.3954 15.3032 43.8755 3.42795 42.0809" stroke="#6C5FBC" strokeWidth="2.65" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                {
                    screenSize.width < 700 ?
                    <div data-aos='fade-right' data-aos-delay='100' className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="113" viewBox="0 0 33 113" fill="none">
                            <path d="M14.3671 112.524C14.7548 112.805 15.2972 112.719 15.5786 112.331C15.86 111.943 15.7737 111.401 15.386 111.12L14.3671 112.524ZM1.35203 84.7117L0.495201 84.5765L1.35203 84.7117ZM22.9094 64.6606L22.6489 65.488L22.9094 64.6606ZM29.404 74.8581L28.5622 74.6486L29.404 74.8581ZM20.4188 80.5439L20.3896 79.6769L20.4188 80.5439ZM5.22039 52.6983L4.37077 52.5235L5.22039 52.6983ZM26.4885 34.9631L26.2691 35.8023L26.4885 34.9631ZM31.6032 42.4744L30.7375 42.4189L31.6032 42.4744ZM8.62625 17.3042L9.42773 17.6359L8.62625 17.3042ZM27.1419 1.65274L27.8851 2.10004C28.0483 1.82889 28.0509 1.49039 27.8918 1.21679C27.7328 0.94319 27.4373 0.777919 27.121 0.785562L27.1419 1.65274ZM22.2737 8.05919C22.0267 8.46966 22.1592 9.00266 22.5696 9.2497C22.9801 9.49673 23.5131 9.36425 23.7602 8.95379L22.2737 8.05919ZM18.7234 0.988392C18.2444 0.99996 17.8656 1.39758 17.8771 1.87651C17.8887 2.35544 18.2863 2.73431 18.7653 2.72274L18.7234 0.988392ZM14.8765 111.822C15.386 111.12 15.3862 111.12 15.3863 111.12C15.3863 111.12 15.3863 111.12 15.3862 111.12C15.3861 111.12 15.3857 111.119 15.385 111.119C15.3838 111.118 15.3815 111.116 15.3784 111.114C15.372 111.109 15.3619 111.102 15.3482 111.092C15.3208 111.071 15.2788 111.04 15.2235 110.998C15.1127 110.913 14.9483 110.786 14.7384 110.617C14.3187 110.28 13.7181 109.778 13.0031 109.127C11.5718 107.823 9.69013 105.927 7.88598 103.56C4.26498 98.8096 1.03755 92.2708 2.20886 84.8469L0.495201 84.5765C-0.781975 92.6714 2.75284 99.6876 6.50621 104.612C8.38924 107.083 10.3478 109.055 11.8349 110.409C12.5792 111.087 13.2073 111.612 13.6515 111.969C13.8737 112.148 14.05 112.285 14.172 112.378C14.233 112.424 14.2805 112.46 14.3134 112.484C14.3298 112.496 14.3426 112.506 14.3516 112.512C14.3561 112.516 14.3596 112.518 14.3622 112.52C14.3635 112.521 14.3646 112.522 14.3654 112.522C14.3658 112.523 14.3662 112.523 14.3664 112.523C14.3668 112.523 14.3671 112.524 14.8765 111.822ZM2.20886 84.8469C3.1236 79.0492 6.05511 73.4602 9.88714 69.7013C13.729 65.9328 18.3266 64.1271 22.6489 65.488L23.1699 63.8332C18.0031 62.2064 12.7653 64.4479 8.67229 68.4628C4.56953 72.4873 1.46692 78.4177 0.495201 84.5765L2.20886 84.8469ZM22.6489 65.488C23.9156 65.8868 25.7164 67.0476 27.04 68.7205C28.3511 70.3775 29.1146 72.4285 28.5622 74.6486L30.2458 75.0675C30.9666 72.1701 29.931 69.5784 28.4005 67.644C26.8826 65.7256 24.7994 64.3463 23.1699 63.8332L22.6489 65.488ZM28.5622 74.6486C28.0399 76.748 26.7533 77.9558 25.2245 78.6752C23.6615 79.4107 21.8518 79.6277 20.3896 79.6769L20.448 81.4108C21.9979 81.3586 24.0847 81.1289 25.9632 80.2449C27.8759 79.3449 29.5758 77.7605 30.2458 75.0675L28.5622 74.6486ZM20.3896 79.6769C14.5611 79.8732 10.3923 76.304 7.94181 71.0335C5.48287 65.7448 4.83581 58.8695 6.07001 52.8732L4.37077 52.5235C3.0695 58.8456 3.73691 66.1045 6.36868 71.7649C9.00888 77.4434 13.707 81.6378 20.448 81.4108L20.3896 79.6769ZM6.07001 52.8732C7.12856 47.7303 9.75073 42.7826 13.3371 39.4697C16.9087 36.1704 21.3864 34.5255 26.2691 35.8023L26.708 34.1239C21.1279 32.6646 16.0617 34.591 12.1599 38.1953C8.273 41.7859 5.49246 47.0738 4.37077 52.5235L6.07001 52.8732ZM26.2691 35.8023C27.8004 36.2028 28.9545 36.9756 29.7048 38.0475C30.4565 39.1216 30.8559 40.572 30.7375 42.4189L32.4688 42.5299C32.6071 40.3725 32.147 38.5113 31.1261 37.0527C30.1038 35.5921 28.5722 34.6114 26.708 34.1239L26.2691 35.8023ZM30.7375 42.4189C30.6292 44.1077 29.9039 45.2672 28.7924 46.0846C27.646 46.9277 26.0438 47.436 24.1793 47.6698L24.3951 49.3912C26.4106 49.1385 28.3413 48.5699 29.8203 47.4822C31.3342 46.3689 32.3269 44.7436 32.4688 42.5299L30.7375 42.4189ZM24.1793 47.6698C17.9349 48.4527 13.1189 43.9294 10.383 37.4652C7.65371 31.0165 7.19527 23.0295 9.42773 17.6359L7.82476 16.9724C5.37218 22.8978 5.92337 31.3791 8.78537 38.1414C11.6408 44.8882 16.9978 50.3186 24.3951 49.3912L24.1793 47.6698ZM9.42773 17.6359C11.1607 13.4492 15.5946 9.65786 19.7469 6.86686C21.8011 5.48613 23.7444 4.37756 25.1744 3.61418C25.8889 3.23278 26.4739 2.93828 26.8789 2.73977C27.0814 2.64053 27.2388 2.56533 27.3447 2.51531C27.3977 2.4903 27.4378 2.47159 27.4643 2.45932C27.4775 2.45318 27.4873 2.44865 27.4936 2.44575C27.4967 2.4443 27.499 2.44327 27.5004 2.44263C27.5011 2.44232 27.5016 2.4421 27.5018 2.44199C27.5019 2.44194 27.5019 2.44193 27.502 2.4419C27.502 2.44192 27.5019 2.44196 27.1419 1.65274C26.782 0.863518 26.7818 0.863616 26.7815 0.863736C26.7813 0.863809 26.781 0.863959 26.7807 0.864111C26.78 0.864408 26.7791 0.864816 26.778 0.86532C26.7758 0.866334 26.7727 0.867769 26.7687 0.869604C26.7607 0.873281 26.7492 0.878592 26.7342 0.885534C26.7043 0.899411 26.6606 0.919783 26.604 0.946512C26.4908 0.999955 26.3258 1.07883 26.1154 1.18198C25.6945 1.38827 25.0915 1.69187 24.3575 2.08373C22.8904 2.86687 20.8942 4.0054 18.7791 5.42702C14.593 8.24073 9.76904 12.2751 7.82476 16.9724L9.42773 17.6359ZM26.3987 1.20544L22.2737 8.05919L23.7602 8.95379L27.8851 2.10004L26.3987 1.20544ZM27.121 0.785562L18.7234 0.988392L18.7653 2.72274L27.1629 2.51992L27.121 0.785562Z" fill="#6C5FBC"/>
                        </svg>
                    </div> : 
                    null
                }
                <div className="mobile__content">
                    <div className="mobile__text">
                        <h2 data-aos='fade-up' data-aos-delay='100'>Premium <span>Quality</span><br />For Your Health</h2>
                        <ul className="mobile__list">
                            <li>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                            <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                        </ul>
                    </div>
                    <Link className="button__simple" to='https:/www.play.google.com'>
                        Download
                        <svg xmlns="http:/www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.70605 10.0762H15.946" stroke="white" strokeWidth="1.6055" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3242 4.4574L15.9442 10.0774L10.3242 15.6973" stroke="white" strokeWidth="1.6055" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Mobile