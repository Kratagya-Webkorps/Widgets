import { ProductWidget, UPDATE_WIDGET } from '../../interfaces';

export interface UpdateWidgetAction {
  type: typeof UPDATE_WIDGET;
  payload: {
    id: number;
    settings: Partial<ProductWidget>;
  };
}

export const updateWidget = (id: number, settings: Partial<ProductWidget>): any => ({
  type: UPDATE_WIDGET,
  payload: { id, settings },
});

export type WidgetActionTypes = UpdateWidgetAction;
