
import { ProductWidget, UPDATE_WIDGET } from '../../interfaces';

export const updateWidget = (id: number, settings: Partial<ProductWidget>) => ({
  type: UPDATE_WIDGET,
  payload: { id, settings },
});

export const updateActivation = (id: number, active: boolean) => ({
  type: 'UPDATE_ACTIVATION',
  payload: { id, active },
});

export const updateProfileLink = (id: number, linked: boolean) => ({
  type: 'UPDATE_PROFILE_LINK',
  payload: { id, linked },
});

export const updateColor = (id: number, selectedColor: string) => ({
  type: 'UPDATE_COLOR',
  payload: { id, selectedColor },
});
