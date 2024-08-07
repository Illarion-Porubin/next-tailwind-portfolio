import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Мои проекты
      </h1>
      <div className="grid grid-cols-1 md:flex-row gap-10 px-10 z-20 sm:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          link="https://react-test-bothub.netlify.app/"
          src="/BotChat-min.png"
          title="Чат-бот"
          description="Это web приложение на Next.js, в котором подключен чат-бот Gemini. Вы можете с ним пообщаться на интересующие вас темы."
        />
        <ProjectCard
          link="https://illarion-porubin.github.io/react-pizza-mockapi-v2/"
          src="/Pizza-min.png"
          title="Пицерия"
          description="Этот проект посвящен онлайн-пиццерии. Здесь вы можете ознакомиться с ассортиментом и выбрать желаемую пиццу."
        />
        <ProjectCard
          link="https://illarion-porubin.github.io/react-online-kitchen/"
          src="/OnlineKitchen-min.png"
          title="Онлайн рецепты"
          description="Здесь собрано множество рецептов из разных стран, и вы можете прочитать их или посмотреть на Youtube."
        />
        <ProjectCard
          link="https://illarion-porubin.github.io/react-book-app/"
          src="/VirtualLibrary-min.png"
          title="Виртуальная библиотека"
          description="Онлайн-библиотека с большим количеством книг, где вы можете найти интересующую вас книгу и узнать о ней что-нибудь интересное."
        />
        <ProjectCard
          link="https://illarion-porubin.github.io/landing__go-surf/app/index.html"
          src="/Goserf-min.png"
          title="Тур по серфингу"
          description="Этот проект посвящен туру по серфингу, если хотите узнать где самые лучшие пляжи и самые большие волны, то переходите по ссылке."
        />
        <ProjectCard
          link="https://illarion-porubin.github.io/landing__activebox/"
          src="/Studio-min.png"
          title="Студия"
          description="Landing page — «посадочная страница». Макет посвящен студии, будь-то дизайн, веб или что ещё. Это небольшой проект с интересным дизайном."
        />
      </div>
    </div>
  );
};

export default Projects;
