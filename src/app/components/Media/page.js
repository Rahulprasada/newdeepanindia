"use client";

import { useState, useEffect } from "react";
import {
  Play,
  ArrowRight,
  Building2,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import styles from "./MediaContent.module.css";
import Container from "@mui/material/Container";
const fallbackData = [
  {
    subTitle: "Case Study 1",
    title: "How ABC Corp Transformed Finance",
    description:
      "ABC Corp used our platform to automate financial workflows and cut costs by 30%. Their journey from manual processes to full automation showcases the power of modern fintech solutions.",
    icon: Building2,
    url: "https://youtu.be/vnf2IzRmPwI?si=JowdXW676dJpOBmV",
    metrics: { savings: "30%", time: "60%" },
  },
  // {
  //   subTitle: "Case Study 2",
  //   title: "Scaling Fund Management at XYZ Ltd.",
  //   description:
  //     "XYZ Ltd. improved fund transparency and reduced errors using our analytics suite. Real-time insights transformed their decision-making process completely.",
  //   icon: TrendingUp,
  //   url: "https://youtu.be/vnf2IzRmPwI?si=JowdXW676dJpOBmV",
  //   metrics: { accuracy: "95%", efficiency: "40%" },
  // },
  // {
  //   subTitle: "Case Study 3",
  //   title: "Real-Time Insights for PQR Finance",
  //   description:
  //     "PQR Finance achieved real-time insights and faster decision making with our dashboards. Data visualization became their competitive advantage.",
  //   icon: BarChart3,
  //   url: "https://youtu.be/vnf2IzRmPwI?si=JowdXW676dJpOBmV",
  //   metrics: { speed: "75%", insights: "50%" },
  // },
];

const MediaContent = ({ data }) => {
  const caseStudyData = data?.caseStudyData?.length
    ? data.caseStudyData
    : fallbackData;
  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (caseStudyData.length) {
      setProgress(new Array(caseStudyData.length).fill(0));
    }
  }, [caseStudyData.length]);

  useEffect(() => {
    if (!caseStudyData.length || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[slideIndex] += 2;

        if (newProgress[slideIndex] >= 100) {
          const resetProgress = new Array(caseStudyData.length).fill(0);
          const nextIndex = (slideIndex + 1) % caseStudyData.length;
          setSlideIndex(nextIndex);
          return resetProgress;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [slideIndex, caseStudyData.length, isPlaying]);

  const handleProgressClick = (index) => {
    setSlideIndex(index);
    setProgress(new Array(caseStudyData.length).fill(0));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="media" className={styles.styledSection}>
      <Container maxWidth={"lg"}>
        <div className={styles.container}>
          <div className={styles.headerSection}>
            <h1 className={styles.mainTitle}>Finance Leaders Trust Us</h1>
            <p className={styles.subtitle}>
              Discover how industry leaders transformed their operations
            </p>
          </div>

          <div className={styles.sliderContainer}>
            {caseStudyData.map((item, index) => {
              const IconComponent = item.icon || Building2;
              return (
                <div
                  key={index}
                  className={`${styles.slide} ${
                    index === slideIndex ? styles.active : ""
                  }`}
                >
                  <div className={styles.slideContent}>
                    <div className={styles.visualSection}>
                      <div className={styles.videoBox}>
                        <iframe
                          src="https://www.youtube.com/embed/vnf2IzRmPwI"
                          title="YouTube Video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          width="100%"
                          height="315"
                        ></iframe>
                      </div>
                    </div>
                    <div className={styles.contentSection}>
                      <div className={styles.iconWrapper}>
                        <IconComponent size={48} />
                      </div>
                      <div className={styles.textContent}>
                        <span className={styles.subTitle}>{item.subTitle}</span>
                        <h2 className={styles.title}>{item.title}</h2>
                        <p className={styles.description}>{item.description}</p>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.actionButton}
                        >
                          <Play size={16} />
                          Watch Case Study
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.controlsContainer}>
            <div className={styles.progressContainer}>
              {progress.map((value, index) => (
                <div
                  key={index}
                  className={`${styles.progressBar} ${
                    index === slideIndex ? styles.active : ""
                  }`}
                  onClick={() => handleProgressClick(index)}
                  style={{
                    "--progress": `${index === slideIndex ? value : 0}%`,
                  }}
                />
              ))}
            </div>

            <button
              className={styles.playPauseButton}
              onClick={togglePlayPause}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MediaContent;
