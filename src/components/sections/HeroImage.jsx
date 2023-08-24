import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
  const labels = ['2D', '3D', '4D', '5D'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
        borderColor: '#6C5FBC',
        backgroundColor: '#6C5FBC',
      },
    ],
  };


const HeroImage = () => {
    return (
        <div className='hero__image'>
            <div className="front">
                <div className="chart box-shadow">
                    <Line data-aos="fade-left" data-aos-delay="700" options={options} data={data} />
                    <svg data-aos="fade-up-left" data-aos-delay="800" xmlns="http:/www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                        <path d="M19.9245 21.7316C21.9827 17.1305 23.5094 12.357 25.354 7.68111" stroke="#685BB8" strokeWidth="1.88444" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.12738 24.4899C11.7471 18.4758 16.7977 11.7559 21.4391 4.97445" stroke="#685BB8" strokeWidth="1.88444" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.64838 10.8639C6.99499 9.0432 13.6751 4.17648 18.5997 1.02489" stroke="#685BB8" strokeWidth="1.88444" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="order box-shadow">
                    <Link to='/eatly/menu' data-aos="fade-right" data-aos-delay="500">
                        <img src="/src/assets/home/food.png" alt="" />
                        <div className="text">
                            <p>Chicken Hell</p>
                            <span>On The Way</span>
                        </div>
                        <span className='time'>3:09 PM</span>
                    </Link>
                    <svg data-aos="fade-up-right" data-aos-delay="600" xmlns="http:/www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20" fill="none">
                        <path d="M3.0438 9.58437C5.6069 6.96733 8.74913 6.53093 11.9362 6.23753C15.9143 5.8713 19.9622 5.72781 23.0411 1.84468" stroke="#685BB8" strokeWidth="1.88444" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.04955 16.9406C4.38514 13.6174 7.78215 11.6536 11.7944 11.2109C13.8938 10.9794 16.0227 11.2099 18.1089 10.8135C22.8086 9.9201 27.1746 7.06715 29.2217 2.65504" stroke="#685BB8" strokeWidth="1.88444" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22.5895 14.0893C21.0333 15.087 19.3446 15.8468 17.4902 16.0647C13.797 16.4986 9.92874 15.9227 7.12467 18.911" stroke="#685BB8" strokeWidth="1.88444" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="back">
                <div className="food-img" data-aos="fade-up" data-aos-delay="300">
                    <img src="/src/assets/home/food.png" alt="" />
                </div>
                <svg data-aos="fade-up" data-aos-delay="700" xmlns="http:/www.w3.org/2000/svg" width="73" height="70" viewBox="0 0 73 70" fill="none">
                    <path d="M51.6734 7.86184C58.1698 17.5858 61.8794 28.6996 58.1294 40.0639C54.7445 50.3215 45.5194 56.3973 34.9256 48.787C29.9107 45.1846 26.6564 37.9143 29.9147 32.5127C33.5447 26.4949 41.6009 31.8263 43.7864 35.9217C48.891 45.487 45.5838 58.3853 34.354 64.2119C21.0553 71.112 15.3318 57.9219 15.4369 57.9188" stroke="#665AB5" strokeWidth="1.88444" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M65.4396 10.6228C64.0711 10.8893 62.73 10.6206 61.3763 10.4139C56.9315 9.73567 52.3867 7.73399 49.6254 4.43303C51.2159 8.66659 51.686 14.6426 48.3004 18.2276" stroke="#665AB5" strokeWidth="1.88444" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default HeroImage