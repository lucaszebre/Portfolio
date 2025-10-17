import * as Common from "./common";
import * as EN from "./en";
import * as FR from "./fr";

type ProjectType = {
  id: string;
  readme: {
    en: string;
    fr: string;
  };
  demo?: string;
  image: string;
  alt: string;
  tags: string[];
  name: string;
  code?: string;
  frontendCode?: string;
  backendCode?: string;
};

const createProject = (
  common: (typeof Common)[keyof typeof Common],
  readmeEn: string,
  readmeFr: string
): ProjectType => ({
  ...common,
  readme: {
    en: readmeEn,
    fr: readmeFr,
  },
});

export const PROJECT_GUESSWHAT = createProject(
  Common.GUESSWHAT_COMMON,
  EN.GUESSWHAT_EN,
  FR.GUESSWHAT_FR
);
export const PROJECT_CHATPET = createProject(
  Common.CHATPET_COMMON,
  EN.CHATPET_EN,
  FR.CHATPET_FR
);
export const PROJECT_LETTEREASY = createProject(
  Common.LETTEREASY_COMMON,
  EN.LETTEREASY_EN,
  FR.LETTEREASY_FR
);
export const PROJECT_PREVIOUSLY_ON = createProject(
  Common.PREVIOUSLY_ON_COMMON,
  EN.PREVIOUSLY_ON_EN,
  FR.PREVIOUSLY_ON_FR
);
export const PROJECT_INSTAGRAM_CLONE = createProject(
  Common.INSTAGRAM_CLONE_COMMON,
  EN.INSTAGRAM_CLONE_EN,
  FR.INSTAGRAM_CLONE_FR
);
export const PROJECT_TWITTER_CLONE = createProject(
  Common.TWITTER_CLONE_COMMON,
  EN.TWITTER_CLONE_EN,
  FR.TWITTER_CLONE_FR
);
export const PROJECT_KANBAN_TASK_MANAGER = createProject(
  Common.KANBAN_TASK_MANAGER_COMMON,
  EN.KANBAN_TASK_MANAGER_EN,
  FR.KANBAN_TASK_MANAGER_FR
);
export const PROJECT_LINK_DEV = createProject(
  Common.LINK_DEV_COMMON,
  EN.LINK_DEV_EN,
  FR.LINK_DEV_FR
);
export const PROJECT_INVOICE_APP = createProject(
  Common.INVOICE_APP_COMMON,
  EN.INVOICE_APP_EN,
  FR.INVOICE_APP_FR
);
export const PROJECT_AUDIOPHILE = createProject(
  Common.AUDIOPHILE_COMMON,
  EN.AUDIOPHILE_EN,
  FR.AUDIOPHILE_FR
);
export const PROJECT_DESIGNO = createProject(
  Common.DESIGNO_COMMON,
  EN.DESIGNO_EN,
  FR.DESIGNO_FR
);
export const PROJECT_ART_GALLERY = createProject(
  Common.ART_GALLERY_COMMON,
  EN.ART_GALLERY_EN,
  FR.ART_GALLERY_FR
);

export const ALL_PROJECTS: ProjectType[] = [
  // PROJECT_GUESSWHAT,
  PROJECT_KANBAN_TASK_MANAGER,

  PROJECT_CHATPET,
  PROJECT_INSTAGRAM_CLONE,

  // PROJECT_LETTEREASY,
  PROJECT_PREVIOUSLY_ON,
  PROJECT_TWITTER_CLONE,
  PROJECT_LINK_DEV,
  PROJECT_INVOICE_APP,
  PROJECT_AUDIOPHILE,
  PROJECT_DESIGNO,
  PROJECT_ART_GALLERY,
];

// Backward compatibility - deprecated
export const ALL_PROJECT_ENGLISH = ALL_PROJECTS;
