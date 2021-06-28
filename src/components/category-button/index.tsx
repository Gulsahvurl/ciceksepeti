import * as React from 'react';
import { useStoreActions, useStoreState } from '../../store';
import './style.scss';

interface ICategoryButtonProps {
  text: string;
  id: number;
}

const CategoryButton: React.FunctionComponent<ICategoryButtonProps> = ({
  text,
  id,
  ...props
}) => {
  const { setCategories } = useStoreActions((action) => action.App);
  const { categories } = useStoreState((state) => state.App);

  const handleSelect = (categoryId: number) => {
    const index = categories.indexOf(categoryId);
    if (index !== -1) {
      categories.splice(index, 1);
      setCategories([...categories]);
    } else {
      setCategories([...categories, id]);
    }
  };

  const isActive = React.useMemo(() => {
    return categories.indexOf(id) > -1 || (categories.length === 0 && id === 0);
  }, [categories]);

  return (
    <button
      onClick={() => (id === 0 ? setCategories([]) : handleSelect(id))}
      className={isActive ? 'category-button-active' : 'category-button'}
    >
      {text}
    </button>
  );
};

export default CategoryButton;
