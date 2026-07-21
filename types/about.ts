export interface About {
  id: string;

  hero_title: string;
  hero_subtitle: string;
  hero_image: string | null;

  story_title: string;
  story_description: string;
  story_image: string | null;

  vision_title: string;
  vision_description: string;
  vision_image: string | null;

  mission_title: string;
  mission_description: string;
  mission_image: string | null;

  cta_title: string;
  cta_description: string;
  cta_button: string;
  cta_link: string;
}