import styles from '../../styles/Hero.module.scss';
import { HERO_SLIDES } from '../../data/heroData';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { EffectFade } from 'swiper';
import Image from 'next/legacy/image';
import Button from '../button/Button';

export const Hero = (props) => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <div className={styles.hero}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        speed={500}
        loop={true}
        modules={[EffectFade]}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div key={index}>
            <SwiperSlide key={slide.id}>
              <Image
                src={slide.bgImg}
                alt="banner"
                blurDataURL={slide.bgImg}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
              {/* <div
                className={styles.hero__slide}
                style={{
                  backgroundImage: `url(${slide.bgImg})`,
                  backgroundSize: 'cover',
                  height: '100%',
                  backgroundPosition: 'center',
                }}
              > */}
              {/* <Image
                  src={slide.bgImg}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                  alt="banner background"
                /> */}
              <div className={styles['hero__slide--text']}>
                <h1>{slide.title}</h1>
                <Button>Shop Now</Button>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
