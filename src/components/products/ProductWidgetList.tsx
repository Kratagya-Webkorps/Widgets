import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { ProductWidget as ProductWidgetType } from '../interfaces';
import { updateActivation, updateProfileLink, updateColor } from '../redux/actions/widgetActions';
import ProductWidget from './ProductWidgets';

const ProductWidgetList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const widgets = useSelector((state: RootState) => state.widgets.widgets);

  const handleWidgetUpdate = (id: number, settings: Partial<ProductWidgetType>) => {
    if ('active' in settings) {
      dispatch(updateActivation(id, settings.active!)); 
    }
    if ('linked' in settings) {
      dispatch(updateProfileLink(id, settings.linked!));
    }
    if ('selectedColor' in settings) {
      dispatch(updateColor(id, settings.selectedColor!));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Per product widgets</h1>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {widgets.map(widget => (
          <ProductWidget
            key={widget.id}
            widget={widget}
            onUpdate={(settings) => handleWidgetUpdate(widget.id, settings)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductWidgetList;
