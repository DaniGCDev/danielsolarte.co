import ProjectCategory from "@enums/project-category.enum";

interface IProject {
  best: boolean;
  category: ProjectCategory[] | ProjectCategory;
  date: Date;
  images: StaticImageData[];
  key: string;
  links: { key: string, url: string }[];
  principal_image?: StaticImageData;
  showDay?: boolean;
}

export default IProject;
