
export type ProductWidgetType = 'carbon' | 'plastic bottles' | 'trees';
export type ProductWidgetAction = 'collects' | 'plants' | 'offsets';
export type ProductWidgetColor = 'white' | 'black' | 'blue' | '#3B755F' | '#2E3A8C' | '#F2EBDB';

export interface ProductWidget {
  id: number;
  type: ProductWidgetType;
  amount: number;
  action: ProductWidgetAction;
  active: boolean;
  linked: boolean;
  selectedColor: ProductWidgetColor;
}

export interface WidgetsState {
  widgets: ProductWidget[];
}
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
