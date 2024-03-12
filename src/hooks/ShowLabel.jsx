import { useEffect, useState } from "react";

export default function ShowLabel(labelApi, label2) {
  const [label, setLabel] = useState(labelApi);
  const [listLabel, setListLabel] = useState(labelApi);
  const [labelSelect, setLabelSelect] = useState(label2);
  const [showAllLabels, setShowAllLabels] = useState(label2);

  const handleAddLabel = (item) => {
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

  const handleRemoveLabel = (item) => {
    const filteredLabels = listLabel.filter((labelItem) => labelItem !== item);
    setListLabel(filteredLabels);
    setLabel(filteredLabels);

    if (!labelSelect.includes(item)) {
      setLabelSelect([...labelSelect, item]);
    }
  };

  const handleToggleLabels = () => {
    if (showAllLabels) {
      setLabel([]);
      setListLabel([]);
      setLabelSelect(label2);
    } else {
      setListLabel(labelSelect);
      setLabel(labelSelect);
      setLabelSelect([]);
    }
    setShowAllLabels(!showAllLabels);
  };

  useEffect(() => {}, [labelApi, label, labelSelect]);

  return {
    handleAddLabel,
    handleRemoveLabel,
    handleToggleLabels,
    label,
    labelSelect,
  };
}
