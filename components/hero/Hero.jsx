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
          autoplayDisableOnInteraction: false,
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
                alt={slide.alt}
                blurDataURL={slide.bgImg}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
              <div className={styles['hero__slide--text']}>
                <h2
                  style={{
                    color: slide.color,
                    WebkitTextStroke: slide.outline,
                    fontWeight: slide.fontWeight,
                    width: slide.textWidth,
                    fontFamily: slide.font,
                    fontSize: slide.size,
                    lineHeight: slide.line,
                  }}
                >
                  {slide.title}
                </h2>
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <Button>Shop Now</Button>
                </a>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
