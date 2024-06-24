
import { Section } from 'shared/features/Section';
import second_banner from 'assets/images/baikal_main1.png';
import third_banner from 'assets/images/baikal_main2.png';

export const mockSections: Section[] = [
  {
    id: 1,
    pre_title: 'УЗНАТЬ О БАЙКАЛЕ',
    title: 'Озеро Байкал',
    cover_image: second_banner,
    content: `Озеро Байкал – это настоящая сокровищница природы. Его воды являются одними из самых чистых и прозрачных
              на Земле, а берега украшены величественными горами, пышными лесами и бескрайними степями. Байкал
              известен также своим удивительным разнообразием флоры и фауны. Здесь можно встретить множество уникальных
              видов растений и животных, в том числе и тех, которые не встречаются больше нигде на планете. Озеро Байкал
              также является местом миграции для многих видов птиц, что делает его настоящим райским уголком для
              фотографов дикой природы. Оно расположено в южной части Восточной Сибири и является самым глубоким и
              старым озером на планете. Байкал – это не просто озеро, это уникальный экосистемный комплекс, который
              притягивает внимание ученых и туристов со всего мира.`,
    class_name: 'light_grey',
  },
  {
    id: 2,
    pre_title: 'ЧТО МЫ ДЕЛАЕМ',
    title: 'О проекте',
    cover_image: third_banner,
    content: `Очень часто начинающим путешественникам сложно определиться с направлением, выбором маршрута, возникает
              множество вопросов. Мы постараемся помочь вам в этом.`,
    class_name: 'dark_grey',
    },
    {
      id: 3,
      pre_title: 'ПОЛУЧИТЕ ОТВЕТ НА СВОЙ ВОПРОС',
      title: 'Часто задаваемые вопросы',
    },
    {
      id: 4,
      pre_title: 'ПУТЕШЕСТВУЙТЕ С НАМИ',
      title: 'Популярные направления',
    },
    {
      id: 5,
      pre_title: 'ИНТЕРЕСНЫЕ МЕСТА',
      title: 'Карта Байкала',
    },
    {
      id: 6,
      pre_title: 'А ЗНАЕТЕ ЛИ ВЫ?',
      title: 'Статьи о Байкале',
    },
];
