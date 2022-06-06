import { InteractionComponent } from '../runtime';
import { FisheyeCoordinate } from './coordinate';

export type Interaction =
  | ElementActiveInteraction
  | LegendActiveInteraction
  | TooltipInteraction
  | FisheyeInteraction
  | CustomInteraction;

export type InteractionTypes =
  | 'elementActive'
  | 'legendActive'
  | 'tooltip'
  | 'fisheye'
  | InteractionComponent;

export type ElementActiveInteraction = {
  type?: 'elementActive';
  color?: string;
};

export type LegendActiveInteraction = {
  type?: 'legendActive';
  color?: string;
};

export type TooltipInteraction = {
  type?: 'tooltip';
};

export type FisheyeInteraction = {
  type?: 'fisheye';
} & Omit<FisheyeCoordinate, 'type'>;

export type CustomInteraction = {
  type?: InteractionComponent;
  [key: string]: any;
};
