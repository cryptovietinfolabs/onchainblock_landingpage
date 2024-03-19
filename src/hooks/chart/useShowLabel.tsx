import { useState } from "react";

interface IUseShowLabel {
  handleAddLabel: (value: string) => void;
  handleRemoveLabel: (value: string) => void;
  handleToggleLabels: (value: string) => void;
  label: string[];
  labelSelect: string[];
}

export default function useShowLabel(
  initialLabels: string[],
  labelList: string[],
): IUseShowLabel {
  const [label, setLabel] = useState(initialLabels);
  const [listLabel, setListLabel] = useState(initialLabels);
  const [labelSelect, setLabelSelect] = useState(labelList);
  const [showAllLabels, setShowAllLabels] = useState(true);

  const handleAddLabel = (item: string): void => {
    if (!listLabel.includes(item)) {
      const updatedLabels = [...label, item];

      setListLabel(updatedLabels);
      setLabel(updatedLabels);

      const updatedSelect = labelSelect.filter(
        (labelItem) => labelItem !== item,
      );
      setLabelSelect(updatedSelect);
    }
  };

  const handleRemoveLabel = (item: string): void => {
    const filteredLabels = listLabel.filter((labelItem) => labelItem !== item);
    setListLabel(filteredLabels);
    setLabel(filteredLabels);

    if (!labelSelect.includes(item)) {
      setLabelSelect([...labelSelect, item]);
    }
  };

  const handleToggleLabels = (): void => {
    if (showAllLabels) {
      setLabel([]);
      setListLabel([]);
      setLabelSelect(labelList);
    } else {
      setListLabel(labelSelect);
      setLabel(labelSelect);
      setLabelSelect([]);
    }
    setShowAllLabels(!showAllLabels);
  };

  return {
    handleAddLabel,
    handleRemoveLabel,
    handleToggleLabels,
    label,
    labelSelect,
  };
}
